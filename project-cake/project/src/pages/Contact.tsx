import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle, Heart, Sparkles } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      description: "Call us for immediate assistance",
      gradient: "from-rose-400 to-pink-400"
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@sweetdelights.com",
      description: "Send us your questions anytime",
      gradient: "from-peach-400 to-orange-400"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Downtown Bakery District",
      description: "Available for local delivery & pickup",
      gradient: "from-champagne-400 to-yellow-400"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Tue-Sat: 9AM-6PM",
      description: "Sunday & Monday by appointment",
      gradient: "from-blush-400 to-rose-400"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@sweetdelights",
      url: "https://instagram.com/sweetdelights",
      color: "bg-gradient-to-r from-pink-500 to-purple-500",
      description: "Daily cake inspiration & behind-the-scenes"
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "Sweet Delights Bakery",
      url: "https://facebook.com/sweetdelights",
      color: "bg-blue-600",
      description: "Community updates & customer stories"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-800 mb-4 animate-slide-up">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-peach-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Ready to create something magical together? We'd love to hear from you and help make your cake dreams come true.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center animate-scale-in group hover:-translate-y-2"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${info.gradient} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <info.icon className="w-10 h-10 text-white" />
                </div>
                <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${info.gradient} rounded-full mx-auto blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors duration-300">
                {info.title}
              </h3>
              <p className="text-rose-600 font-semibold mb-2">{info.details}</p>
              <p className="text-gray-600 text-sm">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-peach-200/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative">
                <div className="flex items-center mb-8">
                  <MessageCircle className="w-8 h-8 text-rose-500 mr-3" />
                  <h2 className="font-serif text-3xl font-bold text-gray-800">Send Us a Message</h2>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white/80"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white/80"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white/80"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white/80"
                    >
                      <option value="">Select a subject</option>
                      <option value="order">New Order Inquiry</option>
                      <option value="question">General Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white/80"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-rose-400 to-peach-400 text-white py-4 rounded-xl font-semibold text-lg hover:from-rose-500 hover:to-peach-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="inline w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Business Info & Social Media */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.9s' }}>
            {/* Business Hours */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <Clock className="w-8 h-8 text-rose-500 mr-3" />
                <h3 className="font-serif text-2xl font-bold text-gray-800">Business Hours</h3>
              </div>
              <div className="space-y-4">
                {[
                  { day: "Monday", hours: "Closed", special: true },
                  { day: "Tuesday - Friday", hours: "9:00 AM - 6:00 PM" },
                  { day: "Saturday", hours: "10:00 AM - 5:00 PM" },
                  { day: "Sunday", hours: "By Appointment Only", special: true }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-xl hover:bg-rose-50 transition-colors duration-200">
                    <span className="font-medium text-gray-700">{schedule.day}</span>
                    <span className={`font-medium ${schedule.special ? 'text-rose-600' : 'text-gray-600'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-rose-500 mr-3" />
                <h3 className="font-serif text-2xl font-bold text-gray-800">Follow Our Journey</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Stay updated with our latest creations, behind-the-scenes moments, and special offers by following us on social media.
              </p>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-2xl hover:bg-rose-50 transition-all duration-300 group"
                  >
                    <div className={`w-14 h-14 ${social.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <social.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800 group-hover:text-rose-600 transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-rose-600 text-sm font-medium">{social.handle}</div>
                      <div className="text-gray-500 text-xs">{social.description}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Special Notice */}
            <div className="bg-gradient-to-r from-rose-500 to-peach-500 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 to-peach-600/20 rounded-3xl"></div>
              <div className="relative">
                <div className="flex items-center mb-4">
                  <Sparkles className="w-6 h-6 mr-2 animate-float" />
                  <h4 className="font-serif text-xl font-semibold">Planning a Special Event?</h4>
                </div>
                <p className="leading-relaxed opacity-95">
                  For weddings, large celebrations, or corporate events, we recommend scheduling a consultation 
                  at least 2-3 weeks in advance to ensure availability and discuss your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;