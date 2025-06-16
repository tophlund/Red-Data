# Red Data API Specification

## Version: 1.0

This document specifies the REST API endpoints for the Red Data application.

## Base URL
- Development: `http://localhost:[port]/api/v1`
- Production: `https://[domain]/api/v1`

## Common Response Format

### Success Response
```json
{
  "data": {
    // Response data here
    "meta": {
      "total": 100,
      "page": 1,
      "limit": 50,
      "totalPages": 2,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

### Error Response
```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message"
  }
}
```

## Authentication
Currently, authentication is not implemented. Future versions will require JWT tokens in the `Authorization` header:
```
Authorization: Bearer <token>
```

## Rate Limiting
- 100 requests per minute for authenticated users
- 50 requests per minute for unauthenticated users
- Returns HTTP 429 when limit exceeded

## Pagination
All collection endpoints support pagination:
- `page`: Page number (default: 1, min: 1)
- `limit`: Items per page (default: 50, max: 100)

## Caching
- Static data cached for 5 minutes (`Cache-Control: public, max-age=300`)
- ETags supported where applicable

---

## Endpoints

## Teams

### GET /teams

Retrieve all active teams with optional filtering.

**Parameters:**
- `conference` (query, optional): Filter by conference (e.g., "AFC", "NFC")
- `division` (query, optional): Filter by division (e.g., "North", "South", "East", "West")
- `search` (query, optional): Search teams by name, abbreviation, or city
- `page` (query, optional): Page number for pagination (default: 1)
- `limit` (query, optional): Number of teams per page (default: 50, max: 100)

**Response:**
```json
{
  "data": {
    "teams": [
      {
        "id": "uuid",
        "name": "Baltimore Ravens",
        "abbreviation": "BAL",
        "city": "Baltimore",
        "conference": "AFC",
        "division": "North",
        "logoUrl": "https://example.com/logo.png",
        "activePlayersCount": 53,
        "totalGamesCount": 17,
        "createdAt": "2024-01-01T00:00:00Z",
        "updatedAt": "2024-01-01T00:00:00Z"
      }
    ],
    "groupedTeams": {
      "AFC": {
        "North": [
          // teams array
        ],
        "South": [
          // teams array
        ]
      },
      "NFC": {
        // divisions...
      }
    },
    "filterOptions": {
      "conferences": ["AFC", "NFC"],
      "divisions": ["North", "South", "East", "West"]
    },
    "meta": {
      "total": 32,
      "page": 1,
      "limit": 50,
      "totalPages": 1,
      "hasNext": false,
      "hasPrev": false
    }
  }
}
```

**Status Codes:**
- `200 OK`: Success
- `400 Bad Request`: Invalid parameters
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Server Error`: Server error

**Example Requests:**
```bash
# Get all teams
GET /api/v1/teams

# Filter by conference
GET /api/v1/teams?conference=AFC

# Filter by division
GET /api/v1/teams?division=North

# Search teams
GET /api/v1/teams?search=Ravens

# Paginated results
GET /api/v1/teams?page=1&limit=10

# Combined filters
GET /api/v1/teams?conference=AFC&division=North&limit=8
```

**Cache Headers:**
- `Cache-Control: public, max-age=300`

---

## Metrics

### GET /metrics

Retrieve all active metrics with optional filtering.

**Parameters:**
- `category` (query, optional): Filter by metric category (`PLAYER`, `TEAM`, `POSITION`, `REF`, `PLAYBOOK`)
- `search` (query, optional): Search metrics by name or description
- `page` (query, optional): Page number for pagination (default: 1)
- `limit` (query, optional): Number of metrics per page (default: 50, max: 100)

**Response:**
```json
{
  "data": {
    "metrics": [
      {
        "id": "uuid",
        "name": "passing_yards",
        "displayName": "Passing Yards",
        "description": "Total passing yards in a game",
        "category": "PLAYER",
        "dataType": "number",
        "unit": "yards",
        "isActive": true,
        "createdAt": "2024-01-01T00:00:00Z",
        "updatedAt": "2024-01-01T00:00:00Z"
      }
    ],
    "groupedMetrics": {
      "PLAYER": [
        // metrics array
      ],
      "TEAM": [
        // metrics array
      ]
    },
    "meta": {
      "total": 150,
      "page": 1,
      "limit": 50,
      "totalPages": 3,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

**Status Codes:**
- `200 OK`: Success
- `400 Bad Request`: Invalid parameters
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Server Error`: Server error

---

## Health Check

### GET /health

Check the health status of the API.

**Response:**
```json
{
  "data": {
    "status": "healthy",
    "timestamp": "2024-01-01T00:00:00Z",
    "version": "1.0.0",
    "uptime": 3600
  }
}
```

**Status Codes:**
- `200 OK`: Service is healthy
- `503 Service Unavailable`: Service is unhealthy

---

## Planned Endpoints

The following endpoints are planned for future implementation:

### Players
- `GET /players` - List players with team and position filtering
- `GET /players/{id}` - Get specific player details

### Games
- `GET /games` - List games with date and team filtering
- `GET /games/{id}` - Get specific game details

### Models
- `GET /models` - List user models (requires authentication)
- `POST /models` - Create new model (requires authentication)
- `GET /models/{id}` - Get specific model
- `PUT /models/{id}` - Update model (requires authentication)
- `DELETE /models/{id}` - Delete model (requires authentication)

### AI Features
- `POST /ai/suggestions` - Get AI metric suggestions
- `POST /ai/models` - Generate model from natural language

---

## Error Codes

| Code | Description |
|------|-------------|
| `TEAMS_FETCH_ERROR` | Failed to fetch teams from database |
| `METRICS_FETCH_ERROR` | Failed to fetch metrics from database |
| `VALIDATION_ERROR` | Request validation failed |
| `RATE_LIMIT_EXCEEDED` | Too many requests |
| `INTERNAL_ERROR` | Internal server error |

---

## Changelog

### Version 1.0
- Initial API specification
- Teams endpoint implemented
- Metrics endpoint implemented
- Health check endpoint implemented 