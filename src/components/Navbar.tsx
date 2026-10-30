import React, { useState } from 'react';
import { Flame, Menu, X, Shield, Compass, Sparkles } from 'lucide-react';
import { TabType } from '../types';

interface NavbarProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onOpenReportModal: () => void;
  onScrollToIslands?: () => void;
  onScrollToQuiz?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenReportModal,
  onScrollToIslands,
  onScrollToQuiz
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleGoHome = () => {
    onSelectTab('home');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoIslands = () => {
    if (currentTab !== 'home') {
      onSelectTab('home');
      setTimeout(() => {
        const el = document.getElementById('islas-regionales');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('islas-regionales');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleGoQuiz = () => {
    if (currentTab !== 'home') {
      onSelectTab('home');
      setTimeout(() => {
        const el = document.getElementById('juego-quiz');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('juego-quiz');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={handleGoHome}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <span className="p-2 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
              <Shield className="w-5 h-5" />
            </span>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-white group-hover:text-emerald-300 transition-colors whitespace-nowrap">
                GUARDIANES DE LA CORDILLERA
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest hidden sm:block">
                Prevención de Incendios · EXPO TECNO ARTE
              </span>
            </div>
          </button>

          {/* Zone 2: Stream navigation with direct links */}
          <nav className="hidden lg:flex items-center gap-5 text-xs xl:text-sm font-medium text-slate-300">
            <button
              onClick={handleGoHome}
              className={`transition-colors py-1 cursor-pointer ${
                currentTab === 'home' ? 'text-emerald-400 font-bold' : 'hover:text-white'
              }`}
            >
              Inicio
            </button>

            <button
              onClick={() => { onSelectTab('patagonia'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`transition-colors py-1 cursor-pointer ${
                currentTab === 'patagonia' ? 'text-cyan-400 font-bold' : 'hover:text-cyan-300'
              }`}
            >
              Cordillera Austral
            </button>

            <button
              onClick={() => { onSelectTab('noa'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`transition-colors py-1 cursor-pointer ${
                currentTab === 'noa' ? 'text-amber-400 font-bold' : 'hover:text-amber-300'
              }`}
            >
              Yungas y Chaco
            </button>

            <button
              onClick={() => { onSelectTab('mapa'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`transition-colors py-1 cursor-pointer ${
                currentTab === 'mapa' ? 'text-emerald-400 font-bold' : 'hover:text-emerald-300'
              }`}
            >
              Mapa de Riesgo
            </button>

            <button
              onClick={() => { onSelectTab('prevencion'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`transition-colors py-1 cursor-pointer ${
                currentTab === 'prevencion' ? 'text-emerald-400 font-bold' : 'hover:text-white'
              }`}
            >
              Prevención
            </button>

            <button
              onClick={handleGoQuiz}
              className="text-amber-400 hover:text-amber-300 transition-colors py-1 cursor-pointer flex items-center gap-1 font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Juego Quiz</span>
            </button>
          </nav>

          {/* Zone 3: Primary action (Report CTA) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenReportModal}
              className="px-4 xl:px-5 py-2.5 text-xs xl:text-sm font-bold text-white bg-linear-to-r from-red-600 via-orange-600 to-amber-600 hover:from-red-500 hover:to-amber-500 rounded-xl transition-all shadow-md shadow-red-950/40 flex items-center gap-2 cursor-pointer whitespace-nowrap hover:scale-102"
            >
              <Flame className="w-4 h-4 animate-pulse text-yellow-200" />
              <span>🚨 REPORTAR INCENDIO</span>
            </button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenReportModal}
              className="px-2.5 py-1.5 text-xs font-bold text-white bg-red-600 rounded-lg flex items-center gap-1"
            >
              <Flame className="w-3.5 h-3.5" />
              Reportar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800 cursor-pointer"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <div className="grid grid-cols-1 gap-1 text-sm font-medium">
            <button
              onClick={handleGoHome}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900"
            >
              🏠 Inicio
            </button>
            <button
              onClick={() => { onSelectTab('patagonia'); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full text-left px-3 py-2 rounded-lg text-cyan-300 hover:bg-slate-900"
            >
              🏔️ Cordillera Austral (Patagonia)
            </button>
            <button
              onClick={() => { onSelectTab('noa'); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full text-left px-3 py-2 rounded-lg text-amber-300 hover:bg-slate-900"
            >
              🌿 Yungas y Chaco Seco (NOA)
            </button>
            <button
              onClick={() => { onSelectTab('mapa'); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full text-left px-3 py-2 rounded-lg text-emerald-300 hover:bg-slate-900"
            >
              🗺️ Mapa de Riesgo Argentina
            </button>
            <button
              onClick={() => { onSelectTab('prevencion'); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900"
            >
              🛡️ Consejos de Prevención
            </button>
            <button
              onClick={handleGoQuiz}
              className="w-full text-left px-3 py-2 rounded-lg text-amber-300 hover:bg-slate-900 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Juego Interactivo Quiz Sí/No</span>
            </button>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                onOpenReportModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 px-3 rounded-lg text-sm font-bold bg-linear-to-r from-red-600 to-orange-600 text-white flex items-center justify-center gap-2 cursor-pointer"
            >
              <Flame className="w-4 h-4" />
              🚨 REPORTAR HUMO / INCENDIO
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
