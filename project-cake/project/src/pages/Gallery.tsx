import React, { useState } from 'react';
import { X, Filter } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Creations', count: 12 },
    { id: 'wedding', name: 'Wedding Cakes', count: 4 },
    { id: 'birthday', name: 'Birthday Cakes', count: 3 },
    { id: 'cupcakes', name: 'Cupcakes', count: 2 },
    { id: 'seasonal', name: 'Seasonal', count: 3 }
  ];

  const images = [
    {
      url: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'wedding',
      title: 'Elegant Three-Tier Wedding Cake',
      description: 'Classic white fondant with delicate sugar flowers'
    },
    {
      url: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'birthday',
      title: 'Rainbow Birthday Celebration',
      description: 'Colorful layers with buttercream frosting'
    },
    {
      url: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'cupcakes',
      title: 'Artisan Cupcake Collection',
      description: 'Assorted flavors with decorative toppings'
    },
    {
      url: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'seasonal',
      title: 'Spring Garden Cake',
      description: 'Floral design with seasonal decorations'
    },
    {
      url: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'wedding',
      title: 'Rustic Wedding Masterpiece',
      description: 'Semi-naked cake with fresh berries'
    },
    {
      url: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'birthday',
      title: 'Chocolate Dream Cake',
      description: 'Rich chocolate layers with ganache'
    },
    {
      url: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'cupcakes',
      title: 'Mini Dessert Paradise',
      description: 'Variety of mini cakes and treats'
    },
    {
      url: 'https://images.pexels.com/photos/1786558/pexels-photo-1786558.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'seasonal',
      title: 'Holiday Themed Creation',
      description: 'Festive design with seasonal elements'
    },
    {
      url: 'https://images.pexels.com/photos/1998911/pexels-photo-1998911.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'wedding',
      title: 'Modern Minimalist Wedding',
      description: 'Clean lines with gold accents'
    },
    {
      url: 'https://images.pexels.com/photos/3992181/pexels-photo-3992181.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'birthday',
      title: 'Princess Castle Cake',
      description: 'Whimsical design for special celebrations'
    },
    {
      url: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'wedding',
      title: 'Vintage Romance',
      description: 'Lace-inspired piping with pearl details'
    },
    {
      url: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'seasonal',
      title: 'Autumn Harvest Cake',
      description: 'Warm colors with seasonal fruit decorations'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-800 mb-4 animate-slide-up">
            Our Gallery
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-peach-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Explore our collection of handcrafted masterpieces, each one telling a unique story of celebration and joy.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center justify-center mb-6">
            <Filter className="w-5 h-5 text-gray-600 mr-2" />
            <span className="text-gray-600 font-medium">Filter by Category</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-rose-400 to-peach-400 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-rose-50 hover:text-rose-500 shadow-md hover:shadow-lg'
                }`}
              >
                <span>{category.name}</span>
                <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-white/20'
                    : 'bg-gray-100 group-hover:bg-rose-100'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-lg font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-gray-600 mb-2">No items found</h3>
            <p className="text-gray-500">Try selecting a different category to see more creations.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in" 
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-rose-300 transition-colors duration-200 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;