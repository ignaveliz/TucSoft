import React, { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { ArrowRight } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const stats = [
    { number: '384+', label: 'Proyectos Entregados' },
    { number: '30+', label: 'Desarrolladores' },
    { number: '8839+', label: 'Horas de Desarrollo' },
    { number: '15+', label: 'Países Alcanzados' },
  ];

  const caseStudies = [
    {
      title: 'Upguard Investar',
      subtitle: 'Plataforma de Inversión Inmobiliaria',
      headline: '#AhorroFuturo',
      desc: 'Plataforma fintech de alta escala para inversiones inmobiliarias en países europeos con analítica de portafolio en tiempo real.',
      tag: 'Fintech & Bienes Raíces',
    },
    {
      title: 'ColdTrack IoT',
      subtitle: 'Cadena de Frío Farmacéutica',
      headline: '#LogísticaInteligente',
      desc: 'Plataforma de telemetría de temperatura en tiempo real integrada con sensores IoT para distribución biológica y farmacéutica.',
      tag: 'IoT & Telemetría',
    },
    {
      title: 'Inga Motors',
      subtitle: 'Ecosistema Digital Automotriz',
      headline: '#InnovaciónMovilidad',
      desc: 'Portal empresarial y sistema de gestión de inventario web para redes de concesionarios automotrices.',
      tag: 'Automotriz & Web',
    },
    {
      title: 'Onboarding con Sigma',
      subtitle: 'Flujo SaaS Empresarial',
      headline: '#OnboardingDigital',
      desc: 'Flujo de integración de usuarios y validación de identidad KYC automatizado para software empresarial.',
      tag: 'SaaS Empresarial',
    },
  ];

  return (
    <section id="work" className="py-24 bg-carbon/40 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-6xl font-extrabold font-montserrat text-heading tracking-tight mb-4">
              ¿Por qué <span className="text-brand">Nosotros?</span>
            </h2>
            <p className="text-bodyText font-inter text-base sm:text-lg leading-relaxed">
              TucSoft es una empresa de ingeniería de software especializada en ofrecer soluciones tecnológicas de alta calidad y desarrollos digitales a medida para la industria.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl sm:text-5xl font-extrabold font-montserrat text-brand">
                  {stat.number}
                </span>
                <span className="text-xs sm:text-sm font-medium text-bodyText mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-12 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold font-montserrat text-heading tracking-tight mb-4">
              Proyectos <span className="text-brand">Destacados</span>
            </h2>
            <p className="text-bodyText font-inter text-base">
              Nuestro equipo multidisciplinario trabaja colaborativamente para construir soluciones tecnológicas tangibles.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              {caseStudies.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCase(index)}
                  className={`p-5 rounded-xl transition-all cursor-pointer border ${
                    selectedCase === index
                      ? 'bg-white/10 border-brand shadow-glow'
                      : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <h4 className={`text-xl font-bold font-montserrat ${selectedCase === index ? 'text-brand' : 'text-heading'}`}>
                    {item.title}
                  </h4>
                  <p className="text-xs text-bodyText mt-1 underline decoration-white/20">Caso de Estudio</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-7">
              <GlassCard edgeGlow={true} className="p-8 sm:p-10 border-brand/30">
                <div className="flex items-center justify-between mb-8">
                  <span className="px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-semibold uppercase tracking-wider">
                    {caseStudies[selectedCase].tag}
                  </span>
                  <span className="text-xs text-bodyText">
                    {caseStudies[selectedCase].subtitle}
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden bg-midnight border border-white/10 p-6 sm:p-8 relative min-h-[280px] flex flex-col justify-between">
                  <div className="max-w-md">
                    <h3 className="text-3xl sm:text-4xl font-extrabold font-montserrat text-heading mb-4 leading-tight">
                      {caseStudies[selectedCase].headline}
                    </h3>
                    <p className="text-sm text-bodyText leading-relaxed">
                      {caseStudies[selectedCase].desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-medium text-heading">Sistema en Vivo</span>
                    <button className="flex items-center gap-2 text-xs font-semibold font-montserrat text-brand hover:underline">
                      <span>Ver Caso de Estudio</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
