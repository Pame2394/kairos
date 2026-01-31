import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, Instagram, MessageCircle } from 'lucide-react';
import QuoteModal from './QuoteModal';

const ContactModal = ({ isOpen, onClose }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: '+506 8397 1849',
      link: 'https://wa.me/50683971849?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: '@kairosdigitallab',
      link: 'https://instagram.com/kairosdigitallab',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-600 hover:to-purple-700'
    },
    {
      icon: Mail,
      title: 'Correo Electrónico',
      description: 'contacto@kairosdigitallab.com',
      link: 'mailto:contacto@kairosdigitallab.com',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      description: '+506 8397 1849',
      link: 'tel:+50683971849',
      color: 'from-primary-500 to-primary-600',
      hoverColor: 'hover:from-primary-600 hover:to-primary-700'
    }
  ];

  const handleQuoteClick = () => {
    setIsQuoteModalOpen(true);
  };

  if (!isOpen) return null;

  return (
    <>
      {createPortal(
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-hidden"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[calc(100vh-2rem)] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-primary-900 dark:bg-gradient-to-r dark:from-primary-800 dark:to-primary-900 px-6 py-4 rounded-t-2xl flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Contáctanos</h3>
                <button
                  onClick={onClose}
                  aria-label="Cerrar"
                  className="w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-md ring-1 ring-white/70"
                >
                  <X className="w-5 h-5 text-gray-900" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Elige tu método preferido para comunicarte con nosotros
                </p>

                {/* Contact Methods Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    const isWhatsApp = method.title === 'WhatsApp';
                    const isPhone = method.title === 'Teléfono';
                    return (
                      <motion.a
                        key={index}
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className={
                          isWhatsApp
                            ? 'bg-green-600 hover:bg-green-700 dark:bg-gradient-to-br dark:from-green-500 dark:to-green-600 dark:hover:from-green-600 dark:hover:to-green-700 p-5 rounded-xl shadow-lg transition-all cursor-pointer group'
                            : isPhone
                              ? 'bg-emerald-600 hover:bg-emerald-700 dark:bg-gradient-to-br dark:from-primary-500 dark:to-primary-600 dark:hover:from-primary-600 dark:hover:to-primary-700 p-5 rounded-xl shadow-lg transition-all cursor-pointer group'
                              : `bg-gradient-to-br ${method.color} ${method.hoverColor} p-5 rounded-xl shadow-lg transition-all cursor-pointer group`
                        }
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-bold mb-1">{method.title}</h4>
                            <p className="text-white/90 text-sm break-all">{method.description}</p>
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white dark:bg-gray-800 px-4 text-sm text-gray-500 dark:text-gray-400">
                      o solicita una cotización
                    </span>
                  </div>
                </div>

                {/* Quote Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleQuoteClick}
                  className="w-full bg-gradient-to-r from-accent-500 to-orange-600 hover:from-accent-600 hover:to-orange-700 text-gray-900 dark:text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Solicitar Cotización</span>
                </motion.button>

                {/* Additional Info */}
                <div className="text-center pt-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Horario de atención: Lunes a Viernes, 8:00 AM - 6:00 PM
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    📍 Costa Rica
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
};

export default ContactModal;
