import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl" style={{ fontFamily: 'Georgia, serif' }}>Κ</span>
              </div>
              <span className="text-2xl font-bold">Kairos Digital Lab</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              El momento perfecto para la innovación. Capturamos las oportunidades 
              digitales precisas que transforman tu negocio en el instante oportuno.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#inicio"
                  className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#confianza"
                  className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent-500 mr-0 group-hover:mr-2 transition-all"></span>
                  ¿Por qué elegirnos?
                </a>
              </li>
              <li>
                <a
                  href="#quienes-somos"
                  className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent-500 mr-0 group-hover:mr-2 transition-all"></span>
                  ¿Quiénes somos?
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Demo CRM
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-accent-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Email</p>
                  <a
                    href="mailto:contacto@techsolutions.com"
                    className="hover:text-accent-500 transition-colors"
                  >
                    contacto@techsolutions.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-accent-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/50683971849?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20tecnol%C3%B3gicos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-500 transition-colors"
                  >
                    +506 8397 1849
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-accent-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Ubicación</p>
                  <p>Costa Rica</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-700 pt-8 text-center text-gray-400"
        >
          <p>
            &copy; {currentYear} Kairos Digital Lab. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
