import { PrismaClient, Position, MetricCategory, GameStatus } from '../generated/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create Teams
  console.log('Creating NFL teams...')
  const teams = await Promise.all([
    // AFC East
    prisma.team.create({
      data: {
        name: 'Buffalo Bills',
        abbreviation: 'BUF',
        city: 'Buffalo',
        conference: 'AFC',
        division: 'East',
      }
    }),
    prisma.team.create({
      data: {
        name: 'Miami Dolphins',
        abbreviation: 'MIA',
        city: 'Miami',
        conference: 'AFC',
        division: 'East',
      }
    }),
    prisma.team.create({
      data: {
        name: 'New England Patriots',
        abbreviation: 'NE',
        city: 'Foxborough',
        conference: 'AFC',
        division: 'East',
      }
    }),
    prisma.team.create({
      data: {
        name: 'New York Jets',
        abbreviation: 'NYJ',
        city: 'East Rutherford',
        conference: 'AFC',
        division: 'East',
      }
    }),
    // AFC North
    prisma.team.create({
      data: {
        name: 'Baltimore Ravens',
        abbreviation: 'BAL',
        city: 'Baltimore',
        conference: 'AFC',
        division: 'North',
      }
    }),
    prisma.team.create({
      data: {
        name: 'Cincinnati Bengals',
        abbreviation: 'CIN',
        city: 'Cincinnati',
        conference: 'AFC',
        division: 'North',
      }
    }),
    prisma.team.create({
      data: {
        name: 'Cleveland Browns',
        abbreviation: 'CLE',
        city: 'Cleveland',
        conference: 'AFC',
        division: 'North',
      }
    }),
    prisma.team.create({
      data: {
        name: 'Pittsburgh Steelers',
        abbreviation: 'PIT',
        city: 'Pittsburgh',
        conference: 'AFC',
        division: 'North',
      }
    }),
    // NFC East
    prisma.team.create({
      data: {
        name: 'Dallas Cowboys',
        abbreviation: 'DAL',
        city: 'Arlington',
        conference: 'NFC',
        division: 'East',
      }
    }),
    prisma.team.create({
      data: {
        name: 'New York Giants',
        abbreviation: 'NYG',
        city: 'East Rutherford',
        conference: 'NFC',
        division: 'East',
      }
    }),
    prisma.team.create({
      data: {
        name: 'Philadelphia Eagles',
        abbreviation: 'PHI',
        city: 'Philadelphia',
        conference: 'NFC',
        division: 'East',
      }
    }),
    prisma.team.create({
      data: {
        name: 'Washington Commanders',
        abbreviation: 'WAS',
        city: 'Landover',
        conference: 'NFC',
        division: 'East',
      }
    }),
  ])

  // Create sample players for a few teams
  console.log('Creating sample players...')
  const billsTeam = teams.find(t => t.abbreviation === 'BUF')!
  const cowboysTeam = teams.find(t => t.abbreviation === 'DAL')!

  const players = await Promise.all([
    // Buffalo Bills players
    prisma.player.create({
      data: {
        name: 'Josh Allen',
        position: Position.QUARTERBACK,
        number: 17,
        height: '6\'5"',
        weight: 237,
        age: 27,
        teamId: billsTeam.id,
      }
    }),
    prisma.player.create({
      data: {
        name: 'Stefon Diggs',
        position: Position.WIDE_RECEIVER,
        number: 14,
        height: '6\'0"',
        weight: 191,
        age: 30,
        teamId: billsTeam.id,
      }
    }),
    prisma.player.create({
      data: {
        name: 'James Cook',
        position: Position.RUNNING_BACK,
        number: 4,
        height: '5\'11"',
        weight: 199,
        age: 24,
        teamId: billsTeam.id,
      }
    }),
    // Dallas Cowboys players
    prisma.player.create({
      data: {
        name: 'Dak Prescott',
        position: Position.QUARTERBACK,
        number: 4,
        height: '6\'2"',
        weight: 238,
        age: 30,
        teamId: cowboysTeam.id,
      }
    }),
    prisma.player.create({
      data: {
        name: 'CeeDee Lamb',
        position: Position.WIDE_RECEIVER,
        number: 88,
        height: '6\'2"',
        weight: 198,
        age: 25,
        teamId: cowboysTeam.id,
      }
    }),
    prisma.player.create({
      data: {
        name: 'Tony Pollard',
        position: Position.RUNNING_BACK,
        number: 20,
        height: '6\'0"',
        weight: 209,
        age: 27,
        teamId: cowboysTeam.id,
      }
    }),
  ])

  // Create referees
  console.log('Creating referees...')
  const referees = await Promise.all([
    prisma.referee.create({
      data: {
        name: 'Brad Allen',
        number: 122,
        position: 'Head Referee',
        yearsExp: 8,
      }
    }),
    prisma.referee.create({
      data: {
        name: 'Shawn Hochuli',
        number: 83,
        position: 'Head Referee',
        yearsExp: 6,
      }
    }),
    prisma.referee.create({
      data: {
        name: 'Jerome Boger',
        number: 23,
        position: 'Head Referee',
        yearsExp: 12,
      }
    }),
  ])

  // Create sample games
  console.log('Creating sample games...')
  const games = await Promise.all([
    prisma.game.create({
      data: {
        gameDate: new Date('2024-01-15T20:00:00Z'),
        week: 19, // Wild Card
        season: 2024,
        homeTeamId: billsTeam.id,
        awayTeamId: cowboysTeam.id,
        refereeId: referees[0].id,
        homeScore: 31,
        awayScore: 17,
        status: GameStatus.COMPLETED,
        venue: 'Highmark Stadium',
        temperature: 32,
        weather: 'Snow',
        attendance: 71608,
      }
    }),
  ])

  // Create comprehensive metrics for different categories
  console.log('Creating metrics...')
  const metrics = await Promise.all([
    // Player Metrics
    prisma.metric.create({
      data: {
        name: 'passing_yards',
        displayName: 'Passing Yards',
        description: 'Total passing yards in a game',
        category: MetricCategory.PLAYER,
        dataType: 'number',
        unit: 'yards',
      }
    }),
    prisma.metric.create({
      data: {
        name: 'passing_touchdowns',
        displayName: 'Passing Touchdowns',
        description: 'Number of touchdown passes thrown',
        category: MetricCategory.PLAYER,
        dataType: 'number',
        unit: 'touchdowns',
      }
    }),
    prisma.metric.create({
      data: {
        name: 'rushing_yards',
        displayName: 'Rushing Yards',
        description: 'Total rushing yards in a game',
        category: MetricCategory.PLAYER,
        dataType: 'number',
        unit: 'yards',
      }
    }),
    prisma.metric.create({
      data: {
        name: 'receiving_yards',
        displayName: 'Receiving Yards',
        description: 'Total receiving yards in a game',
        category: MetricCategory.PLAYER,
        dataType: 'number',
        unit: 'yards',
      }
    }),
    prisma.metric.create({
      data: {
        name: 'completion_percentage',
        displayName: 'Completion Percentage',
        description: 'Percentage of completed passes',
        category: MetricCategory.PLAYER,
        dataType: 'percentage',
        unit: '%',
      }
    }),
    prisma.metric.create({
      data: {
        name: 'quarterback_rating',
        displayName: 'Quarterback Rating',
        description: 'NFL Passer Rating',
        category: MetricCategory.PLAYER,
        dataType: 'number',
        unit: 'rating',
      }
    }),
    
    // Team Metrics
    prisma.metric.create({
      data: {
        name: 'team_total_yards',
        displayName: 'Total Yards',
        description: 'Total offensive yards for team',
        category: MetricCategory.TEAM,
        dataType: 'number',
        unit: 'yards',
      }
    }),
    prisma.metric.create({
      data: {
        name: 'points_scored',
        displayName: 'Points Scored',
        description: 'Total points scored by team',
        category: MetricCategory.TEAM,
        dataType: 'number',
        unit: 'points',
      }
    }),
    prisma.metric.create({
      data: {
        name: 'time_of_possession',
        displayName: 'Time of Possession',
        description: 'Time controlling the ball',
        category: MetricCategory.TEAM,
        dataType: 'number',
        unit: 'minutes',
      }
    }),
    prisma.metric.create({
      data: {
        name: 'turnover_differential',
        displayName: 'Turnover Differential',
        description: 'Turnovers gained minus turnovers lost',
        category: MetricCategory.TEAM,
        dataType: 'number',
        unit: 'turnovers',
      }
    }),
    prisma.metric.create({
      data: {
        name: 'third_down_conversion',
        displayName: 'Third Down Conversion %',
        description: 'Percentage of successful third down conversions',
        category: MetricCategory.TEAM,
        dataType: 'percentage',
        unit: '%',
      }
    }),
    prisma.metric.create({
      data: {
        name: 'red_zone_efficiency',
        displayName: 'Red Zone Efficiency',
        description: 'Percentage of red zone visits resulting in touchdowns',
        category: MetricCategory.TEAM,
        dataType: 'percentage',
        unit: '%',
      }
    }),

    // Position Group Metrics
    prisma.metric.create({
      data: {
        name: 'offensive_line_pressure_rate',
        displayName: 'O-Line Pressure Rate',
        description: 'Rate at which offensive line allows pressure',
        category: MetricCategory.POSITION,
        dataType: 'percentage',
        unit: '%',
      }
    }),
    prisma.metric.create({
      data: {
        name: 'defensive_pressure_rate',
        displayName: 'Defensive Pressure Rate',
        description: 'Rate at which defense generates pressure',
        category: MetricCategory.POSITION,
        dataType: 'percentage',
        unit: '%',
      }
    }),

    // Referee/Game Control Metrics
    prisma.metric.create({
      data: {
        name: 'penalties_called',
        displayName: 'Penalties Called',
        description: 'Total number of penalties called by referee crew',
        category: MetricCategory.REF,
        dataType: 'number',
        unit: 'penalties',
      }
    }),
    prisma.metric.create({
      data: {
        name: 'penalty_yards',
        displayName: 'Penalty Yards',
        description: 'Total penalty yards assessed',
        category: MetricCategory.REF,
        dataType: 'number',
        unit: 'yards',
      }
    }),

    // Environmental/Game Situation Metrics  
    prisma.metric.create({
      data: {
        name: 'weather_impact_score',
        displayName: 'Weather Impact Score',
        description: 'Calculated impact of weather conditions on game',
        category: MetricCategory.PLAYBOOK,
        dataType: 'number',
        unit: 'score',
      }
    }),
    prisma.metric.create({
      data: {
        name: 'home_field_advantage',
        displayName: 'Home Field Advantage',
        description: 'Statistical advantage for home team',
        category: MetricCategory.PLAYBOOK,
        dataType: 'number',
        unit: 'points',
      }
    }),
  ])

  // Create a sample user model
  console.log('Creating sample user model...')
  const sampleModel = await prisma.userModel.create({
    data: {
      name: 'QB Performance Predictor',
      description: 'Predicts quarterback performance based on key passing metrics',
      definition: {
        targetOutcome: 'quarterback_rating',
        modelType: 'linear_regression',
        weights: {
          passing_yards: 0.3,
          completion_percentage: 0.4,
          passing_touchdowns: 0.3
        }
      },
      isPublic: true,
      isListed: true,
    }
  })

  // Create model components for sample model
  console.log('Creating model components...')
  const passingYardsMetric = metrics.find(m => m.name === 'passing_yards')!
  const completionPctMetric = metrics.find(m => m.name === 'completion_percentage')!
  const passingTdsMetric = metrics.find(m => m.name === 'passing_touchdowns')!

  await Promise.all([
    prisma.modelComponent.create({
      data: {
        modelId: sampleModel.id,
        metricId: passingYardsMetric.id,
        weight: 0.3,
      }
    }),
    prisma.modelComponent.create({
      data: {
        modelId: sampleModel.id,
        metricId: completionPctMetric.id,
        weight: 0.4,
      }
    }),
    prisma.modelComponent.create({
      data: {
        modelId: sampleModel.id,
        metricId: passingTdsMetric.id,
        weight: 0.3,
      }
    }),
  ])

  console.log('✅ Database seeded successfully!')
  console.log(`📊 Created:`)
  console.log(`   - ${teams.length} teams`)
  console.log(`   - ${players.length} players`)
  console.log(`   - ${referees.length} referees`)
  console.log(`   - ${games.length} games`)
  console.log(`   - ${metrics.length} metrics`)
  console.log(`   - 1 sample model with 3 components`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('❌ Seed failed:', e)
    await prisma.$disconnect()
    process.exit(1)
  }) 