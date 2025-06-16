import { PrismaClient } from './generated/client/index.js'

async function testConnection() {
  const prisma = new PrismaClient()
  
  try {
    console.log('Testing database connection...')
    await prisma.$connect()
    console.log('✅ Successfully connected to database!')
    
    // Test a simple query
    const result = await prisma.$queryRaw`SELECT current_database() as db_name`
    console.log('Current database:', result[0].db_name)
    
  } catch (error) {
    console.error('❌ Database connection failed:', error.message)
    console.error('Full error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testConnection() 