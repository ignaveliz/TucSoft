import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { Button } from './Button';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Solución ColdTrack IoT',
    budget: '$5,000 - $15,000',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg glass-panel rounded-2xl p-6 sm:p-8 border-brand/30 shadow-glow bg-midnight">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-bodyText hover:text-heading p-2 rounded-lg hover:bg-white/5"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle size={56} className="text-brand mx-auto animate-bounce" />
            <h3 className="text-2xl font-bold font-montserrat text-heading">¡Solicitud Recibida!</h3>
            <p className="text-sm text-bodyText max-w-xs mx-auto">
              Nuestro equipo de ingeniería evaluará tus requerimientos y se pondrá en contacto en menos de 24 horas hábiles.
            </p>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold font-montserrat text-heading mb-1">
              Solicitar <span className="text-brand">Presupuesto</span>
            </h3>
            <p className="text-xs text-bodyText mb-6">
              Cuéntanos sobre las necesidades tecnológicas y requerimientos de tu proyecto.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-heading mb-1">Nombre Completo</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Juan Pérez"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-heading placeholder:text-bodyText/40 focus:outline-none focus:border-brand"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-heading mb-1">Correo Electrónico Corporativo</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="juan@empresa.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-heading placeholder:text-bodyText/40 focus:outline-none focus:border-brand"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-heading mb-1">Servicio de Interés</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-midnight border border-white/10 rounded-lg px-4 py-2.5 text-sm text-heading focus:outline-none focus:border-brand"
                >
                  <option value="Solución ColdTrack IoT">Solución ColdTrack IoT</option>
                  <option value="Diseño UI/UX">Diseño UI/UX</option>
                  <option value="Desarrollo Mobile iOS & Android">Desarrollo Mobile iOS & Android</option>
                  <option value="Sistemas Empresariales Full Stack">Sistemas Empresariales Full Stack</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-heading mb-1">Detalles del Proyecto</label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe los objetivos y alcance de tu proyecto..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-heading placeholder:text-bodyText/40 focus:outline-none focus:border-brand"
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
                <span>Enviar Solicitud</span>
                <Send size={16} />
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
