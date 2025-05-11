import React, { useState } from 'react';
import { Calendar, MapPin, Tag, ArrowDownUp, X } from 'lucide-react';
import { formatDateForInput } from '../../utils/dateUtils';

const SearchFilters = ({ filters, onFilterChange, onClearFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleFilterChange = (key, value) => {
    onFilterChange({ ...filters, [key]: value });
  };
  
  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="bg-white shadow-md rounded-lg mb-6">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg">Filters</h2>
          <div className="flex gap-2">
            {Object.values(filters).some(value => value !== '') && (
              <button 
                onClick={onClearFilters}
                className="text-sm text-gray-600 hover:text-gray-900 flex items-center"
              >
                <X className="h-4 w-4 mr-1" />
                Clear All
              </button>
            )}
            <button 
              onClick={toggleFilters}
              className="flex items-center text-primary hover:text-primary-dark text-sm font-medium"
            >
              <ArrowDownUp className="h-4 w-4 mr-1" />
              {isOpen ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {/* Date Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Start Date
              </label>
              <input
                type="date"
                className="input-primary"
                value={filters.startDate}
                min={formatDateForInput(new Date())}
                onChange={(e) => handleFilterChange('startDate', e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                End Date
              </label>
              <input
                type="date"
                className="input-primary"
                value={filters.endDate}
                min={filters.startDate || formatDateForInput(new Date())}
                onChange={(e) => handleFilterChange('endDate', e.target.value)}
              />
            </div>
            
            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                Category
              </label>
              <select
                className="input-primary"
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="music">Music</option>
                <option value="arts">Arts & Culture</option>
                <option value="food">Food & Drink</option>
                <option value="sports">Sports</option>
                <option value="family">Family</option>
              </select>
            </div>
            
            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Location
              </label>
              <select
                className="input-primary"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
              >
                <option value="">All Locations</option>
                <option value="cbd">Sydney CBD</option>
                <option value="darlingharbour">Darling Harbour</option>
                <option value="bondi">Bondi</option>
                <option value="manly">Manly</option>
                <option value="newtown">Newtown</option>
              </select>
            </div>
            
            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Range
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  placeholder="Min"
                  className="input-primary w-1/2"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                />
                <span>-</span>
                <input
                  type="number"
                  min={filters.minPrice || 0}
                  placeholder="Max"
                  className="input-primary w-1/2"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilters;