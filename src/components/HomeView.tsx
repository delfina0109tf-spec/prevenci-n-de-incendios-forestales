import React, { useState } from 'react';
import { 
  Flame, 
  Thermometer, 
  Wind, 
  Trees, 
  Home as HomeIcon, 
  Sprout, 
  Users, 
  Coins, 
  ArrowRight, 
  Satellite, 
  Compass, 
  Check, 
  ChevronRight,
  Info,
  Sparkles,
  Mountain,
  Radio,
  Eye,
  ShieldAlert
} from 'lucide-react';
import { TabType } from '../types';
import { InteractiveQuizGame } from './InteractiveQuizGame';

interface HomeViewProps {
  onNavigate: (tab: TabType) => void;
  onOpenReport: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenReport }) => {
  // Triple impact card expanded state
  const [activeImpact, setActiveImpact] = useState<'ambiental' | 'social' | 'economico' | null>(null);

  // Cost-benefit interactive investment calculator ($1 -> $4 - $10)
  const [investAmount, setInvestAmount] = useState<number>(50000);

  // Comparison slider between 0 (100% reactivo) and 100 (100% preventivo)
  const [modelBalance, setModelBalance] = useState<number>(75);

  // High-reliability static paths served from public/images
  const heroImage = '/images/hero_forest_fire.jpg';
  const patagoniaImage = '/images/patagonia_cordillera.jpg';
  const noaImage = '/images/noa_yungas.jpg';

  const savingsMin = investAmount * 4;
  const savingsMax = investAmount * 10;

  const scrollToIslands = () => {
    const el = document.getElementById('islas-regionales');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO / BANNER PRINCIPAL (Fondo cinematográfico de incendio en Argentina) */}
      <section className="relative min-h-[620px] lg:min-h-[720px] flex items-center justify-center overflow-hidden rounded-b-3xl border-b border-slate-800">
        
        {/* Cinematic Background Image with Dark Overlay / Scrim */}
        <div className="absolute inset-0 bg-slate-950">
          <img
            src={heroImage}
            alt="Incendio forestal en bosque argentino"
            loading="eager"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-70 contrast-110 scale-102 transition-transform duration-1000"
          />
          {/* Measured multi-layer dark scrim for 100% text contrast */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/60 to-slate-950" />
          
          {/* Atmospheric ember/radar effect */}
          <div className="absolute top-10 right-10 w-48 h-48 border border-orange-500/20 rounded-full hidden md:block pointer-events-none opacity-40 animate-pulse" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
          
          {/* Event Header Tag */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-amber-400 uppercase mb-4 bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-amber-500/30 backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            <span>EXPO TECNO ARTE - PROYECTO TECNOLÓGICO</span>
          </div>

          {/* Main Title */}
          <h1 className="font-black text-[#e4cdcd] tracking-tight leading-tight max-w-4xl mx-auto text-balance text-3xl sm:text-5xl lg:text-6xl drop-shadow-md">
            PREVENCIÓN DE INCENDIOS FORESTALES Y RESILIENCIA TERRITORIAL
          </h1>

          {/* Subtitle / Project Name */}
          <div className="mt-4 flex items-center justify-center gap-2.5 text-cyan-300 font-extrabold tracking-widest uppercase text-xs sm:text-base">
            <span className="h-px w-8 sm:w-16 bg-linear-to-r from-transparent to-cyan-400" />
            <span className="text-emerald-400 font-mono text-xs">▲</span>
            <span className="font-heading tracking-wider">GUARDIANES DE LA CORDILLERA</span>
            <span className="text-emerald-400 font-mono text-xs">▲</span>
            <span className="h-px w-8 sm:w-16 bg-linear-to-l from-transparent to-cyan-400" />
          </div>

          {/* Bajada */}
          <p className="mt-5 text-base sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-sm">
            Hacia un modelo preventivo, tecnológico y sustentable para proteger nuestros bosques nativos.
          </p>

          {/* Team Members Credits */}
          <div className="mt-6 inline-flex flex-col sm:flex-row items-center justify-center gap-2 py-2 px-5 rounded-2xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-md text-xs text-slate-200 shadow-lg">
            <span className="text-cyan-400 font-bold tracking-wider uppercase text-[11px] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Integrantes:
            </span>
            <span className="font-medium text-slate-200">
              Delfina Torres <span className="text-slate-500 mx-1">·</span>
              Mercedes García <span className="text-slate-500 mx-1">·</span>
              Abril Luna <span className="text-slate-500 mx-1">·</span>
              Selene Simes <span className="text-slate-500 mx-1">·</span>
              Josefina Membrado <span className="text-slate-500 mx-1">·</span>
              Aldana Saldarriada
            </span>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToIslands}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-emerald-950/60 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-102"
            >
              <span>EXPLORAR REGIONES</span>
              <Compass className="w-5 h-5 text-emerald-200" />
            </button>

            <button
              onClick={onOpenReport}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-linear-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-red-950/60 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-102"
            >
              <Flame className="w-5 h-5 text-amber-200 animate-pulse" />
              <span>🚨 REPORTAR HUMO / INCENDIO</span>
            </button>
          </div>

          {/* Under Hero Key Indicator */}
          <div className="mt-8 pt-5 border-t border-slate-800/80 inline-block">
            <p className="text-xs sm:text-sm text-amber-300 font-semibold italic">
              “La prevención comienza antes de que aparezca el fuego.”
            </p>
          </div>
        </div>
      </section>

      {/* 2. ¿POR QUÉ PREVENIR? — MULTICAUSALIDAD VISUAL */}
      <section id="por-que-prevenir" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
            Factores Clave
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
            ¿Por qué prevenir?
          </h2>
          <p className="mt-2 text-slate-300 text-xs sm:text-sm">
            Los incendios no tienen una causa única: clima extremo y actividad humana se combinan.
          </p>
        </div>

        {/* 5 Concise Multi-Factor Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-red-500/50 transition-colors">
            <span className="text-2xl block mb-2">🔥</span>
            <h3 className="text-sm font-bold text-white">Foco Ígneo</h3>
            <p className="text-[11px] text-slate-400 mt-1">
              90% de origen antrópico: fogatas, colillas o quemas no autorizadas.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-colors">
            <span className="text-2xl block mb-2">🌡️</span>
            <h3 className="text-sm font-bold text-white">Altas Temperaturas</h3>
            <p className="text-[11px] text-slate-400 mt-1">
              Olas de calor que desecan ramas y hojas, dejándolas listas para arder.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-colors">
            <span className="text-2xl block mb-2">💨</span>
            <h3 className="text-sm font-bold text-white">Viento Intenso</h3>
            <p className="text-[11px] text-slate-400 mt-1">
              Aporta oxígeno constante y proyecta chispas a cientos de metros.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-colors">
            <span className="text-2xl block mb-2">🌳</span>
            <h3 className="text-sm font-bold text-white">Vegetación Seca</h3>
            <p className="text-[11px] text-slate-400 mt-1">
              Combustible vegetal acumulado sin raleo ni fajas cortafuego.
            </p>
          </div>

          <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 transition-colors">
            <span className="text-2xl block mb-2">🏘️</span>
            <h3 className="text-sm font-bold text-white">Interfaz Forestal</h3>
            <p className="text-[11px] text-slate-400 mt-1">
              Casas y barrios integrados al bosque que requieren autoprotección.
            </p>
          </div>
        </div>
      </section>

      {/* 3. DOS GRANDES REGIONES EXPLORABLES (CORDILLERA AUSTRAL Y YUNGAS Y CHACO SECO) */}
      <section id="islas-regionales" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>Navegación Territorial</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white">
            EXPLORÁ LAS DOS GRANDES REGIONES
          </h2>
          <p className="text-slate-300 text-sm mt-2 max-w-xl mx-auto">
            Hacé clic en cualquiera de los dos territorios para ingresar a su apartado interactivo completo.
          </p>
        </div>

        {/* Two Huge Regional Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* REGIÓN 1 — CORDILLERA AUSTRAL */}
          <div
            onClick={() => onNavigate('patagonia')}
            className="group relative rounded-3xl overflow-hidden border-2 border-slate-800 hover:border-cyan-400/80 transition-all duration-500 cursor-pointer shadow-2xl bg-slate-950 flex flex-col justify-end min-h-[460px] sm:min-h-[520px] hover:-translate-y-1"
          >
            {/* Background Image with Hover Zoom */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={patagoniaImage}
                alt="Cordillera Austral - Bosques andinos y lagos"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 brightness-75 contrast-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/70 to-slate-950/20" />
            </div>

            {/* Top Regional Badge */}
            <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider bg-cyan-950/90 text-cyan-300 border border-cyan-500/50 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                <Mountain className="w-3.5 h-3.5" />
                CORDILLERA AUSTRAL
              </span>
            </div>

            {/* Regional Bottom Content */}
            <div className="relative z-10 p-6 sm:p-10 space-y-4">
              <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors drop-shadow-md">
                Cordillera Austral
              </h3>

              <p className="text-cyan-200 text-base sm:text-lg font-semibold leading-snug">
                Tecnología y ciencia contra el fuego en bosques andino-patagónicos.
              </p>

              {/* Quick Feature Badges */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-300">
                <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700 backdrop-blur-xs flex items-center gap-1">
                  🛰️ Satélites + IA
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700 backdrop-blur-xs flex items-center gap-1">
                  📡 Domos Ópticos 360°
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700 backdrop-blur-xs flex items-center gap-1">
                  🏠 Interfaz Forestal
                </span>
              </div>

              {/* Big Interactive Button */}
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-600 group-hover:bg-cyan-500 text-slate-950 font-black text-sm tracking-wide transition-all shadow-xl shadow-cyan-950/60 group-hover:translate-x-1">
                  <span>EXPLORAR REGIÓN</span>
                  <ArrowRight className="w-4 h-4 font-bold" />
                </span>
              </div>
            </div>
          </div>

          {/* REGIÓN 2 — YUNGAS Y CHACO SECO */}
          <div
            onClick={() => onNavigate('noa')}
            className="group relative rounded-3xl overflow-hidden border-2 border-slate-800 hover:border-amber-400/80 transition-all duration-500 cursor-pointer shadow-2xl bg-slate-950 flex flex-col justify-end min-h-[460px] sm:min-h-[520px] hover:-translate-y-1"
          >
            {/* Background Image with Hover Zoom */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={noaImage}
                alt="Yungas y Chaco Seco - Paisajes de Salta y Noroeste"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 brightness-75 contrast-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/70 to-slate-950/20" />
            </div>

            {/* Top Regional Badge */}
            <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider bg-amber-950/90 text-amber-300 border border-amber-500/50 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                <Sprout className="w-3.5 h-3.5" />
                YUNGAS Y CHACO SECO
              </span>
            </div>

            {/* Regional Bottom Content */}
            <div className="relative z-10 p-6 sm:p-10 space-y-4">
              <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight group-hover:text-amber-300 transition-colors drop-shadow-md">
                Yungas y Chaco Seco
              </h3>

              <p className="text-amber-200 text-base sm:text-lg font-semibold leading-snug">
                Comunidad, ecosistemas y manejo sustentable en el Norte Argentino.
              </p>

              {/* Quick Feature Badges */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-300">
                <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700 backdrop-blur-xs flex items-center gap-1">
                  🌿 Ecorregión de Yungas
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700 backdrop-blur-xs flex items-center gap-1">
                  🔥 Control de Quemas
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700 backdrop-blur-xs flex items-center gap-1">
                  🤝 Saberes Compartidos
                </span>
              </div>

              {/* Big Interactive Button */}
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 group-hover:bg-amber-400 text-slate-950 font-black text-sm tracking-wide transition-all shadow-xl shadow-amber-950/60 group-hover:translate-x-1">
                  <span>EXPLORAR REGIÓN</span>
                  <ArrowRight className="w-4 h-4 font-bold" />
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. TRIPLE IMPACTO (Sintético, visual y directo) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
            Valor Agregado
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            El Triple Impacto de Prevenir
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Ambiental */}
          <div
            onClick={() => setActiveImpact(activeImpact === 'ambiental' ? null : 'ambiental')}
            className={`p-6 rounded-2xl border transition-all cursor-pointer ${
              activeImpact === 'ambiental'
                ? 'bg-emerald-950/50 border-emerald-500 ring-2 ring-emerald-500/30'
                : 'bg-slate-900/70 border-slate-800 hover:border-emerald-500/40'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <Sprout className="w-5 h-5" />
              </span>
              <span className="text-[11px] text-emerald-400 font-mono">🌱 AMBIENTAL</span>
            </div>
            <h3 className="text-lg font-bold text-white">Biodiversidad y Suelos</h3>
            <p className="text-xs text-slate-400 mt-1">
              Reforestación con especies nativas, protección de cuencas de agua y regeneración natural.
            </p>
            {activeImpact === 'ambiental' && (
              <p className="mt-3 pt-3 border-t border-emerald-500/30 text-xs text-emerald-200">
                Un bosque quemado tarda hasta 100 años en regenerarse; la prevención preserva el ciclo hídrico vital.
              </p>
            )}
          </div>

          {/* Social */}
          <div
            onClick={() => setActiveImpact(activeImpact === 'social' ? null : 'social')}
            className={`p-6 rounded-2xl border transition-all cursor-pointer ${
              activeImpact === 'social'
                ? 'bg-blue-950/50 border-blue-500 ring-2 ring-blue-500/30'
                : 'bg-slate-900/70 border-slate-800 hover:border-blue-500/40'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/30">
                <Users className="w-5 h-5" />
              </span>
              <span className="text-[11px] text-blue-400 font-mono">👥 SOCIAL</span>
            </div>
            <h3 className="text-lg font-bold text-white">Comunidad Capacitada</h3>
            <p className="text-xs text-slate-400 mt-1">
              Brigadas comunitarias, planes de evacuación señalizados y escuelas con educación ambiental.
            </p>
            {activeImpact === 'social' && (
              <p className="mt-3 pt-3 border-t border-blue-500/30 text-xs text-blue-200">
                La organización vecinal previene el pánico y protege vidas antes de que el fuego alcance viviendas.
              </p>
            )}
          </div>

          {/* Económico */}
          <div
            onClick={() => setActiveImpact(activeImpact === 'economico' ? null : 'economico')}
            className={`p-6 rounded-2xl border transition-all cursor-pointer ${
              activeImpact === 'economico'
                ? 'bg-amber-950/50 border-amber-500 ring-2 ring-amber-500/30'
                : 'bg-slate-900/70 border-slate-800 hover:border-amber-500/40'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                <Coins className="w-5 h-5" />
              </span>
              <span className="text-[11px] text-amber-400 font-mono">💰 ECONÓMICO</span>
            </div>
            <h3 className="text-lg font-bold text-white">Costos Evitados</h3>
            <p className="text-xs text-slate-400 mt-1">
              Reducción de horas de vuelo de aviones hidrantes y protección de infraestructura productiva y turística.
            </p>
            {activeImpact === 'economico' && (
              <p className="mt-3 pt-3 border-t border-amber-500/30 text-xs text-amber-200">
                Cada dólar invertido en prevención evita entre 4 y 10 dólares en combatir y restaurar.
              </p>
            )}
          </div>

        </div>
      </section>

      {/* 5. ANÁLISIS COSTO-BENEFICIO: $1 → $4–$10 */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-10 rounded-3xl bg-linear-to-b from-slate-900 to-slate-950 border border-slate-800 text-center space-y-6 shadow-xl">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
            Economía del Cuidado
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            ¿Por qué invertir en prevención?
          </h2>

          {/* Multiplier */}
          <div className="flex items-center justify-center gap-4 sm:gap-8">
            <div className="p-3.5 sm:p-5 rounded-2xl bg-slate-800 border border-slate-700">
              <div className="text-[11px] text-slate-400 uppercase font-semibold">Inversión</div>
              <div className="text-2xl sm:text-4xl font-black text-emerald-400 font-mono">$1 USD</div>
            </div>
            <ArrowRight className="w-6 h-6 text-amber-400 animate-pulse" />
            <div className="p-3.5 sm:p-5 rounded-2xl bg-amber-950/40 border border-amber-500/50">
              <div className="text-[11px] text-amber-300 uppercase font-semibold">Costos Evitados</div>
              <div className="text-2xl sm:text-4xl font-black text-amber-400 font-mono">$4 – $10 USD</div>
            </div>
          </div>

          {/* Slider */}
          <div className="max-w-md mx-auto space-y-3 pt-2">
            <div className="flex justify-between text-xs text-slate-400">
              <span>Presupuesto Preventivo:</span>
              <span className="font-mono text-emerald-400 font-bold">${investAmount.toLocaleString()} USD</span>
            </div>
            <input
              type="range"
              min={10000}
              max={200000}
              step={10000}
              value={investAmount}
              onChange={(e) => setInvestAmount(Number(e.target.value))}
              aria-label="Inversión preventiva"
              className="w-full h-2 bg-slate-800 rounded-lg cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Ahorro estimado:</span>
              <span className="text-amber-400 font-bold">
                ${savingsMin.toLocaleString()} a ${savingsMax.toLocaleString()} USD
              </span>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 italic max-w-lg mx-auto">
            * Valor de referencia del proyecto para explicar el concepto de inversión preventiva. Los resultados varían según terreno e incendio.
          </p>
        </div>
      </section>

      {/* 6. COMPARACIÓN REACTIVO VS PROACTIVO */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
              Comparativa de Paradigmas
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Modelo Reactivo vs. Modelo Proactivo
            </h2>
          </div>

          <div className="max-w-md mx-auto space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-red-400">🔴 COMBATE REACTIVO</span>
              <span className="text-emerald-400">🟢 PREVENCIÓN PROACTIVA</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={modelBalance}
              onChange={(e) => setModelBalance(Number(e.target.value))}
              aria-label="Balance entre reactivo y preventivo"
              className="w-full h-2.5 bg-linear-to-r from-red-600 via-amber-500 to-emerald-500 rounded-lg appearance-none cursor-pointer accent-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className={`p-4 rounded-xl border transition-all ${
              modelBalance <= 50 ? 'bg-red-950/30 border-red-500/60' : 'bg-slate-950/60 border-slate-800 opacity-60'
            }`}>
              <h4 className="font-bold text-red-300 text-sm mb-2">🔴 Enfoque Tradicional</h4>
              <ul className="space-y-1.5 text-slate-300">
                <li>• Alto gasto extraordinario en aviones y combustible.</li>
                <li>• Daño de bosques antes de lograr la contención.</li>
                <li>• Cortes de rutas y evacuaciones de emergencia.</li>
              </ul>
            </div>

            <div className={`p-4 rounded-xl border transition-all ${
              modelBalance > 50 ? 'bg-emerald-950/30 border-emerald-500/60' : 'bg-slate-950/60 border-slate-800 opacity-60'
            }`}>
              <h4 className="font-bold text-emerald-300 text-sm mb-2">🟢 Enfoque Tecnológico</h4>
              <ul className="space-y-1.5 text-slate-300">
                <li>• Sensores, satélites y domos ópticos 24/7.</li>
                <li>• Manejo preventivo de biomasa y raleo antes del verano.</li>
                <li>• Alerta temprana comunitaria y menor daño territorial.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. NUEVO APARTADO FINAL: JUEGO INTERACTIVO QUIZ SÍ / NO */}
      <InteractiveQuizGame onExplorePage={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

    </div>
  );
};
