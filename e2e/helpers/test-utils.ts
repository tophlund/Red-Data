/**
 * E2E Test Utilities
 * Reusable helper functions for Playwright tests
 */

import { Page, expect } from '@playwright/test'

/**
 * Wait for element to be visible with timeout
 */
export async function waitForElement(page: Page, selector: string, timeout = 5000): Promise<boolean> {
  try {
    await page.waitForSelector(selector, { state: 'visible', timeout })
    return true
  } catch {
    return false
  }
}

/**
 * Check if page is accessible (basic a11y checks)
 */
export async function checkAccessibility(page: Page) {
  // Check for basic accessibility requirements
  const h1Count = await page.locator('h1').count()
  expect(h1Count).toBeGreaterThanOrEqual(1)
  expect(h1Count).toBeLessThanOrEqual(1) // Only one H1 per page
  
  // Check for main landmark
  const mainElement = page.locator('main, [role="main"]').first()
  await expect(mainElement).toBeVisible()
  
  // Check for skip links
  const skipLinks = page.locator('a[href="#main"], a[href="#content"]')
  const skipLinkCount = await skipLinks.count()
  
  if (skipLinkCount > 0) {
    await expect(skipLinks.first()).toHaveAttribute('href')
  }
}

/**
 * Mock API response for testing error states
 */
export async function mockApiError(page: Page, endpoint: string, statusCode = 500) {
  await page.route(endpoint, route => {
    route.fulfill({
      status: statusCode,
      contentType: 'application/json',
      body: JSON.stringify({
        error: {
          code: 'TEST_ERROR',
          message: 'Mocked error for testing'
        }
      })
    })
  })
}

/**
 * Mock successful API response
 */
export async function mockApiSuccess(page: Page, endpoint: string, data: any) {
  await page.route(endpoint, route => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ data })
    })
  })
}

/**
 * Fill form and submit
 */
export async function fillAndSubmitForm(page: Page, formData: Record<string, string>, submitSelector = 'button[type="submit"]') {
  for (const [fieldName, value] of Object.entries(formData)) {
    const field = page.locator(`input[name="${fieldName}"], select[name="${fieldName}"], textarea[name="${fieldName}"]`)
    if (await field.count() > 0) {
      await field.fill(value)
    }
  }
  
  const submitButton = page.locator(submitSelector)
  if (await submitButton.count() > 0) {
    await submitButton.click()
  }
}

/**
 * Check responsive behavior
 */
export async function checkResponsive(page: Page, viewports = [
  { width: 375, height: 667 }, // Mobile
  { width: 768, height: 1024 }, // Tablet
  { width: 1280, height: 720 } // Desktop
]) {
  for (const viewport of viewports) {
    await page.setViewportSize(viewport)
    
    // Basic checks that page is still usable
    await expect(page.locator('body')).toBeVisible()
    await expect(page.locator('nav, header').first()).toBeVisible()
    
    // Small delay to allow layout to settle
    await page.waitForTimeout(500)
  }
}

/**
 * Check for loading states
 */
export async function expectLoadingState(page: Page) {
  // Look for common loading indicators
  const loadingSelectors = [
    '[data-testid="loading"]',
    '.loading',
    '.spinner',
    '[aria-label*="loading"]',
    ':has-text("Loading")'
  ]
  
  let foundLoading = false
  for (const selector of loadingSelectors) {
    if (await page.locator(selector).count() > 0) {
      foundLoading = true
      break
    }
  }
  
  return foundLoading
}

/**
 * Wait for network to be idle
 */
export async function waitForNetworkIdle(page: Page, timeout = 5000) {
  try {
    await page.waitForLoadState('networkidle', { timeout })
  } catch (error) {
    console.warn('Network idle timeout, continuing...')
  }
} 