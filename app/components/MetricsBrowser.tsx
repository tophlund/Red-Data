/**
 * Metrics Browser Component
 * Provides search, filtering, and browsing capabilities for metrics
 */

import React, { useMemo } from 'react'
import { MetricCard } from './MetricCard'
import { useBuilderStore } from '~/stores/builderStore'
import type { Metric, MetricCategory } from '~/models'

interface MetricsBrowserProps {
  metrics: Metric[]
  loading?: boolean
  onMetricSelect?: (metric: Metric) => void
  className?: string
}

const CATEGORY_LABELS: Record<MetricCategory, string> = {
  PLAYER: 'Player Metrics',
  TEAM: 'Team Metrics',
  POSITION: 'Position Group',
  REF: 'Referee/Game Control',
  PLAYBOOK: 'Situational/Environmental',
}

export function MetricsBrowser({
  metrics,
  loading = false,
  onMetricSelect,
  className = '',
}: MetricsBrowserProps) {
  const {
    searchTerm,
    activeCategory,
    selectedMetrics,
    setSearchTerm,
    setActiveCategory,
    addMetric,
  } = useBuilderStore()

  // Filter metrics based on search and category
  const filteredMetrics = useMemo(() => {
    let filtered = metrics

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(
        metric =>
          metric.displayName.toLowerCase().includes(searchLower) ||
          metric.name.toLowerCase().includes(searchLower) ||
          metric.description?.toLowerCase().includes(searchLower)
      )
    }

    // Filter by category
    if (activeCategory) {
      filtered = filtered.filter(metric => metric.category === activeCategory)
    }

    return filtered
  }, [metrics, searchTerm, activeCategory])

  // Group metrics by category
  const groupedMetrics = useMemo(() => {
    return filteredMetrics.reduce((acc, metric) => {
      const category = metric.category
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(metric)
      return acc
    }, {} as Record<MetricCategory, Metric[]>)
  }, [filteredMetrics])

  const handleMetricSelect = (metric: Metric) => {
    addMetric(metric)
    onMetricSelect?.(metric)
  }

  const isMetricSelected = (metricId: string) => {
    return selectedMetrics.some(m => m.id === metricId)
  }

  const categories = Object.keys(CATEGORY_LABELS) as MetricCategory[]

  if (loading) {
    return (
      <div className={`space-y-4 ${className}`}>
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          <span className="ml-2 text-gray-600">Loading metrics...</span>
        </div>
      </div>
    )
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Search and Filter Controls */}
      <div className="space-y-4">
        <div>
          <label htmlFor="metric-search" className="sr-only">
            Search metrics
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              id="metric-search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search metrics..."
              className="input-field pl-10"
              aria-describedby="search-help"
            />
          </div>
          <p id="search-help" className="sr-only">
            Search through available metrics by name or description
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Metric categories">
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeCategory === null
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              aria-pressed={activeCategory === null}
            >
              All Categories ({metrics.length})
            </button>
            {categories.map(category => {
              const count = metrics.filter(m => m.category === category).length
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeCategory === category
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  aria-pressed={activeCategory === category}
                >
                  {CATEGORY_LABELS[category]} ({count})
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {filteredMetrics.length} metric{filteredMetrics.length !== 1 ? 's' : ''} found
          {searchTerm && ` for "${searchTerm}"`}
          {activeCategory && ` in ${CATEGORY_LABELS[activeCategory]}`}
        </p>
        {(searchTerm || activeCategory) && (
          <button
            type="button"
            onClick={() => {
              setSearchTerm('')
              setActiveCategory(null)
            }}
            className="text-sm text-primary-600 hover:text-primary-700 focus:outline-none focus:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Metrics Grid */}
      {filteredMetrics.length === 0 ? (
        <div className="text-center py-8">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No metrics found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search terms or category filter.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {(Object.entries(groupedMetrics) as [MetricCategory, Metric[]][]).map(([category, categoryMetrics]) => (
            <div key={category}>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                {CATEGORY_LABELS[category]}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryMetrics.map(metric => (
                  <MetricCard
                    key={metric.id}
                    metric={metric}
                    isSelected={isMetricSelected(metric.id)}
                    onSelect={handleMetricSelect}
                    draggable={true}
                    className={isMetricSelected(metric.id) ? 'opacity-50' : ''}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 