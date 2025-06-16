import pg from 'pg';
const { Client } = pg;

async function testDirectConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'red_data_dev',
    user: 'reddata_user',
    password: 'reddata_pass',
  });

  try {
    console.log('Testing direct pg connection...');
    await client.connect();
    console.log('✅ Successfully connected with pg!');
    
    const result = await client.query('SELECT current_user, current_database()');
    console.log('User:', result.rows[0].current_user);
    console.log('Database:', result.rows[0].current_database);
    
  } catch (error) {
    console.error('❌ Direct pg connection failed:', error.message);
  } finally {
    await client.end();
  }
}

testDirectConnection(); 