/**
 * Calculation Validation Tests
 * Tests model calculations using seed data to validate correctness
 */

import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { ModelCalculationService } from '../app/services/modelCalculationService'
import { MetricsRepository } from '../app/repositories/metricsRepository'
import { TeamsRepository } from '../app/repositories/teamsRepository'
import { GamesRepository } from '../app/repositories/gamesRepository'
import { prisma } from '../app/utils/prisma'
import type { ModelCalculationInput } from '../app/services/modelCalculationService'

describe('Calculation Validation with Seed Data', () => {
  let calculationService: ModelCalculationService
  let metricsRepository: MetricsRepository
  let teamsRepository: TeamsRepository
  let gamesRepository: GamesRepository
  
  let buffaloBillsId: string
  let dallasCowboysId: string
  let miamiDolphinsId: string
  let passingYardsMetricId: string
  let pointsScoredMetricId: string
  let completionPctMetricId: string
  let quarterbackRatingMetricId: string

  beforeAll(async () => {
    // Initialize repositories and service
    metricsRepository = new MetricsRepository(prisma)
    teamsRepository = new TeamsRepository(prisma)
    gamesRepository = new GamesRepository(prisma)
    calculationService = new ModelCalculationService(
      metricsRepository,
      teamsRepository,
      gamesRepository
    )

    // Get seed data IDs for testing
    const teams = await teamsRepository.getAllTeams()
    const buffalo = teams.find(t => t.abbreviation === 'BUF')
    const dallas = teams.find(t => t.abbreviation === 'DAL')
    const miami = teams.find(t => t.abbreviation === 'MIA')
    
    expect(buffalo).toBeDefined()
    expect(dallas).toBeDefined()
    expect(miami).toBeDefined()
    
    buffaloBillsId = buffalo!.id
    dallasCowboysId = dallas!.id
    miamiDolphinsId = miami!.id

    const metrics = await metricsRepository.getActiveMetrics()
    const passingYards = metrics.find(m => m.name === 'passing_yards')
    const pointsScored = metrics.find(m => m.name === 'points_scored')
    const completionPct = metrics.find(m => m.name === 'completion_percentage')
    const quarterbackRating = metrics.find(m => m.name === 'quarterback_rating')
    
    expect(passingYards).toBeDefined()
    expect(pointsScored).toBeDefined()
    expect(completionPct).toBeDefined()
    expect(quarterbackRating).toBeDefined()
    
    passingYardsMetricId = passingYards!.id
    pointsScoredMetricId = pointsScored!.id
    completionPctMetricId = completionPct!.id
    quarterbackRatingMetricId = quarterbackRating!.id
  })

  afterAll(async () => {
    await prisma.$disconnect()
  })

  describe('Basic Calculation Validation', () => {
    it('should calculate predictions using single metric', async () => {
      const input: ModelCalculationInput = {
        teamAId: buffaloBillsId,
        teamBId: dallasCowboysId,
        metrics: [
          { metricId: passingYardsMetricId, weight: 1.0 }
        ]
      }

      const result = await calculationService.calculatePrediction(input)

      // Verify result structure
      expect(result.modelSummary.isValid).toBe(true)
      expect(result.modelSummary.metricCount).toBe(1)
      expect(result.modelSummary.totalWeight).toBe(1.0)
      expect(result.teamA.id).toBe(buffaloBillsId)
      expect(result.teamB.id).toBe(dallasCowboysId)
      expect(result.teamA.name).toBe('Buffalo Bills')
      expect(result.teamB.name).toBe('Dallas Cowboys')
      
      // Verify breakdown
      expect(result.teamA.breakdown).toHaveLength(1)
      expect(result.teamB.breakdown).toHaveLength(1)
      expect(result.teamA.breakdown[0].metricName).toBe('Passing Yards')
      expect(result.teamA.breakdown[0].weight).toBe(1.0)
      
      // Verify scores are calculated
      expect(typeof result.teamA.score).toBe('number')
      expect(typeof result.teamB.score).toBe('number')
      
      // Verify prediction
      expect(['teamA', 'teamB', 'tie']).toContain(result.prediction.winner)
      expect(result.prediction.winProbability).toBeGreaterThanOrEqual(0)
      expect(result.prediction.winProbability).toBeLessThanOrEqual(100)
      expect(result.prediction.confidence).toBeGreaterThanOrEqual(0)
      expect(result.prediction.confidence).toBeLessThanOrEqual(100)
    })

    it('should calculate predictions using multiple metrics', async () => {
      const input: ModelCalculationInput = {
        teamAId: buffaloBillsId,
        teamBId: dallasCowboysId,
        metrics: [
          { metricId: passingYardsMetricId, weight: 0.4 },
          { metricId: pointsScoredMetricId, weight: 0.3 },
          { metricId: completionPctMetricId, weight: 0.3 }
        ]
      }

      const result = await calculationService.calculatePrediction(input)

      // Verify multiple metrics processed
      expect(result.modelSummary.isValid).toBe(true)
      expect(result.modelSummary.metricCount).toBe(3)
      expect(result.modelSummary.totalWeight).toBe(1.0)
      
      // Verify all metrics appear in breakdown
      expect(result.teamA.breakdown).toHaveLength(3)
      expect(result.teamB.breakdown).toHaveLength(3)
      
      const metricNames = result.teamA.breakdown.map(b => b.metricName)
      expect(metricNames).toContain('Passing Yards')
      expect(metricNames).toContain('Points Scored')
      expect(metricNames).toContain('Completion Percentage')
      
      // Verify contribution percentages sum to ~100%
      const totalContribution = result.teamA.breakdown.reduce((sum, b) => sum + b.contribution, 0)
      expect(totalContribution).toBeCloseTo(100, 1)
    })

    it('should handle negative weights correctly', async () => {
      const input: ModelCalculationInput = {
        teamAId: buffaloBillsId,
        teamBId: dallasCowboysId,
        metrics: [
          { metricId: passingYardsMetricId, weight: 1.0 },
          { metricId: pointsScoredMetricId, weight: -0.5 } // Negative weight
        ]
      }

      const result = await calculationService.calculatePrediction(input)

      expect(result.modelSummary.isValid).toBe(true)
      expect(result.modelSummary.suggestions).toContain('Negative weights create inverse relationships - ensure this is intentional')
      
      // Verify negative weight is applied correctly
      const negativeWeightMetric = result.teamA.breakdown.find(b => b.metricName === 'Points Scored')
      expect(negativeWeightMetric?.weight).toBe(-0.5)
      expect(negativeWeightMetric?.weightedValue).toBeLessThan(0)
    })
  })

  describe('Data Validation', () => {
    it('should provide metric values for all teams', async () => {
      const input: ModelCalculationInput = {
        teamAId: buffaloBillsId,
        teamBId: miamiDolphinsId,
        metrics: [
          { metricId: passingYardsMetricId, weight: 1.0 }
        ]
      }

      const result = await calculationService.calculatePrediction(input)

      expect(result.modelSummary.isValid).toBe(true)
      
      // Both teams should have metric values
      expect(result.teamA.breakdown[0].rawValue).toBeGreaterThan(0)
      expect(result.teamB.breakdown[0].rawValue).toBeGreaterThan(0)
    })

    it('should handle missing data gracefully', async () => {
      // Test with a team that might not have complete data
      const input: ModelCalculationInput = {
        teamAId: buffaloBillsId,
        teamBId: dallasCowboysId,
        metrics: [
          { metricId: passingYardsMetricId, weight: 1.0 }
        ]
      }

      const result = await calculationService.calculatePrediction(input)

      // Should complete calculation even if some data is missing
      expect(result.modelSummary.isValid).toBe(true)
      
      // Check if warnings are appropriate
      if (result.modelSummary.warnings.length > 0) {
        expect(result.modelSummary.warnings.some(w => w.includes('data available'))).toBe(true)
      }
    })

    it('should normalize metric values consistently', async () => {
      const input: ModelCalculationInput = {
        teamAId: buffaloBillsId,
        teamBId: dallasCowboysId,
        metrics: [
          { metricId: completionPctMetricId, weight: 1.0 } // Percentage metric
        ]
      }

      const result = await calculationService.calculatePrediction(input)

      expect(result.modelSummary.isValid).toBe(true)
      
      // Verify normalization applied to percentage metrics
      const teamABreakdown = result.teamA.breakdown[0]
      const teamBBreakdown = result.teamB.breakdown[0]
      
      expect(teamABreakdown.normalizedValue).toBeGreaterThanOrEqual(0)
      expect(teamABreakdown.normalizedValue).toBeLessThanOrEqual(1)
      expect(teamBBreakdown.normalizedValue).toBeGreaterThanOrEqual(0)
      expect(teamBBreakdown.normalizedValue).toBeLessThanOrEqual(1)
    })
  })

  describe('Calculation Consistency', () => {
    it('should produce consistent results for identical inputs', async () => {
      const input: ModelCalculationInput = {
        teamAId: buffaloBillsId,
        teamBId: dallasCowboysId,
        metrics: [
          { metricId: passingYardsMetricId, weight: 0.5 },
          { metricId: quarterbackRatingMetricId, weight: 0.5 }
        ]
      }

      const result1 = await calculationService.calculatePrediction(input)
      const result2 = await calculationService.calculatePrediction(input)

      // Results should be identical
      expect(result1.teamA.score).toBe(result2.teamA.score)
      expect(result1.teamB.score).toBe(result2.teamB.score)
      expect(result1.prediction.winner).toBe(result2.prediction.winner)
      expect(result1.prediction.winProbability).toBe(result2.prediction.winProbability)
    })

    it('should maintain symmetry when teams are swapped', async () => {
      const input1: ModelCalculationInput = {
        teamAId: buffaloBillsId,
        teamBId: dallasCowboysId,
        metrics: [{ metricId: passingYardsMetricId, weight: 1.0 }]
      }

      const input2: ModelCalculationInput = {
        teamAId: dallasCowboysId,
        teamBId: buffaloBillsId,
        metrics: [{ metricId: passingYardsMetricId, weight: 1.0 }]
      }

      const result1 = await calculationService.calculatePrediction(input1)
      const result2 = await calculationService.calculatePrediction(input2)

      // Scores should be swapped
      expect(result1.teamA.score).toBe(result2.teamB.score)
      expect(result1.teamB.score).toBe(result2.teamA.score)
      
      // Win probabilities should be inverse
      expect(result1.prediction.winProbability + result2.prediction.winProbability).toBeCloseTo(100, 1)
    })

    it('should handle edge cases appropriately', async () => {
      // Test with minimal weight
      const input: ModelCalculationInput = {
        teamAId: buffaloBillsId,
        teamBId: dallasCowboysId,
        metrics: [
          { metricId: passingYardsMetricId, weight: 0.001 }
        ]
      }

      const result = await calculationService.calculatePrediction(input)

      expect(result.modelSummary.isValid).toBe(true)
      expect(typeof result.teamA.score).toBe('number')
      expect(typeof result.teamB.score).toBe('number')
      expect(isFinite(result.teamA.score)).toBe(true)
      expect(isFinite(result.teamB.score)).toBe(true)
    })
  })

  describe('Performance Validation', () => {
    it('should complete calculations within reasonable time', async () => {
      const input: ModelCalculationInput = {
        teamAId: buffaloBillsId,
        teamBId: dallasCowboysId,
        metrics: [
          { metricId: passingYardsMetricId, weight: 0.25 },
          { metricId: pointsScoredMetricId, weight: 0.25 },
          { metricId: completionPctMetricId, weight: 0.25 },
          { metricId: quarterbackRatingMetricId, weight: 0.25 }
        ]
      }

      const result = await calculationService.calculatePrediction(input)

      expect(result.modelSummary.isValid).toBe(true)
      expect(result.modelSummary.calculationTime).toBeLessThan(1000) // Less than 1 second
      expect(result.modelSummary.calculationTime).toBeGreaterThanOrEqual(0)
    })

    it('should handle multiple concurrent calculations', async () => {
      const input: ModelCalculationInput = {
        teamAId: buffaloBillsId,
        teamBId: dallasCowboysId,
        metrics: [{ metricId: passingYardsMetricId, weight: 1.0 }]
      }

      // Run multiple calculations concurrently
      const promises = Array(5).fill(null).map(() => 
        calculationService.calculatePrediction(input)
      )

      const results = await Promise.all(promises)

      // All should succeed
      results.forEach(result => {
        expect(result.modelSummary.isValid).toBe(true)
      })

      // All should have consistent results
      const firstResult = results[0]
      results.forEach(result => {
        expect(result.teamA.score).toBe(firstResult.teamA.score)
        expect(result.teamB.score).toBe(firstResult.teamB.score)
      })
    })
  })

  describe('Sample Model Validation', () => {
    it('should validate the seeded QB Performance Predictor model', async () => {
      // Test the sample model created in seed data
      const input: ModelCalculationInput = {
        teamAId: buffaloBillsId,
        teamBId: dallasCowboysId,
        metrics: [
          { metricId: passingYardsMetricId, weight: 0.3 },
          { metricId: completionPctMetricId, weight: 0.4 },
          { metricId: quarterbackRatingMetricId, weight: 0.3 }
        ]
      }

      const result = await calculationService.calculatePrediction(input)

      expect(result.modelSummary.isValid).toBe(true)
      expect(result.modelSummary.metricCount).toBe(3)
      expect(result.modelSummary.totalWeight).toBe(1.0)
      
      // Should have reasonable predictions
      expect(result.prediction.confidence).toBeGreaterThan(0)
      expect(result.prediction.winProbability).toBeGreaterThanOrEqual(0)
      expect(result.prediction.winProbability).toBeLessThanOrEqual(100)
      
      // Should provide insights
      if (result.modelSummary.suggestions.length > 0) {
        expect(result.modelSummary.suggestions[0]).toBeTruthy()
      }
    })
  })
}) 