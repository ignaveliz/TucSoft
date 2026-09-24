import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import caseInvestar from '../../assets/case-investar.jpg';

export const WhyUsSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const stats = [
    { number: '384', label: 'Proyectos Entregados' },
    { number: '30', label: 'Desarrolladores' },
    { number: '8839', label: 'Horas de Desarrollo' },
    { number: '15', label: 'Países Alcanzados' },
  ];

  const caseStudies = [
    {
      title: 'Upguard Investar',
      subtitle: 'Plataforma de Inversión Inmobiliaria',
      headline: '#AhorroFuturo',
      desc: 'Plataforma fintech de alta escala para inversiones inmobiliarias en países europeos con analítica de portafolio en tiempo real.',
      tag: 'Fintech & Bienes Raíces',
      image: caseInvestar as string | undefined,
    },
    {
      title: 'ColdTrack IoT',
      subtitle: 'Cadena de Frío Farmacéutica',
      headline: '#LogísticaInteligente',
      desc: 'Plataforma de telemetría de temperatura en tiempo real integrada con sensores IoT para distribución biológica y farmacéutica.',
      tag: 'IoT & Telemetría',
      image: undefined,
    },
    {
      title: 'Inga Motors',
      subtitle: 'Ecosistema Digital Automotriz',
      headline: '#InnovaciónMovilidad',
      desc: 'Portal empresarial y sistema de gestión de inventario web para redes de concesionarios automotrices.',
      tag: 'Automotriz & Web',
      image: undefined,
    },
    {
      title: 'Onboarding con Sigma',
      subtitle: 'Flujo SaaS Empresarial',
      headline: '#OnboardingDigital',
      desc: 'Flujo de integración de usuarios y validación de identidad KYC automatizado para software empresarial.',
      tag: 'SaaS Empresarial',
      image: undefined,
    },
  ];

  const current = caseStudies[selectedCase];

  return (
    <section id="work">
      <div className="bg-ink-deep px-4 sm:px-10 lg:px-20 py-12 lg:py-14">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="lg:max-w-[440px]">
            <h2 className="section-title">
              ¿Por qué <span className="text-brand">Nosotros?</span>
            </h2>
            <p className="mt-4 text-base leading-5 text-white">
              TucSoft es una empresa de ingeniería de software especializada en ofrecer soluciones
              tecnológicas de alta calidad y desarrollos a medida para la industria.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[auto_auto] gap-x-12 gap-y-8 lg:shrink-0">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-end gap-1 whitespace-nowrap">
                <span className="relative text-4xl lg:text-5xl font-bold text-brand leading-none pr-5">
                  {stat.number}
                  <span className="absolute right-0 -top-1 text-3xl lg:text-4xl">+</span>
                </span>
                <span className="text-xl lg:text-2xl font-normal text-white leading-none">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-ink px-4 sm:px-10 lg:px-20 pt-20 lg:pt-24 pb-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[760px] mx-auto mb-12 lg:mb-14">
            <h2 className="section-title">
              Proyectos <span className="text-brand">Destacados</span>
            </h2>
            <p className="mt-4 max-w-[560px] mx-auto text-base leading-6 text-white">
              Nuestro equipo multidisciplinario trabaja colaborativamente para construir soluciones
              tecnológicas tangibles.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-[88px] items-start">
            <div className="flex flex-col gap-8">
              {caseStudies.map((item, index) => {
                const active = selectedCase === index;
                return (
                  <button
                    key={item.title}
                    onClick={() => setSelectedCase(index)}
                    className="text-left group"
                  >
                    <h4
                      className={`text-3xl lg:text-4xl font-normal leading-[1.35] transition-colors ${
                        active ? 'text-brand' : 'text-muted group-hover:text-white/60'
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`mt-2 w-[195px] pb-1 text-2xl border-b transition-colors ${
                        active ? 'text-white border-white' : 'text-muted border-muted'
                      }`}
                    >
                      Caso de Estudio
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-[792/472] bg-ink-deep">
              {current.image ? (
                <img src={current.image} alt={current.title} className="w-full h-full object-cover object-top" />
              ) : (
                <div className="w-full h-full flex flex-col justify-between p-8 sm:p-12 bg-gradient-to-br from-[#cfe0f2] via-[#f3c3a3] to-brand">
                  <span className="text-sm font-semibold uppercase tracking-wider text-ink">{current.tag}</span>
                  <div>
                    <h3 className="text-4xl sm:text-6xl font-semibold text-ink leading-none mb-4">
                      {current.headline}
                    </h3>
                    <p className="max-w-md text-sm sm:text-base text-ink/80">{current.desc}</p>
                  </div>
                  <span className="flex items-center gap-2 text-sm font-medium text-ink">
                    {current.subtitle}
                    <span className="w-8 h-8 rounded-full bg-ink text-white flex items-center justify-center">
                      <ArrowUpRight size={16} />
                    </span>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
