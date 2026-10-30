import React from 'react';
import { Shield, BookOpen, Users } from 'lucide-react';
import { TabType } from '../types';

interface FooterProps {
  onNavigate: (tab: TabType) => void;
  onOpenReport: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenReport
}) => {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-white font-bold text-lg">
              <span className="p-2 rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-400">
                <Shield className="w-5 h-5" />
              </span>
              <span>Prevención de Incendios Forestales en Argentina</span>
            </div>

            <p className="text-emerald-400 font-semibold text-sm">
              “Tecnología + ciencia + comunidad + territorio”
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Hacia un modelo preventivo, tecnológico y sustentable para proteger nuestros bosques nativos. Plataforma interactiva desarrollada para EXPO TECNO ARTE.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-amber-300 font-medium">
              <span>🎓 Proyecto Educativo — EXPO TECNO ARTE 2026</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Inicio y Panorama
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('patagonia')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Región Patagonia (Tecnología)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('noa')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Región NOA (Comunidad y Yungas)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('mapa')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Mapa Educativo de Riesgo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('prevencion')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Guía de Prevención Vecinal
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenReport}
                  className="text-red-400 hover:text-red-300 font-bold transition-colors cursor-pointer"
                >
                  🚨 Reportar Incendio
                </button>
              </li>
            </ul>
          </div>

          {/* Team Members & Credits */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>Integrantes del Proyecto</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Investigación, desarrollo y divulgación científica:
            </p>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-1.5">
              <div className="font-medium text-slate-200">
                Delfina Torres · Mercedes García · Abril Luna
              </div>
              <div className="font-medium text-slate-200">
                Selene Simes · Josefina Membrado · Aldana Saldarriada
              </div>
              <div className="pt-2 text-[11px] text-emerald-400 font-mono">
                Guardianes de la Cordillera
              </div>
            </div>
          </div>

        </div>

        {/* FUENTES Y REFERENCIAS INSTITUCIONALES */}
        <div className="pt-8 border-t border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>Fuentes y Referencias del Proyecto</span>
          </div>

          <p className="text-xs text-slate-400">
            Los datos conceptuales, ecorregiones y protocolos presentados en esta plataforma educativa se inspiran en las directrices de los organismos técnicos oficiales de la República Argentina:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <strong className="text-slate-200 block">SNMF</strong>
              <span className="text-[11px] text-slate-400">Servicio Nacional de Manejo del Fuego</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <strong className="text-slate-200 block">Parques Nacionales</strong>
              <span className="text-[11px] text-slate-400">Administración de Parques Nacionales (APN)</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <strong className="text-slate-200 block">SMN</strong>
              <span className="text-[11px] text-slate-400">Servicio Meteorológico Nacional (Índices FWI)</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <strong className="text-slate-200 block">INVAP S.E.</strong>
              <span className="text-[11px] text-slate-400">Referente tecnológico en sensores e ingeniería</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <strong className="text-slate-200 block">CONAE</strong>
              <span className="text-[11px] text-slate-400">Teledetección y focos de calor satelitales</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <strong className="text-slate-200 block">INTA</strong>
              <span className="text-[11px] text-slate-400">Manejo de biomasa y pasturas sustentables</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <strong className="text-slate-200 block">SPLIF</strong>
              <span className="text-[11px] text-slate-400">Servicio de Prevención y Lucha (Río Negro)</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <strong className="text-slate-200 block">Protección Civil</strong>
              <span className="text-[11px] text-slate-400">Defensa Civil y Cuerpos de Bomberos Voluntarios</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright / disclaimer */}
        <div className="pt-6 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Prevención de Incendios Forestales y Resiliencia Territorial · EXPO TECNO ARTE
          </div>
          <div className="text-[11px] text-slate-400">
            Desarrollado con rigor educativo para concientización comunitaria.
          </div>
        </div>

      </div>
    </footer>
  );
};
