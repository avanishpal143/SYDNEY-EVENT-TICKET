import { format, parseISO } from 'date-fns';

export const formatDate = (dateString) => {
  try {
    const date = parseISO(dateString);
    return format(date, 'EEE, MMM d, yyyy');
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
};

export const formatTime = (timeString) => {
  try {
    // If timeString is already in the expected format (e.g., "19:30")
    if (typeof timeString === 'string' && timeString.includes(':')) {
      const [hours, minutes] = timeString.split(':');
      const date = new Date();
      date.setHours(parseInt(hours, 10));
      date.setMinutes(parseInt(minutes, 10));
      return format(date, 'h:mm a');
    }
    
    // If timeString is a date string
    const date = parseISO(timeString);
    return format(date, 'h:mm a');
  } catch (error) {
    console.error('Error formatting time:', error);
    return timeString;
  }
};

export const formatDateForInput = (date) => {
  try {
    return format(date, 'yyyy-MM-dd');
  } catch (error) {
    console.error('Error formatting date for input:', error);
    return '';
  }
};

export const isDateInRange = (dateString, startDate, endDate) => {
  if (!dateString) return false;
  
  try {
    const date = parseISO(dateString);
    
    if (startDate && !endDate) {
      const start = parseISO(startDate);
      return date >= start;
    }
    
    if (!startDate && endDate) {
      const end = parseISO(endDate);
      return date <= end;
    }
    
    if (startDate && endDate) {
      const start = parseISO(startDate);
      const end = parseISO(endDate);
      return date >= start && date <= end;
    }
    
    return true;
  } catch (error) {
    console.error('Error checking date range:', error);
    return false;
  }
};