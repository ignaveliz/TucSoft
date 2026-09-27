import React, { useState } from 'react';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './Button';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  equipmentCount?: string;
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

  const [errors, setErrors] = useState<FormErrors>({});

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Permite solo letras (incluyendo acentos, diéresis y la ñ) y espacios
    const onlyLettersRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;

    // Validación Nombre
    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      newErrors.name = 'El nombre completo es obligatorio.';
    } else if (trimmedName.length < 3) {
      newErrors.name = 'Debe ingresar al menos 3 caracteres.';
    } else if (!onlyLettersRegex.test(trimmedName)) {
      newErrors.name = 'El nombre solo puede contener letras (sin números).';
    }

    // Validación Empresa
    const trimmedCompany = formData.company.trim();
    if (!trimmedCompany) {
      newErrors.company = 'El nombre de la empresa es obligatorio.';
    } else if (trimmedCompany.length < 3) {
      newErrors.company = 'Debe ingresar al menos 3 caracteres.';
    } else if (!onlyLettersRegex.test(trimmedCompany)) {
      newErrors.company = 'El nombre de la empresa solo puede contener letras (sin números).';
    }

    // Validación Email
    const trimmedEmail = formData.email.trim();
    if (!trimmedEmail) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = 'Ingrese un correo electrónico corporativo válido.';
    }

    // Validación Cantidad de Equipos (solo números enteros > 0)
    const count = Number(formData.equipmentCount);
    if (!formData.equipmentCount.toString().trim()) {
      newErrors.equipmentCount = 'Indique la cantidad de equipos.';
    } else if (isNaN(count) || count <= 0 || !Number.isInteger(count)) {
      newErrors.equipmentCount = 'Debe ser un número entero mayor a 0.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field as keyof FormErrors]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        equipmentCount: '',
        message: '',
      });
      setErrors({});
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
            <CheckCircle size={56} className="text-brand mx-auto" />
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

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Nombre Completo */}
              <div>
                <label className="block text-sm text-white mb-1">Nombre Completo</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Juan Pérez"
                  className={`w-full bg-ink-deep border rounded px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors ${
                    errors.name ? 'border-red-500 focus:border-red-500' : 'border-ink-card focus:border-brand'
                  }`}
                />
                {errors.name && (
                  <p className="flex items-center gap-1 text-xs text-red-400 mt-1">
                    <AlertCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Empresa */}
              <div>
                <label className="block text-sm text-white mb-1">Empresa</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder="Embotelladora del Norte"
                  className={`w-full bg-ink-deep border rounded px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors ${
                    errors.company ? 'border-red-500 focus:border-red-500' : 'border-ink-card focus:border-brand'
                  }`}
                />
                {errors.company && (
                  <p className="flex items-center gap-1 text-xs text-red-400 mt-1">
                    <AlertCircle size={12} /> {errors.company}
                  </p>
                )}
              </div>

              {/* Correo Electrónico */}
              <div>
                <label className="block text-sm text-white mb-1">Correo Electrónico Corporativo</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="juan@empresa.com"
                  className={`w-full bg-ink-deep border rounded px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors ${
                    errors.email ? 'border-red-500 focus:border-red-500' : 'border-ink-card focus:border-brand'
                  }`}
                />
                {errors.email && (
                  <p className="flex items-center gap-1 text-xs text-red-400 mt-1">
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>

              {/* Cantidad Aprox. de Equipos */}
              <div>
                <label className="block text-sm text-white mb-1">Cantidad Aprox. de Equipos de Frío</label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={formData.equipmentCount}
                  onChange={(e) => handleInputChange('equipmentCount', e.target.value)}
                  placeholder="Ej: 50"
                  className={`w-full bg-ink-deep border rounded px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors ${
                    errors.equipmentCount ? 'border-red-500 focus:border-red-500' : 'border-ink-card focus:border-brand'
                  }`}
                />
                {errors.equipmentCount && (
                  <p className="flex items-center gap-1 text-xs text-red-400 mt-1">
                    <AlertCircle size={12} /> {errors.equipmentCount}
                  </p>
                )}
              </div>

              {/* Mensaje (Opcional) */}
              <div>
                <label className="block text-sm text-white mb-1">Mensaje (opcional)</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
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