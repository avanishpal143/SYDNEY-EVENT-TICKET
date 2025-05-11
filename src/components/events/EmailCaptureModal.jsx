import React, { useState } from 'react';
import { X } from 'lucide-react';
import { toast } from '../ui/Toaster';

const EmailCaptureModal = ({ isOpen, onClose, eventTitle, ticketUrl }) => {
  const [email, setEmail] = useState('');
  const [optIn, setOptIn] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  if (!isOpen) return null;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would call an API to save the email
      // For now, we'll simulate an API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Log the captured data (in a real app, you'd send this to your backend)
      console.log('Email captured:', { email, optIn, eventTitle });
      
      toast.success('Thank you! Redirecting to ticket provider...');
      
      // Redirect to the ticket URL after a brief delay
      setTimeout(() => {
        window.open(ticketUrl, '_blank');
        onClose();
      }, 1500);
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      console.error('Error submitting email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg max-w-md w-full m-4 relative animate-scale-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">Almost there!</h2>
          <p className="text-gray-600 mb-6">
            Enter your email to continue to ticket purchase for: <span className="font-medium">{eventTitle}</span>
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="input-primary"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 mr-2"
                  checked={optIn}
                  onChange={(e) => setOptIn(e.target.checked)}
                />
                <span className="text-sm text-gray-600">
                  I agree to receive emails about upcoming events in Sydney. You can unsubscribe at any time.
                </span>
              </label>
            </div>
            
            <button
              type="submit"
              className={`w-full button-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Get Tickets'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailCaptureModal;