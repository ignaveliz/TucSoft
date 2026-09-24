import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import worldMap from '../../assets/world-map.svg';
import avatar1 from '../../assets/avatar-1.png';
import avatar2 from '../../assets/avatar-2.png';
import { mapDots } from './mapDots';

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
      avatar: avatar1,
    },
    {
      name: 'Elena Rostova',
      role: 'Directora de Operaciones, PharmaLogix',
      text: 'La integración de ColdTrack redujo a cero nuestras mermas por temperatura durante la distribución biológica. Un socio estratégico imprescindible.',
      location: 'Madrid, España',
      avatar: avatar2,
    },
    {
      name: 'Marcus Vance',
      role: 'CTO, BioHealth Global',
      text: 'TucSoft transformó nuestro ecosistema tecnológico de trazabilidad. Su arquitectura de software es robusta, segura y verdaderamente escalable.',
      location: 'Boston, EE. UU.',
      avatar: avatar1,
    },
  ];

  const customerReviews = [
    {
      name: 'Tilly Firth',
      role: 'Co-fundadora & CEO, Impala',
      text: 'El compromiso técnico y la innovación de TucSoft con la plataforma ColdTrack superó nuestras expectativas. Logramos una trazabilidad perfecta de la cadena de frío.',
      location: 'Berlín, Alemania',
      avatar: avatar2,
    },
    {
      name: 'Carlos Mendoza',
      role: 'Gerente de Logística, FrigoSur',
      text: 'Las alertas en tiempo real de ColdTrack nos permitieron prevenir incidentes críticos en ruta. La atención y el soporte técnico del equipo son excepcionales.',
      location: 'Buenos Aires, Argentina',
      avatar: avatar1,
    },
    {
      name: 'Sophie Laurent',
      role: 'Head of Supply Chain, AgroVanguard',
      text: 'Excelente diseño UI/UX y respuesta inmediata de la telemetría IoT. TucSoft superó ampliamente los rigurosos estándares que nuestra industria exige.',
      location: 'París, Francia',
      avatar: avatar2,
    },
  ];

  const currentTestimonials = filter === 'satisfied' ? satisfiedCustomers : customerReviews;

  return (
    <section id="clients" className="bg-ink px-4 sm:px-10 lg:px-20 pt-10 pb-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-ink-deep rounded-lg px-6 sm:px-8 py-10 flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20 lg:mb-24">
          <div className="max-w-[800px]">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              ¿Listo para <span className="text-brand">Innovar?</span>
            </h2>
            <p className="mt-4 text-base leading-6 text-white">
              Contáctanos para agendar una reunión técnica sobre tu proyecto y descubrir cómo podemos
              satisfacer tus necesidades tecnológicas.
            </p>
          </div>

          <Button variant="outline" size="lg" onClick={onConnect} className="group whitespace-nowrap self-start md:self-center">
            <span>Hablemos</span>
            <ArrowRight size={22} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="text-center">
          <h2 className="section-title">
            Nuestros <span className="text-brand">Clientes</span>
          </h2>
          <p className="mt-6 text-base text-white">
            Conocé la experiencia de las empresas que confían en TucSoft
          </p>

          <div className="mt-5 inline-flex flex-wrap justify-center gap-4 text-sm">
            <button
              onClick={() => setFilter('satisfied')}
              className={`flex items-center gap-2 pl-3 pr-4 py-2 rounded-full bg-ink-deep transition-opacity ${
                filter === 'satisfied' ? 'opacity-100' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-white" />
              <span className="text-white">Clientes satisfechos</span>
            </button>
            <button
              onClick={() => setFilter('reviews')}
              className={`flex items-center gap-2 pl-3 pr-4 py-2 rounded-full bg-ink-deep transition-opacity ${
                filter === 'reviews' ? 'opacity-100' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-brand" />
              <span className="text-white">Reseñas de clientes</span>
            </button>
          </div>
        </div>

        <div className="relative mt-16 lg:mt-20">
          <div className="relative hidden md:block">
            <img src={worldMap} alt="" aria-hidden className="w-full h-auto select-none pointer-events-none" />
            {mapDots.map((dot, idx) => (
              <span
                key={idx}
                className={`absolute rounded-full -translate-x-1/2 -translate-y-1/2 ${
                  dot.accent ? 'w-4 h-4 bg-brand' : 'w-1.5 h-1.5 bg-white'
                }`}
                style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:absolute md:inset-0 md:block">
            {currentTestimonials.slice(0, 2).map((item, idx) => (
              <article
                key={item.name}
                className={`bg-ink-deep rounded-lg shadow-card p-4 md:absolute md:w-[245px] text-left ${
                  idx === 0 ? 'md:left-[19%] md:top-[12%]' : 'md:left-[54%] md:top-[5%]'
                }`}
              >
                <span className="block text-brand text-3xl leading-none font-medium tracking-tighter h-6">66</span>
                <p className="mt-2 text-[15px] leading-[21px] text-white">{item.text}</p>
                <div className="mt-6 flex items-center gap-2">
                  <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover grayscale" />
                  <div>
                    <h4 className="text-[15px] font-normal text-brand">{item.name}</h4>
                    <p className="text-xs font-light text-white/80">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
