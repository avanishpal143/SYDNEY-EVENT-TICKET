import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import EventsGrid from '../components/events/EventsGrid';
import SearchFilters from '../components/search/SearchFilters';
import MapView from '../components/map/MapView';
import { useEvents } from '../hooks/useEvents';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [isMapView, setIsMapView] = useState(false);
  
  // Initialize filters from URL params
  const [filters, setFilters] = useState({
    startDate: searchParams.get('startDate') || '',
    endDate: searchParams.get('endDate') || '',
    category: searchParams.get('category') || '',
    location: searchParams.get('location') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
  });
  
  const { events, isLoading, error } = useEvents({ 
    query, 
    ...filters
  });
  
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };
  
  const handleClearFilters = () => {
    setFilters({
      startDate: '',
      endDate: '',
      category: '',
      location: '',
      minPrice: '',
      maxPrice: '',
    });
  };
  
  const getSearchTitle = () => {
    if (query) {
      return `Search Results for "${query}"`;
    }
    
    if (filters.category) {
      return `${filters.category.charAt(0).toUpperCase() + filters.category.slice(1)} Events`;
    }
    
    return "All Events";
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{getSearchTitle()}</h1>
      
      <SearchFilters 
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />

      {/* View Toggle */}
      <div className="flex justify-end mb-4">
        <div className="inline-flex rounded-md shadow-sm">
          <button 
            onClick={() => setIsMapView(false)}
            className={`px-4 py-2 text-sm font-medium ${
              !isMapView 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } border border-gray-300 rounded-l-lg focus:z-10 focus:outline-none`}
          >
            List View
          </button>
          <button 
            onClick={() => setIsMapView(true)}
            className={`px-4 py-2 text-sm font-medium ${
              isMapView 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } border border-gray-300 rounded-r-lg focus:z-10 focus:outline-none`}
          >
            Map View
          </button>
        </div>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <LoadingSpinner size="large" />
        </div>
      ) : error ? (
        <div className="text-center py-12">
          <p className="text-error mb-4">Error loading events</p>
          <button 
            onClick={() => window.location.reload()}
            className="button-primary"
          >
            Try Again
          </button>
        </div>
      ) : (
        <>
          {isMapView ? (
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="h-[600px]">
                <MapView 
                  markers={events.map(event => ({
                    id: event.id,
                    coordinates: event.coordinates,
                    title: event.title
                  }))}
                />
              </div>
            </div>
          ) : (
            <EventsGrid 
              events={events}
              isLoading={false}
              error={null}
              title=""
              emptyMessage={`No events found${query ? ` for "${query}"` : ''}`}
            />
          )}
          
          <div className="text-center text-gray-500 mt-4">
            Showing {events.length} {events.length === 1 ? 'event' : 'events'}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResultsPage;