import React from 'react';
import { Bluetooth, BrainCircuit, Cpu, Wrench } from 'lucide-react';

const steps = [
  {
    icon: Cpu,
    title: 'Sensor IoT en el Equipo',
    description:
      'Dispositivo compacto y universal que monitorea parámetros críticos: temperatura, ciclos de trabajo y consumo eléctrico en tiempo real.',
  },
  {
    icon: Bluetooth,
    title: 'Telemetría sin Fricciones',
    description:
      'El preventista o comerciante sincroniza los datos al acercarse con su dispositivo móvil mediante conexión Bluetooth de alta velocidad.',
  },
  {
    icon: BrainCircuit,
    title: 'Diagnóstico Asistido por IA',
    description:
      'Nuestro motor central en la nube analiza patrones de series temporales y determina el origen exacto de la falla con precisión clínica.',
  },
  {
    icon: Wrench,
    title: 'Asignación y Reparación Ágil',
    description:
      'La orden de trabajo se envía con hoja de ruta y especificación de repuestos a un taller local certificado de nuestra plataforma.',
  },
];

export const HowItWorksSection: React.FC = () => (
  <section id="como-funciona" className="screen-section bg-ink">
    <div className="max-w-[1200px] w-full mx-auto">
      <div className="text-center mb-12 lg:mb-14">
        <span className="text-brand text-sm font-medium uppercase tracking-widest">
          El ecosistema ColdTrack
        </span>
        <h2 className="section-title mt-3">
          Cómo <span className="text-brand">Funciona</span>
        </h2>
        <p className="mt-4 text-base text-white">
          De la detección automática a la reparación exitosa en el menor tiempo posible
        </p>
      </div>

      <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map(({ icon: Icon, title, description }, idx) => (
          <li
            key={title}
            className="bg-ink-deep rounded-lg p-8 flex gap-6 sm:gap-8 transition-colors hover:bg-ink-card"
          >
            <span className="text-6xl sm:text-[80px] font-bold leading-none text-brand/40 shrink-0">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <div>
              <Icon size={28} strokeWidth={1.75} className="text-brand mb-4" />
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">{title}</h3>
              <p className="text-base leading-6 text-white">{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
