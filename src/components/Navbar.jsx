
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Kurumsal Hizmetler', path: '/kurumsal-hizmetler' },
    { name: 'Ürünler', path: '/urunler' },
    { name: 'Neden Kiralama?', path: '/neden-kiralama' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500 font-montserrat',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-gray-100'
          : 'bg-white py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/ecr-logo.png"
            alt="ECR Etkinlik Bilgisayar"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-wide transition-all duration-300 relative py-2 hover:text-red-600',
                isActive(link.path)
                  ? 'text-red-600'
                  : 'text-gray-700'
              )}
            >
              {link.name}
              {isActive(link.path) && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}

          {/* CTA Button - Hızlı Kirala */}
          <Link
            to="/hizli-kirala"
            className="px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 transform hover:scale-105 bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg"
          >
            HIZLI KİRALA
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-800 hover:text-red-600 transition-colors duration-300"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-base font-medium p-3 rounded-lg transition-colors",
                    isActive(link.path)
                      ? "text-red-600 bg-red-50"
                      : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/hizli-kirala"
                onClick={() => setIsOpen(false)}
                className="w-full mt-2 bg-red-600 text-white text-center py-3.5 rounded-lg font-bold tracking-wide hover:bg-red-700 transition-all duration-300"
              >
                HIZLI KİRALA
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
