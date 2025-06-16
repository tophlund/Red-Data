import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Red Data - Sports Analytics Visual Builder" },
    { name: "description", content: "Build and analyze custom sports models with AI-powered insights" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Red Data</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/builder"
                className="btn-primary"
                aria-label="Go to model builder"
              >
                Builder
              </Link>
              <Link
                to="/models"
                className="btn-secondary"
                aria-label="View my models"
              >
                My Models
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Build Smart Sports
            <span className="block text-primary-600">Analytics Models</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            Create custom predictive models using drag-and-drop metrics, 
            AI-powered insights, and real-time data visualization. 
            No coding required.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/builder"
              className="btn-primary text-lg px-8 py-3"
              aria-label="Start building a model"
            >
              Start Building
            </Link>
            <Link
              to="/explore"
              className="btn-secondary text-lg px-8 py-3"
              aria-label="Explore public models"
            >
              Explore Models
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-6 text-center">
            <div className="w-12 h-12 mx-auto bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Visual Builder</h3>
            <p className="text-gray-600">
              Intuitive drag-and-drop interface to combine metrics and create custom models without coding.
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-12 h-12 mx-auto bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Insights</h3>
            <p className="text-gray-600">
              Get intelligent metric suggestions and automated model optimization powered by AI.
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-12 h-12 mx-auto bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
            <p className="text-gray-600">
              Share models with your team, explore public models, and collaborate on analytics projects.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 