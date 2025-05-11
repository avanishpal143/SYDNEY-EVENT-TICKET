import { useEffect, useState } from 'react';
import { mockEvents } from '../data/mockEvents';

export const useEvent = (eventId) => {
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if (!eventId) {
      setIsLoading(false);
      return;
    }
    
    const fetchEvent = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // In a real app, we would fetch from an API
        // For now, we'll use mock data
        await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay
        
        const foundEvent = mockEvents.find(e => e.id === eventId);
        
        if (!foundEvent) {
          setError('Event not found');
        } else {
          setEvent(foundEvent);
        }
      } catch (err) {
        console.error('Error fetching event details:', err);
        setError('Failed to load event details. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchEvent();
  }, [eventId]);
  
  return { event, isLoading, error };
};