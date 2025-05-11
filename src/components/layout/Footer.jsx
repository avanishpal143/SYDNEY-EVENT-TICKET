import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <Logo className="h-10 w-auto" light />
              <span className="ml-2 text-xl font-bold text-white">Sydney Events</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Your comprehensive guide to all events happening in Sydney, Australia.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Discover Events</h3>
            <ul className="space-y-3">
              <li><Link to="/?category=music" className="text-gray-400 hover:text-white transition-colors">Music Events</Link></li>
              <li><Link to="/?category=arts" className="text-gray-400 hover:text-white transition-colors">Arts & Culture</Link></li>
              <li><Link to="/?category=food" className="text-gray-400 hover:text-white transition-colors">Food & Drink</Link></li>
              <li><Link to="/?category=sports" className="text-gray-400 hover:text-white transition-colors">Sports</Link></li>
              <li><Link to="/?category=family" className="text-gray-400 hover:text-white transition-colors">Family-Friendly</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Popular Areas</h3>
            <ul className="space-y-3">
              <li><Link to="/?location=cbd" className="text-gray-400 hover:text-white transition-colors">Sydney CBD</Link></li>
              <li><Link to="/?location=darlingharbour" className="text-gray-400 hover:text-white transition-colors">Darling Harbour</Link></li>
              <li><Link to="/?location=bondi" className="text-gray-400 hover:text-white transition-colors">Bondi</Link></li>
              <li><Link to="/?location=manly" className="text-gray-400 hover:text-white transition-colors">Manly</Link></li>
              <li><Link to="/?location=newtown" className="text-gray-400 hover:text-white transition-colors">Newtown</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Event Street, Sydney, NSW 2000, Australia</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-gray-400 flex-shrink-0" />
                <a href="mailto:info@sydneyevents.com" className="text-gray-400 hover:text-white transition-colors">info@sydneyevents.com</a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary w-full"
                />
                <button type="submit" className="bg-primary hover:bg-primary-dark px-4 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Sydney Events. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;