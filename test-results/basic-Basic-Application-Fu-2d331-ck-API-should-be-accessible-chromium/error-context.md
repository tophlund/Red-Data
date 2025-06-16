# Test info

- Name: Basic Application Functionality >> health check API should be accessible
- Location: C:\Red Data\e2e\basic.spec.ts:45:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 503
    at C:\Red Data\e2e\basic.spec.ts:48:31
```

# Test source

```ts
   1 | /**
   2 |  * Basic end-to-end tests to verify the application is working
   3 |  * These tests ensure core functionality is accessible and working
   4 |  */
   5 |
   6 | import { test, expect } from '@playwright/test'
   7 |
   8 | test.describe('Basic Application Functionality', () => {
   9 |   test('should load the homepage', async ({ page }) => {
  10 |     await page.goto('/')
  11 |     
  12 |     // Check that the page loads successfully
  13 |     await expect(page).toHaveTitle(/Red Data/i)
  14 |     
  15 |     // Check for key navigation elements
  16 |     await expect(page.locator('nav')).toBeVisible()
  17 |   })
  18 |
  19 |   test('should have accessible navigation', async ({ page }) => {
  20 |     await page.goto('/')
  21 |     
  22 |     // Test keyboard navigation
  23 |     await page.keyboard.press('Tab')
  24 |     const focusedElement = await page.locator(':focus')
  25 |     await expect(focusedElement).toBeVisible()
  26 |     
  27 |     // Check for skip links (accessibility requirement)
  28 |     const skipLink = page.locator('a[href="#main"]')
  29 |     if (await skipLink.count() > 0) {
  30 |       await expect(skipLink).toBeVisible()
  31 |     }
  32 |   })
  33 |
  34 |   test('should have proper heading structure', async ({ page }) => {
  35 |     await page.goto('/')
  36 |     
  37 |     // Check for proper heading hierarchy (WCAG requirement)
  38 |     const h1 = page.locator('h1')
  39 |     await expect(h1).toBeVisible()
  40 |     
  41 |     // Ensure there's only one h1 per page
  42 |     await expect(h1).toHaveCount(1)
  43 |   })
  44 |
  45 |   test('health check API should be accessible', async ({ page }) => {
  46 |     // Test the health endpoint directly
  47 |     const response = await page.request.get('/api/health')
> 48 |     expect(response.status()).toBe(200)
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  49 |     
  50 |     const data = await response.json()
  51 |     expect(data.data).toBeDefined()
  52 |     expect(data.data.status).toBe('healthy')
  53 |   })
  54 |
  55 |   test('should handle 404 pages gracefully', async ({ page }) => {
  56 |     const response = await page.goto('/non-existent-page')
  57 |     
  58 |     // Should return 404 but still render a page
  59 |     expect(response?.status()).toBe(404)
  60 |     
  61 |     // Page should still be usable
  62 |     await expect(page.locator('body')).toBeVisible()
  63 |   })
  64 |
  65 |   test('should be responsive on mobile', async ({ page }) => {
  66 |     // Set mobile viewport
  67 |     await page.setViewportSize({ width: 375, height: 667 })
  68 |     await page.goto('/')
  69 |     
  70 |     // Check that content is still accessible on mobile
  71 |     await expect(page.locator('nav')).toBeVisible()
  72 |     await expect(page.locator('main, [role="main"]')).toBeVisible()
  73 |   })
  74 |
  75 |   test('should meet basic accessibility requirements', async ({ page }) => {
  76 |     await page.goto('/')
  77 |     
  78 |     // Check for essential accessibility attributes
  79 |     const main = page.locator('main, [role="main"]')
  80 |     await expect(main).toBeVisible()
  81 |     
  82 |     // All images should have alt attributes or be marked decorative
  83 |     const images = page.locator('img')
  84 |     const imageCount = await images.count()
  85 |     
  86 |     for (let i = 0; i < imageCount; i++) {
  87 |       const img = images.nth(i)
  88 |       const hasAlt = await img.getAttribute('alt')
  89 |       const isDecorative = await img.getAttribute('aria-hidden')
  90 |       
  91 |       expect(hasAlt !== null || isDecorative === 'true').toBeTruthy()
  92 |     }
  93 |   })
  94 | }) 
```