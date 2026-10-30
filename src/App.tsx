import React, { useState, useEffect } from 'react';
import { Flame, ChevronUp, ArrowLeft } from 'lucide-react';
import { TabType } from './types';
import { Navbar } from './components/Navbar';
import { EmergencyBanner } from './components/EmergencyBanner';
import { ReportModal } from './components/ReportModal';
import { HomeView } from './components/HomeView';
import { PatagoniaView } from './components/PatagoniaView';
import { NoaView } from './components/NoaView';
import { RiskMapView } from './components/RiskMapView';
import { PreventionView } from './components/PreventionView';
import { Footer } from './components/Footer';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectTab = (tab: TabType) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 text-base">
      
      {/* Persistent Emergency Directives */}
      <EmergencyBanner />

      {/* Main Responsive Header (Top Bar Contract) */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenReportModal={() => setIsReportModalOpen(true)}
      />

      {/* Breadcrumb Quick Back if on subpage */}
      {currentTab !== 'home' && (
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-4 pb-1">
          <button
            onClick={() => handleSelectTab('home')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver a la portada principal</span>
          </button>
        </div>
      )}

      {/* Main Dynamic Viewport */}
      <main className="flex-1 w-full">
        {currentTab === 'home' && (
          <HomeView
            onNavigate={handleSelectTab}
            onOpenReport={() => setIsReportModalOpen(true)}
          />
        )}

        {currentTab === 'patagonia' && (
          <PatagoniaView
            onNavigate={handleSelectTab}
            onOpenReport={() => setIsReportModalOpen(true)}
          />
        )}

        {currentTab === 'noa' && (
          <NoaView
            onNavigate={handleSelectTab}
            onOpenReport={() => setIsReportModalOpen(true)}
          />
        )}

        {currentTab === 'mapa' && (
          <RiskMapView
            onNavigate={handleSelectTab}
            onOpenReport={() => setIsReportModalOpen(true)}
          />
        )}

        {currentTab === 'prevencion' && (
          <PreventionView
            onNavigate={handleSelectTab}
            onOpenReport={() => setIsReportModalOpen(true)}
          />
        )}
      </main>

      {/* Permanent Floating Action Button (FAB): 🚨 REPORTAR INCENDIO */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="p-3 rounded-full bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700 shadow-xl backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}

        <button
          onClick={() => setIsReportModalOpen(true)}
          className="group flex items-center gap-2.5 rounded-2xl bg-linear-to-r from-red-600 via-orange-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-extrabold shadow-2xl shadow-red-950/80 border border-red-400/40 transition-all hover:scale-105 active:scale-95 cursor-pointer py-3.5 px-5 text-sm"
        >
          <span className="p-1.5 rounded-xl bg-white/20 text-white group-hover:rotate-12 transition-transform">
            <Flame className="w-5 h-5 text-yellow-200 animate-pulse" />
          </span>
          <span className="tracking-wide uppercase">🚨 REPORTAR INCENDIO</span>
        </button>
      </div>

      {/* Central Report Simulator Modal */}
      <ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />

      {/* Footer */}
      <Footer
        onNavigate={handleSelectTab}
        onOpenReport={() => setIsReportModalOpen(true)}
      />

    </div>
  );
}
