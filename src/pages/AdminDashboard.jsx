
import React, { useState } from 'react';
import { Plus, Search, Filter, BarChart3, Users, Heart, PawPrint } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PetCard from '../components/PetCard';

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Mock data - in real app this would come from API
  const [pets] = useState([
    {
      id: '1',
      name: 'Buddy',
      type: 'Dog',
      age: '2 years',
      price: 150,
      location: 'New York, NY',
      description: 'Friendly golden retriever who loves playing fetch and cuddling. Great with kids and other pets.',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop'
    },
    {
      id: '2',
      name: 'Whiskers',
      type: 'Cat',
      age: '1 year',
      price: 80,
      location: 'Los Angeles, CA',
      description: 'Playful tabby cat who enjoys sunbathing and chasing toy mice. Very affectionate and purrs constantly.',
      image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop'
    },
    {
      id: '3',
      name: 'Max',
      type: 'Dog',
      age: '3 years',
      price: 200,
      location: 'Chicago, IL',
      description: 'Energetic border collie mix who loves hiking and learning new tricks. Perfect for active families.',
      image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop'
    }
  ]);

  const filteredPets = pets.filter(pet => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pet.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pet.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || pet.type.toLowerCase() === filterType.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const handleEdit = (petId) => {
    console.log('Edit pet:', petId);
    // In real app, navigate to edit form
  };

  const handleDelete = (petId) => {
    console.log('Delete pet:', petId);
    // In real app, show confirmation and delete
  };

  const stats = [
    { label: 'Total Pets', value: pets.length, icon: PawPrint, color: 'text-primary' },
    { label: 'Adoptions', value: 47, icon: Heart, color: 'text-red-500' },
    { label: 'Pending', value: 12, icon: Users, color: 'text-yellow-500' },
    { label: 'This Month', value: 8, icon: BarChart3, color: 'text-green-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userType="admin" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your pet adoption listings and track adoptions</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Actions and Filters */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search pets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
                >
                  <option value="all">All Types</option>
                  <option value="dog">Dogs</option>
                  <option value="cat">Cats</option>
                  <option value="bird">Birds</option>
                  <option value="rabbit">Rabbits</option>
                </select>
              </div>
            </div>
            
            <Link
              to="/admin/upload"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Add New Pet</span>
            </Link>
          </div>
        </div>

        {/* Pet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPets.map((pet) => (
            <PetCard
              key={pet.id}
              pet={pet}
              showEditButtons={true}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>

        {filteredPets.length === 0 && (
          <div className="text-center py-12">
            <PawPrint className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No pets found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
