import pg from 'pg';
const { Client } = pg;

async function quickTest() {
  console.log('Starting quick connection test...');
  
  const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'red_data_dev',
    user: 'reddata_user',
    password: 'reddata_pass',
    connectionTimeoutMillis: 5000,
  });

  const timeout = setTimeout(() => {
    console.log('❌ Test timed out after 5 seconds');
    process.exit(1);
  }, 5000);

  try {
    await client.connect();
    console.log('✅ Connected successfully!');
    
    const result = await client.query('SELECT 1');
    console.log('✅ Query successful:', result.rows[0]);
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
  } finally {
    clearTimeout(timeout);
    await client.end().catch(() => {});
    console.log('Test completed');
  }
}

quickTest(); 