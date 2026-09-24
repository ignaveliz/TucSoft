import React from 'react';
import { Target, Eye } from 'lucide-react';

export const MissionVisionSection: React.FC = () => {
  return (
    <section id="mission" className="bg-ink-deep py-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-4">
            Misión & <span className="text-brand">Visión</span>
          </h2>
          <p className="text-base text-white">
            Transformamos equipos de frío convencionales en activos inteligentes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="bg-ink rounded-lg flex flex-col justify-between p-8 sm:p-10 transition-colors hover:bg-ink-card">
            <div>
              <div className="text-brand mb-6">
                <Target size={36} strokeWidth={1.75} />
              </div>

              <span className="text-sm font-medium text-brand tracking-widest uppercase">
                PROPÓSITO CENTRAL
              </span>

              <h3 className="text-3xl sm:text-4xl font-semibold text-white mt-2 mb-5 leading-tight">
                Nuestra Misión
              </h3>

              <p className="text-white text-base leading-6 mb-6">
                Proveer soluciones de vanguardia en monitoreo y diagnóstico preventivo para la industria de la refrigeración, transformando equipos de frío convencionales en activos inteligentes para garantizar la integridad de la cadena de suministro de nuestros clientes.
              </p>
            </div>

            <div className="pt-5 border-t border-muted flex items-center justify-between text-sm text-white/70">
              <span>Diagnóstico preventivo</span>
              <span className="text-brand">Cadena de suministro</span>
            </div>
          </article>

          <article className="bg-ink rounded-lg flex flex-col justify-between p-8 sm:p-10 transition-colors hover:bg-ink-card">
            <div>
              <div className="text-brand mb-6">
                <Eye size={36} strokeWidth={1.75} />
              </div>

              <span className="text-sm font-medium text-brand tracking-widest uppercase">
                PROYECCIÓN FUTURA
              </span>

              <h3 className="text-3xl sm:text-4xl font-semibold text-white mt-2 mb-5 leading-tight">
                Nuestra Visión
              </h3>

              <p className="text-white text-base leading-6 mb-6">
                Ser el estándar tecnológico global en gestión de equipos de frío para 2030, liderando el mercado de IoT (Internet de las Cosas) aplicado a la refrigeración comercial e industrial en el NOA y el resto del mundo.
              </p>
            </div>

            <div className="pt-5 border-t border-muted flex items-center justify-between text-sm text-white/70">
              <span>Horizonte 2030</span>
              <span className="text-brand">Del NOA al mundo</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
