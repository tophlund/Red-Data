/**
 * Model Canvas Component
 * Drag-and-drop area for building models with selected metrics
 */

import React from 'react'
import { MetricCard } from './MetricCard'
import { useBuilderStore } from '~/stores/builderStore'
import type { Metric } from '~/models'

interface ModelCanvasProps {
  className?: string
}

export function ModelCanvas({ className = '' }: ModelCanvasProps) {
  const {
    selectedMetrics,
    modelName,
    modelDescription,
    removeMetric,
    updateMetricWeight,
    setModelName,
    setModelDescription,
  } = useBuilderStore()

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    try {
      const metricData = e.dataTransfer.getData('application/json')
      const metric: Metric = JSON.parse(metricData)
      
      // The metric will be added via the store's addMetric method
      // which is called from the MetricCard's onSelect handler
    } catch (error) {
      console.error('Error handling dropped metric:', error)
    }
  }

  const totalWeight = selectedMetrics.reduce((sum, metric) => sum + metric.weight, 0)

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Model Header */}
      <div className="card p-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="model-name" className="block text-sm font-medium text-gray-700 mb-1">
              Model Name *
            </label>
            <input
              id="model-name"
              type="text"
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
              placeholder="Enter model name..."
              className="input-field"
              required
              aria-describedby="model-name-help"
            />
            <p id="model-name-help" className="mt-1 text-xs text-gray-500">
              Give your model a descriptive name
            </p>
          </div>
          
          <div>
            <label htmlFor="model-description" className="block text-sm font-medium text-gray-700 mb-1">
              Description (optional)
            </label>
            <textarea
              id="model-description"
              value={modelDescription}
              onChange={(e) => setModelDescription(e.target.value)}
              placeholder="Describe what your model predicts..."
              rows={3}
              className="input-field resize-none"
              aria-describedby="model-description-help"
            />
            <p id="model-description-help" className="mt-1 text-xs text-gray-500">
              Explain the purpose and methodology of your model
            </p>
          </div>
        </div>
      </div>

      {/* Drop Zone */}
      <div
        className={`card p-8 border-2 border-dashed transition-colors ${
          selectedMetrics.length === 0
            ? 'border-gray-300 bg-gray-50'
            : 'border-primary-300 bg-primary-50'
        }`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        role="region"
        aria-label="Model building canvas"
      >
        {selectedMetrics.length === 0 ? (
          <div className="text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Start building your model</h3>
            <p className="mt-1 text-sm text-gray-500">
              Drag metrics from the browser or click to select them
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">
                Selected Metrics ({selectedMetrics.length})
              </h3>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  Total Weight: {totalWeight.toFixed(1)}
                </span>
                {totalWeight !== selectedMetrics.length && (
                  <span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded">
                    ⚠️ Weights don't equal metric count
                  </span>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedMetrics.map(metric => (
                <MetricCard
                  key={metric.id}
                  metric={metric}
                  isSelected={true}
                  weight={metric.weight}
                  onRemove={removeMetric}
                  onWeightChange={updateMetricWeight}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Model Summary */}
      {selectedMetrics.length > 0 && (
        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Model Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total Metrics:</span>
              <span className="font-medium">{selectedMetrics.length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Combined Weight:</span>
              <span className="font-medium">{totalWeight.toFixed(1)}</span>
            </div>
            <div className="pt-3 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Weight Distribution:</h4>
              <div className="space-y-2">
                {selectedMetrics.map(metric => {
                  const percentage = totalWeight > 0 ? (metric.weight / totalWeight) * 100 : 0
                  return (
                    <div key={metric.id} className="flex items-center justify-between text-xs">
                      <span className="text-gray-600 truncate flex-1 mr-2">
                        {metric.displayName}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-primary-600 h-1.5 rounded-full transition-all"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-gray-900 font-medium w-10 text-right">
                          {percentage.toFixed(0)}%
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 