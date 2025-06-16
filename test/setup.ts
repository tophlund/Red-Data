/**
 * Vitest setup file
 * This file runs before all tests and sets up the testing environment
 */

import { vi } from 'vitest'

// Mock environment variables for testing
vi.mock('process.env', () => ({
  NODE_ENV: 'test',
  DATABASE_URL: 'postgresql://test:test@localhost:5432/test_db'
}))

// Mock Prisma client for unit tests
vi.mock('~/utils/prisma', () => ({
  prisma: {
    $connect: vi.fn(),
    $disconnect: vi.fn(),
    $queryRaw: vi.fn(),
    user: {
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn()
    },
    userModel: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn()
    }
  }
}))

// Mock console to reduce test noise (optional)
global.console = {
  ...console,
  // Suppress console.log in tests but keep errors
  log: vi.fn(),
  debug: vi.fn(),
  info: vi.fn(),
  warn: console.warn,
  error: console.error
} 