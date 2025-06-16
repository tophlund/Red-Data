-- Red Data Database Schema Initialization

-- Create Enums
CREATE TYPE "Position" AS ENUM (
  'QUARTERBACK',
  'RUNNING_BACK', 
  'WIDE_RECEIVER',
  'TIGHT_END',
  'OFFENSIVE_LINE',
  'DEFENSIVE_END',
  'DEFENSIVE_TACKLE',
  'LINEBACKER',
  'CORNERBACK',
  'SAFETY',
  'KICKER',
  'PUNTER',
  'LONG_SNAPPER'
);

CREATE TYPE "MetricCategory" AS ENUM (
  'PLAYER',
  'TEAM',
  'POSITION',
  'REF',
  'PLAYBOOK'
);

CREATE TYPE "GameStatus" AS ENUM (
  'SCHEDULED',
  'IN_PROGRESS',
  'COMPLETED',
  'CANCELLED',
  'POSTPONED'
);

-- Create Tables

-- Users table
CREATE TABLE "users" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "email" TEXT UNIQUE NOT NULL,
  "name" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Teams table
CREATE TABLE "teams" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "name" TEXT NOT NULL,
  "abbreviation" VARCHAR(5) UNIQUE NOT NULL,
  "city" TEXT NOT NULL,
  "conference" TEXT,
  "division" TEXT,
  "logoUrl" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Players table
CREATE TABLE "players" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "name" TEXT NOT NULL,
  "position" "Position" NOT NULL,
  "number" INTEGER,
  "height" TEXT,
  "weight" INTEGER,
  "age" INTEGER,
  "teamId" TEXT NOT NULL,
  "isActive" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "players_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Referees table
CREATE TABLE "referees" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "name" TEXT NOT NULL,
  "number" INTEGER UNIQUE,
  "position" TEXT,
  "yearsExp" INTEGER,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Games table
CREATE TABLE "games" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "gameDate" TIMESTAMP(3) NOT NULL,
  "week" INTEGER,
  "season" INTEGER NOT NULL,
  "homeTeamId" TEXT NOT NULL,
  "awayTeamId" TEXT NOT NULL,
  "refereeId" TEXT,
  "homeScore" INTEGER,
  "awayScore" INTEGER,
  "status" "GameStatus" NOT NULL DEFAULT 'SCHEDULED',
  "venue" TEXT,
  "temperature" INTEGER,
  "weather" TEXT,
  "attendance" INTEGER,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "games_homeTeamId_fkey" FOREIGN KEY ("homeTeamId") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT "games_awayTeamId_fkey" FOREIGN KEY ("awayTeamId") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT "games_refereeId_fkey" FOREIGN KEY ("refereeId") REFERENCES "referees"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- Metrics table
CREATE TABLE "metrics" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "name" TEXT UNIQUE NOT NULL,
  "displayName" TEXT NOT NULL,
  "description" TEXT,
  "category" "MetricCategory" NOT NULL,
  "dataType" TEXT NOT NULL DEFAULT 'number',
  "unit" TEXT,
  "isActive" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- User Models table
CREATE TABLE "user_models" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "name" TEXT NOT NULL,
  "description" TEXT,
  "definition" JSONB NOT NULL,
  "userId" TEXT,
  "isPublic" BOOLEAN NOT NULL DEFAULT false,
  "isListed" BOOLEAN NOT NULL DEFAULT false,
  "shareToken" TEXT UNIQUE,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "user_models_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- Model Components table
CREATE TABLE "model_components" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "modelId" TEXT NOT NULL,
  "metricId" TEXT NOT NULL,
  "weight" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
  "isActive" BOOLEAN NOT NULL DEFAULT true,
  CONSTRAINT "model_components_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "user_models"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "model_components_metricId_fkey" FOREIGN KEY ("metricId") REFERENCES "metrics"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  UNIQUE ("modelId", "metricId")
);

-- AI Suggestions table
CREATE TABLE "ai_suggestions" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "userId" TEXT,
  "modelId" TEXT,
  "context" TEXT NOT NULL,
  "suggestedMetrics" JSONB NOT NULL,
  "wasAccepted" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ai_suggestions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT "ai_suggestions_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "user_models"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- Create Indexes
CREATE INDEX "teams_conference_division_idx" ON "teams"("conference", "division");
CREATE INDEX "players_teamId_idx" ON "players"("teamId");
CREATE INDEX "players_position_idx" ON "players"("position");
CREATE INDEX "games_gameDate_idx" ON "games"("gameDate");
CREATE INDEX "games_season_week_idx" ON "games"("season", "week");
CREATE INDEX "games_homeTeamId_awayTeamId_idx" ON "games"("homeTeamId", "awayTeamId");
CREATE INDEX "metrics_category_idx" ON "metrics"("category");
CREATE INDEX "user_models_userId_idx" ON "user_models"("userId");
CREATE INDEX "user_models_isPublic_isListed_idx" ON "user_models"("isPublic", "isListed");
CREATE INDEX "model_components_modelId_idx" ON "model_components"("modelId");
CREATE INDEX "ai_suggestions_userId_idx" ON "ai_suggestions"("userId");
CREATE INDEX "ai_suggestions_modelId_idx" ON "ai_suggestions"("modelId");
CREATE INDEX "ai_suggestions_createdAt_idx" ON "ai_suggestions"("createdAt");

-- Create function to automatically update timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW."updatedAt" = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON "users" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_teams_updated_at BEFORE UPDATE ON "teams" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_players_updated_at BEFORE UPDATE ON "players" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_referees_updated_at BEFORE UPDATE ON "referees" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_games_updated_at BEFORE UPDATE ON "games" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_metrics_updated_at BEFORE UPDATE ON "metrics" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_user_models_updated_at BEFORE UPDATE ON "user_models" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column(); 