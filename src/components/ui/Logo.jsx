import React from 'react';
import { CalendarClock } from 'lucide-react';

const Logo = ({ className, light = false }) => {
  const colorClass = light ? 'text-white' : 'text-primary';
  
  return (
    <div className={`${className} flex items-center justify-center`}>
      <CalendarClock className={`h-full w-full ${colorClass}`} />
    </div>
  );
};

export default Logo;