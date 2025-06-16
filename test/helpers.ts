/**
 * Test helper utilities for common testing patterns
 * These utilities help reduce code duplication across tests
 */

import { vi, expect } from 'vitest'

/**
 * Mock user data for testing
 */
export const mockUser = {
  id: 'test-user-id',
  email: 'test@example.com'
}

/**
 * Mock model data for testing
 */
export const mockModel = {
  id: 'test-model-id',
  name: 'Test Model',
  definition: {
    metrics: ['metric1', 'metric2'],
    weights: [0.6, 0.4]
  },
  userId: mockUser.id,
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01')
}

/**
 * Creates a mock Request object for testing Remix loaders and actions
 * @param options - Request configuration options
 * @returns Mock Request object
 */
export function createMockRequest(options: {
  method?: string
  url?: string
  headers?: Record<string, string>
  body?: any
} = {}): Request {
  const {
    method = 'GET',
    url = 'http://localhost:3000/test',
    headers = {},
    body
  } = options

  const init: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  }

  if (body && method !== 'GET') {
    init.body = typeof body === 'string' ? body : JSON.stringify(body)
  }

  return new Request(url, init)
}

/**
 * Creates a mock FormData object for testing form submissions
 * @param data - Key-value pairs for form data
 * @returns FormData object
 */
export function createMockFormData(data: Record<string, string>): FormData {
  const formData = new FormData()
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value)
  })
  return formData
}

/**
 * Helper to mock Prisma database operations
 * @param operations - Object containing mocked operations
 */
export function mockPrismaOperations(operations: Record<string, any> = {}) {
  const defaultMocks = {
    findUnique: vi.fn(),
    findMany: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
    $queryRaw: vi.fn()
  }

  return {
    ...defaultMocks,
    ...operations
  }
}

/**
 * Helper to create a mock loader context for Remix
 * @param request - Mock request object
 * @returns Loader context object
 */
export function createMockLoaderContext(request: Request) {
  return {
    request,
    params: {},
    context: {}
  }
}

/**
 * Helper to create a mock action context for Remix
 * @param request - Mock request object
 * @returns Action context object
 */
export function createMockActionContext(request: Request) {
  return {
    request,
    params: {},
    context: {}
  }
}

/**
 * Utility to wait for async operations in tests
 * @param ms - Milliseconds to wait
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Helper to mock environment variables for testing
 * @param vars - Environment variables to mock
 */
export function mockEnvironmentVariables(vars: Record<string, string>) {
  Object.entries(vars).forEach(([key, value]) => {
    vi.stubEnv(key, value)
  })
}

/**
 * Helper to assert that a function throws a specific error
 * @param fn - Function to test
 * @param errorMessage - Expected error message or pattern
 */
export async function expectToThrow(
  fn: () => Promise<any> | any,
  errorMessage?: string | RegExp
) {
  try {
    await fn()
    throw new Error('Expected function to throw but it did not')
  } catch (error) {
    if (errorMessage) {
      if (typeof errorMessage === 'string') {
        expect((error as Error).message).toBe(errorMessage)
      } else {
        expect((error as Error).message).toMatch(errorMessage)
      }
    }
    // If no specific error message expected, just expect it to throw
  }
} 