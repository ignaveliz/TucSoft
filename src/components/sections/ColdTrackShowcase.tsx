import React, { useState } from 'react';
import {
  Activity,
  BrainCircuit,
  CheckCircle2,
  ClipboardList,
  Cpu,
  Handshake,
  RefreshCw,
  TriangleAlert,
} from 'lucide-react';
import { Switch } from '../ui/Switch';

const features = [
  {
    icon: BrainCircuit,
    title: 'Diagnóstico Automático con IA',
    description:
      'Un motor de inteligencia artificial analiza las métricas del equipo y determina el origen exacto de la falla.',
  },
  {
    icon: Cpu,
    title: 'Sensor IoT Universal',
    description:
      'Se instala en heladeras, exhibidoras y freezers de las marcas líderes del mercado, sin importar el fabricante.',
  },
  {
    icon: ClipboardList,
    title: 'Órdenes de Reparación Directas',
    description:
      'El técnico llega con la falla ya identificada: sin visitas previas de evaluación ni reclamos telefónicos.',
  },
  {
    icon: Handshake,
    title: 'Plataforma de Partnering',
    description:
      'Agrupa y asigna el trabajo a talleres de refrigeración locales, con presupuestos y trazabilidad digital.',
  },
];

export const ColdTrackShowcase: React.FC = () => {
  const [isBluetoothOn, setIsBluetoothOn] = useState(true);
  const [isAiDiagnosisOn, setIsAiDiagnosisOn] = useState(true);
  const [isAutoDispatchOn, setIsAutoDispatchOn] = useState(true);
  const [temperature, setTemperature] = useState(4.2);

  const simulateTemperatureChange = () => {
    const randomTemp = (Math.random() * (9.5 - 2.1) + 2.1).toFixed(1);
    setTemperature(parseFloat(randomTemp));
  };

  const hasFault = temperature > 8;

  return (
    <section id="coldtrack" className="screen-section hero-glow">
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-brand text-sm font-medium uppercase tracking-widest mb-3">
              <Activity size={14} />
              <span>Producto insignia TucSoft</span>
            </div>
            <h2 className="section-title">
              Cold<span className="text-brand">Track</span>
            </h2>
          </div>
          <p className="text-white text-base leading-6 max-w-xl">
            Sistema de gestión para el mantenimiento y la reparación de equipos de frío comercial.
            Pensado para embotelladoras, frigoríficos y comercializadoras de equipos que dependen de
            sus heladeras y freezers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="p-8 transition-colors hover:bg-ink-card">
                <Icon size={32} strokeWidth={1.75} className="text-brand mb-5" />
                <h4 className="text-xl font-semibold text-white mb-3">{title}</h4>
                <p className="text-base leading-6 text-white">{description}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 bg-ink-deep rounded-lg p-6 sm:p-8">
            <div className="flex items-center justify-between pb-6 border-b border-ink-card mb-6">
              <div>
                <h3 className="text-xl font-semibold text-white">Estado del Equipo</h3>
                <p className="text-sm text-white/60">Exhibidora EX-0421 | Comercio, San Miguel de Tucumán</p>
              </div>
              <button
                onClick={simulateTemperatureChange}
                className="p-2 rounded text-white hover:text-brand transition-colors"
                title="Simular sincronización"
              >
                <RefreshCw size={16} />
              </button>
            </div>

            <div className="mb-6 p-6 rounded bg-ink flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-white/60 uppercase tracking-wider">Temperatura interna</span>
                <div className="text-5xl font-bold mt-1 flex items-baseline gap-2">
                  <span className={hasFault ? 'text-brand' : 'text-white'}>{temperature}°C</span>
                  <span className="text-xs text-white/60 font-normal">Rango 2°C - 8°C</span>
                </div>
              </div>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs whitespace-nowrap ${
                  hasFault ? 'bg-brand text-white' : 'bg-ink-card text-white'
                }`}
              >
                {hasFault ? <TriangleAlert size={12} /> : <CheckCircle2 size={12} />}
                {hasFault ? 'Falla detectada' : 'Óptimo'}
              </span>
            </div>

            {hasFault && (
              <p className="mb-6 text-sm text-white/80">
                <span className="text-brand">Diagnóstico IA:</span> ciclos de compresor irregulares,
                posible falla de termostato. Orden de reparación lista para derivar.
              </p>
            )}

            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded bg-ink">
                <span className="text-sm text-white">Sincronización Bluetooth</span>
                <Switch checked={isBluetoothOn} onChange={setIsBluetoothOn} />
              </div>
              <div className="flex items-center justify-between p-3 rounded bg-ink">
                <span className="text-sm text-white">Diagnóstico automático con IA</span>
                <Switch checked={isAiDiagnosisOn} onChange={setIsAiDiagnosisOn} />
              </div>
              <div className="flex items-center justify-between p-3 rounded bg-ink">
                <span className="text-sm text-white">Derivación a taller local</span>
                <Switch checked={isAutoDispatchOn} onChange={setIsAutoDispatchOn} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
