
import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Heart, PawPrint, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-teal-50">
      <Navbar />
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Find Your Perfect
              <span className="text-primary block">Furry Friend</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Welcome to PawsitiveAdopt - where loving families meet pets in need of homes. 
              Every adoption is a new beginning filled with unconditional love and joy.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
                <PawPrint className="h-5 w-5 text-primary" />
                <span className="text-gray-700">500+ Happy Adoptions</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Heart className="h-5 w-5 text-red-500" />
                <span className="text-gray-700">Loving Care Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Users className="h-5 w-5 text-secondary" />
                <span className="text-gray-700">Trusted Community</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link 
              to="/admin/signin"
              className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Admin Portal</h2>
              <p className="text-gray-600 mb-6">
                Manage pet listings, upload new pets for adoption, and oversee the adoption process. 
                Help connect pets with their forever families.
              </p>
              <div className="flex items-center text-primary font-medium group-hover:text-primary/80">
                <span>Access Admin Dashboard</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
            
            <Link 
              to="/customer/signin"
              className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-secondary/20"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-xl mb-6 group-hover:bg-secondary/20 transition-colors">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Find a Pet</h2>
              <p className="text-gray-600 mb-6">
                Browse through our wonderful selection of pets waiting for their forever homes. 
                Find your perfect companion today!
              </p>
              <div className="flex items-center text-secondary font-medium group-hover:text-secondary/80">
                <span>Start Browsing Pets</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose PawsitiveAdopt?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Verified Pets</h4>
                  <p className="text-sm text-gray-600">All pets are health-checked and ready for adoption</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Support Network</h4>
                  <p className="text-sm text-gray-600">Ongoing support for successful adoptions</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <PawPrint className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Perfect Matches</h4>
                  <p className="text-sm text-gray-600">Find the pet that fits your lifestyle perfectly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
