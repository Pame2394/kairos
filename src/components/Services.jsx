import { motion } from 'framer-motion';
import { Globe, Cog, FileText, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Páginas Web',
      description:
        'Diseño y desarrollo de sitios web modernos, responsivos y optimizados para SEO. Tu presencia digital profesional.',
      color: 'from-blue-500 to-blue-600',
      delay: 0,
    },
    {
      icon: Cog,
      title: 'Automatización de Sistemas',
      description:
        'Optimiza tus procesos empresariales con soluciones automatizadas. Ahorra tiempo y reduce errores operativos.',
      color: 'from-purple-500 to-purple-600',
      delay: 0.1,
    },
    {
      icon: FileText,
      title: 'Factura Electrónica',
      description:
        'Implementación completa de sistemas de facturación electrónica conforme a normativas. Simplifica tu contabilidad.',
      color: 'from-green-500 to-green-600',
      delay: 0.2,
    },
    {
      icon: Calendar,
      title: 'Web App (CRM)',
      description:
        'Desarrollo de sistemas personalizados para la gestión de clientes, agendas, ventas y flujos operativos. Incluye módulos de clientes, agenda automática, seguimiento comercial, tareas automáticas, reportes e integración con otros servicios.',
      color: 'from-orange-500 to-orange-600',
      delay: 0.3,
    },
  ];

  return (
    <section id="servicios" className="py-20 md:py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestros{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
              Servicios
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Soluciones tecnológicas integrales diseñadas para impulsar tu negocio
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: service.delay }}
                whileHover={{ y: -10 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`relative w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-5 shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 dark:group-hover:text-forest-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} rounded-full`}
                ></motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
