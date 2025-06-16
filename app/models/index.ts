// TypeScript interfaces for domain entities

export interface User {
  id: string
  email: string
  name?: string
  createdAt: Date
  updatedAt: Date
}

export interface Team {
  id: string
  name: string
  abbreviation: string
  city: string
  conference?: string
  division?: string
  logoUrl?: string
  createdAt: Date
  updatedAt: Date
}

export interface Player {
  id: string
  name: string
  position: Position
  number?: number
  height?: string
  weight?: number
  age?: number
  teamId: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
  team?: Team
}

export interface Referee {
  id: string
  name: string
  number?: number
  position?: string
  yearsExp?: number
  createdAt: Date
  updatedAt: Date
}

export interface Game {
  id: string
  gameDate: Date
  week?: number
  season: number
  homeTeamId: string
  awayTeamId: string
  refereeId?: string
  homeScore?: number
  awayScore?: number
  status: GameStatus
  venue?: string
  temperature?: number
  weather?: string
  attendance?: number
  createdAt: Date
  updatedAt: Date
  homeTeam?: Team
  awayTeam?: Team
  referee?: Referee
}

export interface Metric {
  id: string
  name: string
  displayName: string
  description?: string
  category: MetricCategory
  dataType: string
  unit?: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface UserModel {
  id: string
  name: string
  description?: string
  definition: ModelDefinition
  userId?: string
  isPublic: boolean
  isListed: boolean
  shareToken?: string
  createdAt: Date
  updatedAt: Date
  user?: User
  modelComponents?: ModelComponent[]
}

export interface ModelComponent {
  id: string
  modelId: string
  metricId: string
  weight: number
  isActive: boolean
  model?: UserModel
  metric?: Metric
}

export interface AiSuggestion {
  id: string
  userId?: string
  modelId?: string
  context: string
  suggestedMetrics: SuggestedMetric[]
  wasAccepted: boolean
  createdAt: Date
  user?: User
  model?: UserModel
}

// Enums
export enum Position {
  QUARTERBACK = 'QUARTERBACK',
  RUNNING_BACK = 'RUNNING_BACK',
  WIDE_RECEIVER = 'WIDE_RECEIVER',
  TIGHT_END = 'TIGHT_END',
  OFFENSIVE_LINE = 'OFFENSIVE_LINE',
  DEFENSIVE_END = 'DEFENSIVE_END',
  DEFENSIVE_TACKLE = 'DEFENSIVE_TACKLE',
  LINEBACKER = 'LINEBACKER',
  CORNERBACK = 'CORNERBACK',
  SAFETY = 'SAFETY',
  KICKER = 'KICKER',
  PUNTER = 'PUNTER',
  LONG_SNAPPER = 'LONG_SNAPPER'
}

export enum MetricCategory {
  PLAYER = 'PLAYER',
  TEAM = 'TEAM',
  POSITION = 'POSITION',
  REF = 'REF',
  PLAYBOOK = 'PLAYBOOK'
}

export enum GameStatus {
  SCHEDULED = 'SCHEDULED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  POSTPONED = 'POSTPONED'
}

// Model Definition Types
export interface ModelDefinition {
  targetOutcome: OutcomeType
  modelType: 'linear_regression' | 'logistic_regression' | 'neural_network' | 'custom'
  weights: Record<string, number>
  parameters?: OutcomeParameters
  description?: string
}

// Outcome type enumeration
export type OutcomeType = 
  | 'win_probability'
  | 'point_spread' 
  | 'total_points'
  | 'game_outcome'
  | 'team_score'
  | 'team_rating'
  | 'offensive_efficiency'
  | 'defensive_efficiency'
  | 'player_stats'
  | 'player_rating'
  | 'player_impact'
  | 'expected_value'
  | 'momentum_score'
  | 'situational_performance'

// Outcome-specific parameters
export interface OutcomeParameters {
  scale?: [number, number] // Min/max values for normalized outcomes
  units?: string // Display units (points, yards, percentage)
  precision?: number // Decimal places for display
  confidenceInterval?: boolean // Whether to show confidence intervals
  benchmarkValue?: number // Reference value for comparison
  targetPlayer?: string // For player-specific outcomes
  situation?: string // For situational outcomes
}

export interface SuggestedMetric {
  metricId: string
  weight: number
  reasoning: string
  confidence: number
}

// API Response Types
export interface ApiResponse<T> {
  data?: T
  error?: ApiError
}

export interface ApiError {
  code: string
  message: string
}

// Pagination Types
export interface PaginationMeta {
  total: number
  page: number
  limit: number
  hasNext: boolean
  hasPrev: boolean
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta?: PaginationMeta
} 