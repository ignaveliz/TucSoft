import React, { useState } from 'react';
import { ArrowUpRight, Smartphone, Megaphone, Search, BarChart3, Settings, Hash } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeId, setActiveId] = useState('ui-ux');

  const services = [
    {
      id: 'ui-ux',
      icon: Hash,
      title: 'Diseño UI/UX',
      description: 'Diseñamos experiencias digitales intuitivas y atractivas que potencian el engagement de tus usuarios.',
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'iOS & Android',
      description: 'Construimos aplicaciones móviles nativas y multiplataforma diseñadas para satisfacer complejas demandas operativas.',
    },
    {
      id: 'marketing',
      icon: Megaphone,
      title: 'Marketing Digital',
      description: 'Impulsamos tu marca mediante estrategias de crecimiento, soluciones CMS corporativas e innovación continua.',
    },
    {
      id: 'seo',
      icon: Search,
      title: 'Posicionamiento SEO',
      description: 'Optimizamos la presencia digital de tu empresa con estrategias avanzadas para liderar en los motores de búsqueda.',
    },
    {
      id: 'enterprise',
      icon: BarChart3,
      title: 'Soluciones Empresariales',
      description: 'Transformamos procesos estratégicos en sistemas de software escalables que potencian el rendimiento de tu negocio.',
    },
    {
      id: 'maintenance',
      icon: Settings,
      title: 'Mantenimiento & Soporte',
      description: 'Ofrecemos soporte técnico proactivo y mantenimiento evolutivo continuo para asegurar el crecimiento sostenido.',
    },
  ];

  return (
    <section id="services" className="bg-ink pt-16 pb-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="section-title">
            Nuestros <span className="text-brand">Servicios</span>
          </h2>
          <p className="mt-4 text-base text-white">
            Ofrecemos Desarrollo Full Stack e Innovación Digital Tecnológica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
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
