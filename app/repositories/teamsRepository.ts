/**
 * Teams Repository
 * Data access layer for team operations
 */

import type { PrismaClient } from '../../generated/client'
import type { Team } from '../models'

export class TeamsRepository {
  constructor(private prisma: PrismaClient) {}

  /**
   * Get all active teams
   */
  async getAllTeams(): Promise<Team[]> {
    const teams = await this.prisma.team.findMany({
      where: {
        isDeleted: false,
      },
      orderBy: [
        { conference: 'asc' },
        { division: 'asc' },
        { name: 'asc' },
      ],
    })

    return teams.map(this.toDomainModel)
  }

  /**
   * Get team by ID
   */
  async getTeamById(id: string): Promise<Team | null> {
    const team = await this.prisma.team.findUnique({
      where: {
        id,
        isDeleted: false,
      },
    })

    return team ? this.toDomainModel(team) : null
  }

  /**
   * Get teams by IDs
   */
  async getTeamsByIds(ids: string[]): Promise<Team[]> {
    const teams = await this.prisma.team.findMany({
      where: {
        id: { in: ids },
        isDeleted: false,
      },
      orderBy: { name: 'asc' },
    })

    return teams.map(this.toDomainModel)
  }

  /**
   * Get team by abbreviation
   */
  async getTeamByAbbreviation(abbreviation: string): Promise<Team | null> {
    const team = await this.prisma.team.findUnique({
      where: {
        abbreviation,
        isDeleted: false,
      },
    })

    return team ? this.toDomainModel(team) : null
  }

  /**
   * Get teams by conference
   */
  async getTeamsByConference(conference: string): Promise<Team[]> {
    const teams = await this.prisma.team.findMany({
      where: {
        conference,
        isDeleted: false,
      },
      orderBy: [
        { division: 'asc' },
        { name: 'asc' },
      ],
    })

    return teams.map(this.toDomainModel)
  }

  /**
   * Get teams by division
   */
  async getTeamsByDivision(conference: string, division: string): Promise<Team[]> {
    const teams = await this.prisma.team.findMany({
      where: {
        conference,
        division,
        isDeleted: false,
      },
      orderBy: { name: 'asc' },
    })

    return teams.map(this.toDomainModel)
  }

  /**
   * Search teams by name or city
   */
  async searchTeams(query: string): Promise<Team[]> {
    const teams = await this.prisma.team.findMany({
      where: {
        isDeleted: false,
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { city: { contains: query, mode: 'insensitive' } },
          { abbreviation: { contains: query, mode: 'insensitive' } },
        ],
      },
      orderBy: { name: 'asc' },
    })

    return teams.map(this.toDomainModel)
  }

  /**
   * Convert Prisma model to domain model
   */
  private toDomainModel(prismaTeam: any): Team {
    return {
      id: prismaTeam.id,
      name: prismaTeam.name,
      abbreviation: prismaTeam.abbreviation,
      city: prismaTeam.city,
      conference: prismaTeam.conference,
      division: prismaTeam.division,
      logoUrl: prismaTeam.logoUrl,
      createdAt: prismaTeam.createdAt,
      updatedAt: prismaTeam.updatedAt,
    }
  }
} 