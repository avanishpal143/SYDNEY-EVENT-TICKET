import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, Tag, Share2, Heart } from 'lucide-react';
import { formatDate, formatTime } from '../../utils/dateUtils';
import EmailCaptureModal from './EmailCaptureModal';
import { toast } from '../ui/Toaster';
import MapView from '../map/MapView';

const EventDetails = ({ event }) => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
  
  if (!event) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">Event not found or has been removed.</p>
        <button onClick={() => navigate('/')} className="mt-4 button-primary">
          Back to Home
        </button>
      </div>
    );
  }
  
  const { 
    title, 
    imageUrl, 
    date, 
    startTime,
    endTime,
    location, 
    description, 
    organizer,
    category,
    price,
    ticketUrl,
    capacity,
    coordinates,
  } = event;
  
  const handleGetTickets = () => {
    setShowEmailModal(true);
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: `Check out this event: ${title}`,
        url: window.location.href,
      })
      .catch(error => console.log('Error sharing:', error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.info(isFavorite ? 'Removed from favorites' : 'Added to favorites');
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Hero Image */}
        <div className="relative h-64 md:h-96">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-${category.toLowerCase()}-500 mb-3`}>
              {category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="p-6">
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button onClick={handleGetTickets} className="button-primary flex-grow md:flex-grow-0">
              Get Tickets
            </button>
            <button onClick={toggleFavorite} className="button-outline flex items-center">
              <Heart className={`mr-1 h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
              {isFavorite ? 'Saved' : 'Save'}
            </button>
            <button onClick={handleShare} className="button-outline flex items-center">
              <Share2 className="mr-1 h-5 w-5" />
              Share
            </button>
          </div>
          
          {/* Event Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {/* Event Info */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Date</span>
                  <div className="flex items-center mt-1">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <span className="font-medium">{formatDate(date)}</span>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Time</span>
                  <div className="flex items-center mt-1">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <span className="font-medium">
                      {formatTime(startTime)} - {formatTime(endTime)}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Price</span>
                  <div className="flex items-center mt-1">
                    <Tag className="h-5 w-5 text-primary mr-2" />
                    <span className="font-medium">
                      {price === 0 ? 'Free' : `$${price.toFixed(2)}`}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Capacity</span>
                  <div className="flex items-center mt-1">
                    <Users className="h-5 w-5 text-primary mr-2" />
                    <span className="font-medium">{capacity} people</span>
                  </div>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mb-3">About This Event</h2>
              <div className="prose max-w-none mb-8">
                <p className="whitespace-pre-line">{description}</p>
              </div>
              
              <h2 className="text-xl font-semibold mb-3">Organizer</h2>
              <div className="flex items-center mb-8">
                <div className="mr-3 bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center text-gray-700">
                  {organizer.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-medium">{organizer.name}</h3>
                  <p className="text-sm text-gray-600">{organizer.description}</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-1 space-y-6">
              {/* Location Card */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold mb-3">Location</h3>
                <div className="flex items-start mb-3">
                  <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">{location}</p>
                  </div>
                </div>
                {coordinates && (
                  <div className="h-48 rounded-lg overflow-hidden">
                    <MapView 
                      markers={[{ 
                        id: event.id, 
                        coordinates: coordinates, 
                        title: title 
                      }]} 
                      zoom={14}
                      interactive={false}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Email Capture Modal */}
      <EmailCaptureModal 
        isOpen={showEmailModal} 
        onClose={() => setShowEmailModal(false)}
        eventTitle={title}
        ticketUrl={ticketUrl}
      />
    </div>
  );
};

export default EventDetails;