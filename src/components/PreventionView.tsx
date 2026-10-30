import React, { useState } from 'react';
import { ShieldCheck, Home, Tractor, Compass, GraduationCap, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { TabType } from '../types';

interface PreventionViewProps {
  onNavigate: (tab: TabType) => void;
  onOpenReport: () => void;
  isExhibitionMode?: boolean;
}

export const PreventionView: React.FC<PreventionViewProps> = ({ onNavigate, onOpenReport, isExhibitionMode }) => {
  const [activeCategory, setActiveCategory] = useState<'vecinos' | 'productores' | 'turistas' | 'escuela'>('vecinos');

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-400 uppercase bg-slate-900 px-3 py-1 rounded-full border border-emerald-500/30 mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Guía Práctica Comunitaria</span>
        </div>

        <h1 className={`font-black text-white tracking-tight ${
          isExhibitionMode ? 'text-4xl sm:text-6xl' : 'text-3xl sm:text-5xl'
        }`}>
          CONSEJOS PRÁCTICOS DE PREVENCIÓN
        </h1>

        <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Pautas concretas para vecinos, productores y comunidades para minimizar el riesgo y proteger vidas y bosques nativos.
        </p>
      </section>

      {/* Target Audiences Segmented Control */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-2">
        {[
          { id: 'vecinos', label: '🏠 Vecinos e Interfaz', icon: Home },
          { id: 'productores', label: '🌾 Productores Rurales', icon: Tractor },
          { id: 'turistas', label: '🏕️ Turistas y Visitantes', icon: Compass },
          { id: 'escuela', label: '🎒 Escuelas y Jóvenes', icon: GraduationCap }
        ].map((item) => {
          const isActive = activeCategory === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveCategory(item.id as typeof activeCategory)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/40'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Detailed Card Deck for Active Category */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {activeCategory === 'vecinos' && (
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 space-y-8 shadow-xl">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Viviendas en Zonas de Bosque o Piedemonte
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Creando un Espacio Defendible en el Hogar
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                El 90% de las casas alcanzadas por incendios forestales se incendian por pavesas (chispas voladoras) que entran en contacto con material fino acumulado en techos o patios.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Techos y Canaletas Despejados</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Limpiar periódicamente canaletas y bordes de techos donde el viento acumula acículas de pino, hojas secas y polvo inflamable.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Radio de 10 a 30 metros</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Podar ramas bajas de árboles hasta los 2 metros de altura para evitar que el fuego de suelo pase a las copas (fuego de copa).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Acceso para Autobombas</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Mantener los caminos de entrada con al menos 4 metros de ancho libre y sin ramas colgantes para permitir el ingreso de vehículos de emergencia.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Mochila y Plan de Evacuación</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  DNI de la familia, medicamentos esenciales, linterna recargable, agua y comida para 48 horas lista para cargar al auto ante orden oficial.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeCategory === 'productores' && (
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 space-y-8 shadow-xl">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Sector Agropecuario y Forestal
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Manejo Sustentable y Alternativas al Fuego
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                La quema tradicional de rastrojos o pastizales genera degradación de la materia orgánica del suelo y alto riesgo de escape hacia campos vecinos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Picadas y Fajas Cortafuego</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Realizar y mantener limpios los deslindes perimetrales con discos o rastras antes de que inicie la temporada de sequía.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Alternativas Mecánicas de Rastrojos</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Implementar rolado, triturado e incorporación de materia orgánica al suelo en lugar de quemas que calcinan microorganismos beneficiosos.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Reservorios de Agua Operativos</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Contar con tanques australianos con acoples compatibles para motobombas de bomberos y acceso libre para helicópteros con helibalde.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Consulta de Índices Meteorológicos</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Respetar estrictamente los avisos de peligro de incendio y no realizar trabajos de soldadura o amoladora al aire libre en días de viento o sequía.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeCategory === 'turistas' && (
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 space-y-8 shadow-xl">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Visitantes de Áreas Naturales y Parques
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Turismo Responsable en Bosques Nativos
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                Un pequeño descuido o una colilla mal apagada en la banquina puede desencadenar un incendio de miles de hectáreas en minutos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Fogatas ÚNICAMENTE en Lugares Habilitados</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Nunca encender fuego debajo de árboles ni sobre mantillo de hojas. Usar fogones oficiales de campings habilitados con agua a mano.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>El Apagado con Abundante Agua</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  No tapar las brasas con tierra seca (pueden arder bajo tierra por días). Echar agua hasta que no haya humo y las cenizas estén completamente frías al tacto.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Cero Colillas y Residuos</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Llevar cenicero de bolsillo hermético. No arrojar vidrios o latas: pueden hacer efecto lupa bajo el sol intenso.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Aviso Temprano</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Si ves humo en la ruta o en un sendero de montaña, avisa de inmediato al primer guardaparque, policía o puesto de bomberos.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeCategory === 'escuela' && (
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 space-y-8 shadow-xl">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                Comunidad Educativa y EXPO TECNO ARTE
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                La Escuela como Faro de Resiliencia
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                Los estudiantes son los mejores multiplicadores de conductas preventivas en sus hogares y barrios.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Talleres de Concientización</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Explicar la diferencia entre el combate reactivo y la prevención tecnológica mediante exposiciones tecnológicas y maquetas interactivas.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Viveros Escolares de Especies Nativas</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Germinar semillas de árboles nativos (lenga, algarrobo, quebracho, lapacho) para reforestar zonas degradadas y proteger cuencas.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Simulacros de Evacuación Segura</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Conocer las alarmas del establecimiento y practicar rutas hacia zonas seguras libres de humo en orden y calma.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Compromiso Ciudadano</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fomentar una mirada crítica sobre la gestión del territorio: cuidar el bosque es cuidar nuestro futuro común.
                </p>
              </div>
            </div>
          </div>
        )}

      </section>

      {/* Callout Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="p-8 rounded-3xl bg-linear-to-r from-emerald-950/40 via-slate-900 to-cyan-950/40 border border-slate-800 space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            ¿Querés poner a prueba el protocolo de reporte?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Utilizá nuestro sistema de reporte para experimentar cómo viaja la información desde el ciudadano hacia los centros de monitoreo.
          </p>
          <button
            onClick={onOpenReport}
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <span>Abrir Sistema de Reporte</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
