import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  CheckCircle, 
  Tag,
  LayoutDashboard,
  Users,
  FileText,
  X
} from 'lucide-react';

const CRMDemo = () => {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    clientName: '',
    date: '',
    time: '',
    type: ''
  });
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const appointmentTypes = [
    'Consulta',
    'Reunión de seguimiento',
    'Demo de producto',
    'Soporte técnico',
    'Capacitación'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setShowError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación simple
    if (!formData.clientName || !formData.date || !formData.time || !formData.type) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    // Crear nueva cita
    const newAppointment = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toLocaleTimeString()
    };

    setAppointments([newAppointment, ...appointments]);
    
    // Mostrar mensaje de éxito
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);

    // Limpiar formulario
    setFormData({
      clientName: '',
      date: '',
      time: '',
      type: ''
    });
  };

  const removeAppointment = (id) => {
    setAppointments(appointments.filter(apt => apt.id !== id));
  };

  return (
    <section id="demo" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Prueba nuestro{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
              CRM en vivo
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experimenta cómo funciona. Crea una cita ficticia en menos de 10 segundos.
          </p>
        </motion.div>

        {/* Demo Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          {/* Fake Dashboard Header */}
          <div className="bg-gradient-to-r from-primary-900 to-primary-700 dark:from-primary-800 dark:to-primary-900 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold" style={{ fontFamily: 'Georgia, serif' }}>Κ</span>
              </div>
              <span className="text-white font-bold text-lg">Kairos CRM</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/80 text-sm hidden sm:inline">Demo Mode</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Minimal Sidebar */}
            <div className="lg:w-20 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex lg:flex-col items-center justify-center lg:justify-start py-6 space-x-4 lg:space-x-0 lg:space-y-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center cursor-pointer"
              >
                <LayoutDashboard className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-xl flex items-center justify-center cursor-pointer"
              >
                <Users className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-xl flex items-center justify-center cursor-pointer"
              >
                <FileText className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 lg:p-8">
              <div className="max-w-4xl mx-auto">
                {/* Title */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Crear Nueva Cita
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Completa los campos para agendar una cita con tu cliente
                  </p>
                </div>

                {/* Success Message */}
                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <span className="text-green-800 dark:text-green-300 font-medium">
                        ¡Cita creada exitosamente!
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Error Message */}
                <AnimatePresence>
                  {showError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center space-x-3"
                    >
                      <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                      <span className="text-red-800 dark:text-red-300 font-medium">
                        Por favor completa todos los campos
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Form */}
                  <div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Nombre del Cliente */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Nombre del Cliente
                        </label>
                        <input
                          type="text"
                          name="clientName"
                          value={formData.clientName}
                          onChange={handleInputChange}
                          placeholder="Ej: Ana Gómez"
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                        />
                      </div>

                      {/* Fecha */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          <Calendar className="w-4 h-4 inline mr-2" />
                          Fecha
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                        />
                      </div>

                      {/* Hora */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          <Clock className="w-4 h-4 inline mr-2" />
                          Hora
                        </label>
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                        />
                      </div>

                      {/* Tipo de Cita */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          <Tag className="w-4 h-4 inline mr-2" />
                          Tipo de Cita
                        </label>
                        <select
                          name="type"
                          value={formData.type}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white cursor-pointer"
                        >
                          <option value="">Selecciona un tipo</option>
                          {appointmentTypes.map((type, index) => (
                            <option key={index} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <CheckCircle className="w-5 h-5" />
                        <span>Crear Cita</span>
                      </motion.button>
                    </form>
                  </div>

                  {/* Appointments List */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-primary-500" />
                      Citas Creadas ({appointments.length})
                    </h4>
                    
                    <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                      <AnimatePresence>
                        {appointments.length === 0 ? (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12"
                          >
                            <Calendar className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                            <p className="text-gray-500 dark:text-gray-400">
                              Aún no hay citas creadas
                            </p>
                          </motion.div>
                        ) : (
                          appointments.map((apt, index) => (
                            <motion.div
                              key={apt.id}
                              initial={{ opacity: 0, scale: 0.8, y: -20 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.8, x: 100 }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 border border-primary-200 dark:border-primary-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all relative group"
                            >
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => removeAppointment(apt.id)}
                                className="absolute top-3 right-3 w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X className="w-4 h-4 text-white" />
                              </motion.button>
                              
                              <div className="flex items-start space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <CheckCircle className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h5 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                                    <User className="w-4 h-4 mr-2 text-primary-600 dark:text-primary-400" />
                                    {apt.clientName}
                                  </h5>
                                  <div className="space-y-1 text-sm">
                                    <p className="text-gray-700 dark:text-gray-300 flex items-center">
                                      <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                                      {new Date(apt.date).toLocaleDateString('es-ES', { 
                                        year: 'numeric', 
                                        month: 'long', 
                                        day: 'numeric' 
                                      })} - {apt.time}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 flex items-center">
                                      <Tag className="w-4 h-4 mr-2 text-gray-500" />
                                      {apt.type}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            💡 <span className="font-semibold">Tip:</span> Este es solo un demo. Nuestro CRM real incluye recordatorios automáticos, 
            integración con WhatsApp, reportes avanzados y mucho más.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CRMDemo;
