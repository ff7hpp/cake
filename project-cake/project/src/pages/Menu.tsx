import React from 'react';
import { Check, Star, Heart, Sparkles } from 'lucide-react';

const Menu = () => {
  const cakeTypes = [
    {
      category: "Wedding Cakes",
      description: "Elegant multi-tiered masterpieces for your special day",
      icon: "💍",
      gradient: "from-rose-100 to-pink-100",
      items: [
        {
          name: "Classic Elegance",
          description: "Traditional white cake with vanilla buttercream and delicate piping details",
          featured: true,
          sizes: [
            { size: "2-Tier (Serves 40-50)", price: "Starting from $280" },
            { size: "3-Tier (Serves 75-85)", price: "Starting from $420" },
            { size: "4-Tier (Serves 110-120)", price: "Starting from $580" }
          ]
        },
        {
          name: "Floral Fantasy",
          description: "Decorated with hand-piped buttercream flowers and cascading sugar blooms",
          sizes: [
            { size: "2-Tier (Serves 40-50)", price: "Starting from $350" },
            { size: "3-Tier (Serves 75-85)", price: "Starting from $520" },
            { size: "4-Tier (Serves 110-120)", price: "Starting from $720" }
          ]
        },
        {
          name: "Modern Minimalist",
          description: "Clean lines with metallic accents and contemporary design elements",
          sizes: [
            { size: "2-Tier (Serves 40-50)", price: "Starting from $320" },
            { size: "3-Tier (Serves 75-85)", price: "Starting from $480" },
            { size: "4-Tier (Serves 110-120)", price: "Starting from $650" }
          ]
        }
      ]
    },
    {
      category: "Birthday Cakes",
      description: "Custom designs that make birthdays unforgettable",
      icon: "🎂",
      gradient: "from-peach-100 to-orange-100",
      items: [
        {
          name: "Classic Birthday",
          description: "Your choice of flavor with buttercream frosting and personalized decorations",
          featured: true,
          sizes: [
            { size: "6\" Round (Serves 8-10)", price: "$45" },
            { size: "8\" Round (Serves 15-18)", price: "$65" },
            { size: "9x13 Sheet (Serves 25-30)", price: "$85" }
          ]
        },
        {
          name: "Character Theme",
          description: "Custom character or theme-based design with detailed decorations",
          sizes: [
            { size: "6\" Round (Serves 8-10)", price: "$75" },
            { size: "8\" Round (Serves 15-18)", price: "$95" },
            { size: "9x13 Sheet (Serves 25-30)", price: "$125" }
          ]
        },
        {
          name: "Photo Cake",
          description: "Edible photo print on your favorite cake flavor with custom border",
          sizes: [
            { size: "6\" Round (Serves 8-10)", price: "$55" },
            { size: "8\" Round (Serves 15-18)", price: "$75" },
            { size: "9x13 Sheet (Serves 25-30)", price: "$95" }
          ]
        }
      ]
    },
    {
      category: "Artisan Desserts",
      description: "Perfect bite-sized treats for any occasion",
      icon: "🧁",
      gradient: "from-champagne-100 to-yellow-100",
      items: [
        {
          name: "Gourmet Cupcakes",
          description: "Moist cupcakes with buttercream frosting and decorative toppings",
          featured: true,
          sizes: [
            { size: "1 Dozen", price: "$36" },
            { size: "2 Dozen", price: "$68" },
            { size: "3 Dozen", price: "$96" }
          ]
        },
        {
          name: "Cake Pops",
          description: "Bite-sized cake balls dipped in chocolate and beautifully decorated",
          sizes: [
            { size: "1 Dozen", price: "$30" },
            { size: "2 Dozen", price: "$56" },
            { size: "3 Dozen", price: "$78" }
          ]
        },
        {
          name: "Mini Cheesecakes",
          description: "Individual cheesecakes with various toppings and seasonal flavors",
          sizes: [
            { size: "1 Dozen", price: "$42" },
            { size: "2 Dozen", price: "$78" },
            { size: "3 Dozen", price: "$108" }
          ]
        }
      ]
    }
  ];

  const flavors = [
    { name: "Vanilla Bean", popular: true },
    { name: "Rich Chocolate", popular: true },
    { name: "Red Velvet", popular: true },
    { name: "Lemon Zest", popular: false },
    { name: "Strawberry", popular: false },
    { name: "Carrot Spice", popular: false },
    { name: "Funfetti", popular: true },
    { name: "Cookies & Cream", popular: false },
    { name: "Coconut", popular: false },
    { name: "Salted Caramel", popular: true },
    { name: "Chocolate Peanut Butter", popular: false },
    { name: "Almond", popular: false }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-800 mb-4 animate-slide-up">
            Our Menu
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-peach-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Discover our selection of handcrafted cakes and desserts, each made with premium ingredients and meticulous attention to detail.
          </p>
        </div>

        {/* Flavors Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-20 animate-scale-in relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/20 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-peach-200/20 rounded-full translate-y-12 -translate-x-12"></div>
          <div className="relative">
            <div className="text-center mb-8">
              <Sparkles className="w-8 h-8 text-champagne-500 mx-auto mb-4" />
              <h2 className="font-serif text-3xl font-bold text-gray-800 mb-4">Available Flavors</h2>
              <p className="text-gray-600">Choose from our signature flavors, each crafted to perfection</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {flavors.map((flavor, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center space-x-3 p-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    flavor.popular 
                      ? 'bg-gradient-to-r from-rose-50 to-peach-50 border-2 border-rose-200' 
                      : 'bg-gray-50 hover:bg-rose-50'
                  }`}
                >
                  {flavor.popular && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-rose-400 to-peach-400 rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-white fill-current" />
                    </div>
                  )}
                  <Check className={`w-5 h-5 ${flavor.popular ? 'text-rose-500' : 'text-gray-400'}`} />
                  <span className={`font-medium ${flavor.popular ? 'text-gray-800' : 'text-gray-600'}`}>
                    {flavor.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 flex items-center justify-center">
                <Star className="w-4 h-4 text-rose-400 mr-1 fill-current" />
                Popular choices
              </p>
            </div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="space-y-20">
          {cakeTypes.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="animate-slide-up"
              style={{ animationDelay: `${0.4 + categoryIndex * 0.2}s` }}
            >
              <div className="text-center mb-12">
                <div className="text-6xl mb-4">{category.icon}</div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  {category.category}
                </h2>
                <p className="text-gray-600 text-lg">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className={`relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                      item.featured ? 'ring-2 ring-rose-200' : ''
                    }`}
                  >
                    {item.featured && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-400 to-peach-400 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Heart className="w-3 h-3 mr-1" />
                        Popular
                      </div>
                    )}
                    
                    <div className={`h-2 bg-gradient-to-r ${category.gradient}`}></div>
                    
                    <div className="p-8">
                      <h3 className="font-serif text-2xl font-bold text-gray-800 mb-3">{item.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                      
                      <div className="space-y-3">
                        {item.sizes.map((size, sizeIndex) => (
                          <div 
                            key={sizeIndex}
                            className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl hover:bg-rose-50 transition-colors duration-200"
                          >
                            <span className="text-gray-700 font-medium">{size.size}</span>
                            <span className="text-rose-600 font-bold text-lg">{size.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order Note */}
        <div className="mt-20 bg-gradient-to-r from-rose-500 to-peach-500 rounded-3xl p-12 text-white text-center animate-scale-in relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 to-peach-600/20 rounded-3xl"></div>
          <div className="relative">
            <Heart className="w-16 h-16 mx-auto mb-6 animate-float" />
            <h3 className="font-serif text-3xl font-bold mb-6">
              Need Something Custom?
            </h3>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto opacity-95">
              All our cakes can be customized to your specific needs and vision. Contact us to discuss your dream cake and get a personalized quote.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm opacity-90">
              <div className="flex items-center justify-center">
                <Check className="w-5 h-5 mr-2" />
                <span>All prices are starting prices</span>
              </div>
              <div className="flex items-center justify-center">
                <Check className="w-5 h-5 mr-2" />
                <span>3-7 days advance notice required</span>
              </div>
              <div className="flex items-center justify-center">
                <Check className="w-5 h-5 mr-2" />
                <span>Rush orders available with additional fee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;