import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="button-primary flex items-center justify-center">
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <Link to="/search" className="button-outline flex items-center justify-center">
            <Search className="mr-2 h-5 w-5" />
            Search Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;