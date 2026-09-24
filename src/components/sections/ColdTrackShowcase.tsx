import React, { useState } from 'react';
import { Thermometer, ShieldAlert, Navigation, Activity, CheckCircle2, RefreshCw } from 'lucide-react';
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
    <section id="coldtrack" className="bg-ink py-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-brand text-sm font-medium uppercase tracking-widest mb-3">
              <Activity size={14} />
              <span>PRODUCTO INSIGNIA TUCSOFT</span>
            </div>
            <h2 className="section-title">
              ColdTrack <span className="text-brand">IoT Platform</span>
            </h2>
          </div>
          <p className="text-white text-base leading-6 max-w-xl">
            Solución integral de monitoreo inteligente de la cadena de frío para logística farmacéutica y alimentaria con alertas en tiempo real y trazabilidad criptográfica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="p-8 transition-colors hover:bg-ink-card">
                <div className="text-brand mb-5">
                  <Thermometer size={32} strokeWidth={1.75} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  Precisión Térmica ±0.1°C
                </h4>
                <p className="text-base leading-6 text-white">
                  Sensores IoT calibrados de alta resolución que registran fluctuaciones continuas cada 30 segundos.
                </p>
              </div>

              <div className="p-8 transition-colors hover:bg-ink-card">
                <div className="text-brand mb-5">
                  <ShieldAlert size={32} strokeWidth={1.75} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  Alertas Predictivas SMS/Push
                </h4>
                <p className="text-base leading-6 text-white">
                  Algoritmos preventivos que notifican desviaciones térmicas antes de romper la cadena de frío.
                </p>
              </div>

              <div className="p-8 transition-colors hover:bg-ink-card">
                <div className="text-brand mb-5">
                  <Navigation size={32} strokeWidth={1.75} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  Trazabilidad Geográfica GPS
                </h4>
                <p className="text-base leading-6 text-white">
                  Mapeo en vivo de unidades de transporte de carga refrigerada con geocercas automáticas.
                </p>
              </div>

              <div className="p-8 transition-colors hover:bg-ink-card">
                <div className="text-brand mb-5">
                  <Activity size={32} strokeWidth={1.75} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  Reportes de Auditoría FDA
                </h4>
                <p className="text-base leading-6 text-white">
                  Exportación instantánea de certificados de cumplimiento normativo para auditorías de calidad.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-ink-deep rounded-lg p-6 sm:p-8">
              <div className="flex items-center justify-between pb-6 border-b border-ink-card mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Telemetría ColdTrack en Vivo
                  </h3>
                  <p className="text-sm text-white/60">Unidad CT-9042 | Transporte Farmacéutico</p>
                </div>
                <button
                  onClick={simulateTemperatureChange}
                  className="p-2 rounded text-white hover:text-brand transition-colors"
                  title="Simular actualización"
                >
                  <RefreshCw size={16} />
                </button>
              </div>

              <div className="mb-6 p-6 rounded bg-ink flex items-center justify-between">
                <div>
                  <span className="text-xs text-white/60 uppercase tracking-wider">Temperatura Actual</span>
                  <div className="text-5xl font-bold text-white mt-1 flex items-baseline gap-1">
                    <span className={temperature > 5.5 ? 'text-brand' : 'text-white'}>
                      {temperature}°C
                    </span>
                    <span className="text-xs text-white/60 font-normal">Rangos (2.0°C - 8.0°C)</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink-card text-white text-xs">
                    <CheckCircle2 size={12} />
                    Optimo
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 rounded bg-ink">
                  <span className="text-sm text-white">Monitoreo Sensor IoT</span>
                  <Switch
                    checked={isMonitoringActive}
                    onChange={setIsMonitoringActive}
                  />
                </div>

                <div className="flex items-center justify-between p-3 rounded bg-ink">
                  <span className="text-sm text-white">Sistema de Alertas Inmediatas</span>
                  <Switch
                    checked={isAlertSystemOn}
                    onChange={setIsAlertSystemOn}
                  />
                </div>

                <div className="flex items-center justify-between p-3 rounded bg-ink">
                  <span className="text-sm text-white">Rastreo Satelital GPS</span>
                  <Switch
                    checked={isGpsTrackingOn}
                    onChange={setIsGpsTrackingOn}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
