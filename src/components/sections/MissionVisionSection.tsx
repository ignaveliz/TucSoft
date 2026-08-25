import React from 'react';
import { Target, Eye, Sparkles } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export const MissionVisionSection: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-carbon/60 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>Nuestra Identidad Corporativa</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-montserrat text-heading tracking-tight mb-4">
            Misión & <span className="text-brand">Visión</span>
          </h2>
          <p className="text-bodyText font-inter text-base sm:text-lg">
            Impulsando el desarrollo de software sostenible y soluciones IoT avanzadas para la industria global.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GlassCard edgeGlow={true} className="flex flex-col justify-between p-8 sm:p-10 border-brand/20">
            <div>
              <div className="w-14 h-14 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center text-brand mb-8">
                <Target size={30} />
              </div>

              <span className="text-xs font-bold font-montserrat text-brand tracking-widest uppercase">
                PROPÓSITO CENTRAL
              </span>

              <h3 className="text-2xl sm:text-4xl font-extrabold font-montserrat text-heading mt-2 mb-6 leading-tight">
                Nuestra Misión
              </h3>

              <p className="text-bodyText font-inter text-base sm:text-lg leading-relaxed mb-6">
                Desarrollar soluciones de software empresariales de alto rendimiento, sostenibles e innovadoras que transformen los procesos críticos de nuestros clientes, garantizando máxima fiabilidad y eficiencia operativa.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-bodyText font-medium">
              <span>TucSoft Enterprise Engineering</span>
              <span className="text-brand">Excelencia Continua</span>
            </div>
          </GlassCard>

          <GlassCard edgeGlow={true} className="flex flex-col justify-between p-8 sm:p-10 border-brand/20">
            <div>
              <div className="w-14 h-14 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center text-brand mb-8">
                <Eye size={30} />
              </div>

              <span className="text-xs font-bold font-montserrat text-brand tracking-widest uppercase">
                PROYECCIÓN FUTURA
              </span>

              <h3 className="text-2xl sm:text-4xl font-extrabold font-montserrat text-heading mt-2 mb-6 leading-tight">
                Nuestra Visión
              </h3>

              <p className="text-bodyText font-inter text-base sm:text-lg leading-relaxed mb-6">
                Consolidarnos como el socio tecnológico líder a nivel internacional en desarrollo full-stack y monitoreo inteligente IoT con productos insignia como ColdTrack, estableciendo nuevos estándares en la cadena de frío digital.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-bodyText font-medium">
              <span>Proyección Global 2030</span>
              <span className="text-brand">Innovación Sin Fronteras</span>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
