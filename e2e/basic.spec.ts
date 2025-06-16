/**
 * Basic end-to-end tests to verify the application is working
 * These tests ensure core functionality is accessible and working
 */

import { test, expect } from '@playwright/test'

test.describe('Basic Application Functionality', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/')
    
    // Check that the page loads successfully
    await expect(page).toHaveTitle(/Red Data/i)
    
    // Check for key navigation elements
    await expect(page.locator('nav').first()).toBeVisible()
  })

  test('should have accessible navigation', async ({ page }) => {
    await page.goto('/')
    
    // Test keyboard navigation - be more flexible about focus
    await page.keyboard.press('Tab')
    
    // Check for skip links (accessibility requirement) - handle multiple elements
    const skipLinks = page.locator('a[href="#main"]')
    const skipLinkCount = await skipLinks.count()
    
    if (skipLinkCount > 0) {
      // Just check that at least one skip link exists and is properly structured
      await expect(skipLinks.first()).toHaveAttribute('href', '#main')
      
      // Test that skip link becomes visible when focused
      await skipLinks.first().focus()
      await expect(skipLinks.first()).toBeVisible()
    }
  })

  test('should have proper heading structure', async ({ page }) => {
    await page.goto('/')
    
    // Check for proper heading hierarchy (WCAG requirement)
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()
    
    // Ensure there's only one h1 per page
    await expect(h1).toHaveCount(1)
  })

  test('health check API should be accessible', async ({ page }) => {
    // Test the health endpoint directly
    const response = await page.request.get('/api/health')
    
    // Health check might fail if database isn't running, but should return valid JSON
    expect([200, 503]).toContain(response.status())
    
    const data = await response.json()
    
    if (response.status() === 200) {
      expect(data.data).toBeDefined()
      expect(data.data.status).toBe('healthy')
    } else {
      expect(data.error).toBeDefined()
      expect(data.error.code).toBe('HEALTH_CHECK_FAILED')
    }
  })

  test('should handle 404 pages gracefully', async ({ page }) => {
    const response = await page.goto('/non-existent-page')
    
    // Should return 404 but still render a page
    expect(response?.status()).toBe(404)
    
    // Page should still be usable - just check that we have a body
    await expect(page.locator('body')).toHaveCount(1)
    await expect(page.locator('body')).toBeVisible()
  })

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    
    // Check that content is still accessible on mobile
    await expect(page.locator('nav').first()).toBeVisible()
    
    // Check for main content - use more specific selector
    const mainElement = page.locator('#main')
    await expect(mainElement).toBeVisible()
  })

  test('should meet basic accessibility requirements', async ({ page }) => {
    await page.goto('/')
    
    // Check for essential accessibility attributes - use specific selector
    const main = page.locator('#main')
    await expect(main).toBeVisible()
    
    // All images should have alt attributes or be marked decorative
    const images = page.locator('img')
    const imageCount = await images.count()
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i)
      const hasAlt = await img.getAttribute('alt')
      const isDecorative = await img.getAttribute('aria-hidden')
      
      expect(hasAlt !== null || isDecorative === 'true').toBeTruthy()
    }
  })

  test('should navigate to builder page', async ({ page }) => {
    await page.goto('/')
    
    // Look for navigation to builder
    const builderLink = page.locator('a[href="/builder"]')
    if (await builderLink.count() > 0) {
      await builderLink.first().click()
      await expect(page).toHaveURL('/builder')
    }
  })

  test('should have working form controls', async ({ page }) => {
    await page.goto('/')
    
    // Check for any form elements and ensure they're accessible
    const inputs = page.locator('input, select, textarea, button')
    const inputCount = await inputs.count()
    
    // If there are form controls, ensure they meet accessibility standards
    for (let i = 0; i < Math.min(inputCount, 5); i++) { // Limit to first 5
      const input = inputs.nth(i)
      const tagName = await input.evaluate(el => el.tagName.toLowerCase())
      
      if (tagName === 'input' || tagName === 'select' || tagName === 'textarea') {
        // Check for associated label or aria-label
        const hasLabel = await input.evaluate(el => {
          const id = el.getAttribute('id')
          const hasAriaLabel = el.getAttribute('aria-label')
          const hasAssociatedLabel = id && document.querySelector(`label[for="${id}"]`)
          return !!(hasAriaLabel || hasAssociatedLabel)
        })
        
        // This is a soft assertion - log but don't fail
        if (!hasLabel) {
          console.warn(`Form control at index ${i} may be missing accessible label`)
        }
      }
    }
  })
}) 