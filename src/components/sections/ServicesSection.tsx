import React from 'react';
import { ArrowUpRight, Smartphone, Megaphone, Search, BarChart3, Settings, Hash } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'ui-ux',
      icon: Hash,
      title: 'Diseño UI/UX',
      description: 'Diseñamos experiencias digitales intuitivas y atractivas que potencian el engagement de tus usuarios.',
      active: true,
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'iOS & Android',
      description: 'Construimos aplicaciones móviles nativas y multiplataforma diseñadas para satisfacer complejas demandas operativas.',
      active: false,
    },
    {
      id: 'marketing',
      icon: Megaphone,
      title: 'Marketing Digital',
      description: 'Impulsamos tu marca mediante estrategias de crecimiento, soluciones CMS corporativas e innovación continua.',
      active: false,
    },
    {
      id: 'seo',
      icon: Search,
      title: 'Posicionamiento SEO',
      description: 'Optimizamos la presencia digital de tu empresa con estrategias avanzadas para liderar en los motores de búsqueda.',
      active: false,
    },
    {
      id: 'enterprise',
      icon: BarChart3,
      title: 'Soluciones Empresariales',
      description: 'Transformamos procesos estratégicos en sistemas de software escalables que potencian el rendimiento de tu negocio.',
      active: false,
    },
    {
      id: 'maintenance',
      icon: Settings,
      title: 'Mantenimiento & Soporte',
      description: 'Ofrecemos soporte técnico proactivo y mantenimiento evolutivo continuo para asegurar el crecimiento sostenido.',
      active: false,
    },
  ];

  return (
    <section id="services" className="py-24 bg-midnight relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold font-montserrat text-heading tracking-tight mb-4">
            Nuestros <span className="text-brand">Servicios</span>
          </h2>
          <p className="text-bodyText font-inter text-base sm:text-lg">
            Ofrecemos Desarrollo Full Stack e Innovación Digital Tecnológica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <GlassCard
                key={service.id}
                className={`flex flex-col justify-between min-h-[220px] transition-all cursor-pointer group ${
                  service.active ? 'border-brand/40 bg-white/10 shadow-glow' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
                      <Icon size={20} />
                    </div>
                    <ArrowUpRight
                      size={24}
                      className="text-brand/60 group-hover:text-brand group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </div>
                  <h3 className="text-xl font-bold font-montserrat text-heading mb-3">
                    {service.title}
                  </h3>
                  <p className="text-bodyText text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
