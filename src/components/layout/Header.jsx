import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Calendar, MapPin, User } from 'lucide-react';
import Logo from '../ui/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo className="h-10 w-auto" />
            <span className="ml-2 text-xl font-bold text-primary">Sydney Events</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/?category=music" className="text-gray-700 hover:text-primary transition-colors">
              <span className="flex items-center"><Calendar className="mr-1 h-4 w-4" /> Music</span>
            </Link>
            <Link to="/?category=arts" className="text-gray-700 hover:text-primary transition-colors">
              <span className="flex items-center"><Calendar className="mr-1 h-4 w-4" /> Arts & Culture</span>
            </Link>
            <Link to="/?category=food" className="text-gray-700 hover:text-primary transition-colors">
              <span className="flex items-center"><Calendar className="mr-1 h-4 w-4" /> Food & Drink</span>
            </Link>
            <Link to="/?view=map" className="text-gray-700 hover:text-primary transition-colors">
              <span className="flex items-center"><MapPin className="mr-1 h-4 w-4" /> Map View</span>
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:block">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search events..."
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <form onSubmit={handleSearchSubmit} className="relative mb-4">
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/?category=music" 
                className="text-gray-700 hover:text-primary transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center"><Calendar className="mr-2 h-5 w-5" /> Music</span>
              </Link>
              <Link 
                to="/?category=arts" 
                className="text-gray-700 hover:text-primary transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center"><Calendar className="mr-2 h-5 w-5" /> Arts & Culture</span>
              </Link>
              <Link 
                to="/?category=food" 
                className="text-gray-700 hover:text-primary transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center"><Calendar className="mr-2 h-5 w-5" /> Food & Drink</span>
              </Link>
              <Link 
                to="/?view=map" 
                className="text-gray-700 hover:text-primary transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center"><MapPin className="mr-2 h-5 w-5" /> Map View</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;