/**
 * Builder State Management with Zustand
 * Manages model construction, metric selection, and builder UI state
 */

import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { Metric, ModelComponent, UserModel, MetricCategory, OutcomeType, OutcomeParameters } from '~/models'

// Builder-specific types
export interface ModelDefinition {
  targetOutcome: OutcomeType
  modelType: 'linear_regression' | 'weighted_average' | 'custom'
  weights: Record<string, number>
  parameters?: OutcomeParameters
  description?: string
}

export interface BuilderMetric extends Metric {
  weight: number
  isSelected: boolean
}

export interface BuilderState {
  // Model data
  currentModel: Partial<UserModel> | null
  selectedMetrics: BuilderMetric[]
  modelName: string
  modelDescription: string
  
  // UI state
  isLoading: boolean
  isDirty: boolean
  activeCategory: MetricCategory | null
  searchTerm: string
  
  // Preview data
  previewResults: Record<string, number> | null
  
  // Actions
  setCurrentModel: (model: Partial<UserModel> | null) => void
  addMetric: (metric: Metric, weight?: number) => void
  removeMetric: (metricId: string) => void
  updateMetricWeight: (metricId: string, weight: number) => void
  setModelName: (name: string) => void
  setModelDescription: (description: string) => void
  setActiveCategory: (category: MetricCategory | null) => void
  setSearchTerm: (term: string) => void
  setLoading: (loading: boolean) => void
  setPreviewResults: (results: Record<string, number> | null) => void
  markDirty: () => void
  markClean: () => void
  resetBuilder: () => void
}

const initialState = {
  currentModel: null,
  selectedMetrics: [],
  modelName: '',
  modelDescription: '',
  isLoading: false,
  isDirty: false,
  activeCategory: null,
  searchTerm: '',
  previewResults: null,
}

export const useBuilderStore = create<BuilderState>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        
        setCurrentModel: (model) => {
          set({
            currentModel: model,
            modelName: model?.name || '',
            modelDescription: model?.description || '',
            isDirty: false,
          })
        },
        
        addMetric: (metric, weight = 1.0) => {
          const { selectedMetrics } = get()
          
          // Check if metric already selected
          if (selectedMetrics.some(m => m.id === metric.id)) {
            return
          }
          
          const builderMetric: BuilderMetric = {
            ...metric,
            weight,
            isSelected: true,
          }
          
          set({
            selectedMetrics: [...selectedMetrics, builderMetric],
            isDirty: true,
          })
          
          // Real-time preview will automatically update due to selectedMetrics change
        },
        
        removeMetric: (metricId) => {
          const { selectedMetrics } = get()
          
          set({
            selectedMetrics: selectedMetrics.filter(m => m.id !== metricId),
            isDirty: true,
          })
          
          // Real-time preview will automatically update due to selectedMetrics change
        },
        
        updateMetricWeight: (metricId, weight) => {
          const { selectedMetrics } = get()
          
          set({
            selectedMetrics: selectedMetrics.map(m =>
              m.id === metricId ? { ...m, weight } : m
            ),
            isDirty: true,
          })
          
          // Trigger real-time calculation update
          // This will cause components using the store to re-render
        },
        
        setModelName: (name) => {
          set({ modelName: name, isDirty: true })
        },
        
        setModelDescription: (description) => {
          set({ modelDescription: description, isDirty: true })
        },
        
        setActiveCategory: (category) => {
          set({ activeCategory: category })
        },
        
        setSearchTerm: (term) => {
          set({ searchTerm: term })
        },
        
        setLoading: (loading) => {
          set({ isLoading: loading })
        },
        
        setPreviewResults: (results) => {
          set({ previewResults: results })
        },
        
        markDirty: () => {
          set({ isDirty: true })
        },
        
        markClean: () => {
          set({ isDirty: false })
        },
        
        resetBuilder: () => {
          set(initialState)
        },
      }),
      {
        name: 'builder-storage',
        partialize: (state) => ({
          currentModel: state.currentModel,
          selectedMetrics: state.selectedMetrics,
          modelName: state.modelName,
          modelDescription: state.modelDescription,
        }),
      }
    ),
    {
      name: 'builder-store',
    }
  )
) 