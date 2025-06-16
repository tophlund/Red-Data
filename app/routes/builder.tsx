/**
 * Visual Builder Route
 * Main interface for constructing sports analytics models
 */

import React, { useEffect } from 'react'
import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData, useNavigate, Link, useFetcher } from '@remix-run/react'
import { MetricsBrowser } from '~/components/MetricsBrowser'
import { ModelCanvas } from '~/components/ModelCanvas'
import { ModelPreview } from '~/components/ModelPreview'
import { useBuilderStore } from '~/stores/builderStore'
import type { Metric } from '~/models'

export const meta: MetaFunction = () => [
  { title: 'Model Builder - Red Data' },
  { name: 'description', content: 'Build custom sports analytics models with AI-powered insights' },
]

// Serialized version for loader data
interface SerializedMetric extends Omit<Metric, 'createdAt' | 'updatedAt'> {
  createdAt: string
  updatedAt: string
}

interface LoaderData {
  metrics: SerializedMetric[]
}

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    // Fetch metrics from our API endpoint
    const url = new URL(request.url)
    const baseUrl = `${url.protocol}//${url.host}`
    
    const metricsResponse = await fetch(`${baseUrl}/api/v1/metrics`)
    
    if (!metricsResponse.ok) {
      throw new Error('Failed to fetch metrics')
    }
    
    const metricsData = await metricsResponse.json()
    
    return json<LoaderData>({
      metrics: metricsData.data.metrics || [],
    })
  } catch (error) {
    console.error('Error loading builder data:', error)
    throw new Response('Failed to load builder', { status: 500 })
  }
}

export default function Builder() {
  const { metrics: serializedMetrics } = useLoaderData<typeof loader>()
  const navigate = useNavigate()
  const fetcher = useFetcher()
  
  // Convert serialized metrics to proper Metric objects
  const metrics: Metric[] = serializedMetrics.map(metric => ({
    ...metric,
    createdAt: new Date(metric.createdAt),
    updatedAt: new Date(metric.updatedAt),
  }))
  
  const {
    modelName,
    selectedMetrics,
    isLoading,
    isDirty,
    resetBuilder,
    markClean,
  } = useBuilderStore()

  // Handle unsaved changes warning
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault()
        e.returnValue = ''
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [isDirty])

  const handleSaveModel = () => {
    if (!modelName.trim() || selectedMetrics.length === 0) {
      alert('Please provide a model name and select at least one metric.')
      return
    }

    // TODO: Implement model saving
    console.log('Saving model:', {
      name: modelName,
      metrics: selectedMetrics,
    })
    
    markClean()
  }

  const handleResetModel = () => {
    if (isDirty) {
      const confirmed = window.confirm(
        'Are you sure you want to reset? All unsaved changes will be lost.'
      )
      if (!confirmed) return
    }
    
    resetBuilder()
  }

  const canSave = modelName.trim().length > 0 && selectedMetrics.length > 0

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
                aria-label="Go back to homepage"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Model Builder</h1>
                <p className="text-sm text-gray-600">
                  {modelName || 'Untitled Model'} 
                  {isDirty && <span className="text-amber-600 ml-1">• Unsaved changes</span>}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleResetModel}
                className="btn-secondary"
                disabled={isLoading}
              >
                Reset
              </button>
              <button
                type="button"
                onClick={handleSaveModel}
                className="btn-primary"
                disabled={!canSave || isLoading}
              >
                {isLoading ? 'Saving...' : 'Save Model'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Metrics Browser Sidebar */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="sticky top-8">
              <div className="mb-6">
                <h2 className="text-lg font-medium text-gray-900 mb-2">
                  Available Metrics
                </h2>
                <p className="text-sm text-gray-600">
                  Browse and select metrics to include in your model. 
                  You can drag metrics to the canvas or click to add them.
                </p>
              </div>
              
              <MetricsBrowser
                metrics={metrics}
                loading={isLoading}
              />
            </div>
          </div>

          {/* Model Canvas */}
          <div className="mt-8 lg:mt-0 lg:col-span-7 xl:col-span-8">
            <div className="mb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-2">
                Model Canvas
              </h2>
              <p className="text-sm text-gray-600">
                Configure your model name, description, and metric weights. 
                Selected metrics will appear here with adjustable weights.
              </p>
            </div>
            
            <ModelCanvas />
            
            {/* Real-time Preview */}
            <div className="mt-8">
              <div className="mb-6">
                <h2 className="text-lg font-medium text-gray-900 mb-2">
                  Real-time Preview
                </h2>
                <p className="text-sm text-gray-600">
                  See how your model performs with live calculations and predictions.
                </p>
              </div>
              
              <ModelPreview />
            </div>
          </div>
        </div>
        
        {/* Help Section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="max-w-3xl">
            <h3 className="text-lg font-medium text-gray-900 mb-4">How to Build Your Model</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-primary-500 text-white text-sm font-medium">
                    1
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">Select Metrics</h4>
                  <p className="text-sm text-gray-600">
                    Browse available metrics and add them to your model by clicking or dragging.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-primary-500 text-white text-sm font-medium">
                    2
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">Adjust Weights</h4>
                  <p className="text-sm text-gray-600">
                    Set the importance of each metric by adjusting their weights in the canvas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-primary-500 text-white text-sm font-medium">
                    3
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">Save & Test</h4>
                  <p className="text-sm text-gray-600">
                    Name your model and save it to test against historical data and share with others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 