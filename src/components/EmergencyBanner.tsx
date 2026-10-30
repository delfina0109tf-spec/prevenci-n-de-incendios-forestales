import React from 'react';
import { PhoneCall, ShieldAlert, AlertTriangle } from 'lucide-react';

interface EmergencyBannerProps {
  isExhibitionMode?: boolean;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ isExhibitionMode }) => {
  return (
    <div className={`w-full bg-linear-to-r from-red-950/80 via-slate-900 to-amber-950/70 border-y border-red-500/30 ${isExhibitionMode ? 'py-4 px-6' : 'py-3 px-4'}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm">
        <div className="flex items-center gap-3">
          <span className="p-2 rounded-lg bg-red-500/20 text-red-400 border border-red-500/40 shrink-0">
            <PhoneCall className={isExhibitionMode ? 'w-5 h-5' : 'w-4 h-4'} />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white tracking-wide uppercase text-xs md:text-sm">
                Si hay peligro inmediato o fuego activo
              </span>
              <span className="text-amber-400 font-medium hidden sm:inline">
                Llamá a las autoridades de tu localidad
              </span>
            </div>
            <p className="text-slate-400 text-xs">
              Los números y organismos de respuesta varían por jurisdicción. Ante un incendio real, utilizá los canales oficiales.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-900/40 border border-red-500/40 text-red-200">
            <ShieldAlert className="w-4 h-4 text-red-400" />
            <span className="font-bold tracking-wider font-mono">911</span>
            <span className="text-[11px] text-red-300/80 hidden lg:inline">Emergencias</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-900/40 border border-amber-500/40 text-amber-200">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span className="font-bold tracking-wider font-mono">100</span>
            <span className="text-[11px] text-amber-300/80 hidden lg:inline">Bomberos</span>
          </div>
        </div>
      </div>
    </div>
  );
};
