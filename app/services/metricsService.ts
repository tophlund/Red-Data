/**
 * Metrics Service
 * Business logic layer for metric processing and operations
 */

import type { MetricsRepository } from '../repositories/metricsRepository'
import type { Metric } from '../models'
import { MetricCategory } from '../models'

export interface MetricSearchFilters {
  category?: MetricCategory
  query?: string
  isActive?: boolean
}

export interface MetricValidationResult {
  isValid: boolean
  errors: string[]
  warnings: string[]
}

export class MetricsService {
  constructor(private metricsRepository: MetricsRepository) {}

  /**
   * Get all active metrics with optional filtering
   */
  async getMetrics(filters?: MetricSearchFilters): Promise<Metric[]> {
    if (!filters) {
      return this.metricsRepository.getActiveMetrics()
    }

    if (filters.query) {
      const searchResults = await this.metricsRepository.searchMetrics(filters.query)
      if (filters.category) {
        return searchResults.filter(metric => metric.category === filters.category)
      }
      return searchResults
    }

    if (filters.category) {
      return this.metricsRepository.getMetricsByCategory(filters.category)
    }

    return this.metricsRepository.getActiveMetrics()
  }

  /**
   * Get metric by ID with validation
   */
  async getMetricById(id: string): Promise<Metric | null> {
    if (!id || typeof id !== 'string') {
      return null
    }

    return this.metricsRepository.getMetricById(id)
  }

  /**
   * Get multiple metrics by IDs
   */
  async getMetricsByIds(ids: string[]): Promise<Metric[]> {
    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return []
    }

    // Filter out invalid IDs
    const validIds = ids.filter(id => id && typeof id === 'string')
    
    if (validIds.length === 0) {
      return []
    }

    return this.metricsRepository.getMetricsByIds(validIds)
  }

  /**
   * Search metrics with advanced filtering
   */
  async searchMetrics(query: string, filters?: Omit<MetricSearchFilters, 'query'>): Promise<Metric[]> {
    if (!query || typeof query !== 'string' || query.trim().length === 0) {
      return this.getMetrics(filters)
    }

    const searchResults = await this.metricsRepository.searchMetrics(query.trim())
    
    if (filters?.category) {
      return searchResults.filter(metric => metric.category === filters.category)
    }

    return searchResults
  }

  /**
   * Get metrics grouped by category
   */
  async getMetricsByCategory(): Promise<Record<MetricCategory, Metric[]>> {
    const allMetrics = await this.metricsRepository.getActiveMetrics()
    
    const categorizedMetrics: Record<MetricCategory, Metric[]> = {
      [MetricCategory.PLAYER]: [],
      [MetricCategory.TEAM]: [],
      [MetricCategory.POSITION]: [],
      [MetricCategory.REF]: [],
      [MetricCategory.PLAYBOOK]: [],
    }

    allMetrics.forEach(metric => {
      if (categorizedMetrics[metric.category]) {
        categorizedMetrics[metric.category].push(metric)
      }
    })

    return categorizedMetrics
  }

  /**
   * Validate metric selection for model building
   */
  async validateMetricSelection(metricIds: string[]): Promise<MetricValidationResult> {
    const errors: string[] = []
    const warnings: string[] = []

    if (!metricIds || !Array.isArray(metricIds)) {
      errors.push('Metric selection must be an array')
      return { isValid: false, errors, warnings }
    }

    if (metricIds.length === 0) {
      errors.push('At least one metric must be selected')
      return { isValid: false, errors, warnings }
    }

    // Check for duplicates
    const uniqueIds = new Set(metricIds)
    if (uniqueIds.size !== metricIds.length) {
      errors.push('Duplicate metrics detected')
    }

    // Validate metric existence
    const metrics = await this.metricsRepository.getMetricsByIds(metricIds)
    const foundIds = new Set(metrics.map(m => m.id))
    
    const missingIds = metricIds.filter(id => !foundIds.has(id))
    if (missingIds.length > 0) {
      errors.push(`Metrics not found: ${missingIds.join(', ')}`)
    }

    // Generate warnings based on selection
    if (metrics.length === 1) {
      warnings.push('Consider adding more metrics for a more robust model')
    }

    if (metrics.length > 15) {
      warnings.push('Too many metrics may lead to overfitting')
    }

    // Check category distribution
    const categories = new Set(metrics.map(m => m.category))
    if (categories.size === 1 && metrics.length > 1) {
      warnings.push('Consider adding metrics from different categories for better balance')
    }

    // Check for essential categories
    const hasTeamMetrics = metrics.some(m => m.category === MetricCategory.TEAM)
    const hasPlayerMetrics = metrics.some(m => m.category === MetricCategory.PLAYER)
    
    if (!hasTeamMetrics && metrics.length > 3) {
      warnings.push('Consider adding team-level metrics for comprehensive analysis')
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    }
  }

  /**
   * Get metric recommendations based on selection
   */
  async getMetricRecommendations(selectedMetricIds: string[]): Promise<Metric[]> {
    const selectedMetrics = await this.metricsRepository.getMetricsByIds(selectedMetricIds)
    const allMetrics = await this.metricsRepository.getActiveMetrics()
    
    // Simple recommendation logic - in a real system this would be more sophisticated
    const selectedCategories = new Set(selectedMetrics.map(m => m.category))
    const recommendations: Metric[] = []
    
    // Recommend metrics from underrepresented categories
    const categoryPriority: MetricCategory[] = [
      MetricCategory.TEAM, 
      MetricCategory.PLAYER, 
      MetricCategory.POSITION, 
      MetricCategory.REF, 
      MetricCategory.PLAYBOOK
    ]
    
    for (const category of categoryPriority) {
      if (!selectedCategories.has(category)) {
        const categoryMetrics = allMetrics
          .filter(m => m.category === category)
          .filter(m => !selectedMetricIds.includes(m.id))
          .slice(0, 2) // Limit recommendations per category
        
        recommendations.push(...categoryMetrics)
      }
    }

    // Limit total recommendations
    return recommendations.slice(0, 5)
  }

  /**
   * Get metric statistics and insights
   */
  async getMetricInsights(): Promise<{
    totalMetrics: number
    byCategory: Record<MetricCategory, number>
    mostUsedDataType: string
    availableUnits: string[]
  }> {
    const allMetrics = await this.metricsRepository.getActiveMetrics()
    
    const byCategory: Record<MetricCategory, number> = {
      [MetricCategory.PLAYER]: 0,
      [MetricCategory.TEAM]: 0,
      [MetricCategory.POSITION]: 0,
      [MetricCategory.REF]: 0,
      [MetricCategory.PLAYBOOK]: 0,
    }

    const dataTypeCounts: Record<string, number> = {}
    const units = new Set<string>()

    allMetrics.forEach(metric => {
      byCategory[metric.category]++
      
      dataTypeCounts[metric.dataType] = (dataTypeCounts[metric.dataType] || 0) + 1
      
      if (metric.unit) {
        units.add(metric.unit)
      }
    })

    const mostUsedDataType = Object.entries(dataTypeCounts)
      .sort(([,a], [,b]) => b - a)[0]?.[0] || 'number'

    return {
      totalMetrics: allMetrics.length,
      byCategory,
      mostUsedDataType,
      availableUnits: Array.from(units).sort(),
    }
  }

  /**
   * Format metric value for display
   */
  formatMetricValue(metric: Metric, value: number): string {
    if (value === undefined || value === null || isNaN(value)) {
      return 'N/A'
    }

    switch (metric.dataType) {
      case 'percentage':
        return `${Math.round(value * 100) / 100}%`
      case 'boolean':
        return value ? 'Yes' : 'No'
      default:
        const formattedValue = Math.round(value * 100) / 100
        return metric.unit ? `${formattedValue} ${metric.unit}` : formattedValue.toString()
    }
  }

  /**
   * Get compatible metrics for comparison
   * Returns metrics that can be meaningfully compared with the given metric
   */
  async getCompatibleMetrics(metricId: string): Promise<Metric[]> {
    const targetMetric = await this.metricsRepository.getMetricById(metricId)
    if (!targetMetric) {
      return []
    }

    const allMetrics = await this.metricsRepository.getActiveMetrics()
    
    return allMetrics.filter(metric => 
      metric.id !== targetMetric.id &&
      (metric.category === targetMetric.category || 
       metric.dataType === targetMetric.dataType ||
       metric.unit === targetMetric.unit)
    )
  }
} 