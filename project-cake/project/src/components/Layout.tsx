import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Instagram, Phone, Mail } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Order', href: '/order' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory-50 via-blush-50 to-peach-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-xl border-b border-blush-100/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Heart className="w-10 h-10 text-rose-400 group-hover:text-rose-500 transition-colors duration-300" />
                <div className="absolute inset-0 w-10 h-10 bg-rose-400/20 rounded-full blur-lg group-hover:bg-rose-500/30 transition-all duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-gray-800 group-hover:text-rose-600 transition-colors duration-300">
                  Sweet Delights
                </span>
                <span className="text-xs text-gray-500 font-medium tracking-wider">
                  ARTISANAL PATISSERIE
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-rose-500 group ${
                    location.pathname === item.href
                      ? 'text-rose-500'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-peach-400 transition-all duration-300 group-hover:w-full ${
                    location.pathname === item.href ? 'w-full' : ''
                  }`}></span>
                </Link>
              ))}
              <Link
                to="/order"
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-rose-400 to-peach-400 text-white font-medium rounded-full hover:from-rose-500 hover:to-peach-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Order Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-xl text-gray-700 hover:text-rose-500 hover:bg-rose-50 transition-all duration-300"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-blush-100/50 shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    location.pathname === item.href
                      ? 'text-rose-500 bg-rose-50'
                      : 'text-gray-700 hover:text-rose-500 hover:bg-rose-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/order"
                className="block mt-4 px-4 py-3 bg-gradient-to-r from-rose-400 to-peach-400 text-white font-medium rounded-xl text-center hover:from-rose-500 hover:to-peach-500 transition-all duration-300"
              >
                Order Now
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Floating Order Button (Mobile) */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <Link
          to="/order"
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-rose-400 to-peach-400 text-white rounded-full shadow-2xl hover:from-rose-500 hover:to-peach-500 transition-all duration-300 transform hover:scale-110 animate-float"
        >
          <Heart className="w-6 h-6" />
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/20 to-peach-900/20"></div>
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="w-8 h-8 text-rose-400" />
                <div>
                  <span className="font-serif text-2xl font-bold">Sweet Delights</span>
                  <p className="text-xs text-gray-400 font-medium tracking-wider">ARTISANAL PATISSERIE</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
                Crafting beautiful, delicious cakes and desserts with love and attention to detail. 
                Every creation tells a story, and we're honored to be part of yours.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/sweetdelights"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-rose-500 to-peach-500 rounded-full flex items-center justify-center hover:from-rose-600 hover:to-peach-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4 text-rose-300">Quick Links</h3>
              <div className="space-y-2">
                {navigation.slice(0, 4).map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4 text-rose-300">Contact</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@sweetdelights.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Instagram className="w-4 h-4" />
                  <span>@sweetdelights</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-400">
              &copy; 2024 Sweet Delights. Crafted with love. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;