import React, { useState } from 'react';
import { Mail, Phone, MapPin, Share2, Globe, Laptop } from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-carbon border-t border-white/10 pt-20 pb-12 text-bodyText">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-5 space-y-6">
            <a href="#" className="text-3xl font-extrabold font-montserrat text-brand tracking-tight">
              tucsoft
            </a>
            <p className="text-sm text-bodyText leading-relaxed max-w-md">
              Creemos en crecer juntos impulsando empresas mediante tecnología y satisfaciendo sus necesidades de software complejo a través de planificación estratégica y desarrollo de alta calidad.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch gap-2 max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu correo electrónico"
                className="bg-midnight border border-white/10 rounded-lg px-4 py-2.5 text-sm text-heading placeholder:text-bodyText/50 focus:outline-none focus:border-brand flex-1"
              />
              <Button type="submit" variant="primary" size="md" className="whitespace-nowrap">
                {subscribed ? '¡Suscrito!' : 'Unirme al Newsletter'}
              </Button>
            </form>

            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-heading hover:text-brand hover:border-brand transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-heading hover:text-brand hover:border-brand transition-colors">
                <Share2 size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-heading hover:text-brand hover:border-brand transition-colors">
                <Laptop size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4 lg:border-l lg:border-white/10 lg:pl-8">
            <h4 className="text-base font-bold font-montserrat text-brand tracking-wide">
              Enlaces
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><a href="#" className="hover:text-heading transition-colors">Inicio</a></li>
              <li><a href="#services" className="hover:text-heading transition-colors">Tecnologías</a></li>
              <li><a href="#work" className="hover:text-heading transition-colors">Casos de Estudio</a></li>
              <li><a href="#coldtrack" className="hover:text-heading transition-colors">ColdTrack IoT</a></li>
              <li><a href="#work" className="hover:text-heading transition-colors">Portafolio</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4 lg:border-l lg:border-white/10 lg:pl-8">
            <h4 className="text-base font-bold font-montserrat text-brand tracking-wide">
              Servicios
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><a href="#services" className="hover:text-heading transition-colors">Diseño UI/UX</a></li>
              <li><a href="#services" className="hover:text-heading transition-colors">Desarrollo Web</a></li>
              <li><a href="#services" className="hover:text-heading transition-colors">Aplicaciones Móviles</a></li>
              <li><a href="#services" className="hover:text-heading transition-colors">Marketing Digital</a></li>
              <li><a href="#services" className="hover:text-heading transition-colors">Servicios SEO</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4 lg:border-l lg:border-white/10 lg:pl-8">
            <h4 className="text-base font-bold font-montserrat text-brand tracking-wide">
              Contacto
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-brand shrink-0" />
                <span className="text-heading font-medium">info@tucsoft.com</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand shrink-0 mt-1" />
                <span>San Miguel de Tucumán, Argentina</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-brand shrink-0" />
                <span>+54 381 400-7800</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-bodyText/60 gap-4">
          <p>© {new Date().getFullYear()} TucSoft. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:underline">Política de Privacidad</a>
            <a href="#" className="hover:underline">Términos de Servicio</a>
            <a href="#" className="hover:underline">Seguridad & Cumplimiento</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
