## Key Components

### Frontend (React/Remix)

- **Builder Interface** (`app/routes/builder.tsx`): Visual model construction interface
- **Metrics Browser** (`app/components/MetricsBrowser.tsx`): Searchable metric selection
- **Model Canvas** (`app/components/ModelCanvas.tsx`): Drag-and-drop model construction
- **Real-time Preview** (`app/components/ModelPreview.tsx`): Live model calculations and predictions
- **Model Outcome Specifications** (`app/utils/outcomeSpecifications.ts`): Comprehensive outcome type definitions and validation

### Backend Services

- **Model Calculation Engine** (`app/services/modelCalculation.ts`): Core prediction logic
- **Outcome Processing** (`app/utils/outcomeSpecifications.ts`): Advanced outcome handling with 14+ prediction types
- **API Routes** (`app/routes/api/`): RESTful endpoints for data access 