
import React from 'react';
import { Heart, User, Settings, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// NavbarProps: userType can be 'admin', 'customer', or null

const Navbar = ({ userType }) => {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-gray-800">PawsitiveAdopt</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {userType === 'admin' && (
              <>
                <Link 
                  to="/admin/dashboard" 
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === '/admin/dashboard' 
                      ? 'text-primary bg-primary/10' 
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  <Settings className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
                <Link 
                  to="/admin/upload" 
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === '/admin/upload' 
                      ? 'text-primary bg-primary/10' 
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  <span>Upload Pet</span>
                </Link>
              </>
            )}
            
            {userType === 'customer' && (
              <>
                <Link 
                  to="/customer/browse" 
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === '/customer/browse' 
                      ? 'text-primary bg-primary/10' 
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  <span>Browse Pets</span>
                </Link>
              </>
            )}
            
            {!userType && (
              <Link 
                to="/" 
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
            )}
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-gray-700">
              <User className="h-5 w-5" />
              <span className="text-sm">
                {userType ? `${userType.charAt(0).toUpperCase() + userType.slice(1)} Portal` : 'Guest'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
