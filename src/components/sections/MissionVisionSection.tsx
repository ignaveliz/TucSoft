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
            Impulsando el desarrollo de software sostenible y soluciones IoT avanzadas para la industria global.
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
                Desarrollar soluciones de software empresariales de alto rendimiento, sostenibles e innovadoras que transformen los procesos críticos de nuestros clientes, garantizando máxima fiabilidad y eficiencia operativa.
              </p>
            </div>

            <div className="pt-5 border-t border-muted flex items-center justify-between text-sm text-white/70">
              <span>TucSoft Enterprise Engineering</span>
              <span className="text-brand">Excelencia Continua</span>
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
                Consolidarnos como el socio tecnológico líder a nivel internacional en desarrollo full-stack y monitoreo inteligente IoT con productos insignia como ColdTrack, estableciendo nuevos estándares en la cadena de frío digital.
              </p>
            </div>

            <div className="pt-5 border-t border-muted flex items-center justify-between text-sm text-white/70">
              <span>Proyección Global 2030</span>
              <span className="text-brand">Innovación Sin Fronteras</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
