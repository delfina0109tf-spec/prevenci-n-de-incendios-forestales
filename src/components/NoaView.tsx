import React, { useState } from 'react';
import { 
  Flame, 
  Map, 
  Trees, 
  Sun, 
  Wind, 
  Mountain, 
  FileText, 
  Radio, 
  Users, 
  AlertCircle, 
  CheckCircle2, 
  ArrowLeft,
  Sprout,
  Sparkles,
  TrendingUp,
  ShieldAlert,
  Compass
} from 'lucide-react';
import { TabType } from '../types';

interface NoaViewProps {
  onNavigate: (tab: TabType) => void;
  onOpenReport: () => void;
}

export const NoaView: React.FC<NoaViewProps> = ({ onNavigate, onOpenReport }) => {
  const noaImage = '/images/noa_yungas.jpg';

  // Modal / Alert state for "¿Cuándo es seguro realizar una quema?"
  const [showBurnDisclaimer, setShowBurnDisclaimer] = useState<boolean>(false);

  // Interactive Ecosystem Tab: 'yungas' vs 'chaco'
  const [activeEcoSub, setActiveEcoSub] = useState<'yungas' | 'chaco'>('yungas');

  // Slope Interactive Diagram State (0: llano, 1: moderado, 2: empinado)
  const [selectedSlope, setSelectedSlope] = useState<number>(2);

  const slopeData = [
    {
      angle: '0° Terreno Plano',
      speed: '1x Velocidad base',
      speedColor: 'text-emerald-400',
      bgColor: 'bg-emerald-950/40 border-emerald-500/40',
      physics: 'El aire caliente asciende hacia la atmósfera en forma vertical sin calentar de manera directa la vegetación que está al frente.',
      diagramAngle: 'rotate-0',
      flameTilt: 'rotate-0'
    },
    {
      angle: '15° Pendiente Moderada',
      speed: '2x Velocidad acelerada',
      speedColor: 'text-amber-400',
      bgColor: 'bg-amber-950/40 border-amber-500/40',
      physics: 'La inclinación acerca las llamas al suelo superior. La radiación precalienta los arbustos y pastos secos antes de que el fuego llegue.',
      diagramAngle: '-rotate-12',
      flameTilt: 'rotate-12'
    },
    {
      angle: '30°+ Quebrada Empinada',
      speed: '3x a 4x Efecto Chimenea Máximo',
      speedColor: 'text-red-400',
      bgColor: 'bg-red-950/40 border-red-500/50',
      physics: 'El relieve forma un canal o chimenea natural: el viento asciende velozmente, secando en segundos las copas y desatando frentes explosivos cuesta arriba.',
      diagramAngle: '-rotate-24',
      flameTilt: 'rotate-24'
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-18 pb-16">
      
      {/* Top Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-300 text-xs sm:text-sm font-semibold transition-all hover:border-amber-500/50 cursor-pointer shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>← Volver a las Regiones de Exploración</span>
        </button>
      </div>

      {/* HEADER YUNGAS Y CHACO SECO */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 mx-4 sm:mx-6 lg:mx-8">
        <div className="h-72 sm:h-96 w-full relative">
          <img
            src={noaImage}
            alt="Paisaje de Salta y Selvas del Noroeste Argentino"
            loading="eager"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-70 contrast-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/65 to-transparent" />
        </div>

        <div className="relative px-6 sm:px-10 pb-8 pt-4 max-w-5xl -mt-24 sm:-mt-32">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-amber-400 uppercase bg-slate-900/90 px-3.5 py-1.5 rounded-full border border-amber-500/40 mb-3 backdrop-blur-md">
            <Sprout className="w-3.5 h-3.5" />
            <span>Noroeste Argentino · Salta · Jujuy · Tucumán</span>
          </div>

          <h1 className="font-black text-white tracking-tight text-3xl sm:text-5xl lg:text-6xl drop-shadow-md">
            Yungas y Chaco Seco
          </h1>

          <div className="mt-2 text-xs sm:text-sm font-mono text-amber-300 uppercase tracking-widest flex items-center gap-2">
            <span>GUARDIANES DE LA CORDILLERA</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-normal">Comunidad, Ecosistemas y Manejo Sustentable</span>
          </div>

          <p className="mt-3 text-slate-200 text-xs sm:text-sm leading-relaxed max-w-2xl font-light">
            Control de quemas rurales, saberes compartidos y brigadas adaptadas al relieve escarpado y a la marcada sequía estacional del Norte Argentino.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                const el = document.getElementById('regulacion-quemas');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-xl bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-amber-950/50 flex items-center gap-2 cursor-pointer hover:scale-102 transition-transform"
            >
              <Flame className="w-4 h-4 animate-pulse text-yellow-200" />
              <span>🔥 CONTROL DE QUEMAS</span>
            </button>

            <button
              onClick={() => onNavigate('mapa')}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-semibold text-xs sm:text-sm border border-slate-700 flex items-center gap-2 cursor-pointer transition-colors"
            >
              <Map className="w-4 h-4 text-amber-400" />
              <span>MAPA DE RIESGO REGIONAL</span>
            </button>
          </div>
        </div>
      </section>

      {/* BLOQUE INTRODUCTORIO BREVE: YUNGAS Y CHACO SECO (INTERACTIVO) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-linear-to-br from-slate-900 via-slate-900 to-amber-950/30 border border-amber-500/30 shadow-xl space-y-5">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-400 tracking-wider uppercase flex items-center gap-1.5">
                <Trees className="w-4 h-4 text-amber-400" />
                Dos Ecosistemas Clave en Contacto
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                ¿Qué diferencia a las Yungas del Chaco Seco?
              </h2>
            </div>

            {/* Interactive Selector Pill */}
            <div className="inline-flex p-1 rounded-xl bg-slate-950 border border-slate-800 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveEcoSub('yungas')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeEcoSub === 'yungas'
                    ? 'bg-emerald-500 text-slate-950 shadow-md font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>🌿</span>
                <span>Selva de Yungas</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveEcoSub('chaco')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeEcoSub === 'chaco'
                    ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>🏜️</span>
                <span>Chaco Seco</span>
              </button>
            </div>
          </div>

          {/* Interactive Card Presentation */}
          {activeEcoSub === 'yungas' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs animate-fadeIn">
              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-1.5">
                <div className="text-emerald-400 font-bold text-sm">📍 Dónde se encuentran</div>
                <p className="text-slate-300 leading-relaxed">
                  Laderas orientales de las sierras subandinas en <strong>Salta, Jujuy, Tucumán y Catamarca</strong>, entre los 400 y 3.000 metros de altura.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-1.5">
                <div className="text-emerald-400 font-bold text-sm">🌿 Vegetación y Estratos</div>
                <p className="text-slate-300 leading-relaxed">
                  Selva nublada muy tupida con <strong>lapachos, cedros, laureles, tipas y helechos gigantes</strong>. Alberga yaguaretés, tapires y aves endémicas.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-1.5">
                <div className="text-emerald-400 font-bold text-sm">☁️ Clima y Riesgo de Fuego</div>
                <p className="text-slate-300 leading-relaxed">
                  Lluvias estivales torrenciales y niebla invernal. Sin embargo, en primavera seca y con <strong>viento Zonda / Norte</strong>, las laderas escarpadas arden intensamente.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs animate-fadeIn">
              <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 space-y-1.5">
                <div className="text-amber-400 font-bold text-sm">📍 Dónde se encuentran</div>
                <p className="text-slate-300 leading-relaxed">
                  Planicies y serranías de <strong>este de Salta, Santiago del Estero, Formosa y Chaco</strong>, en transición con los valles agrícolas.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 space-y-1.5">
                <div className="text-amber-400 font-bold text-sm">🌳 Bosque Xerófilo</div>
                <p className="text-slate-300 leading-relaxed">
                  Árboles de madera dura adaptados a la escasez de agua: <strong>Quebracho colorado, Quebracho blanco, Algarrobo</strong>, cardones y arbustos espinosos.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 space-y-1.5">
                <div className="text-amber-400 font-bold text-sm">☀️ Sequía Estacional Crítica</div>
                <p className="text-slate-300 leading-relaxed">
                  Tiene hasta <strong>6 meses sin lluvias</strong> (mayo a noviembre). Los pastizales se secan por completo y cualquier quema de pasturas se descontrola en minutos.
                </p>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* FACTORES ECOLÓGICOS EN EL NOA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
            Singularidades Ecológicas
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            El Desafío en el NOA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-colors">
            <div className="text-2xl mb-2">🌿</div>
            <h3 className="text-base font-bold text-white">Biodiversidad en Peligro</h3>
            <p className="text-slate-300 text-xs mt-1.5 leading-relaxed">
              Las Yungas albergan casi el 50% de las aves de Argentina. La fragmentación por incendios repetidos destruye corredores biológicos vitales.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-colors">
            <div className="text-2xl mb-2">☀️</div>
            <h3 className="text-base font-bold text-white">Estacionalidad Seca</h3>
            <p className="text-slate-300 text-xs mt-1.5 leading-relaxed">
              Peligro máximo entre <strong>mayo y noviembre</strong>: las lluvias cesan y la biomasa herbácea se transforma en combustible fino y quebradizo.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-red-500/40 transition-colors">
            <div className="text-2xl mb-2">💨</div>
            <h3 className="text-base font-bold text-white">Viento Norte y Zonda</h3>
            <p className="text-slate-300 text-xs mt-1.5 leading-relaxed">
              Vientos cálidos y extremadamente secos que bajan de la cordillera, llevando la humedad por debajo del 15% y acelerando cualquier chispa.
            </p>
          </div>
        </div>
      </section>

      {/* TOPOGRAFÍA DE LADERAS: EFECTO CHIMENEA (REDiseñado, Ampliado y Visual) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-10 rounded-3xl bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-amber-500/40 space-y-8 shadow-2xl">
          
          <div className="space-y-2 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/30">
              <Mountain className="w-4 h-4 text-amber-400" />
              <span>Física del Fuego en Montaña</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Topografía de Laderas y el Efecto Chimenea
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              En las serranías de Salta y Jujuy, la inclinación del terreno cambia radicalmente la velocidad del incendio. Mirá cómo la pendiente multiplica el avance:
            </p>
          </div>

          {/* Interactive Slope Level Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {slopeData.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedSlope(index)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedSlope === index
                    ? `${item.bgColor} ring-2 ring-amber-400/50 scale-102 shadow-xl`
                    : 'bg-slate-950/70 border-slate-800 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-200">{item.angle}</span>
                  <span className={`text-xs font-black font-mono ${item.speedColor}`}>
                    {item.speed.split(' ')[0]}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">
                  {index === 0 && 'Comportamiento en llanura'}
                  {index === 1 && 'Precalentamiento moderado'}
                  {index === 2 && 'Peligro extremo en quebradas'}
                </div>
              </button>
            ))}
          </div>

          {/* Visual Slope Diagram (Dynamic Graphic) */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Graphic Representation */}
              <div className="w-full md:w-1/2 h-48 bg-slate-900 rounded-2xl border border-slate-800 relative overflow-hidden flex items-end p-4">
                {/* Terrain Line */}
                <div 
                  className={`w-full h-2 rounded-full transition-all duration-500 origin-bottom-left ${
                    selectedSlope === 0
                      ? 'bg-emerald-500 transform rotate-0'
                      : selectedSlope === 1
                        ? 'bg-amber-500 transform -rotate-12 translate-y-3'
                        : 'bg-red-500 transform -rotate-25 translate-y-6'
                  }`}
                />

                {/* Animated Rising Convection Arrows */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-around opacity-75">
                  <div className="space-y-1 text-center">
                    <span className="text-xl animate-bounce">🔥</span>
                    <span className="text-[10px] text-amber-300 font-mono block">Frente de Fuego</span>
                  </div>
                  <div className="space-y-1 text-center">
                    <span className={`text-lg text-red-400 font-bold block ${selectedSlope > 0 ? 'animate-pulse' : ''}`}>
                      ↑↑↑
                    </span>
                    <span className="text-[10px] text-red-300 font-mono block">Aire Caliente</span>
                  </div>
                  <div className="space-y-1 text-center">
                    <span className="text-xl">🌿</span>
                    <span className="text-[10px] text-slate-400 font-mono block">Biomasa Seca</span>
                  </div>
                </div>

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/90 border border-slate-700 text-[11px] font-mono text-cyan-300">
                  Inclinación simulada: {slopeData[selectedSlope].angle}
                </div>
              </div>

              {/* Physical explanation text */}
              <div className="w-full md:w-1/2 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-700 text-xs font-mono font-bold">
                  <span>Velocidad de propagación:</span>
                  <span className={slopeData[selectedSlope].speedColor}>
                    {slopeData[selectedSlope].speed}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white">
                  ¿Por qué se produce el efecto chimenea?
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {slopeData[selectedSlope].physics}
                </p>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-amber-500/30 text-[11px] text-amber-200">
                  💡 <strong>Regla de oro de los brigadistas:</strong> «Nunca se combate un incendio forestal desde la parte alta de una quebrada activa; el fuego siempre sube más rápido que una persona corriendo».
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ESTRATEGIAS DE GESTIÓN TERRITORIAL */}
      <section id="regulacion-quemas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
            Gestión Sustentable
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Estrategias Territoriales
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Regulación de Quemas */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <div className="p-2.5 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/30 w-fit">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">🔥 Regulación de Quemas</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Permisos formales, calendarios por zona y alternativas mecánicas (chipeado y compostaje) para evitar escapes de fuego en rastrojos.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowBurnDisclaimer(!showBurnDisclaimer)}
                className="w-full py-2.5 px-3 rounded-xl bg-amber-950/60 hover:bg-amber-900/60 border border-amber-500/40 text-amber-300 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                ¿CUÁNDO ES SEGURO REALIZAR UNA QUEMA?
              </button>

              {showBurnDisclaimer && (
                <div className="mt-2.5 p-3 rounded-xl bg-slate-950 border border-amber-600/60 text-xs text-amber-200 space-y-1">
                  <p className="font-semibold text-amber-300">Aviso Oficial:</p>
                  <p>
                    “Las condiciones y permisos dependen de la jurisdicción. Antes de realizar cualquier quema, consultar siempre a las autoridades locales de tu localidad o provincia.”
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Card 2: Vigilancia Tradicional + Digital */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <div className="p-2.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 w-fit">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">📡 Vigilancia Mixta</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Torres de observación fija en cerros dominantes combinadas con radios comunitarias VHF y mapas meteorológicos de peligro.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-cyan-300 font-mono text-center">
              ALERTA RADIAL EN PARAJES RURALES
            </div>
          </div>

          {/* Card 3: Saberes Compartidos */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 w-fit">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">🤝 Saberes Compartidos</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Trabajo conjunto con comunidades originarias, escuelas rurales, ganaderos y guardaparques de las Yungas.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-emerald-300 font-mono text-center">
              PARTICIPACIÓN CIUDADANA ACTIVA
            </div>
          </div>

        </div>
      </section>

      {/* MATRIZ DE TRABAJO EN EL NOA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-900 border-b border-slate-800 text-slate-400 uppercase font-semibold">
              <tr>
                <th className="py-3 px-5">Eje</th>
                <th className="py-3 px-5">Trabajo en Terreno</th>
                <th className="py-3 px-5">Beneficio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70 text-slate-300 text-xs">
              <tr className="hover:bg-slate-850/50">
                <td className="py-3 px-5 font-semibold text-white">Agro sustentable</td>
                <td className="py-3 px-5">Alternativas a la quema de rastrojos</td>
                <td className="py-3 px-5 text-amber-400">Menor riesgo de escape de fuego</td>
              </tr>
              <tr className="hover:bg-slate-850/50">
                <td className="py-3 px-5 font-semibold text-white">Red comunitaria</td>
                <td className="py-3 px-5">Alertas por radio VHF y telefonía</td>
                <td className="py-3 px-5 text-amber-400">Aviso temprano en zonas sin señal</td>
              </tr>
              <tr className="hover:bg-slate-850/50">
                <td className="py-3 px-5 font-semibold text-white">Restauración</td>
                <td className="py-3 px-5">Viveros de especies nativas de Yungas</td>
                <td className="py-3 px-5 text-amber-400">Protección de suelos y cuencas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};
