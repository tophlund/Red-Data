/**
 * Tests for Model Calculation Service
 * Testing the enhanced model calculation service with repository layer
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ModelCalculationService } from './modelCalculationService'
import type { MetricsRepository } from '../repositories/metricsRepository'
import type { TeamsRepository } from '../repositories/teamsRepository'
import type { GamesRepository } from '../repositories/gamesRepository'
import type { ModelCalculationInput } from './modelCalculationService'
import { MetricCategory } from '../models'

// Mock repositories
const mockMetricsRepository = {
  getMetricsByIds: vi.fn(),
  getMetricValuesForTeams: vi.fn(),
} as unknown as MetricsRepository

const mockTeamsRepository = {
  getTeamById: vi.fn(),
} as unknown as TeamsRepository

const mockGamesRepository = {} as unknown as GamesRepository

describe('ModelCalculationService', () => {
  let service: ModelCalculationService

  beforeEach(() => {
    vi.clearAllMocks()
    service = new ModelCalculationService(
      mockMetricsRepository,
      mockTeamsRepository,
      mockGamesRepository
    )
  })

  describe('calculatePrediction', () => {
    const mockTeamA = {
      id: 'team-a-id',
      name: 'Team A',
      abbreviation: 'TEA',
      city: 'City A',
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const mockTeamB = {
      id: 'team-b-id',
      name: 'Team B',
      abbreviation: 'TEB',
      city: 'City B',
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const mockMetrics = [
      {
        id: 'metric-1',
        name: 'passing_yards',
        displayName: 'Passing Yards',
        description: 'Total passing yards',
        category: MetricCategory.TEAM,
        dataType: 'number',
        unit: 'yards',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'metric-2',
        name: 'completion_percentage',
        displayName: 'Completion Percentage',
        description: 'Pass completion percentage',
        category: MetricCategory.TEAM,
        dataType: 'percentage',
        unit: '%',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]

    it('should calculate prediction successfully with valid input', async () => {
      const input: ModelCalculationInput = {
        teamAId: 'team-a-id',
        teamBId: 'team-b-id',
        metrics: [
          { metricId: 'metric-1', weight: 1.0 },
          { metricId: 'metric-2', weight: 0.5 },
        ],
      }

      // Setup mocks
      ;(mockTeamsRepository.getTeamById as any).mockImplementation((id: string) => {
        if (id === 'team-a-id') return Promise.resolve(mockTeamA)
        if (id === 'team-b-id') return Promise.resolve(mockTeamB)
        return Promise.resolve(null)
      })
      
      ;(mockMetricsRepository.getMetricsByIds as any).mockResolvedValue(mockMetrics)
      
      ;(mockMetricsRepository.getMetricValuesForTeams as any).mockResolvedValue({
        'team-a-id': {
          'metric-1': 300,
          'metric-2': 65,
        },
        'team-b-id': {
          'metric-1': 250,
          'metric-2': 70,
        },
      })

      const result = await service.calculatePrediction(input)

      expect(result.teamA.id).toBe('team-a-id')
      expect(result.teamB.id).toBe('team-b-id')
      expect(result.teamA.breakdown).toHaveLength(2)
      expect(result.teamB.breakdown).toHaveLength(2)
      expect(result.prediction.winner).toMatch(/^(teamA|teamB|tie)$/)
      expect(result.modelSummary.isValid).toBe(true)
      expect(result.modelSummary.metricCount).toBe(2)
      expect(result.modelSummary.totalWeight).toBe(1.5)
    })

    it('should return error result when teams not found', async () => {
      const input: ModelCalculationInput = {
        teamAId: 'invalid-team-id',
        teamBId: 'team-b-id',
        metrics: [
          { metricId: 'metric-1', weight: 1.0 },
        ],
      }

      ;(mockTeamsRepository.getTeamById as any).mockResolvedValue(null)

      const result = await service.calculatePrediction(input)

      expect(result.modelSummary.isValid).toBe(false)
      expect(result.modelSummary.warnings).toContain('One or both teams not found')
    })

    it('should validate input correctly', async () => {
      const invalidInput: ModelCalculationInput = {
        teamAId: '',
        teamBId: 'team-b-id',
        metrics: [],
      }

      const result = await service.calculatePrediction(invalidInput)

      expect(result.modelSummary.isValid).toBe(false)
      expect(result.modelSummary.warnings).toContain('Team A ID is required')
      expect(result.modelSummary.warnings).toContain('At least one metric is required')
    })

    it('should detect duplicate metrics', async () => {
      const input: ModelCalculationInput = {
        teamAId: 'team-a-id',
        teamBId: 'team-b-id',
        metrics: [
          { metricId: 'metric-1', weight: 1.0 },
          { metricId: 'metric-1', weight: 0.5 },
        ],
      }

      const result = await service.calculatePrediction(input)

      expect(result.modelSummary.isValid).toBe(false)
      expect(result.modelSummary.warnings).toContain('Duplicate metrics detected')
    })

    it('should prevent team self-comparison', async () => {
      const input: ModelCalculationInput = {
        teamAId: 'team-a-id',
        teamBId: 'team-a-id',
        metrics: [
          { metricId: 'metric-1', weight: 1.0 },
        ],
      }

      const result = await service.calculatePrediction(input)

      expect(result.modelSummary.isValid).toBe(false)
      expect(result.modelSummary.warnings).toContain('Cannot compare a team against itself')
    })

    it('should handle zero total weight', async () => {
      const input: ModelCalculationInput = {
        teamAId: 'team-a-id',
        teamBId: 'team-b-id',
        metrics: [
          { metricId: 'metric-1', weight: 0 },
        ],
      }

      const result = await service.calculatePrediction(input)

      expect(result.modelSummary.isValid).toBe(false)
      expect(result.modelSummary.warnings).toContain('Total metric weight cannot be zero')
    })

    it('should generate appropriate suggestions', async () => {
      const input: ModelCalculationInput = {
        teamAId: 'team-a-id',
        teamBId: 'team-b-id',
        metrics: [
          { metricId: 'metric-1', weight: 1.0 },
        ],
      }

      ;(mockTeamsRepository.getTeamById as any).mockImplementation((id: string) => {
        if (id === 'team-a-id') return Promise.resolve(mockTeamA)
        if (id === 'team-b-id') return Promise.resolve(mockTeamB)
        return Promise.resolve(null)
      })
      
      ;(mockMetricsRepository.getMetricsByIds as any).mockResolvedValue([mockMetrics[0]])
      
      ;(mockMetricsRepository.getMetricValuesForTeams as any).mockResolvedValue({
        'team-a-id': { 'metric-1': 300 },
        'team-b-id': { 'metric-1': 250 },
      })

      const result = await service.calculatePrediction(input)

      expect(result.modelSummary.suggestions).toContain('Consider adding more metrics for a more robust model')
    })

    it('should warn about negative weights', async () => {
      const input: ModelCalculationInput = {
        teamAId: 'team-a-id',
        teamBId: 'team-b-id',
        metrics: [
          { metricId: 'metric-1', weight: 1.0 },
          { metricId: 'metric-2', weight: -0.5 },
        ],
      }

      ;(mockTeamsRepository.getTeamById as any).mockImplementation((id: string) => {
        if (id === 'team-a-id') return Promise.resolve(mockTeamA)
        if (id === 'team-b-id') return Promise.resolve(mockTeamB)
        return Promise.resolve(null)
      })
      
      ;(mockMetricsRepository.getMetricsByIds as any).mockResolvedValue(mockMetrics)
      
      ;(mockMetricsRepository.getMetricValuesForTeams as any).mockResolvedValue({
        'team-a-id': { 'metric-1': 300, 'metric-2': 65 },
        'team-b-id': { 'metric-1': 250, 'metric-2': 70 },
      })

      const result = await service.calculatePrediction(input)

      expect(result.modelSummary.suggestions).toContain('Negative weights create inverse relationships - ensure this is intentional')
    })

    it('should track calculation time', async () => {
      const input: ModelCalculationInput = {
        teamAId: 'team-a-id',
        teamBId: 'team-b-id',
        metrics: [
          { metricId: 'metric-1', weight: 1.0 },
        ],
      }

      ;(mockTeamsRepository.getTeamById as any).mockImplementation((id: string) => {
        if (id === 'team-a-id') return Promise.resolve(mockTeamA)
        if (id === 'team-b-id') return Promise.resolve(mockTeamB)
        return Promise.resolve(null)
      })
      
      ;(mockMetricsRepository.getMetricsByIds as any).mockResolvedValue([mockMetrics[0]])
      
      ;(mockMetricsRepository.getMetricValuesForTeams as any).mockResolvedValue({
        'team-a-id': { 'metric-1': 300 },
        'team-b-id': { 'metric-1': 250 },
      })

      const result = await service.calculatePrediction(input)

      expect(result.modelSummary.calculationTime).toBeGreaterThanOrEqual(0)
      expect(typeof result.modelSummary.calculationTime).toBe('number')
    })

    it('should handle missing metric data gracefully', async () => {
      const input: ModelCalculationInput = {
        teamAId: 'team-a-id',
        teamBId: 'team-b-id',
        metrics: [
          { metricId: 'metric-1', weight: 1.0 },
        ],
      }

      ;(mockTeamsRepository.getTeamById as any).mockImplementation((id: string) => {
        if (id === 'team-a-id') return Promise.resolve(mockTeamA)
        if (id === 'team-b-id') return Promise.resolve(mockTeamB)
        return Promise.resolve(null)
      })
      
      ;(mockMetricsRepository.getMetricsByIds as any).mockResolvedValue([mockMetrics[0]])
      
      // Missing data for one team
      ;(mockMetricsRepository.getMetricValuesForTeams as any).mockResolvedValue({
        'team-a-id': { 'metric-1': 300 },
        'team-b-id': {}, // No data for team B
      })

      const result = await service.calculatePrediction(input)

      expect(result.modelSummary.warnings).toContain('No data available for Passing Yards (TEB)')
    })
  })
}) 