import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import QuoteModal from './QuoteModal';
import ContactModal from './ContactModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.03 }} className="flex items-center space-x-3">
            <img src="/src/assets/kairos-logo.svg" alt="Kairos logo" className="w-10 h-10 rounded-md shadow" />
            <div className="flex flex-col leading-tight">
              <span className="text-lg md:text-xl font-bold text-primary-900 dark:text-white">Kairos Digital Lab</span>
              <span className="text-xs text-gray-500 dark:text-gray-300">Data • AI • Automation</span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-forest-500 transition-colors font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('quienes-somos')}
              className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-forest-500 transition-colors font-medium"
            >
              ¿Quiénes somos?
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-forest-500 transition-colors font-medium"
            >
              Demo CRM
            </button>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-forest-500 transition-colors font-medium"
            >
              Contacto
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-gradient-to-r from-accent-500 to-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Solicitar Cotización
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-forest-500 transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4 space-y-3"
          >
            <button
              onClick={() => scrollToSection('servicios')}
              className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('quienes-somos')}
              className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              ¿Quiénes somos?
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              Demo CRM
            </button>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              Contacto
            </button>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="block w-full bg-gradient-to-r from-accent-500 to-orange-600 text-white px-4 py-2.5 rounded-lg font-semibold shadow-lg"
            >
              Solicitar Cotización
            </button>
          </motion.nav>
        )}
      </div>
      
      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      
      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </motion.header>
  );
};

export default Header;
