# Database Setup Guide

This guide covers setting up the PostgreSQL database for Red Data Analytics platform development.

## Prerequisites

- Node.js 18+ installed
- Docker and Docker Compose installed (for local database)
- Git (for version control)

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Copy the environment template and update with your values:

```bash
cp .env.example .env
```

For local development, the default PostgreSQL connection string should work:
```
DATABASE_URL="postgresql://username:password@localhost:5432/red_data_dev"
```

### 3. Start Local Database

Using Docker Compose (recommended for development):

```bash
# Start PostgreSQL and Redis containers
docker compose up -d

# Check if containers are running
docker compose ps

# View logs if needed
docker compose logs postgres
```

The database will be available at:
- **Host:** localhost
- **Port:** 5432
- **Database:** red_data_dev
- **Username:** username
- **Password:** password

### 4. Run Database Migrations

```bash
# Generate Prisma client
npm run db:generate

# Create and run initial migration
npm run db:migrate

# Seed the database with sample data
npm run db:seed
```

### 5. Verify Setup

Test the database connection:

```bash
# Start the development server
npm run dev

# In another terminal, test the health endpoint
curl http://localhost:5173/api/health
```

You should see a response like:
```json
{
  "data": {
    "status": "healthy",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "database": "connected",
    "environment": "development"
  }
}
```

## Database Schema Overview

The Red Data platform uses the following core entities:

### Teams and Players
- **Teams:** NFL teams with conference/division information
- **Players:** Individual players with position, stats, and team association
- **Referees:** Game officials with experience data

### Games and Metrics
- **Games:** Individual matchups with scores, weather, venue details
- **Metrics:** Configurable performance indicators (passing yards, team efficiency, etc.)

### User Models and AI
- **UserModels:** User-defined predictive models combining multiple metrics
- **ModelComponents:** Individual metric weights within a model
- **AiSuggestions:** AI-generated recommendations for model improvement

## Development Commands

```bash
# Database operations
npm run db:generate     # Generate Prisma client after schema changes
npm run db:push         # Push schema changes without migration (dev only)
npm run db:migrate      # Create and run migrations
npm run db:deploy       # Run migrations in production
npm run db:seed         # Populate with sample data
npm run db:studio       # Open Prisma Studio GUI

# Reset database (WARNING: destroys all data)
npm run db:reset        # Reset and re-seed
```

## Production Database Setup

For production deployment:

1. **Use a managed PostgreSQL service** (AWS RDS, Heroku Postgres, Supabase)
2. **Update DATABASE_URL** in production environment variables
3. **Run migrations:**
   ```bash
   npm run db:deploy
   ```
4. **Seed with production data** (modify seed script as needed)

## Troubleshooting

### Connection Issues

1. **Database not responding:**
   ```bash
   # Check if Docker containers are running
   docker compose ps
   
   # Restart containers if needed
   docker compose down
   docker compose up -d
   ```

2. **Port 5432 already in use:**
   - Stop any existing PostgreSQL service
   - Or modify the port in `docker-compose.yml` and update `DATABASE_URL`

3. **Permission errors:**
   ```bash
   # Reset Docker volumes
   docker compose down -v
   docker compose up -d
   ```

### Migration Issues

1. **Schema drift errors:**
   ```bash
   # Reset and regenerate
   npm run db:push --force-reset
   npm run db:seed
   ```

2. **Migration conflicts:**
   - Manually resolve conflicts in migration files
   - Or reset with `db:push --force-reset` in development

### Performance Issues

1. **Slow queries:**
   - Check indexes in `schema.prisma`
   - Use `EXPLAIN ANALYZE` for query planning
   - Monitor with Prisma Studio

2. **Connection pooling:**
   - Configure connection limits in production
   - Use PgBouncer for high-traffic scenarios

## Data Model Changes

When modifying the database schema:

1. **Update `prisma/schema.prisma`**
2. **Generate client:** `npm run db:generate`
3. **Create migration:** `npm run db:migrate`
4. **Update TypeScript interfaces** in `app/models/index.ts`
5. **Update seed data** in `prisma/seed.ts` if needed
6. **Test thoroughly** before deploying

## Security Considerations

- **Never commit `.env` files** with real credentials
- **Use strong passwords** for production databases
- **Enable SSL/TLS** for production connections
- **Regularly backup** production data
- **Use connection pooling** to prevent exhaustion
- **Monitor database access** logs for suspicious activity

## Backup and Recovery

### Local Development
```bash
# Create backup
docker exec reddata_postgres_1 pg_dump -U username red_data_dev > backup.sql

# Restore backup
docker exec -i reddata_postgres_1 psql -U username red_data_dev < backup.sql
```

### Production
- Use automated backups provided by your database service
- Test restore procedures regularly
- Document recovery time objectives (RTO) and recovery point objectives (RPO)

## Next Steps

After setting up the database:

1. **Explore the data** using Prisma Studio: `npm run db:studio`
2. **Review the sample data** created by the seed script
3. **Test API endpoints** that interact with the database
4. **Begin building the visual model builder** interface

For questions or issues, refer to:
- [Prisma Documentation](https://www.prisma.io/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- Project issue tracker 