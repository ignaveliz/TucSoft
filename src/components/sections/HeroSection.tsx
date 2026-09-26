import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative">
      <div className="hero-glow min-h-[560px] lg:min-h-[635px] flex items-center pt-32 pb-20 px-4 sm:px-10 lg:px-20">
        <div className="max-w-[1200px] w-full mx-auto">
          <h1 className="font-poppins font-medium uppercase text-white leading-tight">
            <span className="block text-2xl sm:text-3xl lg:text-[36px]">Monitoreo inteligente para</span>
            <span className="block text-[32px] sm:text-5xl lg:text-[56px] text-brand my-1 lg:my-2">
              equipos de frío
            </span>
            <span className="block text-2xl sm:text-3xl lg:text-[36px]">comercial e industrial</span>
          </h1>

          <p className="mt-6 max-w-[520px] text-base leading-6 text-white">
            ColdTrack, la solución integral de IoT, software e inteligencia artificial que
            transforma tus equipos de refrigeración en activos inteligentes. Desde Tucumán para el NOA y el mundo.
          </p>

          <Button
            variant="outline"
            size="lg"
            className="mt-6 group"
            onClick={() => document.getElementById('coldtrack')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Conocer ColdTrack</span>
            <ArrowRight size={22} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

    </section>
  );
};
