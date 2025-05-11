import React from 'react';
import EventCard from './EventCard';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../ui/LoadingSpinner';

const EventsGrid = ({ 
  events, 
  isLoading, 
  error, 
  title = "Upcoming Events", 
  emptyMessage = "No events found",
  showViewAll = false,
  viewAllLink = "/search"
}) => {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-error mb-4">Failed to load events</p>
        <button 
          onClick={() => window.location.reload()}
          className="button-primary"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!events || events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 mb-4">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="section-title">{title}</h2>
        {showViewAll && (
          <button 
            onClick={() => navigate(viewAllLink)}
            className="button-outline"
          >
            View All
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsGrid;