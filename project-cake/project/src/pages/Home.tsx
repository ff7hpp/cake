import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Instagram, Heart, Award, Users, Sparkles } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The most exquisite wedding cake! Every detail was perfection and it tasted like heaven.",
      rating: 5,
      occasion: "Wedding"
    },
    {
      name: "Michael Chen",
      text: "Ordered a birthday cake for my daughter - she was absolutely thrilled! Will definitely order again.",
      rating: 5,
      occasion: "Birthday"
    },
    {
      name: "Emma Davis",
      text: "Professional service, stunning presentation, and incredible flavors. Pure artistry!",
      rating: 5,
      occasion: "Anniversary"
    }
  ];

  const features = [
    {
      icon: Heart,
      title: "Handcrafted with Love",
      description: "Every cake is made from scratch with premium ingredients and meticulous attention to detail."
    },
    {
      icon: Award,
      title: "Award-Winning Quality",
      description: "Recognized for excellence in taste, design, and customer satisfaction."
    },
    {
      icon: Users,
      title: "Custom Creations",
      description: "Personalized designs tailored to your vision and special moments."
    },
    {
      icon: Sparkles,
      title: "Magical Moments",
      description: "Creating sweet memories that last a lifetime with every bite."
    }
  ];

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1600)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-blush-50/70 to-peach-50/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="animate-slide-up">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-6 leading-tight">
              Sweet Delights
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-peach-400 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 font-light max-w-3xl mx-auto leading-relaxed">
              Artisanal cakes and desserts handcrafted with love
            </p>
            <p className="text-base md:text-lg text-gray-500 mb-12 italic font-serif max-w-2xl mx-auto">
              "Crafted with love — every slice tells a story"
            </p>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/gallery"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-400 to-peach-400 text-white font-semibold rounded-full hover:from-rose-500 hover:to-peach-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                View Gallery
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/order"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/90 backdrop-blur-sm text-rose-500 font-semibold rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-rose-200 hover:border-rose-300"
              >
                Order Now
              </Link>
            </div>
          </div>

          {/* Featured Categories */}
          <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600">
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">Wedding Cakes</span>
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">Birthday Cakes</span>
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">Mini Sweets</span>
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">Custom Orders</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-rose-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-rose-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-slide-up">
              Why Choose Sweet Delights
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Experience the difference that passion, quality, and artistry make in every creation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-peach-100 rounded-full flex items-center justify-center mx-auto group-hover:from-rose-200 group-hover:to-peach-200 transition-all duration-300 transform group-hover:scale-110">
                    <feature.icon className="w-10 h-10 text-rose-500" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 bg-rose-400/20 rounded-full blur-xl mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Creations */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-slide-up">
              Our Signature Creations
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              From elegant wedding masterpieces to delightful everyday treats, each creation is a work of art.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Wedding Cakes",
                description: "Elegant, multi-tiered masterpieces that make your special day unforgettable",
                image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=800",
                accent: "from-rose-400 to-pink-400"
              },
              {
                title: "Birthday Celebrations",
                description: "Custom designs that bring joy and wonder to every birthday celebration",
                image: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800",
                accent: "from-peach-400 to-orange-400"
              },
              {
                title: "Artisan Desserts",
                description: "Perfect bite-sized treats that deliver big flavors and beautiful presentation",
                image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=800",
                accent: "from-champagne-400 to-yellow-400"
              }
            ].map((item, index) => (
              <div 
                key={item.title}
                className="group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${item.accent} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100`}>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blush-50 to-peach-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-slide-up">
              Sweet Words from Our Customers
            </h2>
            <p className="text-gray-600 text-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Nothing makes us happier than creating joy for our customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-champagne-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.occasion}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-peach-400 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8 animate-slide-up">
            <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-peach-400 rounded-full flex items-center justify-center mr-4">
              <Instagram className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800">
              Follow Our Sweet Journey
            </h2>
          </div>
          <p className="text-gray-600 text-lg mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Get inspired by our latest creations and behind-the-scenes moments
          </p>
          
          {/* Instagram Grid Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            {[
              "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400"
            ].map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-2xl group cursor-pointer">
                <img
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          
          <a
            href="https://instagram.com/sweetdelights"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-400 to-peach-400 text-white font-semibold rounded-full hover:from-rose-500 hover:to-peach-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl animate-slide-up"
            style={{ animationDelay: '0.6s' }}
          >
            @sweetdelights
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;