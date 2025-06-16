/**
 * Model Calculation Service
 * Enhanced service for model calculations using database repositories
 */

import type { MetricsRepository } from '../repositories/metricsRepository'
import type { TeamsRepository } from '../repositories/teamsRepository'
import type { GamesRepository } from '../repositories/gamesRepository'
import type { Team, Metric, UserModel, ModelComponent } from '../models'

export interface ModelCalculationInput {
  modelId?: string
  teamAId: string
  teamBId: string
  metrics: ModelMetricInput[]
}

export interface ModelMetricInput {
  metricId: string
  weight: number
}

export interface ModelCalculationResult {
  teamA: TeamResult
  teamB: TeamResult
  prediction: PredictionResult
  modelSummary: ModelSummary
}

export interface TeamResult {
  id: string
  name: string
  abbreviation: string
  score: number
  breakdown: MetricContribution[]
}

export interface MetricContribution {
  metricId: string
  metricName: string
  metricDisplayName: string
  weight: number
  rawValue: number
  normalizedValue: number
  weightedValue: number
  contribution: number // Percentage contribution to total score
}

export interface PredictionResult {
  winner: 'teamA' | 'teamB' | 'tie'
  winnerName: string
  confidence: number // 0-100
  pointDifferential: number
  winProbability: number // 0-100, probability that teamA wins
  marginOfError: number
}

export interface ModelSummary {
  totalWeight: number
  metricCount: number
  isValid: boolean
  warnings: string[]
  suggestions: string[]
  calculationTime: number
}

export class ModelCalculationService {
  constructor(
    private metricsRepository: MetricsRepository,
    private teamsRepository: TeamsRepository,
    private gamesRepository: GamesRepository
  ) {}

  /**
   * Calculate model prediction for two teams
   */
  async calculatePrediction(input: ModelCalculationInput): Promise<ModelCalculationResult> {
    const startTime = Date.now()
    const warnings: string[] = []
    const suggestions: string[] = []

    try {
      // Validate input
      const validation = this.validateInput(input)
      if (!validation.isValid) {
        return this.createErrorResult(input.teamAId, input.teamBId, validation.errors)
      }

      // Fetch required data
      const [teamA, teamB, metrics] = await Promise.all([
        this.teamsRepository.getTeamById(input.teamAId),
        this.teamsRepository.getTeamById(input.teamBId),
        this.metricsRepository.getMetricsByIds(input.metrics.map(m => m.metricId))
      ])

      if (!teamA || !teamB) {
        return this.createErrorResult(input.teamAId, input.teamBId, ['One or both teams not found'])
      }

      // Get metric values for both teams
      const metricIds = input.metrics.map(m => m.metricId)
      const metricValues = await this.metricsRepository.getMetricValuesForTeams(
        metricIds, 
        [teamA.id, teamB.id]
      )

      // Calculate scores for both teams
      const teamAResult = await this.calculateTeamScore(
        teamA,
        input.metrics,
        metrics,
        metricValues[teamA.id] || {},
        warnings
      )

      const teamBResult = await this.calculateTeamScore(
        teamB,
        input.metrics,
        metrics,
        metricValues[teamB.id] || {},
        warnings
      )

      // Generate prediction
      const prediction = this.generatePrediction(teamAResult, teamBResult)

      // Generate model insights and suggestions
      const modelSuggestions = this.generateModelSuggestions(input.metrics, warnings)
      suggestions.push(...modelSuggestions)

      const calculationTime = Date.now() - startTime

      return {
        teamA: teamAResult,
        teamB: teamBResult,
        prediction,
        modelSummary: {
          totalWeight: input.metrics.reduce((sum, m) => sum + m.weight, 0),
          metricCount: input.metrics.length,
          isValid: warnings.length === 0,
          warnings,
          suggestions,
          calculationTime,
        }
      }
    } catch (error) {
      console.error('Model calculation error:', error)
      return this.createErrorResult(input.teamAId, input.teamBId, ['Internal calculation error'])
    }
  }

  /**
   * Calculate score and breakdown for a single team
   */
  private async calculateTeamScore(
    team: Team,
    metricInputs: ModelMetricInput[],
    metrics: Metric[],
    metricValues: Record<string, number>,
    warnings: string[]
  ): Promise<TeamResult> {
    const breakdown: MetricContribution[] = []
    let totalWeightedScore = 0
    let totalAbsoluteWeight = 0

    for (const metricInput of metricInputs) {
      const metric = metrics.find(m => m.id === metricInput.metricId)
      if (!metric) {
        warnings.push(`Metric ${metricInput.metricId} not found`)
        continue
      }

      const rawValue = metricValues[metricInput.metricId] || 0
      const normalizedValue = this.normalizeMetricValue(metric, rawValue)
      const weightedValue = normalizedValue * metricInput.weight
      
      if (rawValue === 0) {
        warnings.push(`No data available for ${metric.displayName} (${team.abbreviation})`)
      }

      breakdown.push({
        metricId: metric.id,
        metricName: metric.name,
        metricDisplayName: metric.displayName,
        weight: metricInput.weight,
        rawValue,
        normalizedValue,
        weightedValue,
        contribution: 0, // Will be calculated after totals
      })

      totalWeightedScore += weightedValue
      totalAbsoluteWeight += Math.abs(metricInput.weight)
    }

    // Calculate contribution percentages
    if (totalAbsoluteWeight > 0) {
      breakdown.forEach(item => {
        item.contribution = Math.abs(item.weightedValue) / totalAbsoluteWeight * 100
      })
    }

    return {
      id: team.id,
      name: team.name,
      abbreviation: team.abbreviation,
      score: totalWeightedScore,
      breakdown,
    }
  }

  /**
   * Generate prediction from team results
   */
  private generatePrediction(teamA: TeamResult, teamB: TeamResult): PredictionResult {
    const pointDifferential = teamA.score - teamB.score
    const absPointDiff = Math.abs(pointDifferential)
    
    let winner: 'teamA' | 'teamB' | 'tie'
    let winnerName: string
    
    if (absPointDiff < 0.1) { // Very close, call it a tie
      winner = 'tie'
      winnerName = 'Tie/Toss-up'
    } else if (pointDifferential > 0) {
      winner = 'teamA'
      winnerName = teamA.name
    } else {
      winner = 'teamB'
      winnerName = teamB.name
    }

    // Calculate win probability using logistic function
    const winProbability = this.calculateWinProbability(pointDifferential)
    
    // Calculate confidence based on score differential
    const maxScore = Math.max(Math.abs(teamA.score), Math.abs(teamB.score))
    const confidence = maxScore > 0 ? Math.min((absPointDiff / maxScore) * 100, 95) : 50

    // Simple margin of error calculation
    const marginOfError = Math.max(5, Math.min(15, 100 - confidence))

    return {
      winner,
      winnerName,
      confidence: Math.round(confidence),
      pointDifferential: Math.round(absPointDiff * 100) / 100,
      winProbability: Math.round(winProbability),
      marginOfError: Math.round(marginOfError),
    }
  }

  /**
   * Normalize metric values to 0-1 scale for consistent weighting
   */
  private normalizeMetricValue(metric: Metric, rawValue: number): number {
    // Simple normalization - in a real system, this would be more sophisticated
    // and based on historical data ranges for each metric
    
    switch (metric.dataType) {
      case 'percentage':
        return Math.min(rawValue / 100, 1.0)
      case 'boolean':
        return rawValue ? 1.0 : 0.0
      default:
        // For numerical metrics, apply a simple scaling
        // This is a placeholder - real implementation would use statistical normalization
        return Math.min(rawValue / 100, 1.0)
    }
  }

  /**
   * Calculate win probability using logistic function
   */
  private calculateWinProbability(pointDifferential: number): number {
    // Sigmoid function to convert point differential to probability
    const sigmoid = 1 / (1 + Math.exp(-pointDifferential * 2))
    return sigmoid * 100
  }

  /**
   * Validate calculation input
   */
  private validateInput(input: ModelCalculationInput): { isValid: boolean; errors: string[] } {
    const errors: string[] = []

    if (!input.teamAId) {
      errors.push('Team A ID is required')
    }

    if (!input.teamBId) {
      errors.push('Team B ID is required')
    }

    if (input.teamAId === input.teamBId) {
      errors.push('Cannot compare a team against itself')
    }

    if (!input.metrics || input.metrics.length === 0) {
      errors.push('At least one metric is required')
    }

    if (input.metrics) {
      const totalWeight = input.metrics.reduce((sum, m) => sum + Math.abs(m.weight), 0)
      if (totalWeight === 0) {
        errors.push('Total metric weight cannot be zero')
      }

      // Check for duplicate metrics
      const metricIds = input.metrics.map(m => m.metricId)
      const uniqueMetricIds = new Set(metricIds)
      if (metricIds.length !== uniqueMetricIds.size) {
        errors.push('Duplicate metrics detected')
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
    }
  }

  /**
   * Generate model improvement suggestions
   */
  private generateModelSuggestions(metrics: ModelMetricInput[], warnings: string[]): string[] {
    const suggestions: string[] = []

    if (metrics.length === 1) {
      suggestions.push('Consider adding more metrics for a more robust model')
    }

    if (metrics.length > 10) {
      suggestions.push('Consider reducing the number of metrics to avoid overfitting')
    }

    const totalWeight = metrics.reduce((sum, m) => sum + Math.abs(m.weight), 0)
    const hasNegativeWeights = metrics.some(m => m.weight < 0)
    
    if (hasNegativeWeights) {
      suggestions.push('Negative weights create inverse relationships - ensure this is intentional')
    }

    if (totalWeight > 20) {
      suggestions.push('Consider normalizing weights to sum to 1.0 for easier interpretation')
    }

    if (warnings.length > metrics.length / 2) {
      suggestions.push('Many metrics have missing data - consider using more complete metrics')
    }

    return suggestions
  }

  /**
   * Create error result
   */
  private async createErrorResult(teamAId: string, teamBId: string, errors: string[]): Promise<ModelCalculationResult> {
    // Try to get team names for error result
    let teamAName = 'Team A'
    let teamBName = 'Team B'
    
    try {
      const [teamA, teamB] = await Promise.all([
        this.teamsRepository.getTeamById(teamAId),
        this.teamsRepository.getTeamById(teamBId)
      ])
      
      if (teamA) teamAName = teamA.name
      if (teamB) teamBName = teamB.name
    } catch {
      // Ignore errors when fetching team names for error result
    }

    return {
      teamA: {
        id: teamAId,
        name: teamAName,
        abbreviation: 'N/A',
        score: 0,
        breakdown: [],
      },
      teamB: {
        id: teamBId,
        name: teamBName,
        abbreviation: 'N/A',
        score: 0,
        breakdown: [],
      },
      prediction: {
        winner: 'tie',
        winnerName: 'Unable to calculate',
        confidence: 0,
        pointDifferential: 0,
        winProbability: 50,
        marginOfError: 100,
      },
      modelSummary: {
        totalWeight: 0,
        metricCount: 0,
        isValid: false,
        warnings: errors,
        suggestions: ['Fix the errors above to calculate predictions'],
        calculationTime: 0,
      }
    }
  }
} 