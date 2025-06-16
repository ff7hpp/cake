import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, Heart, Sparkles } from 'lucide-react';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cakeType: '',
    flavor: '',
    size: '',
    eventDate: '',
    deliveryTime: '',
    customization: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the form data to your backend
    console.log('Order submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-20 px-4 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center animate-scale-in">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-peach-200/20 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h1 className="font-serif text-4xl font-bold text-gray-800 mb-4">
                Order Received!
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-rose-400 to-peach-400 mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Thank you for choosing Sweet Delights! We've received your custom order request and will contact you within 24 hours to discuss the details and provide a final quote.
              </p>
              <div className="bg-gradient-to-r from-blush-50 to-peach-50 rounded-2xl p-8 mb-8 border-l-4 border-rose-400">
                <h3 className="font-serif text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-rose-500" />
                  What happens next?
                </h3>
                <ul className="text-gray-600 text-left space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>We'll review your order details carefully</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Contact you to discuss customization options</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Provide a detailed quote and timeline</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Schedule your cake for creation once confirmed</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-rose-400 to-peach-400 text-white px-8 py-3 rounded-full hover:from-rose-500 hover:to-peach-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Place Another Order
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-800 mb-4 animate-slide-up">
            Place Your Order
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-peach-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Ready to create something magical? Fill out the form below and we'll bring your dream cake to life.
          </p>
        </div>

        {/* Order Form */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 animate-scale-in relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-peach-200/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-semibold text-gray-800 flex items-center">
                  <User className="w-6 h-6 mr-3 text-rose-500" />
                  Personal Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white/80"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white/80"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white/80"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Cake Details */}
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-semibold text-gray-800 flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-rose-500" />
                  Cake Details
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="cakeType" className="block text-gray-700 font-semibold mb-2">
                      Cake Type *
                    </label>
                    <select
                      id="cakeType"
                      name="cakeType"
                      required
                      value={formData.cakeType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white/80"
                    >
                      <option value="">Select type</option>
                      <option value="wedding">Wedding Cake</option>
                      <option value="birthday">Birthday Cake</option>
                      <option value="custom">Custom Design</option>
                      <option value="cupcakes">Cupcakes</option>
                      <option value="desserts">Mini Desserts</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="flavor" className="block text-gray-700 font-semibold mb-2">
                      Flavor *
                    </label>
                    <select
                      id="flavor"
                      name="flavor"
                      required
                      value={formData.flavor}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white/80"
                    >
                      <option value="">Select flavor</option>
                      <option value="vanilla">Vanilla Bean</option>
                      <option value="chocolate">Rich Chocolate</option>
                      <option value="red-velvet">Red Velvet</option>
                      <option value="lemon">Lemon Zest</option>
                      <option value="strawberry">Strawberry</option>
                      <option value="carrot">Carrot Spice</option>
                      <option value="funfetti">Funfetti</option>
                      <option value="other">Other (specify in notes)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="size" className="block text-gray-700 font-semibold mb-2">
                      Size/Servings *
                    </label>
                    <select
                      id="size"
                      name="size"
                      required
                      value={formData.size}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white/80"
                    >
                      <option value="">Select size</option>
                      <option value="small">Small (8-15 people)</option>
                      <option value="medium">Medium (16-30 people)</option>
                      <option value="large">Large (31-50 people)</option>
                      <option value="xlarge">Extra Large (51+ people)</option>
                      <option value="custom">Custom Size</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-semibold text-gray-800 flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-rose-500" />
                  Event Details
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventDate" className="block text-gray-700 font-semibold mb-2">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      required
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white/80"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="deliveryTime" className="block text-gray-700 font-semibold mb-2">
                      Preferred Delivery Time
                    </label>
                    <input
                      type="time"
                      id="deliveryTime"
                      name="deliveryTime"
                      value={formData.deliveryTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white/80"
                    />
                  </div>
                </div>
              </div>

              {/* Customization Details */}
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-semibold text-gray-800 flex items-center">
                  <MessageSquare className="w-6 h-6 mr-3 text-rose-500" />
                  Design & Customization
                </h2>
                
                <div>
                  <label htmlFor="customization" className="block text-gray-700 font-semibold mb-2">
                    Design Details
                  </label>
                  <textarea
                    id="customization"
                    name="customization"
                    rows={4}
                    value={formData.customization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white/80"
                    placeholder="Describe your vision: colors, themes, decorations, special requests..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white/80"
                    placeholder="Any special instructions, dietary restrictions, or questions..."
                  />
                </div>
              </div>

              {/* Important Information */}
              <div className="bg-gradient-to-r from-blush-50 to-peach-50 rounded-2xl p-8 border-l-4 border-rose-400">
                <h3 className="font-serif text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-rose-500" />
                  Important Information
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Custom orders require 3-7 days advance notice</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>A 50% deposit is required to confirm your order</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Final pricing will be provided after reviewing your specifications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>We'll contact you within 24 hours to discuss details</span>
                  </li>
                </ul>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-rose-400 to-peach-400 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-rose-500 hover:to-peach-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Submit Order Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;