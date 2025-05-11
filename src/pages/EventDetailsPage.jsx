import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EventDetails from '../components/events/EventDetails';
import EventsGrid from '../components/events/EventsGrid';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { useEvent } from '../hooks/useEvent';
import { useEvents } from '../hooks/useEvents';

const EventDetailsPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { event, isLoading, error } = useEvent(eventId);
  const { events: relatedEvents } = useEvents({ 
    category: event?.category,
    exclude: eventId,
    limit: 4
  });
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [eventId]);
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <LoadingSpinner size="large" />
      </div>
    );
  }
  
  if (error || !event) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl text-gray-800 mb-4">Event Not Found</h1>
        <p className="text-gray-600 mb-8">
          The event you're looking for doesn't exist or has been removed.
        </p>
        <button 
          onClick={() => navigate('/')}
          className="button-primary"
        >
          Back to Home
        </button>
      </div>
    );
  }
  
  return (
    <div>
      <EventDetails event={event} />
      
      {relatedEvents && relatedEvents.length > 0 && (
        <div className="mt-12 mb-16">
          <EventsGrid 
            events={relatedEvents}
            isLoading={false}
            error={null}
            title="Similar Events You Might Like"
            emptyMessage="No related events found"
          />
        </div>
      )}
    </div>
  );
};

export default EventDetailsPage;