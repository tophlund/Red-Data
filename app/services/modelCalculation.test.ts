/**
 * Tests for Model Calculation Service
 */

import { describe, it, expect } from 'vitest'
import { calculateModelPrediction, validateModel, getAvailableTeamsForPreview } from './modelCalculation'
import type { BuilderMetric } from '../stores/builderStore'
import { MetricCategory } from '../models'

describe('Model Calculation Service', () => {
  const mockMetric1: BuilderMetric = {
    id: 'test-1',
    name: 'passing_yards',
    displayName: 'Passing Yards',
    description: 'Total passing yards',
    category: MetricCategory.PLAYER,
    dataType: 'number',
    unit: 'yards',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    weight: 1.0,
    isSelected: true,
  }

  const mockMetric2: BuilderMetric = {
    id: 'test-2',
    name: 'points_scored',
    displayName: 'Points Scored',
    description: 'Total points scored',
    category: MetricCategory.TEAM,
    dataType: 'number',
    unit: 'points',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    weight: 2.0,
    isSelected: true,
  }

  const teams = getAvailableTeamsForPreview()
  const teamA = teams[0] // Buffalo Bills
  const teamB = teams[1] // Dallas Cowboys

  describe('validateModel', () => {
    it('should validate empty model correctly', () => {
      const result = validateModel([])
      expect(result.isValid).toBe(false)
      expect(result.warnings).toContain('No metrics selected')
      expect(result.suggestions).toContain('Add at least one metric to create a model')
    })

    it('should validate model with metrics correctly', () => {
      const result = validateModel([mockMetric1, mockMetric2])
      expect(result.isValid).toBe(true)
      expect(result.warnings).toHaveLength(0)
    })

    it('should detect zero weights', () => {
      const zeroWeightMetric = { ...mockMetric1, weight: 0 }
      const result = validateModel([zeroWeightMetric])
      expect(result.isValid).toBe(false)
      expect(result.warnings).toContain('Total weight is zero')
    })

    it('should suggest adding more metrics for single metric model', () => {
      const result = validateModel([mockMetric1])
      expect(result.suggestions).toContain('Consider adding more metrics for a more robust model')
    })
  })

  describe('calculateModelPrediction', () => {
    it('should handle empty metrics', () => {
      const result = calculateModelPrediction([], teamA, teamB)
      expect(result.modelSummary.isValid).toBe(false)
      expect(result.modelSummary.warnings).toContain('No metrics selected')
      expect(result.teamA.score).toBe(0)
      expect(result.teamB.score).toBe(0)
    })

    it('should calculate prediction with valid metrics', () => {
      const result = calculateModelPrediction([mockMetric1, mockMetric2], teamA, teamB)
      
      expect(result.modelSummary.isValid).toBe(true)
      expect(result.modelSummary.metricCount).toBe(2)
      expect(result.modelSummary.totalWeight).toBe(3.0) // 1.0 + 2.0
      
      // Scores should be calculated
      expect(result.teamA.score).toBeGreaterThan(0)
      expect(result.teamB.score).toBeGreaterThan(0)
      
      // Should have breakdown for both teams
      expect(result.teamA.breakdown).toHaveLength(2)
      expect(result.teamB.breakdown).toHaveLength(2)
      
      // Prediction should be determined
      expect(['BUF', 'DAL']).toContain(result.prediction.winner)
      expect(result.prediction.winProbability).toBeGreaterThanOrEqual(0)
      expect(result.prediction.winProbability).toBeLessThanOrEqual(100)
    })

    it('should calculate metric contributions correctly', () => {
      const result = calculateModelPrediction([mockMetric1], teamA, teamB)
      
      const teamABreakdown = result.teamA.breakdown[0]
      expect(teamABreakdown.metricName).toBe('Passing Yards')
      expect(teamABreakdown.weight).toBe(1.0)
      expect(teamABreakdown.value).toBeGreaterThan(0) // BUF has passing_yards data
      expect(teamABreakdown.weightedValue).toBe(teamABreakdown.value * teamABreakdown.weight)
      expect(teamABreakdown.percentage).toBe(100) // Only metric, so 100%
    })

    it('should handle missing team data', () => {
      const unknownTeam = {
        id: 'unknown',
        name: 'Unknown Team',
        abbreviation: 'UNK',
        city: 'Unknown',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      
      const result = calculateModelPrediction([mockMetric1], teamA, unknownTeam)
      expect(result.modelSummary.warnings.length).toBeGreaterThan(0)
      expect(result.modelSummary.warnings[0]).toContain('Missing data')
    })
  })

  describe('getAvailableTeamsForPreview', () => {
    it('should return sample teams', () => {
      const teams = getAvailableTeamsForPreview()
      expect(teams).toHaveLength(3)
      expect(teams[0].abbreviation).toBe('BUF')
      expect(teams[1].abbreviation).toBe('DAL')
      expect(teams[2].abbreviation).toBe('MIA')
    })
  })
}) 