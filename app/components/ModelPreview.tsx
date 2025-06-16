/**
 * Model Preview Component
 * Real-time preview display showing model calculations and predictions
 */

import React, { useState, useEffect, useMemo } from 'react'
import { useBuilderStore } from '~/stores/builderStore'
import { 
  calculateModelPrediction, 
  getAvailableTeamsForPreview,
  validateModel,
  type ModelCalculationResult 
} from '~/services/modelCalculation'
import type { Team } from '~/models'

interface ModelPreviewProps {
  className?: string
}

export function ModelPreview({ className = '' }: ModelPreviewProps) {
  const { selectedMetrics } = useBuilderStore()
  const [teamA, setTeamA] = useState<Team | null>(null)
  const [teamB, setTeamB] = useState<Team | null>(null)
  const [calculationResult, setCalculationResult] = useState<ModelCalculationResult | null>(null)

  const availableTeams = useMemo(() => getAvailableTeamsForPreview(), [])
  const modelValidation = useMemo(() => validateModel(selectedMetrics), [selectedMetrics])

  // Set default teams on first load
  useEffect(() => {
    if (availableTeams.length >= 2 && !teamA && !teamB) {
      setTeamA(availableTeams[0])
      setTeamB(availableTeams[1])
    }
  }, [availableTeams, teamA, teamB])

  // Recalculate when teams or metrics change
  useEffect(() => {
    if (teamA && teamB && modelValidation.isValid) {
      const result = calculateModelPrediction(selectedMetrics, teamA, teamB)
      setCalculationResult(result)
    } else {
      setCalculationResult(null)
    }
  }, [selectedMetrics, teamA, teamB, modelValidation.isValid])

  if (selectedMetrics.length === 0) {
    return (
      <div className={`card p-6 ${className}`}>
        <div className="text-center">
          <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Model Preview</h3>
          <p className="text-sm text-gray-600">
            Add metrics to your model to see real-time predictions
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Team Selection */}
      <div className="card p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Preview Matchup</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="team-a-select" className="block text-sm font-medium text-gray-700 mb-2">
              Team A
            </label>
            <select
              id="team-a-select"
              value={teamA?.id || ''}
              onChange={(e) => {
                const selected = availableTeams.find(t => t.id === e.target.value)
                setTeamA(selected || null)
              }}
              className="input-field"
            >
              <option value="">Select Team A</option>
              {availableTeams.map(team => (
                <option key={team.id} value={team.id}>
                  {team.name} ({team.abbreviation})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="team-b-select" className="block text-sm font-medium text-gray-700 mb-2">
              Team B
            </label>
            <select
              id="team-b-select"
              value={teamB?.id || ''}
              onChange={(e) => {
                const selected = availableTeams.find(t => t.id === e.target.value)
                setTeamB(selected || null)
              }}
              className="input-field"
            >
              <option value="">Select Team B</option>
              {availableTeams.map(team => (
                <option key={team.id} value={team.id}>
                  {team.name} ({team.abbreviation})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Model Validation Warnings */}
      {(modelValidation.warnings.length > 0 || modelValidation.suggestions.length > 0) && (
        <div className="card p-6">
          {modelValidation.warnings.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-red-800 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                Warnings
              </h4>
              <ul className="text-sm text-red-700 bg-red-50 rounded p-3 space-y-1">
                {modelValidation.warnings.map((warning, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-1">•</span>
                    <span>{warning}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {modelValidation.suggestions.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-amber-800 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Suggestions
              </h4>
              <ul className="text-sm text-amber-700 bg-amber-50 rounded p-3 space-y-1">
                {modelValidation.suggestions.map((suggestion, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-1">•</span>
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Prediction Results */}
      {calculationResult && teamA && teamB && (
        <div className="space-y-6">
          {/* Main Prediction */}
          <div className="card p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Model Prediction</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Team A Score */}
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  {calculationResult.teamA.score.toFixed(1)}
                </div>
                <div className="text-sm text-gray-600">{calculationResult.teamA.name}</div>
              </div>

              {/* Prediction Summary */}
              <div className="text-center border-l border-r border-gray-200 px-4">
                <div className="mb-2">
                  <div className="text-lg font-semibold text-gray-900">
                    {calculationResult.prediction.winner === teamA.abbreviation ? teamA.name : teamB.name}
                  </div>
                  <div className="text-sm text-gray-600">Predicted Winner</div>
                </div>
                <div className="text-sm text-gray-600">
                  {calculationResult.prediction.winProbability}% probability
                </div>
              </div>

              {/* Team B Score */}
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  {calculationResult.teamB.score.toFixed(1)}
                </div>
                <div className="text-sm text-gray-600">{calculationResult.teamB.name}</div>
              </div>
            </div>

            {/* Win Probability Bar */}
            <div className="mt-6">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>{teamA.abbreviation}</span>
                <span>Win Probability</span>
                <span>{teamB.abbreviation}</span>
              </div>
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-primary-600 h-3 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${calculationResult.prediction.winProbability}%`,
                      marginLeft: calculationResult.prediction.winner === teamB.abbreviation 
                        ? `${100 - calculationResult.prediction.winProbability}%` 
                        : '0%'
                    }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-xs font-medium text-gray-700">
                    {calculationResult.prediction.winProbability}%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metric Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Team A Breakdown */}
            <div className="card p-6">
              <h4 className="text-md font-medium text-gray-900 mb-4">
                {calculationResult.teamA.name} - Metric Breakdown
              </h4>
              <div className="space-y-3">
                {calculationResult.teamA.breakdown.map(metric => (
                  <div key={metric.metricId} className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 truncate">
                        {metric.metricName}
                      </div>
                      <div className="text-xs text-gray-500">
                        Value: {metric.value.toFixed(1)} × Weight: {metric.weight.toFixed(1)}
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <div className="text-sm font-medium text-gray-900">
                        {metric.weightedValue.toFixed(1)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {metric.percentage.toFixed(0)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team B Breakdown */}
            <div className="card p-6">
              <h4 className="text-md font-medium text-gray-900 mb-4">
                {calculationResult.teamB.name} - Metric Breakdown
              </h4>
              <div className="space-y-3">
                {calculationResult.teamB.breakdown.map(metric => (
                  <div key={metric.metricId} className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 truncate">
                        {metric.metricName}
                      </div>
                      <div className="text-xs text-gray-500">
                        Value: {metric.value.toFixed(1)} × Weight: {metric.weight.toFixed(1)}
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <div className="text-sm font-medium text-gray-900">
                        {metric.weightedValue.toFixed(1)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {metric.percentage.toFixed(0)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Model Summary */}
          <div className="card p-6">
            <h4 className="text-md font-medium text-gray-900 mb-4">Model Summary</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900">
                  {calculationResult.modelSummary.metricCount}
                </div>
                <div className="text-sm text-gray-600">Metrics</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900">
                  {calculationResult.modelSummary.totalWeight.toFixed(1)}
                </div>
                <div className="text-sm text-gray-600">Total Weight</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900">
                  {calculationResult.prediction.pointDifferential.toFixed(1)}
                </div>
                <div className="text-sm text-gray-600">Point Differential</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900">
                  {calculationResult.prediction.confidence.toFixed(0)}%
                </div>
                <div className="text-sm text-gray-600">Confidence</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 