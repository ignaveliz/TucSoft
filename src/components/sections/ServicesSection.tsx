import React, { useState } from 'react';
import { ArrowUpRight, Cpu, BrainCircuit, Wrench } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeId, setActiveId] = useState('telemetria');

  const services = [
    {
      id: 'telemetria',
      icon: Cpu,
      title: 'Telemetría IoT en Tiempo Real',
      description: 'Sensores universales que monitorean temperatura, ciclos de compresor y consumo eléctrico de heladeras, exhibidoras y freezers las 24 hs.',
    },
    {
      id: 'diagnostico-ia',
      icon: BrainCircuit,
      title: 'Diagnóstico Predictivo con IA',
      description: 'Nuestro motor de inteligencia artificial analiza patrones de series temporales para detectar fallas antes de que ocurran y determinar su origen exacto.',
    },
    {
      id: 'gestion-tecnica',
      icon: Wrench,
      title: 'Gestión y Derivación Técnica',
      description: 'Plataforma de partnering que genera órdenes de reparación directas con hoja de ruta y repuestos, derivando a talleres locales certificados sin visitas previas.',
    },
  ];

  return (
    <section id="services" className="screen-section bg-ink">
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="section-title">
            Ecosistema <span className="text-brand">ColdTrack</span>
          </h2>
          <p className="mt-4 text-base text-white">
            Soluciones integradas de IoT, software e inteligencia artificial para la cadena de frío
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">
          {services.map((service) => {
            const Icon = service.icon;
            const active = service.id === activeId;
            return (
              <a
                key={service.id}
                href="#"
                onMouseEnter={() => setActiveId(service.id)}
                onFocus={() => setActiveId(service.id)}
                onClick={(e) => e.preventDefault()}
                className={`group block p-8 transition-colors duration-200 ${
                  active ? 'bg-ink-card' : 'bg-transparent'
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <Icon size={32} strokeWidth={1.75} className="text-brand" />
                  <ArrowUpRight
                    size={24}
                    strokeWidth={2}
                    className="text-white group-hover:text-brand transition-colors"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-base leading-6 text-white">{service.description}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
