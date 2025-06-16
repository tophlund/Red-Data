-- Red Data Seed Data

-- Insert Teams
INSERT INTO "teams" ("id", "name", "abbreviation", "city", "conference", "division") VALUES
(gen_random_uuid()::text, 'Buffalo Bills', 'BUF', 'Buffalo', 'AFC', 'East'),
(gen_random_uuid()::text, 'Miami Dolphins', 'MIA', 'Miami', 'AFC', 'East'),
(gen_random_uuid()::text, 'New England Patriots', 'NE', 'Foxborough', 'AFC', 'East'),
(gen_random_uuid()::text, 'New York Jets', 'NYJ', 'East Rutherford', 'AFC', 'East'),
(gen_random_uuid()::text, 'Baltimore Ravens', 'BAL', 'Baltimore', 'AFC', 'North'),
(gen_random_uuid()::text, 'Cincinnati Bengals', 'CIN', 'Cincinnati', 'AFC', 'North'),
(gen_random_uuid()::text, 'Cleveland Browns', 'CLE', 'Cleveland', 'AFC', 'North'),
(gen_random_uuid()::text, 'Pittsburgh Steelers', 'PIT', 'Pittsburgh', 'AFC', 'North'),
(gen_random_uuid()::text, 'Dallas Cowboys', 'DAL', 'Arlington', 'NFC', 'East'),
(gen_random_uuid()::text, 'New York Giants', 'NYG', 'East Rutherford', 'NFC', 'East'),
(gen_random_uuid()::text, 'Philadelphia Eagles', 'PHI', 'Philadelphia', 'NFC', 'East'),
(gen_random_uuid()::text, 'Washington Commanders', 'WAS', 'Landover', 'NFC', 'East');

-- Insert sample players
INSERT INTO "players" ("id", "name", "position", "number", "height", "weight", "age", "teamId") VALUES
(gen_random_uuid()::text, 'Josh Allen', 'QUARTERBACK', 17, '6''5"', 237, 27, (SELECT "id" FROM "teams" WHERE "abbreviation" = 'BUF')),
(gen_random_uuid()::text, 'Stefon Diggs', 'WIDE_RECEIVER', 14, '6''0"', 191, 30, (SELECT "id" FROM "teams" WHERE "abbreviation" = 'BUF')),
(gen_random_uuid()::text, 'James Cook', 'RUNNING_BACK', 4, '5''11"', 199, 24, (SELECT "id" FROM "teams" WHERE "abbreviation" = 'BUF')),
(gen_random_uuid()::text, 'Dak Prescott', 'QUARTERBACK', 4, '6''2"', 238, 30, (SELECT "id" FROM "teams" WHERE "abbreviation" = 'DAL')),
(gen_random_uuid()::text, 'CeeDee Lamb', 'WIDE_RECEIVER', 88, '6''2"', 198, 25, (SELECT "id" FROM "teams" WHERE "abbreviation" = 'DAL')),
(gen_random_uuid()::text, 'Tony Pollard', 'RUNNING_BACK', 20, '6''0"', 209, 27, (SELECT "id" FROM "teams" WHERE "abbreviation" = 'DAL'));

-- Insert referees
INSERT INTO "referees" ("id", "name", "number", "position", "yearsExp") VALUES
(gen_random_uuid()::text, 'Bill Vinovich', 52, 'Referee', 15),
(gen_random_uuid()::text, 'Tony Corrente', 99, 'Referee', 25),
(gen_random_uuid()::text, 'Jerome Boger', 23, 'Referee', 20);

-- Insert sample games
INSERT INTO "games" ("id", "gameDate", "week", "season", "homeTeamId", "awayTeamId", "refereeId", "homeScore", "awayScore", "status", "venue") VALUES
(gen_random_uuid()::text, '2024-09-08 20:00:00', 1, 2024, 
 (SELECT "id" FROM "teams" WHERE "abbreviation" = 'BUF'), 
 (SELECT "id" FROM "teams" WHERE "abbreviation" = 'MIA'), 
 (SELECT "id" FROM "referees" WHERE "name" = 'Bill Vinovich'), 
 31, 10, 'COMPLETED', 'Highmark Stadium'),
(gen_random_uuid()::text, '2024-09-15 16:25:00', 2, 2024, 
 (SELECT "id" FROM "teams" WHERE "abbreviation" = 'DAL'), 
 (SELECT "id" FROM "teams" WHERE "abbreviation" = 'NYG'), 
 (SELECT "id" FROM "referees" WHERE "name" = 'Tony Corrente'), 
 28, 17, 'COMPLETED', 'AT&T Stadium');

-- Insert metrics
INSERT INTO "metrics" ("id", "name", "displayName", "description", "category", "dataType", "unit") VALUES
(gen_random_uuid()::text, 'passing_yards', 'Passing Yards', 'Total passing yards in a game', 'PLAYER', 'number', 'yards'),
(gen_random_uuid()::text, 'passing_touchdowns', 'Passing Touchdowns', 'Number of touchdown passes thrown', 'PLAYER', 'number', 'touchdowns'),
(gen_random_uuid()::text, 'rushing_yards', 'Rushing Yards', 'Total rushing yards in a game', 'PLAYER', 'number', 'yards'),
(gen_random_uuid()::text, 'receiving_yards', 'Receiving Yards', 'Total receiving yards in a game', 'PLAYER', 'number', 'yards'),
(gen_random_uuid()::text, 'completion_percentage', 'Completion Percentage', 'Percentage of completed passes', 'PLAYER', 'percentage', '%'),
(gen_random_uuid()::text, 'quarterback_rating', 'Quarterback Rating', 'NFL Passer Rating', 'PLAYER', 'number', 'rating'),
(gen_random_uuid()::text, 'team_total_yards', 'Total Yards', 'Total offensive yards for team', 'TEAM', 'number', 'yards'),
(gen_random_uuid()::text, 'points_scored', 'Points Scored', 'Total points scored by team', 'TEAM', 'number', 'points'),
(gen_random_uuid()::text, 'time_of_possession', 'Time of Possession', 'Time controlling the ball', 'TEAM', 'number', 'minutes'),
(gen_random_uuid()::text, 'turnover_differential', 'Turnover Differential', 'Turnovers gained minus turnovers lost', 'TEAM', 'number', 'turnovers'),
(gen_random_uuid()::text, 'third_down_conversion', 'Third Down Conversion %', 'Percentage of successful third down conversions', 'TEAM', 'percentage', '%'),
(gen_random_uuid()::text, 'red_zone_efficiency', 'Red Zone Efficiency', 'Percentage of red zone visits resulting in touchdowns', 'TEAM', 'percentage', '%'),
(gen_random_uuid()::text, 'offensive_line_pressure_rate', 'O-Line Pressure Rate', 'Rate at which offensive line allows pressure', 'POSITION', 'percentage', '%'),
(gen_random_uuid()::text, 'defensive_pressure_rate', 'Defensive Pressure Rate', 'Rate at which defense generates pressure', 'POSITION', 'percentage', '%'),
(gen_random_uuid()::text, 'penalties_called', 'Penalties Called', 'Total number of penalties called by referee crew', 'REF', 'number', 'penalties'),
(gen_random_uuid()::text, 'penalty_yards', 'Penalty Yards', 'Total penalty yards assessed', 'REF', 'number', 'yards'),
(gen_random_uuid()::text, 'weather_impact_score', 'Weather Impact Score', 'Calculated impact of weather conditions on game', 'PLAYBOOK', 'number', 'score'),
(gen_random_uuid()::text, 'home_field_advantage', 'Home Field Advantage', 'Statistical advantage for home team', 'PLAYBOOK', 'number', 'points');

-- Insert a sample user model
INSERT INTO "user_models" ("id", "name", "description", "definition") VALUES
(gen_random_uuid()::text, 'QB Performance Predictor', 'A model focusing on quarterback performance metrics', 
 '{"metrics": [{"id": "passing_yards", "weight": 0.3}, {"id": "passing_touchdowns", "weight": 0.25}, {"id": "completion_percentage", "weight": 0.2}, {"id": "quarterback_rating", "weight": 0.25}], "outcome": "win_probability", "created": "2024-01-01T00:00:00Z"}');

-- Get the model ID for creating components
DO $$
DECLARE
    model_id TEXT;
    metric_ids TEXT[];
BEGIN
    SELECT "id" INTO model_id FROM "user_models" WHERE "name" = 'QB Performance Predictor';
    
    -- Insert model components
    INSERT INTO "model_components" ("id", "modelId", "metricId", "weight") VALUES
    (gen_random_uuid()::text, model_id, (SELECT "id" FROM "metrics" WHERE "name" = 'passing_yards'), 0.3),
    (gen_random_uuid()::text, model_id, (SELECT "id" FROM "metrics" WHERE "name" = 'passing_touchdowns'), 0.25),
    (gen_random_uuid()::text, model_id, (SELECT "id" FROM "metrics" WHERE "name" = 'completion_percentage'), 0.2),
    (gen_random_uuid()::text, model_id, (SELECT "id" FROM "metrics" WHERE "name" = 'quarterback_rating'), 0.25);
END $$; 