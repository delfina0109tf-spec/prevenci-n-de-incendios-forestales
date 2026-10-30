import React, { useState } from 'react';
import { Map, AlertTriangle, ShieldCheck, Info, ChevronRight, ArrowRight } from 'lucide-react';
import { ARGENTINA_REGIONS, RISK_LEVEL_GUIDES } from '../data/regionsData';
import { RegionRiskInfo, RiskLevel, TabType } from '../types';

interface RiskMapViewProps {
  onNavigate: (tab: TabType) => void;
  onOpenReport: () => void;
}

export const RiskMapView: React.FC<RiskMapViewProps> = ({ onNavigate, onOpenReport }) => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('patagonia-norte');
  const [filterLevel, setFilterLevel] = useState<string>('todos');

  const filteredRegions = ARGENTINA_REGIONS.filter((region) => {
    if (filterLevel === 'todos') return true;
    return region.riskLevel.toLowerCase() === filterLevel.toLowerCase();
  });

  const selectedRegion = filteredRegions.find((r) => r.id === selectedRegionId) || filteredRegions[0] || ARGENTINA_REGIONS[0];

  const handleFilterChange = (level: string) => {
    setFilterLevel(level);
    const matching = ARGENTINA_REGIONS.filter((r) => {
      if (level === 'todos') return true;
      return r.riskLevel.toLowerCase() === level.toLowerCase();
    });
    if (matching.length > 0 && !matching.some((r) => r.id === selectedRegionId)) {
      setSelectedRegionId(matching[0].id);
    }
  };

  const getRiskColor = (level: RiskLevel) => {
    switch (level) {
      case 'Bajo':
        return {
          bg: 'bg-emerald-500/20',
          text: 'text-emerald-400',
          border: 'border-emerald-500/40',
          fill: '#10b981',
          badge: '🟢 Bajo'
        };
      case 'Moderado':
        return {
          bg: 'bg-yellow-500/20',
          text: 'text-yellow-400',
          border: 'border-yellow-500/40',
          fill: '#eab308',
          badge: '🟡 Moderado'
        };
      case 'Alto':
        return {
          bg: 'bg-orange-500/20',
          text: 'text-orange-400',
          border: 'border-orange-500/40',
          fill: '#f97316',
          badge: '🟠 Alto'
        };
      case 'Muy alto':
        return {
          bg: 'bg-red-500/20',
          text: 'text-red-400',
          border: 'border-red-500/40',
          fill: '#ef4444',
          badge: '🔴 Muy alto'
        };
    }
  };

  const currentLevelGuide = filterLevel !== 'todos' 
    ? RISK_LEVEL_GUIDES[filterLevel === 'bajo' ? 'Bajo' : filterLevel === 'moderado' ? 'Moderado' : filterLevel === 'alto' ? 'Alto' : 'Muy alto'] 
    : null;

  return (
    <div className="space-y-10 pb-16">
      
      {/* HEADER MAPA */}
      <section className="text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-400 uppercase bg-slate-900 px-3.5 py-1.5 rounded-full border border-emerald-500/30 mb-3">
          <Map className="w-3.5 h-3.5" />
          <span>Modelo de Zonificación Ambiental</span>
        </div>

        <h1 className="font-black text-white tracking-tight text-3xl sm:text-5xl">
          MAPA EDUCATIVO DE RIESGO
        </h1>

        <p className="mt-3 text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          Simulación interactiva para comprender cómo se calculan y visualizan los niveles de peligro de incendios forestales en las ecorregiones de Argentina.
        </p>

        {/* Disclaimer */}
        <div className="mt-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 max-w-2xl mx-auto flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            Simulación pedagógica. Para consultar el peligro oficial en tiempo real, remitirse al Servicio Nacional de Manejo del Fuego (SNMF).
          </span>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-2">
        {[
          { id: 'todos', label: 'Todas las Regiones' },
          { id: 'bajo', label: '🟢 Bajo' },
          { id: 'moderado', label: '🟡 Moderado' },
          { id: 'alto', label: '🟠 Alto' },
          { id: 'muy alto', label: '🔴 Muy alto' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleFilterChange(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              filterLevel === tab.id
                ? 'bg-slate-800 text-white border border-slate-600 shadow-md ring-1 ring-slate-500'
                : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Explanatory Guide Banner for Selected Filter */}
      {currentLevelGuide && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`p-4 rounded-2xl border ${currentLevelGuide.borderClass} ${currentLevelGuide.colorClass} shadow-lg transition-all`}>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
              <div className="space-y-1">
                <span className="font-black text-sm uppercase tracking-wide">
                  {currentLevelGuide.title}
                </span>
                <p className="text-xs text-slate-200 leading-relaxed max-w-2xl">
                  {currentLevelGuide.meaning}
                </p>
              </div>
              <div className="text-xs bg-slate-950/70 p-2.5 rounded-xl border border-slate-800 space-y-1 shrink-0 w-full md:w-auto">
                <span className="font-bold text-slate-200 block text-[11px] uppercase">Medidas recomendadas:</span>
                <ul className="text-[11px] text-slate-300 space-y-0.5">
                  {currentLevelGuide.preventionActions.map((action, i) => (
                    <li key={i}>✓ {action}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Interactive Stage: Map + Region Detail Deck */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Zone: Stylized Geographic SVG Vector Map of Argentina */}
          <div className="lg:col-span-6 p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative">
            <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3 mb-4">
              <span className="font-semibold text-slate-200 uppercase tracking-wider">
                Visor Cartográfico Interactivo
              </span>
              <span className="font-mono text-cyan-400">
                {filteredRegions.length} {filteredRegions.length === 1 ? 'región' : 'regiones'}
              </span>
            </div>

            {/* Stylized SVG Map Container */}
            <div className="relative w-full h-[520px] bg-slate-950/90 rounded-2xl border border-slate-800/80 overflow-hidden flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              <svg
                viewBox="0 0 320 640"
                className="w-full h-full max-h-[500px] select-none filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              >
                {/* Silhouette of Argentina mainland */}
                <path
                  d="
                    M 110 30 
                    L 180 30 
                    L 210 50 
                    L 230 75 
                    L 205 110 
                    L 220 140 
                    L 205 180 
                    L 190 200 
                    L 220 220 
                    L 190 270 
                    L 155 310 
                    L 130 360 
                    L 125 410 
                    L 110 470 
                    L 100 530 
                    L 115 580 
                    L 85 590 
                    L 85 530 
                    L 90 440 
                    L 80 360 
                    L 75 280 
                    L 90 200 
                    L 95 120 
                    L 85 70 
                    Z
                  "
                  fill="#0f172a"
                  stroke="#334155"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />

                {/* Regional Clickable Pins */}
                {filteredRegions.map((region) => {
                  const isSelected = selectedRegion.id === region.id;
                  const colors = getRiskColor(region.riskLevel);
                  const svgX = (region.coordinates.x / 100) * 320;
                  const svgY = (region.coordinates.y / 100) * 640;

                  return (
                    <g
                      key={region.id}
                      onClick={() => setSelectedRegionId(region.id)}
                      className="cursor-pointer group"
                    >
                      {isSelected && (
                        <circle
                          cx={svgX}
                          cy={svgY}
                          r="18"
                          fill="none"
                          stroke={colors.fill}
                          strokeWidth="2"
                          className="animate-ping"
                          opacity="0.4"
                        />
                      )}

                      <circle
                        cx={svgX}
                        cy={svgY}
                        r={isSelected ? "11" : "8"}
                        fill={colors.fill}
                        stroke="#0f172a"
                        strokeWidth="2.5"
                        className="transition-all duration-300 group-hover:scale-125"
                      />

                      <text
                        x={svgX + 14}
                        y={svgY + 4}
                        fill="#f8fafc"
                        fontSize="10"
                        fontWeight={isSelected ? "bold" : "normal"}
                        className="pointer-events-none drop-shadow-md select-none"
                      >
                        {region.name.split(' ')[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Map Legend Overlay */}
              <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md p-2.5 rounded-xl border border-slate-800 text-[10px] space-y-1">
                <div className="font-semibold text-slate-300 border-b border-slate-800 pb-1">
                  Nivel de Peligro:
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> Bajo
                </div>
                <div className="flex items-center gap-1.5 text-yellow-400">
                  <span className="w-2 h-2 rounded-full bg-yellow-500" /> Moderado
                </div>
                <div className="flex items-center gap-1.5 text-orange-400">
                  <span className="w-2 h-2 rounded-full bg-orange-500" /> Alto
                </div>
                <div className="flex items-center gap-1.5 text-red-400">
                  <span className="w-2 h-2 rounded-full bg-red-500" /> Muy alto
                </div>
              </div>
            </div>
          </div>

          {/* Right Zone: Interactive Region Detail Deck */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-5">
              
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Región Seleccionada
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                    {selectedRegion.name}
                  </h3>
                </div>

                {(() => {
                  const colors = getRiskColor(selectedRegion.riskLevel);
                  return (
                    <span className={`px-3 py-1 rounded-xl text-xs font-bold border ${colors.bg} ${colors.text} ${colors.border} shrink-0`}>
                      {colors.badge}
                    </span>
                  );
                })()}
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {selectedRegion.description}
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block font-semibold mb-0.5">📅 Temporada de Peligro:</span>
                  <span className="text-slate-200">{selectedRegion.season}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block font-semibold mb-0.5">🌿 Ecorregión y Vegetación:</span>
                  <span className="text-slate-200">{selectedRegion.vegetation}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-slate-400 block font-semibold">⚠️ Factores Determinantes:</span>
                  <ul className="space-y-1 text-slate-300">
                    {selectedRegion.factors.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-200">
                  <span className="font-semibold block mb-0.5">🛡️ Enfoque Preventivo:</span>
                  <span>{selectedRegion.preventiveFocus}</span>
                </div>
              </div>

              {/* Direct Link to Region Section if Patagonia or NOA */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                {selectedRegion.id.includes('patagonia') && (
                  <button
                    onClick={() => onNavigate('patagonia')}
                    className="w-full py-3 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Ver Módulo Cordillera Austral</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

                {selectedRegion.id === 'noa' && (
                  <button
                    onClick={() => onNavigate('noa')}
                    className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Ver Módulo Yungas y Chaco Seco</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

                <button
                  onClick={onOpenReport}
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Reportar foco en esta zona</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
