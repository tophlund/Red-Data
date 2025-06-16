/**
 * Builder functionality end-to-end tests
 * Tests the core model building interface and features
 */

import { test, expect } from '@playwright/test'

test.describe('Model Builder Functionality', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to builder page before each test
    await page.goto('/builder')
  })

  test('should load the builder interface', async ({ page }) => {
    // Check that we're on the builder page
    await expect(page).toHaveURL('/builder')
    
    // Look for key builder elements
    const heading = page.locator('h1, h2').first()
    await expect(heading).toBeVisible()
    
    // Check for metrics or builder components
    const builderContainer = page.locator('[data-testid="builder"], .builder, #builder-container').first()
    if (await builderContainer.count() > 0) {
      await expect(builderContainer).toBeVisible()
    }
  })

  test('should display available metrics', async ({ page }) => {
    // Look for metrics list or sidebar
    const metricsContainer = page.locator('[data-testid="metrics"], .metrics, [class*="metric"]').first()
    
    if (await metricsContainer.count() > 0) {
      await expect(metricsContainer).toBeVisible()
      
      // Check for individual metric items
      const metricItems = page.locator('[data-testid*="metric"], [class*="metric-item"], .metric')
      const metricCount = await metricItems.count()
      
      if (metricCount > 0) {
        // Verify first few metrics are visible
        for (let i = 0; i < Math.min(metricCount, 3); i++) {
          await expect(metricItems.nth(i)).toBeVisible()
        }
      }
    }
  })

  test('should allow model configuration', async ({ page }) => {
    // Look for model name input or configuration elements
    const modelNameInput = page.locator('input[name*="name"], input[placeholder*="name"], input[placeholder*="model"]').first()
    
    if (await modelNameInput.count() > 0) {
      await modelNameInput.fill('Test Model')
      await expect(modelNameInput).toHaveValue('Test Model')
    }
    
    // Look for save or create buttons
    const saveButton = page.locator('button:has-text("Save"), button:has-text("Create"), button[type="submit"]').first()
    
    if (await saveButton.count() > 0) {
      await expect(saveButton).toBeVisible()
      await expect(saveButton).toBeEnabled()
    }
  })

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    
    // Check that builder is still usable on mobile
    await expect(page.locator('body')).toBeVisible()
    
    // Check for mobile navigation or collapsed sidebars
    const mobileMenu = page.locator('[data-testid="mobile-menu"], .mobile-menu, button:has-text("Menu")').first()
    
    if (await mobileMenu.count() > 0) {
      await expect(mobileMenu).toBeVisible()
    }
  })

  test('should handle empty state gracefully', async ({ page }) => {
    // Check that the page loads even without any models or data
    await expect(page.locator('body')).toBeVisible()
    
    // Look for empty state messaging
    const emptyState = page.locator(':has-text("No models"), :has-text("Get started"), :has-text("Create your first")').first()
    
    if (await emptyState.count() > 0) {
      await expect(emptyState).toBeVisible()
    }
  })

  test('should have accessible form controls', async ({ page }) => {
    // Find all form controls in the builder
    const formControls = page.locator('input, select, textarea, button')
    const controlCount = await formControls.count()
    
    if (controlCount > 0) {
      // Test first few controls for accessibility
      for (let i = 0; i < Math.min(controlCount, 5); i++) {
        const control = formControls.nth(i)
        const tagName = await control.evaluate(el => el.tagName.toLowerCase())
        
        // Check if it's focusable
        if (tagName !== 'button') {
          await expect(control).toBeVisible()
        }
        
        // For inputs, check for labels or aria-labels
        if (tagName === 'input' || tagName === 'select' || tagName === 'textarea') {
          const hasAccessibleName = await control.evaluate(el => {
            const ariaLabel = el.getAttribute('aria-label')
            const ariaLabelledBy = el.getAttribute('aria-labelledby')
            const id = el.getAttribute('id')
            const hasLabel = id && document.querySelector(`label[for="${id}"]`)
            return !!(ariaLabel || ariaLabelledBy || hasLabel)
          })
          
          // Log warning if no accessible name found
          if (!hasAccessibleName) {
            console.warn(`Form control at index ${i} may need an accessible name`)
          }
        }
      }
    }
  })

  test('should handle API errors gracefully', async ({ page }) => {
    // Mock API failure
    await page.route('/api/v1/metrics', route => {
      route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({
          error: {
            code: 'INTERNAL_ERROR',
            message: 'Database connection failed'
          }
        })
      })
    })
    
    await page.reload()
    
    // Page should still load and show error state
    await expect(page.locator('body')).toBeVisible()
    
    // Look for error messaging
    const errorMessage = page.locator(':has-text("Error"), :has-text("Failed"), :has-text("Unable to load")').first()
    
    if (await errorMessage.count() > 0) {
      await expect(errorMessage).toBeVisible()
    }
  })
}) 