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
    company: '',
    email: '',
    equipmentCount: '',
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-lg p-6 sm:p-8 bg-ink shadow-card">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-brand p-2"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle size={56} className="text-brand mx-auto " />
            <h3 className="text-2xl font-bold text-white">¡Solicitud Recibida!</h3>
            <p className="text-sm text-white/70 max-w-xs mx-auto">
              Nuestro equipo comercial se pondrá en contacto en menos de 24 horas hábiles para coordinar una demo personalizada.
            </p>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">
              Solicitar <span className="text-brand">Demo</span>
            </h3>
            <p className="text-sm text-white/70 mb-6">
              Completá tus datos y un asesor de ColdTrack se pondrá en contacto con vos.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-white mb-1">Nombre Completo</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Juan Pérez"
                  className="w-full bg-ink-deep border border-ink-card rounded px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand"
                />
              </div>

              <div>
                <label className="block text-sm text-white mb-1">Empresa</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Embotelladora del Norte S.A."
                  className="w-full bg-ink-deep border border-ink-card rounded px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand"
                />
              </div>

              <div>
                <label className="block text-sm text-white mb-1">Correo Electrónico Corporativo</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="juan@empresa.com"
                  className="w-full bg-ink-deep border border-ink-card rounded px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand"
                />
              </div>

              <div>
                <label className="block text-sm text-white mb-1">Cantidad Aprox. de Equipos de Frío</label>
                <input
                  type="text"
                  value={formData.equipmentCount}
                  onChange={(e) => setFormData({ ...formData, equipmentCount: e.target.value })}
                  placeholder="Ej: 50 heladeras, 20 freezers"
                  className="w-full bg-ink-deep border border-ink-card rounded px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand"
                />
              </div>

              <div>
                <label className="block text-sm text-white mb-1">Mensaje (opcional)</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Contanos brevemente tu situación actual con los equipos de frío..."
                  className="w-full bg-ink-deep border border-ink-card rounded px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand"
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
                <span>Solicitar Demo</span>
                <Send size={16} />
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
