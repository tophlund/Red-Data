/**
 * Metric Card Component
 * Displays individual metrics with drag-and-drop capabilities and accessibility features
 */

import React from 'react'
import type { Metric } from '~/models'

interface MetricCardProps {
  metric: Metric
  isSelected?: boolean
  weight?: number
  onSelect?: (metric: Metric) => void
  onRemove?: (metricId: string) => void
  onWeightChange?: (metricId: string, weight: number) => void
  draggable?: boolean
  className?: string
}

export function MetricCard({
  metric,
  isSelected = false,
  weight = 1.0,
  onSelect,
  onRemove,
  onWeightChange,
  draggable = false,
  className = '',
}: MetricCardProps) {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('application/json', JSON.stringify(metric))
    e.dataTransfer.effectAllowed = 'copy'
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (isSelected && onRemove) {
        onRemove(metric.id)
      } else if (onSelect) {
        onSelect(metric)
      }
    }
  }

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWeight = parseFloat(e.target.value) || 0
    if (onWeightChange) {
      onWeightChange(metric.id, newWeight)
    }
  }

  return (
    <div
      className={`card p-4 transition-all duration-200 ${
        isSelected
          ? 'ring-2 ring-primary-500 bg-primary-50'
          : 'hover:shadow-md hover:border-gray-300 cursor-pointer'
      } ${className}`}
      draggable={draggable}
      onDragStart={handleDragStart}
      onClick={() => !isSelected && onSelect && onSelect(metric)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${metric.displayName} metric. ${
        isSelected ? 'Selected' : 'Click to select'
      }`}
      aria-pressed={isSelected}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-sm font-medium text-gray-900 truncate">
              {metric.displayName}
            </h3>
            <span
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryBadgeStyles(
                metric.category
              )}`}
              aria-label={`Category: ${metric.category}`}
            >
              {metric.category}
            </span>
          </div>
          
          {metric.description && (
            <p className="text-xs text-gray-600 mb-2 line-clamp-2">
              {metric.description}
            </p>
          )}
          
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>Type: {metric.dataType}</span>
            {metric.unit && <span>Unit: {metric.unit}</span>}
          </div>
        </div>
        
        {isSelected && onRemove && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onRemove(metric.id)
            }}
            className="ml-2 p-1 text-gray-400 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
            aria-label={`Remove ${metric.displayName} from model`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      
      {isSelected && onWeightChange && (
        <div className="mt-3 pt-3 border-t border-gray-200">
          <label htmlFor={`weight-${metric.id}`} className="block text-xs font-medium text-gray-700 mb-1">
            Weight
          </label>
          <input
            id={`weight-${metric.id}`}
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={weight}
            onChange={handleWeightChange}
            onClick={(e) => e.stopPropagation()}
            className="input-field text-sm w-20"
            aria-describedby={`weight-help-${metric.id}`}
          />
          <p id={`weight-help-${metric.id}`} className="sr-only">
            Adjust the weight for {metric.displayName} in your model. Higher weights give more importance to this metric.
          </p>
        </div>
      )}
    </div>
  )
}

function getCategoryBadgeStyles(category: string): string {
  switch (category) {
    case 'PLAYER':
      return 'bg-blue-100 text-blue-800'
    case 'TEAM':
      return 'bg-green-100 text-green-800'
    case 'POSITION':
      return 'bg-purple-100 text-purple-800'
    case 'REF':
      return 'bg-yellow-100 text-yellow-800'
    case 'PLAYBOOK':
      return 'bg-orange-100 text-orange-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
} 