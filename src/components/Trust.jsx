import { motion } from 'framer-motion';
import { Hourglass, Sparkles, Handshake, Crown } from 'lucide-react';

const Trust = () => {
  const features = [
    {
      icon: Hourglass,
      title: 'Momento Oportuno',
      description: 'Actuamos en el instante preciso, como Kairos capturando el momento perfecto',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Sparkles,
      title: 'Arte & Técnica',
      description: 'Fusionamos arte y tecnología con la maestría de los antiguos artesanos',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Handshake,
      title: 'Alianza',
      description: 'Construimos relaciones duraderas basadas en la lealtad griega',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Crown,
      title: 'Excelencia',
      description: 'Buscamos la areté: la máxima virtud y excelencia en cada proyecto',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="confianza" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
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
            ¿Por qué{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
              elegirnos?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Como Kairos, el dios del momento oportuno, entregamos soluciones precisas 
            en el momento exacto que tu negocio las necesita
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center text-center">
                  {/* Icon with Gradient Background */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-primary-900 to-primary-500 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                100+
              </motion.p>
              <p className="text-blue-100 text-lg">Proyectos Completados</p>
            </div>
            <div>
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                98%
              </motion.p>
              <p className="text-blue-100 text-lg">Clientes Satisfechos</p>
            </div>
            <div>
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                24/7
              </motion.p>
              <p className="text-blue-100 text-lg">Soporte Disponible</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;
