import { motion } from 'framer-motion';
import { Heart, Lightbulb, Users, Target } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Sin barreras ni límites',
    },
    {
      icon: Heart,
      title: 'Pasión',
      description: 'En cada proyecto',
    },
    {
      icon: Users,
      title: 'Enfoque Humano',
      description: 'Soñamos junto a ti',
    },
    {
      icon: Target,
      title: 'Compromiso',
      description: 'Total con tus objetivos',
    },
  ];

  return (
    <section id="quienes-somos" className="py-20 md:py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
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
            ¿Quiénes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
              somos?
            </span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              En <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Kairos Digital Lab</span> somos un equipo apasionado por la innovación, 
              la creatividad y las soluciones que transforman ideas en realidades. Creemos que no existen límites 
              cuando se trata de imaginar, diseñar y construir experiencias digitales únicas.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Nos gusta soñar junto a nuestros clientes, entender sus necesidades y convertir cada visión en un 
              proyecto funcional, estético y estratégico. Trabajamos con dedicación, curiosidad y un enfoque humano 
              que nos impulsa a crear herramientas que realmente marcan la diferencia.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              En cada línea de código, en cada diseño y en cada solución, ponemos nuestra esencia:{' '}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
                innovación sin barreras
              </span>{' '}
              y{' '}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
                compromiso total
              </span>{' '}
              con tus objetivos.
            </p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary-500 to-accent-500 rounded-full p-1">
            <div className="bg-white dark:bg-gray-900 rounded-full px-8 py-3">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500 font-bold text-lg">
                Creamos el futuro digital, hoy
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
