# Model Outcome Specifications

## Overview

This document defines the comprehensive model outcome specifications for the Red Data sports analytics platform. Model outcomes represent what the user's model is trying to predict or calculate, providing the target variable that drives the model's construction and evaluation.

## Outcome Categories

### 1. Game Prediction Outcomes

#### 1.1 Win Probability
- **Type**: `win_probability`
- **Description**: Predicts the probability (0-100%) that a specific team will win
- **Output Format**: Percentage (0-100)
- **UI Display**: Progress bar, gauge, or percentage indicator
- **Use Cases**: Pre-game predictions, live game updates
- **Example**: "Team A has 67% chance to win"

#### 1.2 Point Spread
- **Type**: `point_spread`
- **Description**: Predicts the point difference between two teams
- **Output Format**: Signed number (positive = Team A advantage, negative = Team B advantage)
- **UI Display**: Bar chart with differential, or simple +/- number
- **Use Cases**: Betting analysis, competitive balance assessment
- **Example**: "Team A by 7.5 points" or "-3.5" (Team B favored by 3.5)

#### 1.3 Total Points (Over/Under)
- **Type**: `total_points`
- **Description**: Predicts the combined total points scored by both teams
- **Output Format**: Positive number
- **UI Display**: Number with comparison to betting line (if available)
- **Use Cases**: Over/under betting analysis, game pace prediction
- **Example**: "Total: 52.5 points"

#### 1.4 Game Outcome Classification
- **Type**: `game_outcome`
- **Description**: Simple win/loss/tie prediction
- **Output Format**: Categorical (WIN_A, WIN_B, TIE)
- **UI Display**: Badge or indicator with team colors
- **Use Cases**: Simple prediction models, tournament brackets
- **Example**: "Bills WIN"

### 2. Team Performance Outcomes

#### 2.1 Team Score Prediction
- **Type**: `team_score`
- **Description**: Predicts individual team's final score
- **Output Format**: Positive number
- **UI Display**: Large number display with team branding
- **Use Cases**: Individual team analysis, fantasy sports
- **Example**: "Bills: 28 points"

#### 2.2 Team Performance Rating
- **Type**: `team_rating`
- **Description**: Composite rating/score for overall team performance
- **Output Format**: Normalized score (0-100 or similar scale)
- **UI Display**: Gauge, star rating, or grade indicator
- **Use Cases**: Season-long analysis, team comparisons
- **Example**: "Team Rating: 85.2/100"

#### 2.3 Offensive/Defensive Efficiency
- **Type**: `offensive_efficiency` / `defensive_efficiency`
- **Description**: Specialized ratings for offensive or defensive performance
- **Output Format**: Normalized score with context
- **UI Display**: Side-by-side comparison charts
- **Use Cases**: Coordinator analysis, matchup exploits
- **Example**: "Offensive Efficiency: 92.3 (Top 5%)"

### 3. Player Performance Outcomes

#### 3.1 Player Statistical Prediction
- **Type**: `player_stats`
- **Description**: Predicts specific player statistics (yards, touchdowns, etc.)
- **Output Format**: Number with unit specification
- **UI Display**: Statistics card with player photo and team branding
- **Use Cases**: Fantasy sports, player prop betting, individual analysis
- **Example**: "Josh Allen: 285 passing yards, 2.3 TDs"

#### 3.2 Player Performance Score
- **Type**: `player_rating`
- **Description**: Composite rating for overall player performance
- **Output Format**: Normalized score (0-100)
- **UI Display**: Player card with rating badge
- **Use Cases**: Player evaluation, draft analysis
- **Example**: "Player Rating: 88.7/100"

#### 3.3 Player Impact Factor
- **Type**: `player_impact`
- **Description**: Measures how much a player affects game outcome
- **Output Format**: Impact score with confidence interval
- **UI Display**: Impact meter with explanatory text
- **Use Cases**: Key player identification, injury impact analysis
- **Example**: "Impact Factor: +5.2 points per game"

### 4. Advanced Analytics Outcomes

#### 4.1 Expected Value Models
- **Type**: `expected_value`
- **Description**: Expected points, yards, or other metrics based on situation
- **Output Format**: Number with confidence interval
- **UI Display**: Range indicator with expected value highlighted
- **Use Cases**: Play-calling analysis, situational awareness
- **Example**: "Expected Points: 3.2 ± 1.4"

#### 4.2 Momentum Indicators
- **Type**: `momentum_score`
- **Description**: Measures team momentum based on recent performance
- **Output Format**: Trend score (-100 to +100)
- **UI Display**: Momentum arrow or trend line graph
- **Use Cases**: In-game adjustments, streak analysis
- **Example**: "Momentum: +67 (Strong upward trend)"

#### 4.3 Situational Performance
- **Type**: `situational_performance`
- **Description**: Performance in specific game situations (3rd down, red zone, etc.)
- **Output Format**: Percentage or efficiency rating
- **UI Display**: Situation-specific dashboard
- **Use Cases**: Game planning, situational substitutions
- **Example**: "3rd Down Efficiency: 67% (Above Average)"

## Technical Implementation

### Data Structure

```typescript
// Enhanced ModelDefinition interface
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

// Enhanced calculation result
export interface ModelCalculationResult {
  outcome: {
    type: OutcomeType
    value: number | string
    confidence: number
    displayValue: string
    benchmarkComparison?: 'above' | 'below' | 'average'
  }
  breakdown: MetricContribution[]
  visualization: {
    chartType: 'gauge' | 'bar' | 'progress' | 'comparison' | 'trend'
    data: any[]
    labels: string[]
  }
  metadata: {
    calculatedAt: string
    modelVersion: string
    sampleSize?: number
    dataQuality: 'high' | 'medium' | 'low'
  }
}
```

### Builder UI Integration

1. **Outcome Selection Interface**
   - Dropdown or card-based selection for outcome type
   - Dynamic parameter configuration based on selected outcome
   - Real-time preview updates based on outcome type
   - Help text and examples for each outcome type

2. **Visualization Adaptation**
   - Automatic chart type selection based on outcome
   - Responsive display scaling for different outcome ranges
   - Contextual information display (benchmarks, historical averages)
   - Export capabilities for different outcome formats

3. **Validation Rules**
   - Metric compatibility validation for selected outcomes
   - Minimum data requirements checking
   - Model type suggestions based on outcome selection
   - Warning system for potentially problematic configurations

## Implementation Priority

### Phase 1 (Current - Immediate)
- ✅ Win Probability
- ✅ Point Spread (basic implementation)
- ✅ Game Outcome Classification

### Phase 2 (Next Sprint)
- [ ] Team Score Prediction
- [ ] Total Points (Over/Under)
- [ ] Team Performance Rating

### Phase 3 (Future Enhancements)
- [ ] Player Statistical Prediction
- [ ] Advanced Analytics Outcomes
- [ ] Situational Performance Models

### Phase 4 (Advanced Features)
- [ ] Expected Value Models
- [ ] Real-time outcome updates
- [ ] Historical outcome validation

## Validation and Testing

### Model Validation Criteria
1. **Statistical Validity**: Outcomes should be statistically meaningful
2. **Business Logic**: Outcomes should make sense in sports context
3. **User Experience**: Outcomes should be clearly interpretable
4. **Performance**: Calculations should complete within acceptable time limits

### Testing Strategy
1. **Unit Tests**: Individual outcome calculation functions
2. **Integration Tests**: End-to-end model creation and calculation
3. **Historical Validation**: Backtest outcomes against historical data
4. **User Acceptance**: Validate outcome interpretability with users

## Future Enhancements

### Adaptive Outcomes
- Machine learning models that suggest optimal outcome types based on selected metrics
- Dynamic outcome weighting based on historical performance
- Context-aware outcome recommendations (playoff vs. regular season)

### Multi-Outcome Models
- Models that predict multiple outcomes simultaneously
- Outcome correlation analysis and display
- Portfolio-style model management with multiple targets

### Real-Time Integration
- Live game outcome updates
- Real-time model performance tracking
- Dynamic outcome recalculation based on game events

---

## References

- [Current ModelCalculationResult Interface](../app/services/modelCalculation.ts)
- [Builder Store Implementation](../app/stores/builderStore.ts)
- [Model Preview Component](../app/components/ModelPreview.tsx)
- [Database Schema](../prisma/schema.prisma) 