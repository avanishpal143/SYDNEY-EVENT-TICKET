import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import LoadingSpinner from '../ui/LoadingSpinner';

// Use environment variable for Mapbox token
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN || 'pk.eyJ1IjoiYm9sdC1kZW1vIiwiYSI6ImNscnhzOWF1ZzE5OWwya3A2ZjBxaHp6MjIifQ.YxPx5Jv9fe-9aSJDWd7saQ';

const MapView = ({ 
  markers = [], 
  zoom = 12,
  center = [151.2093, -33.8688], // Sydney coordinates
  interactive = true,
  className = ''
}) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const markerRefs = useRef({});

  useEffect(() => {
    if (!mapContainer.current) return;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: center,
      zoom: zoom,
      interactive: interactive
    });

    map.current.on('load', () => {
      setIsLoading(false);
    });

    return () => {
      if (map.current) map.current.remove();
    };
  }, []);

  // Add markers when the map is loaded and markers change
  useEffect(() => {
    if (!map.current || isLoading || !markers.length) return;

    // Clear existing markers
    Object.values(markerRefs.current).forEach(marker => marker.remove());
    markerRefs.current = {};

    // Add new markers
    markers.forEach(marker => {
      const { id, coordinates, title } = marker;
      
      // Create custom marker element
      const el = document.createElement('div');
      el.className = 'cursor-pointer';
      el.innerHTML = `
        <div class="bg-primary text-white font-bold p-2 rounded-full w-6 h-6 flex items-center justify-center transform transition-transform hover:scale-110">
          <span class="sr-only">${title}</span>
        </div>
      `;
      
      // Create popup
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<p class="font-medium">${title}</p>`);
      
      // Create and add marker
      const mapMarker = new mapboxgl.Marker(el)
        .setLngLat(coordinates)
        .setPopup(popup)
        .addTo(map.current);
        
      // Store marker reference for cleanup
      markerRefs.current[id] = mapMarker;
    });

    // Fit bounds if multiple markers
    if (markers.length > 1) {
      const bounds = new mapboxgl.LngLatBounds();
      markers.forEach(marker => bounds.extend(marker.coordinates));
      map.current.fitBounds(bounds, { padding: 50 });
    }
  }, [markers, isLoading]);

  return (
    <div className={`relative h-full w-full ${className}`}>
      <div ref={mapContainer} className="h-full w-full rounded-lg overflow-hidden" />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default MapView;