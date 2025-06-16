/**
 * Model Calculation Service
 * Handles real-time model calculations and predictions
 */

import type { BuilderMetric } from '~/stores/builderStore'
import type { Team, Game } from '~/models'

// Sample metric values for demonstration
// In a real application, these would come from the database
const SAMPLE_METRIC_VALUES: Record<string, Record<string, number>> = {
  // Buffalo Bills sample data
  'BUF': {
    passing_yards: 275,
    passing_touchdowns: 2.1,
    rushing_yards: 135,
    receiving_yards: 245,
    completion_percentage: 65.2,
    quarterback_rating: 94.5,
    team_total_yards: 410,
    points_scored: 28.3,
    time_of_possession: 31.2,
    turnover_differential: 0.8,
    third_down_conversion: 42.5,
    red_zone_efficiency: 58.3,
    offensive_line_pressure_rate: 18.5,
    defensive_pressure_rate: 28.7,
    penalties_called: 6.2,
    penalty_yards: 52,
    weather_impact_score: 3.2,
    home_field_advantage: 2.8,
  },
  // Dallas Cowboys sample data
  'DAL': {
    passing_yards: 290,
    passing_touchdowns: 2.3,
    rushing_yards: 120,
    receiving_yards: 265,
    completion_percentage: 67.8,
    quarterback_rating: 98.2,
    team_total_yards: 425,
    points_scored: 26.8,
    time_of_possession: 29.8,
    turnover_differential: -0.3,
    third_down_conversion: 38.9,
    red_zone_efficiency: 62.1,
    offensive_line_pressure_rate: 22.1,
    defensive_pressure_rate: 25.4,
    penalties_called: 7.1,
    penalty_yards: 61,
    weather_impact_score: 1.8,
    home_field_advantage: 3.1,
  },
  // Miami Dolphins sample data
  'MIA': {
    passing_yards: 255,
    passing_touchdowns: 1.8,
    rushing_yards: 98,
    receiving_yards: 220,
    completion_percentage: 63.4,
    quarterback_rating: 87.3,
    team_total_yards: 378,
    points_scored: 22.1,
    time_of_possession: 28.6,
    turnover_differential: -0.7,
    third_down_conversion: 35.2,
    red_zone_efficiency: 48.9,
    offensive_line_pressure_rate: 26.8,
    defensive_pressure_rate: 22.1,
    penalties_called: 5.8,
    penalty_yards: 48,
    weather_impact_score: 2.1,
    home_field_advantage: 2.3,
  },
}

export interface ModelCalculationResult {
  teamA: {
    name: string
    abbreviation: string
    score: number
    breakdown: MetricContribution[]
  }
  teamB: {
    name: string
    abbreviation: string
    score: number
    breakdown: MetricContribution[]
  }
  prediction: {
    winner: string
    confidence: number
    pointDifferential: number
    winProbability: number
  }
  modelSummary: {
    totalWeight: number
    metricCount: number
    isValid: boolean
    warnings: string[]
  }
}

export interface MetricContribution {
  metricId: string
  metricName: string
  weight: number
  value: number
  weightedValue: number
  percentage: number
}

/**
 * Calculate model prediction for two teams
 */
export function calculateModelPrediction(
  selectedMetrics: BuilderMetric[],
  teamA: Team,
  teamB: Team
): ModelCalculationResult {
  const warnings: string[] = []
  
  // Validate inputs
  if (selectedMetrics.length === 0) {
    return createEmptyResult(teamA, teamB, ['No metrics selected'])
  }

  const totalWeight = selectedMetrics.reduce((sum, metric) => sum + metric.weight, 0)
  
  if (totalWeight === 0) {
    warnings.push('Total weight is zero - check metric weights')
  }

  // Get sample data values for both teams
  const teamAValues = SAMPLE_METRIC_VALUES[teamA.abbreviation] || {}
  const teamBValues = SAMPLE_METRIC_VALUES[teamB.abbreviation] || {}

  // Calculate scores and breakdowns for both teams
  const teamAResult = calculateTeamScore(selectedMetrics, teamAValues, teamA.name, teamA.abbreviation, warnings)
  const teamBResult = calculateTeamScore(selectedMetrics, teamBValues, teamB.name, teamB.abbreviation, warnings)

  // Calculate prediction
  const pointDifferential = teamAResult.score - teamBResult.score
  const winner = pointDifferential > 0 ? teamA.abbreviation : teamB.abbreviation
  const winProbability = calculateWinProbability(pointDifferential)
  const confidence = Math.abs(pointDifferential) / Math.max(teamAResult.score, teamBResult.score, 1) * 100

  return {
    teamA: teamAResult,
    teamB: teamBResult,
    prediction: {
      winner,
      confidence: Math.min(confidence, 100),
      pointDifferential: Math.abs(pointDifferential),
      winProbability,
    },
    modelSummary: {
      totalWeight,
      metricCount: selectedMetrics.length,
      isValid: totalWeight > 0 && selectedMetrics.length > 0,
      warnings,
    }
  }
}

/**
 * Calculate score for a single team
 */
function calculateTeamScore(
  selectedMetrics: BuilderMetric[],
  teamValues: Record<string, number>,
  teamName: string,
  teamAbbreviation: string,
  warnings: string[]
): ModelCalculationResult['teamA'] {
  const breakdown: MetricContribution[] = []
  let totalScore = 0
  let totalWeightedValue = 0

  selectedMetrics.forEach(metric => {
    const value = teamValues[metric.name] || 0
    const weightedValue = value * metric.weight
    
    if (!teamValues[metric.name]) {
      warnings.push(`Missing data for ${metric.displayName} (${teamAbbreviation})`)
    }

    breakdown.push({
      metricId: metric.id,
      metricName: metric.displayName,
      weight: metric.weight,
      value,
      weightedValue,
      percentage: 0, // Will be calculated after totals
    })

    totalScore += weightedValue
    totalWeightedValue += Math.abs(weightedValue)
  })

  // Calculate percentages for breakdown
  breakdown.forEach(item => {
    item.percentage = totalWeightedValue > 0 
      ? (Math.abs(item.weightedValue) / totalWeightedValue) * 100 
      : 0
  })

  return {
    name: teamName,
    abbreviation: teamAbbreviation,
    score: totalScore,
    breakdown,
  }
}

/**
 * Convert point differential to win probability
 */
function calculateWinProbability(pointDifferential: number): number {
  // Simple logistic function to convert point differential to probability
  // This is a simplified model - in reality this would be more sophisticated
  const sigmoid = 1 / (1 + Math.exp(-pointDifferential / 10))
  return Math.round(sigmoid * 100)
}

/**
 * Create empty result for error cases
 */
function createEmptyResult(
  teamA: Team,
  teamB: Team,
  warnings: string[]
): ModelCalculationResult {
  return {
    teamA: {
      name: teamA.name,
      abbreviation: teamA.abbreviation,
      score: 0,
      breakdown: [],
    },
    teamB: {
      name: teamB.name,
      abbreviation: teamB.abbreviation,
      score: 0,
      breakdown: [],
    },
    prediction: {
      winner: 'TBD',
      confidence: 0,
      pointDifferential: 0,
      winProbability: 50,
    },
    modelSummary: {
      totalWeight: 0,
      metricCount: 0,
      isValid: false,
      warnings,
    }
  }
}

/**
 * Get available teams for preview (using sample data)
 */
export function getAvailableTeamsForPreview(): Team[] {
  return [
    {
      id: 'buf-id',
      name: 'Buffalo Bills',
      abbreviation: 'BUF',
      city: 'Buffalo',
      conference: 'AFC',
      division: 'East',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'dal-id',
      name: 'Dallas Cowboys',
      abbreviation: 'DAL',
      city: 'Arlington',
      conference: 'NFC',
      division: 'East',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'mia-id',
      name: 'Miami Dolphins',
      abbreviation: 'MIA',
      city: 'Miami',
      conference: 'AFC',
      division: 'East',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]
}

/**
 * Simple model validation
 */
export function validateModel(selectedMetrics: BuilderMetric[]): {
  isValid: boolean
  warnings: string[]
  suggestions: string[]
} {
  const warnings: string[] = []
  const suggestions: string[] = []

  if (selectedMetrics.length === 0) {
    warnings.push('No metrics selected')
    suggestions.push('Add at least one metric to create a model')
    return { isValid: false, warnings, suggestions }
  }

  const totalWeight = selectedMetrics.reduce((sum, metric) => sum + metric.weight, 0)
  
  if (totalWeight === 0) {
    warnings.push('Total weight is zero')
    suggestions.push('Assign non-zero weights to your metrics')
  }

  if (selectedMetrics.length === 1) {
    suggestions.push('Consider adding more metrics for a more robust model')
  }

  const categories = new Set(selectedMetrics.map(m => m.category))
  if (categories.size === 1) {
    suggestions.push('Consider adding metrics from different categories for better balance')
  }

  const hasNegativeWeights = selectedMetrics.some(m => m.weight < 0)
  if (hasNegativeWeights) {
    suggestions.push('Negative weights can create inverse relationships - ensure this is intentional')
  }

  return {
    isValid: totalWeight > 0 && selectedMetrics.length > 0,
    warnings,
    suggestions,
  }
} 