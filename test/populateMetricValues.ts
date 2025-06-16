/**
 * Populate Metric Values Script
 * Inserts realistic metric values for teams to support calculation validation
 */

import { PrismaClient } from '../generated/client'

const prisma = new PrismaClient()

// Realistic NFL team metric values for 2024 season
const teamMetricValues = {
  'BUF': {
    passing_yards: 285.4,
    passing_touchdowns: 2.3,
    rushing_yards: 128.7,
    receiving_yards: 265.8,
    completion_percentage: 66.2,
    quarterback_rating: 97.8,
    team_total_yards: 414.1,
    points_scored: 28.8,
    time_of_possession: 31.5,
    turnover_differential: 1.2,
    third_down_conversion: 44.3,
    red_zone_efficiency: 61.5,
    offensive_line_pressure_rate: 19.2,
    defensive_pressure_rate: 26.8,
    penalties_called: 6.4,
    penalty_yards: 55,
    weather_impact_score: 4.2,
    home_field_advantage: 3.1,
  },
  'DAL': {
    passing_yards: 278.3,
    passing_touchdowns: 2.1,
    rushing_yards: 112.5,
    receiving_yards: 245.2,
    completion_percentage: 68.5,
    quarterback_rating: 95.2,
    team_total_yards: 390.8,
    points_scored: 25.6,
    time_of_possession: 29.8,
    turnover_differential: -0.2,
    third_down_conversion: 41.7,
    red_zone_efficiency: 58.3,
    offensive_line_pressure_rate: 21.5,
    defensive_pressure_rate: 24.1,
    penalties_called: 7.2,
    penalty_yards: 62,
    weather_impact_score: 2.1,
    home_field_advantage: 2.8,
  },
  'MIA': {
    passing_yards: 268.9,
    passing_touchdowns: 1.9,
    rushing_yards: 105.3,
    receiving_yards: 238.4,
    completion_percentage: 64.7,
    quarterback_rating: 89.6,
    team_total_yards: 374.2,
    points_scored: 22.4,
    time_of_possession: 28.9,
    turnover_differential: -0.8,
    third_down_conversion: 38.2,
    red_zone_efficiency: 52.1,
    offensive_line_pressure_rate: 25.3,
    defensive_pressure_rate: 22.7,
    penalties_called: 5.9,
    penalty_yards: 49,
    weather_impact_score: 1.8,
    home_field_advantage: 2.5,
  },
  'NE': {
    passing_yards: 215.7,
    passing_touchdowns: 1.4,
    rushing_yards: 118.2,
    receiving_yards: 198.5,
    completion_percentage: 61.3,
    quarterback_rating: 78.9,
    team_total_yards: 333.9,
    points_scored: 18.8,
    time_of_possession: 30.2,
    turnover_differential: -1.1,
    third_down_conversion: 35.8,
    red_zone_efficiency: 48.7,
    offensive_line_pressure_rate: 28.7,
    defensive_pressure_rate: 20.3,
    penalties_called: 5.6,
    penalty_yards: 47,
    weather_impact_score: 3.8,
    home_field_advantage: 2.2,
  },
  'NYJ': {
    passing_yards: 201.3,
    passing_touchdowns: 1.2,
    rushing_yards: 98.7,
    receiving_yards: 185.6,
    completion_percentage: 59.8,
    quarterback_rating: 74.2,
    team_total_yards: 300.0,
    points_scored: 17.1,
    time_of_possession: 28.5,
    turnover_differential: -1.5,
    third_down_conversion: 32.4,
    red_zone_efficiency: 44.2,
    offensive_line_pressure_rate: 31.2,
    defensive_pressure_rate: 23.8,
    penalties_called: 6.8,
    penalty_yards: 58,
    weather_impact_score: 3.5,
    home_field_advantage: 1.9,
  },
  'BAL': {
    passing_yards: 245.6,
    passing_touchdowns: 1.8,
    rushing_yards: 165.2,
    receiving_yards: 218.9,
    completion_percentage: 62.4,
    quarterback_rating: 88.7,
    team_total_yards: 410.8,
    points_scored: 26.3,
    time_of_possession: 32.1,
    turnover_differential: 0.7,
    third_down_conversion: 42.1,
    red_zone_efficiency: 59.8,
    offensive_line_pressure_rate: 20.8,
    defensive_pressure_rate: 28.9,
    penalties_called: 6.1,
    penalty_yards: 52,
    weather_impact_score: 3.2,
    home_field_advantage: 2.7,
  },
  'CIN': {
    passing_yards: 289.7,
    passing_touchdowns: 2.4,
    rushing_yards: 108.9,
    receiving_yards: 267.3,
    completion_percentage: 67.1,
    quarterback_rating: 98.5,
    team_total_yards: 398.6,
    points_scored: 27.2,
    time_of_possession: 29.4,
    turnover_differential: 0.3,
    third_down_conversion: 43.8,
    red_zone_efficiency: 62.4,
    offensive_line_pressure_rate: 22.3,
    defensive_pressure_rate: 25.6,
    penalties_called: 6.7,
    penalty_yards: 57,
    weather_impact_score: 2.8,
    home_field_advantage: 2.4,
  },
  'CLE': {
    passing_yards: 198.4,
    passing_touchdowns: 1.3,
    rushing_yards: 132.8,
    receiving_yards: 175.2,
    completion_percentage: 58.9,
    quarterback_rating: 76.3,
    team_total_yards: 331.2,
    points_scored: 19.6,
    time_of_possession: 31.8,
    turnover_differential: -0.9,
    third_down_conversion: 36.2,
    red_zone_efficiency: 51.3,
    offensive_line_pressure_rate: 26.9,
    defensive_pressure_rate: 27.2,
    penalties_called: 5.8,
    penalty_yards: 48,
    weather_impact_score: 4.1,
    home_field_advantage: 2.1,
  },
  'PIT': {
    passing_yards: 234.7,
    passing_touchdowns: 1.7,
    rushing_yards: 125.4,
    receiving_yards: 212.8,
    completion_percentage: 63.2,
    quarterback_rating: 85.4,
    team_total_yards: 360.1,
    points_scored: 22.8,
    time_of_possession: 30.7,
    turnover_differential: 0.2,
    third_down_conversion: 39.6,
    red_zone_efficiency: 55.7,
    offensive_line_pressure_rate: 24.1,
    defensive_pressure_rate: 29.3,
    penalties_called: 5.4,
    penalty_yards: 44,
    weather_impact_score: 3.9,
    home_field_advantage: 2.8,
  },
  'NYG': {
    passing_yards: 209.8,
    passing_touchdowns: 1.5,
    rushing_yards: 102.3,
    receiving_yards: 189.5,
    completion_percentage: 60.4,
    quarterback_rating: 79.8,
    team_total_yards: 312.1,
    points_scored: 18.2,
    time_of_possession: 29.1,
    turnover_differential: -1.3,
    third_down_conversion: 34.7,
    red_zone_efficiency: 47.9,
    offensive_line_pressure_rate: 29.3,
    defensive_pressure_rate: 21.8,
    penalties_called: 6.9,
    penalty_yards: 59,
    weather_impact_score: 2.6,
    home_field_advantage: 2.3,
  },
  'PHI': {
    passing_yards: 271.5,
    passing_touchdowns: 2.2,
    rushing_yards: 138.7,
    receiving_yards: 248.3,
    completion_percentage: 65.8,
    quarterback_rating: 93.7,
    team_total_yards: 410.2,
    points_scored: 26.9,
    time_of_possession: 30.8,
    turnover_differential: 0.6,
    third_down_conversion: 42.9,
    red_zone_efficiency: 60.2,
    offensive_line_pressure_rate: 21.7,
    defensive_pressure_rate: 26.4,
    penalties_called: 6.3,
    penalty_yards: 54,
    weather_impact_score: 2.9,
    home_field_advantage: 3.2,
  },
  'WAS': {
    passing_yards: 258.3,
    passing_touchdowns: 1.9,
    rushing_yards: 115.6,
    receiving_yards: 232.1,
    completion_percentage: 64.1,
    quarterback_rating: 87.2,
    team_total_yards: 373.9,
    points_scored: 24.1,
    time_of_possession: 29.6,
    turnover_differential: -0.4,
    third_down_conversion: 40.3,
    red_zone_efficiency: 56.8,
    offensive_line_pressure_rate: 23.8,
    defensive_pressure_rate: 24.7,
    penalties_called: 6.6,
    penalty_yards: 56,
    weather_impact_score: 2.4,
    home_field_advantage: 2.6,
  },
}

async function populateMetricValues() {
  console.log('🔄 Populating metric values for teams...')

  try {
    // Get all teams and metrics
    const teams = await prisma.team.findMany({
      where: { isDeleted: false }
    })

    const metrics = await prisma.metric.findMany({
      where: { isDeleted: false, isActive: true }
    })

    console.log(`Found ${teams.length} teams and ${metrics.length} metrics`)

    // Create or update metric values table (if it exists)
    // For now, we'll create a simple approach by updating the MetricsRepository
    // to use these values when getMetricValuesForTeams is called

    // Save the metric values to a JSON file that can be imported by the MetricsRepository
    const fs = require('fs/promises')
    const path = require('path')
    
    const dataFilePath = path.join(process.cwd(), 'app', 'data', 'teamMetricValues.json')
    
    // Ensure directory exists
    const dataDir = path.dirname(dataFilePath)
    await fs.mkdir(dataDir, { recursive: true })

    // Convert team abbreviations to IDs
    const metricValuesByTeamId: Record<string, Record<string, number>> = {}
    
    for (const team of teams) {
      const teamValues = teamMetricValues[team.abbreviation as keyof typeof teamMetricValues]
      if (teamValues) {
        // Convert metric names to IDs
        const valuesById: Record<string, number> = {}
        for (const [metricName, value] of Object.entries(teamValues)) {
          const metric = metrics.find(m => m.name === metricName)
          if (metric) {
            valuesById[metric.id] = value
          }
        }
        metricValuesByTeamId[team.id] = valuesById
      }
    }

    await fs.writeFile(dataFilePath, JSON.stringify(metricValuesByTeamId, null, 2))
    
    console.log(`✅ Metric values saved to ${dataFilePath}`)
    console.log(`📊 Populated values for ${Object.keys(metricValuesByTeamId).length} teams`)

    // Verify data completeness
    let totalValues = 0
    for (const [teamId, values] of Object.entries(metricValuesByTeamId)) {
      const team = teams.find(t => t.id === teamId)
      const valueCount = Object.keys(values).length
      totalValues += valueCount
      console.log(`   - ${team?.abbreviation}: ${valueCount} metrics`)
    }
    
    console.log(`📈 Total metric values: ${totalValues}`)

  } catch (error) {
    console.error('❌ Error populating metric values:', error)
    throw error
  }
}

async function main() {
  await populateMetricValues()
}

// Run if called directly
if (require.main === module) {
  main()
    .then(async () => {
      await prisma.$disconnect()
      console.log('✅ Metric value population completed')
    })
    .catch(async (e) => {
      console.error('❌ Metric value population failed:', e)
      await prisma.$disconnect()
      process.exit(1)
    })
}

export { populateMetricValues, teamMetricValues } 