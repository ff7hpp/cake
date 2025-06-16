import React from 'react';
import { Heart, Award, Users, Clock, Star, Sparkles } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Heart, label: 'Happy Customers', value: '500+', color: 'from-rose-400 to-pink-400' },
    { icon: Award, label: 'Years Experience', value: '8+', color: 'from-peach-400 to-orange-400' },
    { icon: Users, label: 'Wedding Cakes', value: '200+', color: 'from-champagne-400 to-yellow-400' },
    { icon: Clock, label: 'Hours of Love', value: '1000+', color: 'from-blush-400 to-rose-400' }
  ];

  const values = [
    {
      title: "Premium Ingredients",
      description: "We source only the finest, freshest ingredients from trusted suppliers to ensure every bite is pure perfection.",
      icon: "🌟",
      gradient: "from-rose-100 to-pink-100"
    },
    {
      title: "Artisan Craftsmanship",
      description: "Every cake is uniquely designed and handcrafted to match your vision and celebrate your special moment in style.",
      icon: "🎨",
      gradient: "from-peach-100 to-orange-100"
    },
    {
      title: "Personal Touch",
      description: "From initial consultation to final delivery, we provide personalized service that makes your experience truly memorable.",
      icon: "💖",
      gradient: "from-champagne-100 to-yellow-100"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-800 mb-4 animate-slide-up">
            About Sweet Delights
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-peach-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            A story of passion, dedication, and the sweetest moments shared with our community.
          </p>
        </div>

        {/* Main Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="animate-slide-in-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-200 to-peach-200 rounded-3xl blur-2xl opacity-30"></div>
              <img
                src="https://images.pexels.com/photos/3992181/pexels-photo-3992181.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sarah, the master baker at work"
                className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-rose-400 to-peach-400 rounded-full flex items-center justify-center shadow-2xl">
                <Heart className="w-16 h-16 text-white animate-float" />
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="mb-6">
              <Sparkles className="w-8 h-8 text-champagne-500 mb-4" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Meet Sarah, Your Pastry Artist
              </h2>
            </div>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                What started as a childhood fascination with my grandmother's kitchen has blossomed into a 
                lifelong passion for creating beautiful, delicious cakes that bring joy to life's most 
                precious moments.
              </p>
              <p>
                After completing my culinary arts degree and working in renowned patisseries across the country, 
                I founded Sweet Delights in 2016 with a simple mission: to craft not just cakes, but memories 
                that will be treasured forever.
              </p>
              <p>
                Every cake that leaves our kitchen is a piece of art, meticulously designed and baked with 
                the finest ingredients. From intimate birthday celebrations to grand wedding festivities, 
                I pour my heart into every creation.
              </p>
            </div>
            
            <div className="mt-8 p-8 bg-gradient-to-r from-blush-50 to-peach-50 rounded-3xl border-l-4 border-rose-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/30 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-champagne-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic text-lg font-medium leading-relaxed mb-4">
                  "My greatest joy comes from seeing the smiles on my customers' faces when they see their 
                  dream cake come to life. Each cake tells a story, and I'm honored to be part of yours."
                </p>
                <p className="text-rose-600 font-semibold">- Sarah Martinez, Founder & Master Baker</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 mb-24 animate-scale-in relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-rose-50/50 to-peach-50/50 rounded-3xl"></div>
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="font-serif text-3xl font-bold text-gray-800 mb-4">Our Sweet Journey in Numbers</h3>
              <p className="text-gray-600">Every number represents a smile, a celebration, a memory made sweeter</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <stat.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full mx-auto blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>
                  <div className="font-serif text-4xl font-bold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-slide-up">
              What Makes Us Special
            </h2>
            <p className="text-gray-600 text-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Our commitment to excellence goes beyond just baking
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${value.gradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center animate-slide-up group hover:-translate-y-2`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4 group-hover:text-rose-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-gradient-to-r from-rose-500 to-peach-500 rounded-3xl p-12 text-white animate-scale-in relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 to-peach-600/20 rounded-3xl"></div>
          <div className="relative">
            <Heart className="w-16 h-16 mx-auto mb-6 animate-float" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              "Baking Joy into Every Detail"
            </h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto opacity-95">
              At Sweet Delights, we believe that every celebration deserves something extraordinary. 
              We don't just bake cakes; we craft edible works of art that become the centerpiece of your most cherished moments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;