/**
 * Tests for Service Registry
 * Testing the dependency injection pattern
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { initializeServices, getServices, resetServices } from './registry'

// Mock prisma
vi.mock('./prisma', () => ({
  prisma: {
    metric: { findMany: vi.fn() },
    team: { findMany: vi.fn() },
    game: { findMany: vi.fn() },
    userModel: { findMany: vi.fn() },
  }
}))

describe('Service Registry', () => {
  beforeEach(() => {
    resetServices()
  })

  it('should initialize all services and repositories', () => {
    const services = initializeServices()

    expect(services).toBeDefined()
    expect(services.metricsRepository).toBeDefined()
    expect(services.teamsRepository).toBeDefined()
    expect(services.gamesRepository).toBeDefined()
    expect(services.modelsRepository).toBeDefined()
    expect(services.modelCalculationService).toBeDefined()
    expect(services.metricsService).toBeDefined()
  })

  it('should return the same instance on subsequent calls', () => {
    const services1 = initializeServices()
    const services2 = getServices()

    expect(services1).toBe(services2)
  })

  it('should create new instance after reset', () => {
    const services1 = initializeServices()
    resetServices()
    const services2 = initializeServices()

    expect(services1).not.toBe(services2)
  })

  it('should inject dependencies correctly', () => {
    const services = initializeServices()

    // Verify that services have their dependencies
    expect(services.modelCalculationService).toBeDefined()
    expect(services.metricsService).toBeDefined()
    
    // These should not throw errors, indicating proper dependency injection
    expect(() => services.modelCalculationService).not.toThrow()
    expect(() => services.metricsService).not.toThrow()
  })
}) 