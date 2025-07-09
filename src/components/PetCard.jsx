
import React from 'react';
import { MapPin, Heart, Calendar, DollarSign } from 'lucide-react';

// Removed TypeScript interfaces and React.FC usage
const PetCard = ({
  pet, 
  showAdoptButton = false, 
  showEditButtons = false,
  onAdopt,
  onEdit,
  onDelete
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg pet-card-hover overflow-hidden">
      <div className="relative">
        <img 
          src={pet.image} 
          alt={pet.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
            {pet.type}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800">{pet.name}</h3>
          <div className="flex items-center text-primary font-bold">
            <DollarSign className="h-4 w-4" />
            <span>{pet.price}</span>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{pet.age} old</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{pet.location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {pet.description}
        </p>
        
        <div className="flex gap-2">
          {showAdoptButton && (
            <button 
              onClick={() => onAdopt?.(pet.id)}
              className="flex-1 bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <Heart className="h-4 w-4" />
              <span>Adopt Now</span>
            </button>
          )}
          
          {showEditButtons && (
            <>
              <button 
                onClick={() => onEdit?.(pet.id)}
                className="flex-1 bg-secondary hover:bg-secondary/90 text-white py-2 px-4 rounded-lg font-medium transition-colors"
              >
                Edit
              </button>
              <button 
                onClick={() => onDelete?.(pet.id)}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-medium transition-colors"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetCard;
