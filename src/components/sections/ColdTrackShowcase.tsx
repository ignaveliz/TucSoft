import React, { useState } from 'react';
import { Thermometer, ShieldAlert, Navigation, Activity, CheckCircle2, RefreshCw } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Switch } from '../ui/Switch';

export const ColdTrackShowcase: React.FC = () => {
  const [isMonitoringActive, setIsMonitoringActive] = useState(true);
  const [isAlertSystemOn, setIsAlertSystemOn] = useState(true);
  const [isGpsTrackingOn, setIsGpsTrackingOn] = useState(true);
  const [temperature, setTemperature] = useState(4.2);

  const simulateTemperatureChange = () => {
    const randomTemp = (Math.random() * (6.5 - 2.1) + 2.1).toFixed(1);
    setTemperature(parseFloat(randomTemp));
  };

  return (
    <section id="coldtrack" className="py-24 bg-midnight relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold uppercase tracking-wider mb-4">
              <Activity size={14} />
              <span>PRODUCTO INSIGNIA TUCSOFT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-montserrat text-heading tracking-tight">
              ColdTrack <span className="text-brand">IoT Platform</span>
            </h2>
          </div>
          <p className="text-bodyText font-inter text-sm sm:text-base max-w-xl">
            Solución integral de monitoreo inteligente de la cadena de frío para logística farmacéutica y alimentaria con alertas en tiempo real y trazabilidad criptográfica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <GlassCard className="p-6">
                <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-4">
                  <Thermometer size={22} />
                </div>
                <h4 className="text-base font-bold font-montserrat text-heading mb-2">
                  Precisión Térmica ±0.1°C
                </h4>
                <p className="text-xs text-bodyText leading-relaxed">
                  Sensores IoT calibrados de alta resolución que registran fluctuaciones continuas cada 30 segundos.
                </p>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-4">
                  <ShieldAlert size={22} />
                </div>
                <h4 className="text-base font-bold font-montserrat text-heading mb-2">
                  Alertas Predictivas SMS/Push
                </h4>
                <p className="text-xs text-bodyText leading-relaxed">
                  Algoritmos preventivos que notifican desviaciones térmicas antes de romper la cadena de frío.
                </p>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-4">
                  <Navigation size={22} />
                </div>
                <h4 className="text-base font-bold font-montserrat text-heading mb-2">
                  Trazabilidad Geográfica GPS
                </h4>
                <p className="text-xs text-bodyText leading-relaxed">
                  Mapeo en vivo de unidades de transporte de carga refrigerada con geocercas automáticas.
                </p>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-4">
                  <Activity size={22} />
                </div>
                <h4 className="text-base font-bold font-montserrat text-heading mb-2">
                  Reportes de Auditoría FDA
                </h4>
                <p className="text-xs text-bodyText leading-relaxed">
                  Exportación instantánea de certificados de cumplimiento normativo para auditorías de calidad.
                </p>
              </GlassCard>
            </div>
          </div>

          <div className="lg:col-span-5">
            <GlassCard edgeGlow={true} className="border-brand/30 p-6 sm:p-8">
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <h3 className="text-lg font-bold font-montserrat text-heading">
                    Telemetría ColdTrack en Vivo
                  </h3>
                  <p className="text-xs text-bodyText">Unidad CT-9042 | Transporte Farmacéutico</p>
                </div>
                <button
                  onClick={simulateTemperatureChange}
                  className="p-2 rounded-lg bg-white/5 hover:bg-brand/10 text-bodyText hover:text-brand transition-colors"
                  title="Simular actualización"
                >
                  <RefreshCw size={16} />
                </button>
              </div>

              <div className="mb-8 p-6 rounded-xl bg-midnight/80 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-bodyText uppercase font-semibold">Temperatura Actual</span>
                  <div className="text-4xl font-extrabold font-montserrat text-heading mt-1 flex items-baseline gap-1">
                    <span className={temperature > 5.5 ? 'text-amber-400' : 'text-emerald-400'}>
                      {temperature}°C
                    </span>
                    <span className="text-xs text-bodyText font-normal">Rangos (2.0°C - 8.0°C)</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                    <CheckCircle2 size={12} />
                    Optimo
                  </span>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-sm font-medium text-heading">Monitoreo Sensor IoT</span>
                  <Switch
                    checked={isMonitoringActive}
                    onChange={setIsMonitoringActive}
                  />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-sm font-medium text-heading">Sistema de Alertas Inmediatas</span>
                  <Switch
                    checked={isAlertSystemOn}
                    onChange={setIsAlertSystemOn}
                  />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-sm font-medium text-heading">Rastreo Satelital GPS</span>
                  <Switch
                    checked={isGpsTrackingOn}
                    onChange={setIsGpsTrackingOn}
                  />
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
