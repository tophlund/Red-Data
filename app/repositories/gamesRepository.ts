/**
 * Games Repository
 * Data access layer for game operations
 */

import type { PrismaClient } from '../../generated/client'
import type { Game, GameStatus } from '../models'

export class GamesRepository {
  constructor(private prisma: PrismaClient) {}

  /**
   * Get all games
   */
  async getAllGames(): Promise<Game[]> {
    const games = await this.prisma.game.findMany({
      where: {
        isDeleted: false,
      },
      include: {
        homeTeam: true,
        awayTeam: true,
        referee: true,
      },
      orderBy: { gameDate: 'desc' },
    })

    return games.map(this.toDomainModel)
  }

  /**
   * Get game by ID
   */
  async getGameById(id: string): Promise<Game | null> {
    const game = await this.prisma.game.findUnique({
      where: {
        id,
        isDeleted: false,
      },
      include: {
        homeTeam: true,
        awayTeam: true,
        referee: true,
      },
    })

    return game ? this.toDomainModel(game) : null
  }

  /**
   * Get games by team
   */
  async getGamesByTeam(teamId: string): Promise<Game[]> {
    const games = await this.prisma.game.findMany({
      where: {
        isDeleted: false,
        OR: [
          { homeTeamId: teamId },
          { awayTeamId: teamId },
        ],
      },
      include: {
        homeTeam: true,
        awayTeam: true,
        referee: true,
      },
      orderBy: { gameDate: 'desc' },
    })

    return games.map(this.toDomainModel)
  }

  /**
   * Get games by season
   */
  async getGamesBySeason(season: number): Promise<Game[]> {
    const games = await this.prisma.game.findMany({
      where: {
        season,
        isDeleted: false,
      },
      include: {
        homeTeam: true,
        awayTeam: true,
        referee: true,
      },
      orderBy: [
        { week: 'asc' },
        { gameDate: 'asc' },
      ],
    })

    return games.map(this.toDomainModel)
  }

  /**
   * Get games by status
   */
  async getGamesByStatus(status: GameStatus): Promise<Game[]> {
    const games = await this.prisma.game.findMany({
      where: {
        status,
        isDeleted: false,
      },
      include: {
        homeTeam: true,
        awayTeam: true,
        referee: true,
      },
      orderBy: { gameDate: 'desc' },
    })

    return games.map(this.toDomainModel)
  }

  /**
   * Get completed games between two teams
   */
  async getHeadToHeadGames(teamAId: string, teamBId: string): Promise<Game[]> {
    const games = await this.prisma.game.findMany({
      where: {
        isDeleted: false,
        status: 'COMPLETED',
        OR: [
          { homeTeamId: teamAId, awayTeamId: teamBId },
          { homeTeamId: teamBId, awayTeamId: teamAId },
        ],
      },
      include: {
        homeTeam: true,
        awayTeam: true,
        referee: true,
      },
      orderBy: { gameDate: 'desc' },
    })

    return games.map(this.toDomainModel)
  }

  /**
   * Get recent games for statistical analysis
   */
  async getRecentGames(teamId: string, limit: number = 10): Promise<Game[]> {
    const games = await this.prisma.game.findMany({
      where: {
        isDeleted: false,
        status: 'COMPLETED',
        OR: [
          { homeTeamId: teamId },
          { awayTeamId: teamId },
        ],
      },
      include: {
        homeTeam: true,
        awayTeam: true,
        referee: true,
      },
      orderBy: { gameDate: 'desc' },
      take: limit,
    })

    return games.map(this.toDomainModel)
  }

  /**
   * Convert Prisma model to domain model
   */
  private toDomainModel(prismaGame: any): Game {
    return {
      id: prismaGame.id,
      gameDate: prismaGame.gameDate,
      week: prismaGame.week,
      season: prismaGame.season,
      homeTeamId: prismaGame.homeTeamId,
      awayTeamId: prismaGame.awayTeamId,
      refereeId: prismaGame.refereeId,
      homeScore: prismaGame.homeScore,
      awayScore: prismaGame.awayScore,
      status: prismaGame.status,
      venue: prismaGame.venue,
      temperature: prismaGame.temperature,
      weather: prismaGame.weather,
      attendance: prismaGame.attendance,
      createdAt: prismaGame.createdAt,
      updatedAt: prismaGame.updatedAt,
      homeTeam: prismaGame.homeTeam ? {
        id: prismaGame.homeTeam.id,
        name: prismaGame.homeTeam.name,
        abbreviation: prismaGame.homeTeam.abbreviation,
        city: prismaGame.homeTeam.city,
        conference: prismaGame.homeTeam.conference,
        division: prismaGame.homeTeam.division,
        logoUrl: prismaGame.homeTeam.logoUrl,
        createdAt: prismaGame.homeTeam.createdAt,
        updatedAt: prismaGame.homeTeam.updatedAt,
      } : undefined,
      awayTeam: prismaGame.awayTeam ? {
        id: prismaGame.awayTeam.id,
        name: prismaGame.awayTeam.name,
        abbreviation: prismaGame.awayTeam.abbreviation,
        city: prismaGame.awayTeam.city,
        conference: prismaGame.awayTeam.conference,
        division: prismaGame.awayTeam.division,
        logoUrl: prismaGame.awayTeam.logoUrl,
        createdAt: prismaGame.awayTeam.createdAt,
        updatedAt: prismaGame.awayTeam.updatedAt,
      } : undefined,
      referee: prismaGame.referee ? {
        id: prismaGame.referee.id,
        name: prismaGame.referee.name,
        number: prismaGame.referee.number,
        position: prismaGame.referee.position,
        yearsExp: prismaGame.referee.yearsExp,
        createdAt: prismaGame.referee.createdAt,
        updatedAt: prismaGame.referee.updatedAt,
      } : undefined,
    }
  }
} 