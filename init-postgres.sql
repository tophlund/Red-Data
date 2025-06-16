-- This script runs when PostgreSQL initializes
-- Configure PostgreSQL to accept connections from anywhere with trust auth

-- Set listen addresses to accept external connections
ALTER SYSTEM SET listen_addresses = '*';

-- Create a script to update pg_hba.conf after initialization
\! echo "host all all 0.0.0.0/0 trust" >> /var/lib/postgresql/data/pg_hba.conf

-- Reload configuration
SELECT pg_reload_conf(); 