/**
 * Teams API Resource Route
 * GET /api/v1/teams - Retrieve all active teams with optional filtering
 */

import type { LoaderFunctionArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { prisma } from '~/utils/prisma'
import { sanitizeInput } from '~/utils/validation'
import type { Team } from '~/models'

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const url = new URL(request.url)
    const conference = url.searchParams.get('conference')
    const division = url.searchParams.get('division')
    const search = url.searchParams.get('search')
    const limit = Math.min(parseInt(url.searchParams.get('limit') || '50'), 100)
    const page = Math.max(parseInt(url.searchParams.get('page') || '1'), 1)
    const offset = (page - 1) * limit

    // Build where clause
    const where: any = {
      isDeleted: false,
    }

    if (conference) {
      where.conference = sanitizeInput(conference)
    }

    if (division) {
      where.division = sanitizeInput(division)
    }

    if (search) {
      const sanitizedSearch = sanitizeInput(search)
      where.OR = [
        { name: { contains: sanitizedSearch, mode: 'insensitive' } },
        { abbreviation: { contains: sanitizedSearch, mode: 'insensitive' } },
        { city: { contains: sanitizedSearch, mode: 'insensitive' } },
      ]
    }

    // Execute queries in parallel
    const [teams, totalCount] = await Promise.all([
      prisma.team.findMany({
        where,
        select: {
          id: true,
          name: true,
          abbreviation: true,
          city: true,
          conference: true,
          division: true,
          logoUrl: true,
          createdAt: true,
          updatedAt: true,
          _count: {
            select: {
              players: {
                where: {
                  isActive: true,
                  isDeleted: false,
                },
              },
              homeGames: {
                where: {
                  isDeleted: false,
                },
              },
              awayGames: {
                where: {
                  isDeleted: false,
                },
              },
            },
          },
        },
        orderBy: [
          { conference: 'asc' },
          { division: 'asc' },
          { name: 'asc' },
        ],
        skip: offset,
        take: limit,
      }),
      prisma.team.count({ where }),
    ])

    // Transform the data to include player and game counts
    const transformedTeams = teams.map(team => ({
      id: team.id,
      name: team.name,
      abbreviation: team.abbreviation,
      city: team.city,
      conference: team.conference,
      division: team.division,
      logoUrl: team.logoUrl,
      createdAt: team.createdAt,
      updatedAt: team.updatedAt,
      activePlayersCount: team._count.players,
      totalGamesCount: team._count.homeGames + team._count.awayGames,
    }))

    // Group teams by conference and division for easier frontend consumption
    const groupedTeams = transformedTeams.reduce((acc, team) => {
      const conference = team.conference || 'Other'
      const division = team.division || 'Other'
      
      if (!acc[conference]) {
        acc[conference] = {}
      }
      if (!acc[conference][division]) {
        acc[conference][division] = []
      }
      acc[conference][division].push(team)
      return acc
    }, {} as Record<string, Record<string, typeof transformedTeams>>)

    // Get unique conferences and divisions for filtering options
    const uniqueConferences = [...new Set(transformedTeams.map(team => team.conference).filter(Boolean))]
    const uniqueDivisions = [...new Set(transformedTeams.map(team => team.division).filter(Boolean))]

    return json({
      data: {
        teams: transformedTeams,
        groupedTeams,
        filterOptions: {
          conferences: uniqueConferences,
          divisions: uniqueDivisions,
        },
        meta: {
          total: totalCount,
          page,
          limit,
          totalPages: Math.ceil(totalCount / limit),
          hasNext: page < Math.ceil(totalCount / limit),
          hasPrev: page > 1,
        },
      },
    }, {
      headers: {
        'Cache-Control': 'public, max-age=300', // 5 minute cache
      },
    })
  } catch (error) {
    console.error('Error fetching teams:', error)
    return json({
      error: {
        code: 'TEAMS_FETCH_ERROR',
        message: 'Failed to fetch teams',
      },
    }, { status: 500 })
  }
} 