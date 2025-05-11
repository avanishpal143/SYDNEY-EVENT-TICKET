import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { formatDate, formatTime } from '../../utils/dateUtils';

const EventCard = ({ event }) => {
  const { 
    id, 
    title, 
    imageUrl, 
    date, 
    startTime, 
    endTime,
    location, 
    category,
    price
  } = event;

  // Generate category badge class based on category
  const getCategoryClass = (category) => {
    const categories = {
      music: 'bg-blue-100 text-blue-800',
      arts: 'bg-purple-100 text-purple-800',
      food: 'bg-orange-100 text-orange-800',
      sports: 'bg-green-100 text-green-800',
      family: 'bg-yellow-100 text-yellow-800',
      default: 'bg-gray-100 text-gray-800'
    };
    
    return categories[category.toLowerCase()] || categories.default;
  };

  return (
    <div className="event-card bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
      <Link to={`/events/${id}`} className="relative block overflow-hidden h-48">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 w-full p-3 overlay-gradient">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryClass(category)}`}>
            {category}
          </span>
        </div>
      </Link>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center mb-2">
          <Calendar className="h-4 w-4 text-primary mr-1" />
          <span className="event-date">{formatDate(date)}</span>
        </div>
        
        <Link to={`/events/${id}`} className="mb-2">
          <h3 className="event-title line-clamp-2">{title}</h3>
        </Link>
        
        <div className="flex items-center mb-2">
          <MapPin className="h-4 w-4 text-gray-500 mr-1" />
          <span className="event-location line-clamp-1">{location}</span>
        </div>
        
        <div className="flex items-center mb-3">
          <Clock className="h-4 w-4 text-gray-500 mr-1" />
          <span className="text-sm text-gray-600">
            {formatTime(startTime)} - {formatTime(endTime)}
          </span>
        </div>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="font-medium">
            {price === 0 ? 'Free' : `$${price.toFixed(2)}`}
          </span>
          <Link 
            to={`/events/${id}`} 
            className="button-outline py-1 px-3 text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;