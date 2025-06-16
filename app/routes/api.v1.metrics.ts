/**
 * Metrics API Resource Route
 * GET /api/v1/metrics - Retrieve all active metrics with optional filtering
 */

import type { LoaderFunctionArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { prisma } from '~/utils/prisma'
import type { MetricCategory } from '~/models'

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const url = new URL(request.url)
    const category = url.searchParams.get('category') as MetricCategory | null
    const search = url.searchParams.get('search')
    const limit = Math.min(parseInt(url.searchParams.get('limit') || '50'), 100)
    const page = Math.max(parseInt(url.searchParams.get('page') || '1'), 1)
    const offset = (page - 1) * limit

    // Build where clause
    const where: any = {
      isActive: true,
      isDeleted: false,
    }

    if (category) {
      where.category = category
    }

    if (search) {
      where.OR = [
        { displayName: { contains: search, mode: 'insensitive' } },
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ]
    }

    // Execute queries in parallel
    const [metrics, totalCount] = await Promise.all([
      prisma.metric.findMany({
        where,
        select: {
          id: true,
          name: true,
          displayName: true,
          description: true,
          category: true,
          dataType: true,
          unit: true,
          isActive: true,
          createdAt: true,
          updatedAt: true,
        },
        orderBy: [
          { category: 'asc' },
          { displayName: 'asc' },
        ],
        skip: offset,
        take: limit,
      }),
      prisma.metric.count({ where }),
    ])

    // Group metrics by category for easier frontend consumption
    const groupedMetrics = metrics.reduce((acc, metric) => {
      const category = metric.category
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(metric)
      return acc
    }, {} as Record<string, typeof metrics>)

    return json({
      data: {
        metrics,
        groupedMetrics,
        meta: {
          total: totalCount,
          page,
          limit,
          totalPages: Math.ceil(totalCount / limit),
        },
      },
    }, {
      headers: {
        'Cache-Control': 'public, max-age=300', // 5 minute cache
      },
    })
  } catch (error) {
    console.error('Error fetching metrics:', error)
    return json({
      error: {
        code: 'METRICS_FETCH_ERROR',
        message: 'Failed to fetch metrics',
      },
    }, { status: 500 })
  }
} 