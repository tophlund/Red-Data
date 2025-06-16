import { json, type LoaderFunction } from '@remix-run/node'
import { prisma } from '~/utils/prisma'

/**
 * Health check endpoint - GET /api/health
 * Returns service status and database connectivity
 */
export const loader: LoaderFunction = async () => {
  try {
    // Test database connection by running a simple query
    await prisma.$queryRaw`SELECT 1 as test`
    
    return json({
      data: {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        database: 'connected',
        environment: process.env.NODE_ENV || 'unknown'
      }
    }, {
      status: 200,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  } catch (error) {
    console.error('Health check failed:', error)
    
    return json({
      error: {
        code: 'HEALTH_CHECK_FAILED',
        message: 'Service unhealthy - database connection failed'
      }
    }, {
      status: 503,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache', 
        'Expires': '0'
      }
    })
  }
} 