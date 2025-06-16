# Red Data Analytics Platform

A visual model builder for sports analytics, enabling users to create predictive models using drag-and-drop interfaces and comprehensive NFL statistics.

## 🏈 Project Purpose

Red Data is a web application that empowers sports analysts, fantasy football enthusiasts, and data scientists to:

- **Build Visual Models:** Create predictive models using an intuitive drag-and-drop interface
- **Combine Multiple Metrics:** Mix player, team, positional, and environmental statistics  
- **Test and Validate:** Compare model predictions against historical game outcomes
- **Share and Collaborate:** Save models publicly or share privately with unique links
- **AI-Powered Suggestions:** Get intelligent metric recommendations for model improvement

## 🏗️ Architecture

- **Frontend:** Remix (React) with TypeScript and Tailwind CSS
- **Backend:** Remix full-stack with Prisma ORM
- **Database:** PostgreSQL with Redis caching
- **Deployment:** Designed for Vercel/Netlify frontend with Supabase backend
- **AI Integration:** OpenAI GPT for model suggestions and insights

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Docker and Docker Compose (for local database)
- Git

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd red-data
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start the database:**
   ```bash
   # Start PostgreSQL and Redis containers
   docker compose up -d
   ```

4. **Initialize the database:**
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Run migrations
   npm run db:migrate
   
   # Seed with sample data
   npm run db:seed
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Verify setup:**
   Visit `http://localhost:5173/api/health` to check system status.

## 📁 Project Structure

```
red-data/
├── app/                    # Remix application code
│   ├── components/         # Reusable React components
│   ├── models/            # TypeScript interfaces and types
│   ├── routes/            # Remix routes (pages and API endpoints)
│   ├── services/          # Business logic services
│   ├── stores/            # Zustand state management
│   ├── styles/            # CSS and styling files
│   └── utils/             # Utility functions and configurations
├── docs/                  # Project documentation
│   ├── database-setup.md  # Database setup guide
│   └── architecture.md    # System architecture overview
├── prisma/                # Database schema and migrations
│   ├── schema.prisma      # Database schema definition
│   └── seed.ts           # Sample data seeding script
└── public/               # Static assets
```

## 🗄️ Database Setup

The platform uses PostgreSQL as the primary database. For detailed setup instructions, see:

**👉 [Database Setup Guide](docs/database-setup.md)**

### Quick Database Commands

```bash
# Database operations
npm run db:generate     # Generate Prisma client
npm run db:migrate      # Run database migrations
npm run db:seed         # Populate with sample data
npm run db:studio       # Open Prisma Studio GUI

# Development utilities
npm run db:push         # Push schema changes (dev only)
npm run db:reset        # Reset and re-seed database
```

## 🛠️ Development Commands

```bash
# Development
npm run dev             # Start development server
npm run build           # Build for production
npm run start           # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues
npm run format          # Format code with Prettier
npm run typecheck       # Check TypeScript types

# Testing
npm run test            # Run unit tests
npm run test:coverage   # Run tests with coverage
npm run test:e2e        # Run end-to-end tests
```

## 🏗️ Data Model

The platform models NFL football data with the following core entities:

### Teams & Players
- **Teams:** NFL franchises with conference/division structure
- **Players:** Individual athletes with positions, stats, and team affiliations
- **Referees:** Game officials with experience and assignment data

### Games & Metrics
- **Games:** Individual matchups with scores, conditions, and metadata
- **Metrics:** Configurable performance indicators across categories:
  - Player metrics (passing yards, touchdowns, completion %)
  - Team metrics (total yards, turnover differential, red zone efficiency)
  - Positional metrics (offensive line pressure rate, defensive stops)
  - Environmental metrics (weather impact, home field advantage)
  - Referee metrics (penalty frequency, game control)

### User Models & AI
- **UserModels:** Custom predictive models combining weighted metrics
- **ModelComponents:** Individual metric weights within a model
- **AiSuggestions:** AI-generated recommendations for model optimization

## 🎯 Features by Phase

### ✅ Phase 1: Foundation (Complete)
- [x] Project structure and development environment
- [x] Database schema with core NFL entities
- [x] Prisma ORM integration with PostgreSQL
- [x] TypeScript interfaces and type safety
- [x] Basic API endpoints with health checks

### 🔄 Phase 2: Visual Builder (In Progress)
- [ ] Drag-and-drop model builder interface
- [ ] Metrics browsing and selection
- [ ] Weight assignment and real-time preview
- [ ] Model calculation engine
- [ ] Save/load model functionality

### 📈 Phase 3: Analytics & Visualization
- [ ] Model prediction visualization
- [ ] Historical backtesting against game outcomes
- [ ] Team comparison charts and dashboards
- [ ] Performance metrics and accuracy reporting

### 👥 Phase 4: Collaboration
- [ ] User authentication and management
- [ ] Public model sharing and discovery
- [ ] Private model collaboration with share links
- [ ] Community features and model ratings

### 🤖 Phase 5: AI Integration
- [ ] Intelligent metric suggestions
- [ ] Auto-model generation from natural language
- [ ] AI-powered insights and commentary
- [ ] Model optimization recommendations

## 🔧 Configuration

### Environment Variables

Key environment variables (see `.env.example` for complete list):

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/red_data_dev"

# Application
NODE_ENV="development"
LOG_LEVEL="debug"

# External Services (when applicable)
OPENAI_API_KEY="your-openai-api-key"
REDIS_URL="redis://localhost:6379"
```

### Feature Flags

Control feature availability through environment variables:

```bash
FEATURE_AI_SUGGESTIONS="true"  # Enable AI-powered suggestions
```

## 🧪 Testing

The project includes comprehensive testing at multiple levels:

- **Unit Tests:** Vitest for utility functions and business logic
- **Component Tests:** React Testing Library for UI components  
- **Integration Tests:** API endpoint testing with Supertest
- **E2E Tests:** Playwright for full user scenarios
- **Accessibility Tests:** Automated WCAG 2.1 AA compliance checking

```bash
npm run test              # Run all tests
npm run test:coverage     # Generate coverage report
npm run test:e2e         # Run end-to-end tests
```

## 🚀 Deployment

### Development
- Local PostgreSQL via Docker Compose
- Remix development server with hot reload

### Production
- **Frontend:** Vercel or Netlify  
- **Database:** Supabase PostgreSQL
- **Caching:** Redis (Upstash or self-hosted)
- **Monitoring:** Sentry for error tracking

See deployment guides in `docs/deployment/` for platform-specific instructions.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make changes following the coding standards
4. Add tests for new functionality
5. Ensure all tests pass: `npm run test`
6. Update documentation as needed
7. Submit a pull request

### Coding Standards

- **TypeScript:** Strict mode with explicit return types
- **Linting:** ESLint with Remix and accessibility rules
- **Formatting:** Prettier with 2-space indentation
- **Commits:** Conventional Commits format
- **Architecture:** Follow established patterns in `docs/architecture.md`

## 📚 Documentation

- [Database Setup Guide](docs/database-setup.md)
- [Architecture Overview](docs/architecture.md)
- [API Documentation](docs/api-spec.md)
- [Deployment Guides](docs/deployment/)
- [Contributing Guidelines](docs/contributing.md)

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## 🆘 Support

- **Issues:** GitHub Issues for bug reports and feature requests
- **Discussions:** GitHub Discussions for questions and community support
- **Documentation:** Comprehensive guides in the `docs/` directory

## 🙏 Acknowledgments

- NFL for providing the foundational data structure inspiration
- Prisma team for the excellent ORM and tooling
- Remix team for the full-stack framework
- Open source community for the various tools and libraries used

---

**Built with ❤️ for sports analytics enthusiasts** 