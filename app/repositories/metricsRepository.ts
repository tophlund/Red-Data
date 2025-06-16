/**
 * Metrics Repository
 * Data access layer for metric operations
 */

import type { PrismaClient } from '../../generated/client'
import type { Metric, MetricCategory } from '../models'

export class MetricsRepository {
  constructor(private prisma: PrismaClient) {}

  /**
   * Get all active metrics
   */
  async getActiveMetrics(): Promise<Metric[]> {
    const metrics = await this.prisma.metric.findMany({
      where: {
        isActive: true,
        isDeleted: false,
      },
      orderBy: [
        { category: 'asc' },
        { displayName: 'asc' },
      ],
    })

    return metrics.map(this.toDomainModel)
  }

  /**
   * Get metrics by category
   */
  async getMetricsByCategory(category: MetricCategory): Promise<Metric[]> {
    const metrics = await this.prisma.metric.findMany({
      where: {
        category,
        isActive: true,
        isDeleted: false,
      },
      orderBy: { displayName: 'asc' },
    })

    return metrics.map(this.toDomainModel)
  }

  /**
   * Get metric by ID
   */
  async getMetricById(id: string): Promise<Metric | null> {
    const metric = await this.prisma.metric.findUnique({
      where: {
        id,
        isActive: true,
        isDeleted: false,
      },
    })

    return metric ? this.toDomainModel(metric) : null
  }

  /**
   * Get metrics by IDs
   */
  async getMetricsByIds(ids: string[]): Promise<Metric[]> {
    const metrics = await this.prisma.metric.findMany({
      where: {
        id: { in: ids },
        isActive: true,
        isDeleted: false,
      },
      orderBy: { displayName: 'asc' },
    })

    return metrics.map(this.toDomainModel)
  }

  /**
   * Search metrics by name or description
   */
  async searchMetrics(query: string): Promise<Metric[]> {
    const metrics = await this.prisma.metric.findMany({
      where: {
        isActive: true,
        isDeleted: false,
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { displayName: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
        ],
      },
      orderBy: { displayName: 'asc' },
    })

    return metrics.map(this.toDomainModel)
  }

  /**
   * Get metric values for teams
   * Uses realistic metric data for validation and testing
   */
  async getMetricValuesForTeams(metricIds: string[], teamIds: string[]): Promise<Record<string, Record<string, number>>> {
    const result: Record<string, Record<string, number>> = {}
    
    try {
      // Try to load realistic metric data
      const fs = require('fs')
      const path = require('path')
      const dataFilePath = path.join(process.cwd(), 'app', 'data', 'teamMetricValues.json')
      
      let realisticData: Record<string, Record<string, number>> = {}
      if (fs.existsSync(dataFilePath)) {
        const fileContent = fs.readFileSync(dataFilePath, 'utf8')
        realisticData = JSON.parse(fileContent)
      }
      
      for (const teamId of teamIds) {
        result[teamId] = {}
        
        for (const metricId of metricIds) {
          // Use realistic data if available, otherwise generate sample value
          if (realisticData[teamId] && realisticData[teamId][metricId] !== undefined) {
            result[teamId][metricId] = realisticData[teamId][metricId]
          } else {
            // Fallback to generated sample value
            result[teamId][metricId] = this.generateSampleValue(metricId)
          }
        }
      }
    } catch (error) {
      console.warn('Could not load realistic metric data, using generated values:', error)
      
      // Fallback to generated sample data
      for (const teamId of teamIds) {
        result[teamId] = {}
        for (const metricId of metricIds) {
          result[teamId][metricId] = this.generateSampleValue(metricId)
        }
      }
    }

    return result
  }

  /**
   * Convert Prisma model to domain model
   */
  private toDomainModel(prismaMetric: any): Metric {
    return {
      id: prismaMetric.id,
      name: prismaMetric.name,
      displayName: prismaMetric.displayName,
      description: prismaMetric.description,
      category: prismaMetric.category,
      dataType: prismaMetric.dataType,
      unit: prismaMetric.unit,
      isActive: prismaMetric.isActive,
      createdAt: prismaMetric.createdAt,
      updatedAt: prismaMetric.updatedAt,
    }
  }

  /**
   * Generate sample metric values
   * TODO: Replace with actual metric calculation logic
   */
  private generateSampleValue(metricId: string): number {
    // Simple random generation for demonstration
    // In real implementation, this would calculate from game data
    const baseValue = Math.random() * 100
    return Math.round(baseValue * 100) / 100
  }
} 