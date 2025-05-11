import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import EventsGrid from '../components/events/EventsGrid';
import MapView from '../components/map/MapView';
import { useEvents } from '../hooks/useEvents';
import { toast } from '../components/ui/Toaster';

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const viewMode = searchParams.get('view');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMapView, setIsMapView] = useState(viewMode === 'map');

  const { 
    events, 
    featuredEvents,
    isLoading, 
    error 
  } = useEvents({ category });

  useEffect(() => {
    setIsMapView(viewMode === 'map');
  }, [viewMode]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    } else {
      toast.info('Please enter a search term');
    }
  };

  const getCategoryTitle = () => {
    if (!category) return null;
    
    const titles = {
      music: 'Music Events',
      arts: 'Arts & Culture Events',
      food: 'Food & Drink Events',
      sports: 'Sports Events',
      family: 'Family-Friendly Events'
    };
    
    return titles[category] || `${category.charAt(0).toUpperCase() + category.slice(1)} Events`;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Discover Sydney's <span className="text-secondary">Best Events</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Find exciting events happening around Sydney, from concerts to food festivals and everything in between.
          </p>
          
          <form onSubmit={handleSearch} className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for events, venues, or keywords..."
                className="w-full pl-12 pr-4 py-3 rounded-full text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <button 
                type="submit" 
                className="absolute right-2 top-2 bg-primary hover:bg-primary-dark text-white p-1.5 rounded-full transition-colors"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* View Toggle */}
      <div className="container mx-auto px-4 mt-8">
        <div className="flex justify-end mb-4">
          <div className="inline-flex rounded-md shadow-sm">
            <a 
              href={isMapView ? '/' : '/?view=map'}
              className={`px-4 py-2 text-sm font-medium ${
                !isMapView 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-300 rounded-l-lg focus:z-10 focus:outline-none`}
            >
              List View
            </a>
            <a 
              href={!isMapView ? '/?view=map' : '/'}
              className={`px-4 py-2 text-sm font-medium ${
                isMapView 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-300 rounded-r-lg focus:z-10 focus:outline-none`}
            >
              Map View
            </a>
          </div>
        </div>
      </div>

      {/* Category Title */}
      {getCategoryTitle() && (
        <div className="container mx-auto px-4 mt-4 mb-0">
          <h2 className="section-title">{getCategoryTitle()}</h2>
        </div>
      )}

      {/* Map or Grid View */}
      {isMapView ? (
        <div className="container mx-auto px-4 mb-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
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
        </div>
      ) : (
        <>
          {/* Featured Events */}
          {!category && featuredEvents && featuredEvents.length > 0 && (
            <EventsGrid 
              events={featuredEvents} 
              isLoading={isLoading} 
              error={error}
              title="Featured Events"
              showViewAll
              viewAllLink="/search?featured=true"
            />
          )}
          
          {/* All Events or Category Events */}
          <EventsGrid 
            events={events} 
            isLoading={isLoading} 
            error={error}
            title={category ? '' : "Upcoming Events"}
            emptyMessage={category ? `No ${category} events found` : "No upcoming events found"}
            showViewAll={!category}
          />
        </>
      )}
      
      {/* About Sydney Events Section */}
      <section className="bg-gray-50 py-12 mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Sydney's Premier Event Guide</h2>
            <p className="text-gray-600 mb-6">
              Our platform brings you the most comprehensive listing of events happening around Sydney.
              From live music and art exhibitions to food festivals and sports matches, we've got everything
              covered to ensure you never miss out on the excitement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary text-4xl font-bold mb-2">1000+</div>
                <p className="text-gray-600">Events Listed Monthly</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary text-4xl font-bold mb-2">500+</div>
                <p className="text-gray-600">Sydney Venues</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary text-4xl font-bold mb-2">50k+</div>
                <p className="text-gray-600">Happy Attendees</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;