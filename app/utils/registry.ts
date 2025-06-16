/**
 * Service Registry for Dependency Injection
 * Manages service instances and their dependencies
 */

import { prisma } from './prisma'
import { MetricsRepository } from '../repositories/metricsRepository'
import { TeamsRepository } from '../repositories/teamsRepository'
import { GamesRepository } from '../repositories/gamesRepository'
import { ModelsRepository } from '../repositories/modelsRepository'
import { ModelCalculationService } from '../services/modelCalculationService'
import { MetricsService } from '../services/metricsService'

export interface ServiceRegistry {
  // Repositories
  metricsRepository: MetricsRepository
  teamsRepository: TeamsRepository
  gamesRepository: GamesRepository
  modelsRepository: ModelsRepository
  
  // Services
  modelCalculationService: ModelCalculationService
  metricsService: MetricsService
}

let registry: ServiceRegistry | null = null

/**
 * Initialize service registry with dependencies
 */
export function initializeServices(): ServiceRegistry {
  if (registry) {
    return registry
  }

  // Initialize repositories
  const metricsRepository = new MetricsRepository(prisma)
  const teamsRepository = new TeamsRepository(prisma)
  const gamesRepository = new GamesRepository(prisma)
  const modelsRepository = new ModelsRepository(prisma)

  // Initialize services with dependencies
  const metricsService = new MetricsService(metricsRepository)
  const modelCalculationService = new ModelCalculationService(
    metricsRepository,
    teamsRepository,
    gamesRepository
  )

  registry = {
    metricsRepository,
    teamsRepository,
    gamesRepository,
    modelsRepository,
    modelCalculationService,
    metricsService,
  }

  return registry
}

/**
 * Get service registry instance
 */
export function getServices(): ServiceRegistry {
  if (!registry) {
    return initializeServices()
  }
  return registry
}

/**
 * Reset registry (primarily for testing)
 */
export function resetServices(): void {
  registry = null
} 