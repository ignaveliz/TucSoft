import React from 'react';
import { ArrowRight, ShieldCheck, Thermometer } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-midnight bg-grid-pattern">
      <div className="absolute top-12 -left-20 w-[550px] h-[550px] bg-brand/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-brand/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-bodyText mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span>Presentamos ColdTrack - Monitoreo de Temperatura IoT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-montserrat text-heading leading-[1.1] tracking-tight uppercase mb-6 drop-shadow-md">
            Innovando en{' '}
            <span className="text-brand block sm:inline">Soluciones de Software</span>{' '}
            Sostenibles para Empresas
          </h1>

          <p className="text-lg sm:text-xl text-bodyText font-inter leading-relaxed max-w-2xl mb-10">
            Acompañamos a Startups, PyMEs y Grandes Empresas a transformar sus ideas en plataformas tecnológicas de alto rendimiento.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const el = document.getElementById('coldtrack');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group border-white/30 text-heading hover:border-brand shadow-lg"
            >
              <span>Comenzar a Innovar</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-brand" />
            </Button>

            <a
              href="#mission"
              className="px-6 py-3.5 text-sm font-semibold text-bodyText hover:text-heading transition-colors"
            >
              Conocer Misión & Visión
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel rounded-xl p-5 flex items-center gap-4 border-brand/20">
            <div className="w-12 h-12 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
              <Thermometer size={24} />
            </div>
            <div>
              <h4 className="text-sm font-bold font-montserrat text-heading">Telemetría ColdTrack</h4>
              <p className="text-xs text-bodyText mt-0.5">Monitoreo de temperatura IoT en tiempo real</p>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-5 flex items-center gap-4 border-brand/20">
            <div className="w-12 h-12 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="text-sm font-bold font-montserrat text-heading">Seguridad Empresarial</h4>
              <p className="text-xs text-bodyText mt-0.5">Sistemas de software de alta estabilidad</p>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-5 flex items-center gap-4 border-brand/20">
            <div className="w-12 h-12 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
              <span className="font-montserrat font-extrabold text-lg">99.9%</span>
            </div>
            <div>
              <h4 className="text-sm font-bold font-montserrat text-heading">Disponibilidad Garantizada</h4>
              <p className="text-xs text-bodyText mt-0.5">Trazabilidad continua en la cadena de frío</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 border-y border-white/5 bg-carbon/60 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-wrap items-center justify-between gap-8 opacity-75">
          <span className="text-xl font-bold font-montserrat tracking-tight text-emerald-400">fiverr.</span>
          <span className="text-xl font-extrabold font-montserrat text-sky-400">InTUıT.</span>
          <span className="text-xl font-bold font-montserrat tracking-widest text-slate-200">SONY</span>
          <span className="text-xl font-black font-montserrat italic text-red-500 bg-white/10 px-2 py-0.5 rounded">MOTUL</span>
          <span className="text-xl font-bold font-montserrat text-purple-400 flex items-center gap-1">
            <span className="text-brand">▲</span> ClickUp
          </span>
        </div>
      </div>
    </section>
  );
};
