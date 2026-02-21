import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, Mail, Briefcase, CheckCircle } from 'lucide-react';

const QuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

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

  const services = [
    'Páginas Web',
    'Automatización de Sistemas',
    'Factura Electrónica',
    'Web App / CRM',
    'Consultoría Digital',
    'Otro'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple
    if (!formData.name || !formData.phone || !formData.email || !formData.service) {
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    // Llamada al backend /cotizar
    const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
    fetch(`${API_URL}/cotizar`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        servicio: formData.service,
        horas: 1,
        complejidad: 'media',
        cliente: formData.name,
        nombre: formData.name,
        telefono: formData.phone,
        correo: formData.email
      })
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        return await res.json();
      })
      .then((data) => {
        setResult(data);
        setShowSuccess(true);
        // no cerrar automáticamente — permitir al usuario descargar
      })
      .catch((err) => {
        console.error(err);
        setError('Error enviando la solicitud. Intenta de nuevo.');
      })
      .finally(() => {
        setLoading(false);
        // Reset form after short delay
        setTimeout(() => {
          setFormData({ name: '', phone: '', email: '', service: '' });
        }, 800);
      });
  };

  const downloadFile = async (endpoint, filename) => {
    try {
      setLoading(true);
      const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
      const res = await fetch(`${API_URL}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ servicio: formData.service || 'general', horas: 1, complejidad: 'media', cliente: formData.name || 'Cliente', nombre: formData.name || 'Cliente', telefono: formData.phone || 'No especificado', correo: formData.email || 'No especificado' })
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (e) {
      console.error(e);
      setError('Error descargando el archivo');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return createPortal(
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
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[calc(100vh-2rem)] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-900 to-primary-700 dark:from-primary-800 dark:to-primary-900 px-6 py-4 rounded-t-2xl flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">Solicitar Cotización</h3>
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-md ring-1 ring-white/70"
            >
              <X className="w-5 h-5 text-gray-900" />
            </button>
          </div>

          {/* Success Message */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mx-6 mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-green-800 dark:text-green-300 font-semibold">
                    ¡Solicitud enviada!
                  </p>
                  <p className="text-green-700 dark:text-green-400 text-sm">
                    Nos contactaremos pronto contigo
                  </p>
                  {result && (
                    <div className="mt-2 text-sm text-green-700 dark:text-green-300">
                      <p><strong>Precio estimado:</strong> ${result.precio}</p>
                      <p className="mt-1 text-green-600 dark:text-green-400">
                        Tu proforma está lista para descargar.
                      </p>
                      <div className="mt-3 flex space-x-2">
                        <button
                          onClick={() => downloadFile('cotizar_pdf', 'cotizacion.pdf')}
                          className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                        >
                          Descargar PDF
                        </button>
                        <button
                          onClick={() => downloadFile('cotizar_excel', 'cotizacion.xlsx')}
                          className="px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors"
                        >
                          Descargar Excel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Completa el formulario y nos pondremos en contacto contigo para brindarte una cotización personalizada.
            </p>

            {/* Nombre */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Nombre completo *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ej: María González"
                required
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <Phone className="w-4 h-4 inline mr-2" />
                Teléfono *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Ej: +506 8397 1849"
                required
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
              />
            </div>

            {/* Correo */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Correo electrónico *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Ej: maria@ejemplo.com"
                required
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
              />
            </div>

            {/* Servicio */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <Briefcase className="w-4 h-4 inline mr-2" />
                Servicio que te gustaría *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white cursor-pointer"
              >
                <option value="">Selecciona un servicio</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Buttons */}
            <div className="flex space-x-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-gray-900 dark:text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-60"
              >
                {loading ? 'Enviando...' : 'Enviar Solicitud'}
              </button>
            </div>

            {error && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-2">{error}</p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default QuoteModal;
