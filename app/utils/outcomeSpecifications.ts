/**
 * Model Outcome Specifications Utilities
 * Provides constants, validation, and helper functions for model outcomes
 */

import type { OutcomeType, OutcomeParameters } from '~/models'

// Outcome type definitions with metadata
export interface OutcomeTypeDefinition {
  type: OutcomeType
  name: string
  description: string
  category: 'game' | 'team' | 'player' | 'advanced'
  outputFormat: 'number' | 'percentage' | 'categorical' | 'range'
  defaultParameters: OutcomeParameters
  chartType: 'gauge' | 'bar' | 'progress' | 'comparison' | 'trend'
  examples: string[]
  compatibleModelTypes: string[]
  minimumMetrics: number
  recommendedMetrics: string[]
}

// Complete outcome specifications catalog
export const OUTCOME_SPECIFICATIONS: Record<OutcomeType, OutcomeTypeDefinition> = {
  win_probability: {
    type: 'win_probability',
    name: 'Win Probability',
    description: 'Predicts the probability (0-100%) that a specific team will win',
    category: 'game',
    outputFormat: 'percentage',
    defaultParameters: {
      scale: [0, 100],
      units: '%',
      precision: 1,
      confidenceInterval: false,
    },
    chartType: 'gauge',
    examples: ['Team A has 67% chance to win', 'Bills 73% vs Cowboys 27%'],
    compatibleModelTypes: ['logistic_regression', 'neural_network'],
    minimumMetrics: 2,
    recommendedMetrics: ['team_total_yards', 'points_scored', 'turnover_differential'],
  },
  
  point_spread: {
    type: 'point_spread',
    name: 'Point Spread',
    description: 'Predicts the point difference between two teams',
    category: 'game',
    outputFormat: 'number',
    defaultParameters: {
      scale: [-28, 28],
      units: 'pts',
      precision: 1,
      confidenceInterval: true,
    },
    chartType: 'bar',
    examples: ['Team A by 7.5 points', 'Cowboys -3.5', 'Bills +7.0'],
    compatibleModelTypes: ['linear_regression', 'neural_network'],
    minimumMetrics: 3,
    recommendedMetrics: ['points_scored', 'team_total_yards', 'defensive_pressure_rate'],
  },
  
  total_points: {
    type: 'total_points',
    name: 'Total Points (Over/Under)',
    description: 'Predicts the combined total points scored by both teams',
    category: 'game',
    outputFormat: 'number',
    defaultParameters: {
      scale: [20, 70],
      units: 'pts',
      precision: 1,
      benchmarkValue: 47.5, // Common NFL total
    },
    chartType: 'gauge',
    examples: ['Total: 52.5 points', 'Over 45.5', 'Under 53.0'],
    compatibleModelTypes: ['linear_regression', 'neural_network'],
    minimumMetrics: 2,
    recommendedMetrics: ['points_scored', 'team_total_yards', 'red_zone_efficiency'],
  },
  
  game_outcome: {
    type: 'game_outcome',
    name: 'Game Outcome',
    description: 'Simple win/loss/tie prediction',
    category: 'game',
    outputFormat: 'categorical',
    defaultParameters: {
      units: '',
      precision: 0,
    },
    chartType: 'comparison',
    examples: ['Bills WIN', 'Cowboys LOSS', 'TIE'],
    compatibleModelTypes: ['logistic_regression', 'custom'],
    minimumMetrics: 1,
    recommendedMetrics: ['points_scored', 'team_total_yards'],
  },
  
  team_score: {
    type: 'team_score',
    name: 'Team Score Prediction',
    description: 'Predicts individual team\'s final score',
    category: 'team',
    outputFormat: 'number',
    defaultParameters: {
      scale: [0, 50],
      units: 'pts',
      precision: 1,
    },
    chartType: 'bar',
    examples: ['Bills: 28 points', 'Cowboys: 21 points'],
    compatibleModelTypes: ['linear_regression', 'neural_network'],
    minimumMetrics: 2,
    recommendedMetrics: ['points_scored', 'offensive_efficiency', 'red_zone_efficiency'],
  },
  
  team_rating: {
    type: 'team_rating',
    name: 'Team Performance Rating',
    description: 'Composite rating/score for overall team performance',
    category: 'team',
    outputFormat: 'number',
    defaultParameters: {
      scale: [0, 100],
      units: '',
      precision: 1,
      benchmarkValue: 50, // Average team rating
    },
    chartType: 'gauge',
    examples: ['Team Rating: 85.2/100', 'Above Average (67.3)'],
    compatibleModelTypes: ['linear_regression', 'custom'],
    minimumMetrics: 4,
    recommendedMetrics: ['points_scored', 'team_total_yards', 'turnover_differential', 'time_of_possession'],
  },
  
  offensive_efficiency: {
    type: 'offensive_efficiency',
    name: 'Offensive Efficiency',
    description: 'Rating for offensive performance and efficiency',
    category: 'team',
    outputFormat: 'number',
    defaultParameters: {
      scale: [30, 120],
      units: '',
      precision: 1,
      benchmarkValue: 100, // League average
    },
    chartType: 'gauge',
    examples: ['Offensive Efficiency: 92.3 (Top 15%)', 'Below Average (78.1)'],
    compatibleModelTypes: ['linear_regression', 'custom'],
    minimumMetrics: 3,
    recommendedMetrics: ['passing_yards', 'rushing_yards', 'red_zone_efficiency', 'third_down_conversion'],
  },
  
  defensive_efficiency: {
    type: 'defensive_efficiency',
    name: 'Defensive Efficiency',
    description: 'Rating for defensive performance and efficiency',
    category: 'team',
    outputFormat: 'number',
    defaultParameters: {
      scale: [30, 120],
      units: '',
      precision: 1,
      benchmarkValue: 100, // League average
    },
    chartType: 'gauge',
    examples: ['Defensive Efficiency: 108.7 (Top 8%)', 'Average (99.2)'],
    compatibleModelTypes: ['linear_regression', 'custom'],
    minimumMetrics: 3,
    recommendedMetrics: ['defensive_pressure_rate', 'turnover_differential', 'penalties_called'],
  },
  
  player_stats: {
    type: 'player_stats',
    name: 'Player Statistical Prediction',
    description: 'Predicts specific player statistics (yards, touchdowns, etc.)',
    category: 'player',
    outputFormat: 'number',
    defaultParameters: {
      units: 'var', // Variable based on stat type
      precision: 1,
      confidenceInterval: true,
    },
    chartType: 'bar',
    examples: ['Josh Allen: 285 passing yards, 2.3 TDs', 'CMC: 127 rushing yards'],
    compatibleModelTypes: ['linear_regression', 'neural_network'],
    minimumMetrics: 2,
    recommendedMetrics: ['passing_yards', 'quarterback_rating', 'completion_percentage'],
  },
  
  player_rating: {
    type: 'player_rating',
    name: 'Player Performance Score',
    description: 'Composite rating for overall player performance',
    category: 'player',
    outputFormat: 'number',
    defaultParameters: {
      scale: [0, 100],
      units: '',
      precision: 1,
      benchmarkValue: 75, // Good player rating
    },
    chartType: 'gauge',
    examples: ['Player Rating: 88.7/100', 'Elite Performance (94.2)'],
    compatibleModelTypes: ['linear_regression', 'custom'],
    minimumMetrics: 3,
    recommendedMetrics: ['quarterback_rating', 'completion_percentage', 'passing_touchdowns'],
  },
  
  player_impact: {
    type: 'player_impact',
    name: 'Player Impact Factor',
    description: 'Measures how much a player affects game outcome',
    category: 'player',
    outputFormat: 'range',
    defaultParameters: {
      scale: [-10, 10],
      units: 'pts/game',
      precision: 1,
      confidenceInterval: true,
    },
    chartType: 'bar',
    examples: ['Impact Factor: +5.2 points per game', 'Negative Impact: -2.1 pts/game'],
    compatibleModelTypes: ['linear_regression', 'neural_network'],
    minimumMetrics: 4,
    recommendedMetrics: ['quarterback_rating', 'passing_yards', 'turnover_differential'],
  },
  
  expected_value: {
    type: 'expected_value',
    name: 'Expected Value Model',
    description: 'Expected points, yards, or other metrics based on situation',
    category: 'advanced',
    outputFormat: 'range',
    defaultParameters: {
      units: 'var',
      precision: 1,
      confidenceInterval: true,
    },
    chartType: 'trend',
    examples: ['Expected Points: 3.2 ± 1.4', 'Expected Yards: 245 ± 32'],
    compatibleModelTypes: ['linear_regression', 'neural_network'],
    minimumMetrics: 5,
    recommendedMetrics: ['team_total_yards', 'time_of_possession', 'field_position'],
  },
  
  momentum_score: {
    type: 'momentum_score',
    name: 'Momentum Indicator',
    description: 'Measures team momentum based on recent performance',
    category: 'advanced',
    outputFormat: 'number',
    defaultParameters: {
      scale: [-100, 100],
      units: '',
      precision: 0,
    },
    chartType: 'trend',
    examples: ['Momentum: +67 (Strong upward)', 'Momentum: -23 (Declining)'],
    compatibleModelTypes: ['custom', 'neural_network'],
    minimumMetrics: 3,
    recommendedMetrics: ['recent_performance', 'turnover_differential', 'points_scored'],
  },
  
  situational_performance: {
    type: 'situational_performance',
    name: 'Situational Performance',
    description: 'Performance in specific game situations (3rd down, red zone, etc.)',
    category: 'advanced',
    outputFormat: 'percentage',
    defaultParameters: {
      scale: [0, 100],
      units: '%',
      precision: 1,
      benchmarkValue: 50, // League average
    },
    chartType: 'comparison',
    examples: ['3rd Down Efficiency: 67%', 'Red Zone: 85% (Excellent)'],
    compatibleModelTypes: ['linear_regression', 'custom'],
    minimumMetrics: 2,
    recommendedMetrics: ['third_down_conversion', 'red_zone_efficiency'],
  },
}

// Helper functions

/**
 * Get outcome specification by type
 */
export function getOutcomeSpecification(type: OutcomeType): OutcomeTypeDefinition {
  return OUTCOME_SPECIFICATIONS[type]
}

/**
 * Get all outcomes by category
 */
export function getOutcomesByCategory(category: OutcomeTypeDefinition['category']): OutcomeTypeDefinition[] {
  return Object.values(OUTCOME_SPECIFICATIONS).filter(spec => spec.category === category)
}

/**
 * Validate outcome compatibility with selected metrics
 */
export function validateOutcomeCompatibility(
  outcomeType: OutcomeType,
  selectedMetrics: string[],
  modelType: string
): {
  isValid: boolean
  warnings: string[]
  suggestions: string[]
} {
  const spec = getOutcomeSpecification(outcomeType)
  const warnings: string[] = []
  const suggestions: string[] = []

  // Check minimum metrics requirement
  if (selectedMetrics.length < spec.minimumMetrics) {
    warnings.push(`This outcome requires at least ${spec.minimumMetrics} metrics`)
    suggestions.push(`Add ${spec.minimumMetrics - selectedMetrics.length} more metrics`)
  }

  // Check model type compatibility
  if (!spec.compatibleModelTypes.includes(modelType)) {
    warnings.push(`Model type "${modelType}" may not be suitable for this outcome`)
    suggestions.push(`Consider using: ${spec.compatibleModelTypes.join(', ')}`)
  }

  // Check for recommended metrics
  const hasRecommendedMetrics = spec.recommendedMetrics.some(metric => 
    selectedMetrics.includes(metric)
  )
  if (!hasRecommendedMetrics && spec.recommendedMetrics.length > 0) {
    suggestions.push(`Consider adding recommended metrics: ${spec.recommendedMetrics.slice(0, 2).join(', ')}`)
  }

  return {
    isValid: warnings.length === 0,
    warnings,
    suggestions,
  }
}

/**
 * Get display format for outcome value
 */
export function formatOutcomeValue(
  value: number | string,
  outcomeType: OutcomeType,
  parameters?: OutcomeParameters
): string {
  const spec = getOutcomeSpecification(outcomeType)
  const params = { ...spec.defaultParameters, ...parameters }

  if (typeof value === 'string') return value

  const precision = params.precision || 1
  const units = params.units || ''

  switch (spec.outputFormat) {
    case 'percentage':
      return `${value.toFixed(precision)}%`
    case 'number':
      return units ? `${value.toFixed(precision)} ${units}` : value.toFixed(precision)
    case 'range':
      return units ? `${value.toFixed(precision)} ${units}` : value.toFixed(precision)
    default:
      return value.toString()
  }
}

/**
 * Get benchmark comparison text
 */
export function getBenchmarkComparison(
  value: number,
  outcomeType: OutcomeType,
  parameters?: OutcomeParameters
): 'above' | 'below' | 'average' | null {
  const spec = getOutcomeSpecification(outcomeType)
  const params = { ...spec.defaultParameters, ...parameters }
  
  if (!params.benchmarkValue) return null
  
  const threshold = params.benchmarkValue * 0.05 // 5% threshold
  
  if (value > params.benchmarkValue + threshold) return 'above'
  if (value < params.benchmarkValue - threshold) return 'below'
  return 'average'
}

/**
 * Get all available outcome types as options for UI
 */
export function getOutcomeOptions(): Array<{
  value: OutcomeType
  label: string
  description: string
  category: string
}> {
  return Object.values(OUTCOME_SPECIFICATIONS).map(spec => ({
    value: spec.type,
    label: spec.name,
    description: spec.description,
    category: spec.category,
  }))
} 