import React from 'react';

// Objetivos estratégicos SMART de ColdTrack
const goals = [
  { value: '90%', label: 'Marcas de heladeras compatibles' },
  { value: '-30%', label: 'Costos de mantenimiento' },
  { value: '50', label: 'Talleres técnicos en el NOA' },
  { value: '<5s', label: 'Sincronización Bluetooth' },
];

export const WhyUsSection: React.FC = () => {
  return (
    <section id="nosotros" className="bg-ink-deep px-4 sm:px-10 lg:px-20 py-12 lg:py-14">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-10">
        <div className="lg:max-w-[440px]">
          <h2 className="section-title">
            ¿Por qué <span className="text-brand">Nosotros?</span>
          </h2>
          <p className="mt-4 text-base leading-6 text-white">
            TucSoft es una empresa tucumana de desarrollo de software. Con ColdTrack llevamos el
            mantenimiento de equipos de frío de un modelo reactivo a uno proactivo, digital y trazable.
          </p>
        </div>

        <div className="lg:shrink-0">
          <div className="grid grid-cols-1 sm:grid-cols-[auto_auto] gap-x-12 gap-y-8">
            {goals.map((goal) => (
              <div key={goal.label} className="flex items-end gap-3 whitespace-nowrap">
                <span className="text-4xl lg:text-5xl font-bold text-brand leading-none">{goal.value}</span>
                <span className="text-lg lg:text-xl font-normal text-white leading-tight">{goal.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/60">Objetivos de ColdTrack para su primer año de implementación.</p>
        </div>
      </div>
    </section>
  );
};
