import React, { useState, useEffect } from 'react';
import { X, AlertCircle, CheckCircle, Info } from 'lucide-react';

const toastTypes = {
  success: {
    icon: CheckCircle,
    bgColor: 'bg-success',
    textColor: 'text-white',
  },
  error: {
    icon: AlertCircle,
    bgColor: 'bg-error',
    textColor: 'text-white',
  },
  info: {
    icon: Info,
    bgColor: 'bg-primary',
    textColor: 'text-white',
  },
};

export const toast = {
  toasts: [],
  listeners: new Set(),

  show(message, type = 'info', duration = 3000) {
    const id = Date.now().toString();
    this.toasts.push({ id, message, type, duration });
    this.notifyListeners();
    
    if (duration) {
      setTimeout(() => {
        this.dismiss(id);
      }, duration);
    }
    
    return id;
  },
  
  dismiss(id) {
    this.toasts = this.toasts.filter(toast => toast.id !== id);
    this.notifyListeners();
  },
  
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  },
  
  notifyListeners() {
    this.listeners.forEach(listener => listener(this.toasts));
  },
  
  success(message, duration) {
    return this.show(message, 'success', duration);
  },
  
  error(message, duration) {
    return this.show(message, 'error', duration);
  },
  
  info(message, duration) {
    return this.show(message, 'info', duration);
  },
};

export const Toaster = () => {
  const [toasts, setToasts] = useState([]);
  
  useEffect(() => {
    const unsubscribe = toast.subscribe(updatedToasts => {
      setToasts([...updatedToasts]);
    });
    
    return unsubscribe;
  }, []);
  
  if (toasts.length === 0) return null;
  
  return (
    <div className="fixed bottom-0 right-0 p-4 z-50 space-y-2 max-w-sm w-full">
      {toasts.map(({ id, message, type }) => {
        const { icon: Icon, bgColor, textColor } = toastTypes[type];
        
        return (
          <div
            key={id}
            className={`${bgColor} ${textColor} rounded-lg shadow-lg p-4 flex items-start animate-slide-up`}
          >
            <Icon className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
            <div className="flex-1 mr-2">{message}</div>
            <button 
              onClick={() => toast.dismiss(id)}
              className="text-gray-200 hover:text-white focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Toaster;