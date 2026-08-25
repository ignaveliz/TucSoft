import React, { useState } from 'react';
import { Quote, ArrowRight, MapPin, Globe } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';

interface TestimonialsSectionProps {
  onConnect?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onConnect }) => {
  const [filter, setFilter] = useState<'satisfied' | 'reviews'>('satisfied');

  const satisfiedCustomers = [
    {
      name: 'Paul McGuire',
      role: 'Co-fundador & CEO, Tru.id',
      text: 'Estoy sumamente orgulloso del trabajo del equipo de TucSoft. Son profesionales altamente capaces y los recomiendo con total confianza para proyectos de alta complejidad.',
      location: 'Londres, Reino Unido',
    },
    {
      name: 'Elena Rostova',
      role: 'Directora de Operaciones, PharmaLogix',
      text: 'La integración de ColdTrack redujo a cero nuestras mermas por temperatura durante la distribución biológica. Un socio estratégico imprescindible.',
      location: 'Madrid, España',
    },
    {
      name: 'Marcus Vance',
      role: 'CTO, BioHealth Global',
      text: 'TucSoft transformó nuestro ecosistema tecnológico de trazabilidad. Su arquitectura de software es robusta, segura y verdaderamente escalable.',
      location: 'Boston, EE. UU.',
    },
  ];

  const customerReviews = [
    {
      name: 'Tilly Firth',
      role: 'Co-fundadora & CEO, Impala',
      text: 'El compromiso técnico y la innovación de TucSoft con la plataforma ColdTrack superó nuestras expectativas. Logramos una trazabilidad perfecta de la cadena de frío.',
      location: 'Berlín, Alemania',
    },
    {
      name: 'Carlos Mendoza',
      role: 'Gerente de Logística, FrigoSur',
      text: 'Las alertas en tiempo real de ColdTrack nos permitieron prevenir incidentes críticos en ruta. La atención y el soporte técnico del equipo son excepcionales.',
      location: 'Buenos Aires, Argentina',
    },
    {
      name: 'Sophie Laurent',
      role: 'Head of Supply Chain, AgroVanguard',
      text: 'Excelente diseño UI/UX y respuesta inmediata de la telemetría IoT. TucSoft superó ampliamente los rigurosos estándares que nuestra industria exige.',
      location: 'París, Francia',
    },
  ];

  const currentTestimonials = filter === 'satisfied' ? satisfiedCustomers : customerReviews;

  return (
    <section className="py-24 bg-midnight relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <GlassCard edgeGlow={true} className="p-8 sm:p-12 mb-28 border-brand/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-5xl font-bold font-montserrat text-heading tracking-tight mb-4">
                ¿Listo para <span className="text-brand">Innovar?</span>
              </h2>
              <p className="text-bodyText font-inter text-base sm:text-lg">
                Contáctanos para agendar una reunión técnica profunda sobre tu proyecto y descubrir cómo podemos satisfacer tus necesidades tecnológicas.
              </p>
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={onConnect}
              className="group whitespace-nowrap border-white/30 text-heading hover:border-brand"
            >
              <span>Hablemos</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-brand" />
            </Button>
          </div>
        </GlassCard>

        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold font-montserrat text-heading tracking-tight mb-4">
            Nuestros <span className="text-brand">Clientes</span>
          </h2>
          <p className="text-bodyText font-inter text-base mb-8">
            Conoce la experiencia de las empresas que confían en el ecosistema de TucSoft
          </p>

          <div className="inline-flex items-center gap-6 p-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium">
            <button
              onClick={() => setFilter('satisfied')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                filter === 'satisfied' ? 'bg-white/10 text-heading font-semibold' : 'text-bodyText hover:text-heading'
              }`}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${filter === 'satisfied' ? 'bg-white' : 'bg-white/30'}`} />
              <span>Clientes Satisfechos (3)</span>
            </button>

            <button
              onClick={() => setFilter('reviews')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                filter === 'reviews' ? 'bg-brand/20 text-brand font-semibold' : 'text-bodyText hover:text-heading'
              }`}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${filter === 'reviews' ? 'bg-brand' : 'bg-white/30'}`} />
              <span>Reseñas de Clientes (3)</span>
            </button>
          </div>
        </div>

        <div className="relative min-h-[460px] rounded-3xl bg-carbon/40 border border-white/5 p-6 sm:p-12 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-15 flex items-center justify-center pointer-events-none">
            <Globe size={480} className="text-white/20 stroke-1" />
          </div>

          <div className="absolute top-1/4 left-1/5 w-3 h-3 rounded-full bg-brand animate-ping" />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-brand" />
          <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 rounded-full bg-white/60" />
          <div className="absolute bottom-1/4 right-1/3 w-3.5 h-3.5 rounded-full bg-brand" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 max-w-6xl w-full">
            {currentTestimonials.map((item, idx) => (
              <GlassCard key={idx} className="p-6 border-brand/20 bg-midnight/80 flex flex-col justify-between">
                <div>
                  <Quote size={26} className="text-brand mb-3 rotate-180" />
                  <p className="text-xs sm:text-sm text-heading font-inter leading-relaxed mb-6">
                    "{item.text}"
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                  <div>
                    <h4 className="text-sm font-bold font-montserrat text-brand">{item.name}</h4>
                    <p className="text-[11px] text-bodyText mt-0.5">{item.role}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] text-bodyText bg-white/5 px-2 py-0.5 rounded-full border border-white/5 w-fit">
                    <MapPin size={11} className="text-brand" />
                    {item.location}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
