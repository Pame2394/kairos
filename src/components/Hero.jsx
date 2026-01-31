import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import ParticleSystem3D from './ParticleSystem3D';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden pt-16 transition-colors duration-300"
    >
      {/* Sistema de Partículas 3D Interactivo */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <ParticleSystem3D />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-primary-500/10 dark:bg-forest-500/30 px-4 py-2 rounded-full mb-6 border border-primary-500/20 dark:border-forest-500/50"
            >
              <motion.div
                animate={{ 
                  rotate: [0, -10, 10, -10, 10, 0],
                  scale: [1, 1.2, 1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
              </motion.div>
              <span className="text-yellow-600 dark:text-yellow-400 font-semibold text-sm">
                El Momento Perfecto para la Innovación Digital
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Captura el{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
                momento perfecto
              </span>
              {' '}para transformar tu negocio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
            >
              Como el dios griego del momento oportuno, en Kairos Digital Lab identificamos 
              y aprovechamos las oportunidades perfectas para digitalizar tu empresa con 
              soluciones tecnológicas precisas y oportunas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contacto')}
                className="group bg-gradient-to-r from-primary-900 to-primary-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
              >
                <span>Solicitar Cotización</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('servicios')}
                className="bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl border-2 border-primary-500 transition-all"
              >
                Ver Servicios
              </motion.button>
            </motion.div>
          </div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            {/* Mockup de laptop con UI moderna */}
            <div className="relative w-full h-96">
              {/* Laptop frame */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-full max-w-md"
                >
                  {/* Laptop screen */}
                  <div className="relative bg-gray-900 rounded-t-2xl p-3 shadow-2xl border-4 border-gray-800">
                    {/* Screen content - Dashboard UI */}
                    <div className="bg-gradient-to-br from-gray-100 to-white rounded-lg p-4 h-64 overflow-hidden">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-forest-700 rounded-lg"></div>
                          <div className="h-4 w-24 bg-gray-300 rounded"></div>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Dashboard Cards */}
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <motion.div 
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                          className="bg-gradient-to-br from-primary-500 to-forest-700 rounded-lg p-2 text-white"
                        >
                          <div className="h-2 w-12 bg-white/30 rounded mb-2"></div>
                          <div className="h-4 w-16 bg-white/50 rounded"></div>
                        </motion.div>
                        <motion.div 
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                          className="bg-gradient-to-br from-accent-500 to-orange-600 rounded-lg p-2 text-white"
                        >
                          <div className="h-2 w-12 bg-white/30 rounded mb-2"></div>
                          <div className="h-4 w-16 bg-white/50 rounded"></div>
                        </motion.div>
                      </div>

                      {/* Chart Area */}
                      <div className="bg-white rounded-lg p-2 mb-2 shadow-sm">
                        <div className="flex items-end justify-between h-20 space-x-1">
                          <motion.div 
                            animate={{ height: ['40%', '60%', '40%'] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                            className="w-full bg-primary-500 rounded-t"
                          ></motion.div>
                          <motion.div 
                            animate={{ height: ['60%', '80%', '60%'] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
                            className="w-full bg-forest-600 rounded-t"
                          ></motion.div>
                          <motion.div 
                            animate={{ height: ['50%', '90%', '50%'] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 0.4 }}
                            className="w-full bg-accent-500 rounded-t"
                          ></motion.div>
                          <motion.div 
                            animate={{ height: ['70%', '50%', '70%'] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
                            className="w-full bg-forest-700 rounded-t"
                          ></motion.div>
                        </div>
                      </div>

                      {/* Status indicators */}
                      <div className="flex space-x-2">
                        <div className="h-2 w-full bg-gray-200 rounded"></div>
                        <div className="h-2 w-full bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Laptop base */}
                  <div className="h-3 bg-gray-800 rounded-b-xl shadow-lg"></div>
                  <div className="h-1 bg-gray-700 mx-auto w-32 rounded-b-lg"></div>
                </motion.div>
              </div>
              
              {/* Texto descriptivo */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -bottom-8 left-0 right-0 text-center"
              >
                <p className="text-sm font-semibold text-primary-900 dark:text-white">Kairos Digital Lab</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Diseño y desarrollo de soluciones digitales efectivas</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
