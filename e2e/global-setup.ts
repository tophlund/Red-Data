/**
 * Global setup for E2E tests
 * Handles database setup and cleanup
 */

import { chromium, FullConfig } from '@playwright/test'

async function globalSetup(config: FullConfig) {
  console.log('🚀 Starting E2E test setup...')
  
  try {
    // Start browser for setup operations
    const browser = await chromium.launch()
    const page = await browser.newPage()
    
    // Get base URL from config
    const baseURL = config.projects[0].use.baseURL || 'http://localhost:3000'
    
    // Wait for server to be ready by checking health endpoint
    let attempts = 0
    const maxAttempts = 30
    
    while (attempts < maxAttempts) {
      try {
        const response = await page.request.get(`${baseURL}/api/health`)
        
        if (response.status() === 200 || response.status() === 503) {
          console.log('✅ Server is responding')
          break
        }
      } catch (error) {
        console.log(`⏳ Waiting for server... (attempt ${attempts + 1}/${maxAttempts})`)
        await new Promise(resolve => setTimeout(resolve, 2000))
        attempts++
        
        if (attempts >= maxAttempts) {
          console.warn('⚠️  Server health check failed, but continuing with tests')
          break
        }
      }
    }
    
    // Optional: Seed test data if needed
    if (process.env.E2E_SEED_DATA) {
      console.log('🌱 Seeding test data...')
      try {
        const seedResponse = await page.request.post(`${baseURL}/api/test/seed`)
        if (seedResponse.ok()) {
          console.log('✅ Test data seeded successfully')
        }
      } catch (error) {
        console.log('ℹ️  Test data seeding not available, continuing...')
      }
    }
    
    await browser.close()
    console.log('✅ E2E setup completed')
    
  } catch (error) {
    console.error('❌ E2E setup failed:', error)
    // Don't fail the tests if setup fails
    console.log('⚠️  Continuing with tests despite setup issues...')
  }
}

export default globalSetup 