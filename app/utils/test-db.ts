/**
 * Test database connection without Prisma
 */

import { Client } from 'pg'

export async function testDatabaseConnection() {
  const client = new Client({
    host: '127.0.0.1',
    port: 5432,
    database: 'red_data_dev',
    user: 'username'
  })

  try {
    await client.connect()
    console.log('✅ Database connection successful')
    
    const result = await client.query('SELECT COUNT(*) FROM teams')
    console.log(`✅ Teams count: ${result.rows[0].count}`)
    
    await client.end()
    return true
  } catch (error) {
    console.error('❌ Database connection failed:', error)
    return false
  }
}

// Run if this file is executed directly
testDatabaseConnection()
  .then(() => process.exit(0))
  .catch(() => process.exit(1)) 