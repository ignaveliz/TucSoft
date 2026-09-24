import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import fiverr from '../../assets/client-fiverr.png';
import intuit from '../../assets/client-intuit.png';
import sony from '../../assets/client-sony.png';
import motul from '../../assets/client-motul.png';
import clickup from '../../assets/client-clickup.png';

const clients = [
  { name: 'Fiverr', src: fiverr },
  { name: 'Intuit', src: intuit },
  { name: 'Sony', src: sony },
  { name: 'Motul', src: motul },
  { name: 'ClickUp', src: clickup },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative">
      <div className="hero-glow min-h-[560px] lg:min-h-[635px] flex items-center pt-32 pb-20 px-4 sm:px-10 lg:px-20">
        <div className="max-w-[1200px] w-full mx-auto">
          <h1 className="font-poppins font-medium uppercase text-white leading-tight">
            <span className="block text-2xl sm:text-3xl lg:text-[36px]">Innovando en soluciones</span>
            <span className="block text-[32px] sm:text-5xl lg:text-[56px] text-brand my-1 lg:my-2">
              de software sostenible
            </span>
            <span className="block text-2xl sm:text-3xl lg:text-[36px]">para empresas!</span>
          </h1>

          <p className="mt-6 max-w-[520px] text-base leading-6 text-white">
            Acompañamos a Startups, PyMEs y Grandes Empresas a transformar sus ideas en plataformas
            tecnológicas de alto rendimiento.
          </p>

          <Button
            variant="outline"
            size="lg"
            className="mt-6 group"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Comencemos a Innovar</span>
            <ArrowRight size={22} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <div className="bg-ink-deep">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-10 lg:px-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((client, idx) => (
            <div
              key={client.name}
              className={`h-20 flex items-center justify-center ${
                idx > 0 ? 'lg:border-l lg:border-ink-card' : ''
              } ${idx === 0 ? 'lg:justify-start' : ''} ${idx === clients.length - 1 ? 'lg:justify-end' : ''}`}
            >
              <img src={client.src} alt={client.name} className="h-9 lg:h-11 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
