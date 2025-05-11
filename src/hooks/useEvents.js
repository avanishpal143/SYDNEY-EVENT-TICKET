import { useEffect, useState } from 'react';
import { isDateInRange } from '../utils/dateUtils';
import { mockEvents } from '../data/mockEvents';

export const useEvents = ({
  query = '',
  category = '',
  location = '',
  startDate = '',
  endDate = '',
  minPrice = '',
  maxPrice = '',
  featured = false,
  exclude = '',
  limit = 0
} = {}) => {
  const [events, setEvents] = useState([]);
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // In a real app, we would fetch from an API
        // For now, we'll use mock data and filter it client-side
        await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay
        
        // Filter events based on query params
        let filteredEvents = [...mockEvents];
        
        // Filter by search query
        if (query) {
          const searchQuery = query.toLowerCase();
          filteredEvents = filteredEvents.filter(event => 
            event.title.toLowerCase().includes(searchQuery) ||
            event.description.toLowerCase().includes(searchQuery) ||
            event.location.toLowerCase().includes(searchQuery)
          );
        }
        
        // Filter by category
        if (category) {
          filteredEvents = filteredEvents.filter(event => 
            event.category.toLowerCase() === category.toLowerCase()
          );
        }
        
        // Filter by location
        if (location) {
          filteredEvents = filteredEvents.filter(event => 
            event.locationSlug === location
          );
        }
        
        // Filter by date range
        if (startDate || endDate) {
          filteredEvents = filteredEvents.filter(event => 
            isDateInRange(event.date, startDate, endDate)
          );
        }
        
        // Filter by price range
        if (minPrice !== '') {
          filteredEvents = filteredEvents.filter(event => 
            event.price >= parseFloat(minPrice)
          );
        }
        
        if (maxPrice !== '') {
          filteredEvents = filteredEvents.filter(event => 
            event.price <= parseFloat(maxPrice)
          );
        }
        
        // Filter featured events
        if (featured) {
          filteredEvents = filteredEvents.filter(event => event.featured);
        }
        
        // Exclude specific event
        if (exclude) {
          filteredEvents = filteredEvents.filter(event => event.id !== exclude);
        }
        
        // Sort by date (nearest first)
        filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        // Apply limit if specified
        if (limit > 0) {
          filteredEvents = filteredEvents.slice(0, limit);
        }
        
        // Get featured events first to avoid initialization error
        const featuredEventsData = mockEvents.filter(event => event.featured);
        setFeaturedEvents(featuredEventsData);
        
        // Then set filtered events
        setEvents(filteredEvents);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load events. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchEvents();
  }, [query, category, location, startDate, endDate, minPrice, maxPrice, featured, exclude, limit]);
  
  return { events, featuredEvents, isLoading, error };
};