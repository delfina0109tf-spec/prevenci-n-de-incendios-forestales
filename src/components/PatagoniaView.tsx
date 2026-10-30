import React, { useState } from 'react';
import { 
  Flame, 
  Satellite, 
  Camera, 
  Radio, 
  ShieldCheck, 
  Check, 
  Map, 
  Building2, 
  Users, 
  Scan,
  RotateCw,
  ArrowLeft,
  Mountain,
  Trees,
  Wind,
  CloudRain,
  Sparkles,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { TabType } from '../types';

interface PatagoniaViewProps {
  onNavigate: (tab: TabType) => void;
  onOpenReport: () => void;
}

export const PatagoniaView: React.FC<PatagoniaViewProps> = ({ onNavigate, onOpenReport }) => {
  const patagoniaImage = '/images/patagonia_cordillera.jpg';

  // Interactive Ecosystem Tab (Brief & Visual)
  const [activeEcoTab, setActiveEcoTab] = useState<'bosque' | 'especies' | 'clima'>('bosque');

  // Interactive Dome Camera Simulator state
  const [domeAngle, setDomeAngle] = useState<number>(45);
  const [targetDetected, setTargetDetected] = useState<boolean>(false);

  // Rotating scanner effect
  const handleRotateDome = () => {
    setDomeAngle((prev) => {
      const next = (prev + 45) % 360;
      setTargetDetected(next === 135 || next === 180);
      return next;
    });
  };

  // Interactive timeline state: 0 to 3
  const [timelineStep, setTimelineStep] = useState<number>(0);

  // Coordination diagram selected node (simple language for all ages)
  const [selectedNode, setSelectedNode] = useState<string>('central');

  const coordinationNodes = [
    {
      id: 'satelites',
      emoji: '🛰️',
      label: 'Satélites en órbita',
      who: 'CONAE y satélites espaciales',
      simpleAction: 'Miran desde el espacio y detectan manchas de calor antes de que las veamos desde el suelo.'
    },
    {
      id: 'domos',
      emoji: '📡',
      label: 'Domos en los cerros',
      who: 'Cámaras 360° en puntos altos',
      simpleAction: 'Giran día y noche buscando columnas de humo blanco o gris a más de 25 km de distancia.'
    },
    {
      id: 'sensores',
      emoji: '🔥',
      label: 'Sensores térmicos',
      who: 'Tecnología nacional (INVAP)',
      simpleAction: 'Miden la temperatura exacta de las brasas para saber si el fuego avanza rápido o subterráneo.'
    },
    {
      id: 'central',
      emoji: '🏢',
      label: 'Central de Operaciones',
      who: 'Mesa de comando unificado',
      simpleAction: 'Es el cerebro del operativo: recibe los avisos, mira el viento y despacha a los equipos más cercanos en minutos.'
    },
    {
      id: 'brigadas',
      emoji: '🚒',
      label: 'Brigadas y SPLIF',
      who: 'Combatientes de incendios',
      simpleAction: 'Llegan rápido al foco con herramientas de mano, motobombas y apoyo de aviones hidrantes para contener las llamas.'
    },
    {
      id: 'defensa',
      emoji: '🛡️',
      label: 'Defensa Civil y Policía',
      who: 'Protección ciudadana',
      simpleAction: 'Cuidan las rutas de acceso, avisan a los vecinos y organizan evacuaciones seguras si el viento cambia.'
    },
    {
      id: 'vecinos',
      emoji: '👥',
      label: 'Vecinos y Comunidad',
      who: 'Familias y escuelas locales',
      simpleAction: 'Son los primeros ojos del territorio: llaman al 911/103 apenas ven humo y mantienen sus patios limpios de ramas secas.'
    }
  ];

  const timelinePhases = [
    {
      num: '01',
      title: 'Prevenir',
      subtitle: 'Antes del fuego',
      icon: Trees,
      color: 'from-emerald-500 to-teal-500',
      badgeColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/60',
      summary: 'Limpieza de ramas secas (raleo), fajas cortafuego y educación barrial en otoño e invierno.',
      detail: 'Se disminuye la carga de combustible vegetal en el bosque y cerca de las casas. Si no hay ramas secas acumuladas, el fuego no tiene cómo alimentarse.'
    },
    {
      num: '02',
      title: 'Detectar',
      subtitle: 'En menos de 15 min',
      icon: Satellite,
      color: 'from-cyan-500 to-blue-500',
      badgeColor: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/60',
      summary: 'Domos ópticos 360° en cumbres y satélites térmicos transmiten coordenadas exactas.',
      detail: 'Detectar una pequeña columna de humo en los primeros minutos permite apagarla con una sola cuadrilla antes de que trepe a las copas de los árboles.'
    },
    {
      num: '03',
      title: 'Responder',
      subtitle: 'Ataque coordinado',
      icon: Flame,
      color: 'from-amber-500 to-orange-500',
      badgeColor: 'text-amber-400 border-amber-500/40 bg-amber-950/60',
      summary: 'Despacho táctico unificado de SPLIF, brigadistas de Parques y aviones hidrantes.',
      detail: 'La central de despacho envía a los combatientes con líneas de agua y cortafuegos de urgencia para encerrar el foco y proteger las viviendas.'
    },
    {
      num: '04',
      title: 'Mitigar Daños',
      subtitle: 'Resguardo y futuro',
      icon: ShieldCheck,
      color: 'from-blue-500 to-indigo-500',
      badgeColor: 'text-blue-400 border-blue-500/40 bg-blue-950/60',
      summary: 'Protección de fuentes de agua potable, resguardo de hogares y reforestación nativa.',
      detail: 'Contención del perímetro, guardia de cenizas para evitar rebrotes subterráneos y cuidado de los suelos para que no se erosionen con las lluvias.'
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-18 pb-16">
      
      {/* Top Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 text-xs sm:text-sm font-semibold transition-all hover:border-cyan-500/50 cursor-pointer shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>← Volver a las Regiones de Exploración</span>
        </button>
      </div>

      {/* HEADER CORDILLERA AUSTRAL */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 mx-4 sm:mx-6 lg:mx-8">
        <div className="h-72 sm:h-96 w-full relative">
          <img
            src={patagoniaImage}
            alt="Cordillera Austral - Bosques Andino-Patagónicos"
            loading="eager"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-70 contrast-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/65 to-transparent" />
        </div>

        <div className="relative px-6 sm:px-10 pb-8 pt-4 max-w-5xl -mt-24 sm:-mt-32">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-cyan-400 uppercase bg-slate-900/90 px-3.5 py-1.5 rounded-full border border-cyan-500/40 mb-3 backdrop-blur-md">
            <Mountain className="w-3.5 h-3.5" />
            <span>Bosques Templados Australes</span>
          </div>

          <h1 className="font-black text-white tracking-tight text-3xl sm:text-5xl lg:text-6xl drop-shadow-md">
            Cordillera Austral
          </h1>

          <div className="mt-2 text-xs sm:text-sm font-mono text-cyan-300 uppercase tracking-widest flex items-center gap-2">
            <span>GUARDIANES DE LA CORDILLERA</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-normal">Río Negro · Neuquén · Chubut</span>
          </div>

          <p className="mt-3 text-slate-200 text-xs sm:text-sm leading-relaxed max-w-2xl font-light">
            Detección temprana, domos ópticos inteligentes y protección de la interfaz urbano-forestal en los bosques andino-patagónicos.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenReport}
              className="px-6 py-3 rounded-xl bg-linear-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-red-950/50 flex items-center gap-2 cursor-pointer hover:scale-102 transition-transform"
            >
              <Flame className="w-4 h-4 animate-pulse text-yellow-200" />
              <span>🚨 REPORTAR HUMO</span>
            </button>

            <button
              onClick={() => onNavigate('mapa')}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 font-semibold text-xs sm:text-sm border border-slate-700 flex items-center gap-2 cursor-pointer transition-colors"
            >
              <Map className="w-4 h-4 text-cyan-400" />
              <span>MAPA DE RIESGO REGIONAL</span>
            </button>
          </div>
        </div>
      </section>

      {/* BLOQUE INTRODUCTORIO BREVE: EL ECOSISTEMA CORDILLERA AUSTRAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-linear-to-br from-slate-900 via-slate-900 to-cyan-950/30 border border-cyan-500/30 shadow-xl space-y-5">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase flex items-center gap-1.5">
                <Trees className="w-4 h-4 text-cyan-400" />
                Ecosistema Andino-Patagónico
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                ¿Qué caracteriza a los bosques de la Cordillera Austral?
              </h2>
            </div>

            {/* Interactive Tab Selector */}
            <div className="inline-flex p-1 rounded-xl bg-slate-950 border border-slate-800 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveEcoTab('bosque')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeEcoTab === 'bosque'
                    ? 'bg-cyan-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🗺️ Dónde está
              </button>
              <button
                type="button"
                onClick={() => setActiveEcoTab('especies')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeEcoTab === 'especies'
                    ? 'bg-cyan-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🌲 Especies Nativas
              </button>
              <button
                type="button"
                onClick={() => setActiveEcoTab('clima')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeEcoTab === 'clima'
                    ? 'bg-cyan-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ❄️ Clima y Riesgo
              </button>
            </div>
          </div>

          {/* Interactive Content View */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className={`p-4 rounded-2xl border transition-all ${
              activeEcoTab === 'bosque' ? 'bg-cyan-950/50 border-cyan-400 ring-1 ring-cyan-400/40' : 'bg-slate-950/70 border-slate-800'
            }`}>
              <div className="text-cyan-400 font-bold text-sm mb-1 flex items-center gap-1.5">
                <span>📍 Ubicación Geográfica</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Se extiende en una franja angosta a lo largo de los Andes desde <strong>Neuquén hasta Tierra del Fuego</strong>, rodeando cuencas lacustres de origen glaciar.
              </p>
            </div>

            <div className={`p-4 rounded-2xl border transition-all ${
              activeEcoTab === 'especies' ? 'bg-cyan-950/50 border-cyan-400 ring-1 ring-cyan-400/40' : 'bg-slate-950/70 border-slate-800'
            }`}>
              <div className="text-emerald-400 font-bold text-sm mb-1 flex items-center gap-1.5">
                <span>🍃 Árboles Emblema</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Dominado por fagáceas australes como la <strong>Lenga</strong>, el <strong>Coihue</strong> y el <strong>Ñire</strong>, junto al <strong>Ciprés de la Cordillera</strong> y el Radal. Crecimiento lento y alta sensibilidad al fuego.
              </p>
            </div>

            <div className={`p-4 rounded-2xl border transition-all ${
              activeEcoTab === 'clima' ? 'bg-cyan-950/50 border-cyan-400 ring-1 ring-cyan-400/40' : 'bg-slate-950/70 border-slate-800'
            }`}>
              <div className="text-amber-400 font-bold text-sm mb-1 flex items-center gap-1.5">
                <span>🌬️ Clima y Sequía Estival</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Inviernos nevados con suelos volcánicos porosos. En verano, las lluvias caen a mínimos y los <strong>vientos del oeste superan los 60 km/h</strong>, creando condiciones de alta inflamabilidad.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FACTORES CLAVE DEL TERRITORIO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">
            Factores Territoriales
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            El Desafío en la Cordillera
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors">
            <div className="text-2xl mb-2">🏡</div>
            <h3 className="text-base font-bold text-white">Interfaz Urbano-Forestal</h3>
            <p className="text-slate-300 text-xs mt-1.5 leading-relaxed">
              Barrios y casas conviviendo dentro del bosque nativo. El fuego amenaza viviendas e infraestructura vital en cuestión de minutos si no hay defensas preparadas.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors">
            <div className="text-2xl mb-2">💨</div>
            <h3 className="text-base font-bold text-white">Viento Fuerte y Sequedad</h3>
            <p className="text-slate-300 text-xs mt-1.5 leading-relaxed">
              En verano la humedad relativa baja del 30% y las ráfagas cordilleranas transportan chispas incandescentes a gran distancia, saltando caminos y ríos.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors">
            <div className="text-2xl mb-2">🔥</div>
            <h3 className="text-base font-bold text-white">Biomasa Seca y Pinos Exóticos</h3>
            <p className="text-slate-300 text-xs mt-1.5 leading-relaxed">
              Acumulación de hojas secas y plantaciones de coníferas con alto contenido de resinas inflamables que multiplican la energía del fuego.
            </p>
          </div>
        </div>
      </section>

      {/* RED DE ALERTA TEMPRANA (3 Tarjetas Tecnológicas con Domo 360°) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
            Tecnología Aplicada
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Red de Alerta Temprana
          </h2>
          <p className="text-slate-400 text-xs mt-1">
            Detección continua para encontrar focos antes de que alcancen las copas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Satélites + IA */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/30">
                  <Satellite className="w-6 h-6" />
                </span>
                <span className="text-[11px] font-mono text-cyan-400 bg-slate-800 px-2.5 py-1 rounded-md">
                  Orbital
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">🛰️ Satélites + IA</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Supervisión orbital continua que identifica aumentos repentinos de calor infrarrojo sobre bosques patagónicos.
              </p>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-xs text-slate-400">Referencia del Proyecto:</div>
                <div className="text-xl sm:text-2xl font-black text-cyan-400 font-mono mt-0.5">
                  +20.000.000 ha
                </div>
                <div className="text-[10px] text-slate-400">Superficie monitoreada</div>
              </div>
            </div>
          </div>

          {/* Card 2: Sensores Óptico-Térmicos */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <Scan className="w-6 h-6" />
                </span>
                <span className="text-[11px] font-mono text-amber-400 bg-slate-800 px-2.5 py-1 rounded-md">
                  Infrarrojo
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">🔥 Sensores Óptico-Térmicos</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Cámaras aéreas y terrestres capaces de registrar focos incipientes ocultos bajo el dosel forestal.
              </p>
              <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-[11px] text-amber-200">
                <strong>Referencia Tecnológica:</strong> Inspirado en el desarrollo de ingeniería nacional como <strong>INVAP</strong> en sistemas sensoriales y aeroespaciales.
              </div>
            </div>
          </div>

          {/* Card 3: Domos Inteligentes 360° */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <Camera className="w-6 h-6" />
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-slate-800 px-2.5 py-1 rounded-md">
                  Cámara 360°
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">📡 Domos Inteligentes</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Vigilancia panorámica desde cerros dominantes para alertar automáticamente ante columnas de humo.
              </p>
              
              {/* Rotating Camera Control */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Orientación:</span>
                  <span className="font-mono font-bold text-emerald-400">{domeAngle}° Azimut</span>
                </div>
                <div className="relative h-16 bg-slate-900 rounded-lg flex items-center justify-center overflow-hidden border border-slate-800">
                  <div
                    className="absolute w-20 h-0.5 bg-emerald-400 origin-center transition-transform duration-300"
                    style={{ transform: `rotate(${domeAngle}deg)` }}
                  />
                  <div className="w-4 h-4 rounded-full bg-slate-800 border-2 border-emerald-400 z-10 flex items-center justify-center" />
                  {targetDetected && (
                    <div className="absolute top-1.5 right-2 bg-red-950 text-red-300 text-[9px] font-bold px-2 py-0.5 rounded border border-red-500 animate-pulse">
                      ¡COLUMNA DETECTADA!
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleRotateDome}
                  className="w-full py-1.5 px-3 rounded-lg bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Girar Domo +45°</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* LÍNEA DE TIEMPO VISUAL: CADENA DE PREVENCIÓN Y RESPUESTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 space-y-8 shadow-2xl">
          
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Línea de Tiempo Operativa
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Cadena de Prevención y Respuesta
            </h2>
            <p className="text-xs text-slate-400">
              Un recorrido secuencial ordenado para actuar antes, durante y después del fuego.
            </p>
          </div>

          {/* Visual Connected Timeline */}
          <div className="relative">
            {/* Horizontal Line connecting nodes on desktop */}
            <div className="hidden lg:block absolute top-12 left-12 right-12 h-1 bg-linear-to-r from-emerald-500 via-cyan-500 via-amber-500 to-blue-500 z-0 opacity-40" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              {timelinePhases.map((phase, index) => {
                const IconComponent = phase.icon;
                const isSelected = timelineStep === index;

                return (
                  <div
                    key={phase.num}
                    onClick={() => setTimelineStep(index)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-800/90 border-cyan-400 shadow-xl ring-2 ring-cyan-400/40 -translate-y-1'
                        : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                  >
                    <div>
                      {/* Step Number & Icon Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black font-mono border ${phase.badgeColor}`}>
                          {phase.num}
                        </span>
                        <div className={`p-2 rounded-xl bg-slate-900 border border-slate-700 ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">
                        {phase.subtitle}
                      </div>

                      <h3 className="text-base font-extrabold text-white mt-0.5">
                        {phase.title}
                      </h3>

                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        {phase.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                      <span className={isSelected ? 'text-cyan-300 font-bold' : 'text-slate-500'}>
                        {isSelected ? 'Etapa seleccionada' : 'Tocar para ver detalle'}
                      </span>
                      <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Timeline Box for current phase */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-4 text-xs sm:text-sm">
            <span className="p-3 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-500/30 shrink-0 hidden sm:flex">
              <Trees className="w-5 h-5" />
            </span>
            <div className="space-y-0.5">
              <div className="text-[11px] font-mono text-cyan-400 uppercase font-bold">
                Detalle operativo de la Fase {timelinePhases[timelineStep].num}:
              </div>
              <p className="text-slate-200 leading-relaxed font-light">
                {timelinePhases[timelineStep].detail}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* PROTOCOLO UNIFICADO (LENGUAJE CLARO PARA TODAS LAS EDADES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
              Trabajo en Equipo
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              ¿Cómo nos coordinamos contra el fuego?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Cada equipo cumple una función clave. Tocá cada eslabón para ver cómo colaboran entre sí:
            </p>
          </div>

          {/* Node selection buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {coordinationNodes.map((node) => (
              <button
                key={node.id}
                type="button"
                onClick={() => setSelectedNode(node.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedNode === node.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg scale-102 ring-2 ring-cyan-300/40'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{node.emoji}</span>
                <span>{node.label}</span>
              </button>
            ))}
          </div>

          {/* Simple explanation card */}
          {(() => {
            const current = coordinationNodes.find((n) => n.id === selectedNode) || coordinationNodes[0];
            return (
              <div className="p-6 rounded-2xl bg-slate-950 border border-cyan-500/40 max-w-2xl mx-auto text-center space-y-2 shadow-xl animate-fadeIn">
                <div className="text-3xl">{current.emoji}</div>
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
                  {current.who}
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  {current.label}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light pt-1">
                  “{current.simpleAction}”
                </p>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ¿TU CASA ESTÁ CERCA DEL BOSQUE? (CONSEJOS PRÁCTICOS VERTICALES CON TILDE ✓) */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-linear-to-b from-slate-900 to-slate-950 border border-slate-800 space-y-6 shadow-xl">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              Autoprotección Comunitaria
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              🏠 ¿Tu casa está cerca del bosque?
            </h3>
            <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
              Consejos prácticos para crear un espacio defendible y proteger tu familia y tu hogar:
            </p>
          </div>

          {/* Vertical Stack with Tilde (✓) */}
          <div className="space-y-3 pt-2">
            {[
              {
                tip: 'Limpiar canaletas y techos de hojas y acículas secas de pino.',
                detail: 'Evita que las pavesas incandescentes encendidas por el viento prendan fuego la cubierta.'
              },
              {
                tip: 'Mantener un radio de 10 metros despejado de ramas secas y malezas alrededor de la vivienda.',
                detail: 'Crea una franja de seguridad donde el fuego baja su intensidad.'
              },
              {
                tip: 'Guardar la leña para calefacción a más de 10 metros de paredes y aleros.',
                detail: 'La madera seca acumulada pegada a la casa es el mayor foco de riesgo.'
              },
              {
                tip: 'Dejar el camino de acceso vehicular libre y con espacio de giro para autobombas de bomberos.',
                detail: 'Permite que los vehículos de emergencia ingresen sin obstáculos si hay humo denso.'
              },
              {
                tip: 'Conocer de antemano las rutas de evacuación del barrio y puntos de encuentro seguros.',
                detail: 'Tener un plan familiar acordado evita desorganización ante una alerta oficial.'
              },
              {
                tip: 'Seguir siempre y en todo momento las instrucciones de Defensa Civil, SPLIF y Bomberos.',
                detail: 'Evacuar a tiempo salva vidas; las autoridades monitorean el avance del viento.'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/90 flex items-start gap-3.5 hover:border-emerald-500/40 transition-colors"
              >
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shrink-0 font-bold text-sm mt-0.5">
                  ✓
                </span>
                <div className="space-y-0.5">
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {item.tip}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing callout */}
          <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center text-xs text-emerald-300">
            🌲 <strong>“La casa mejor protegida es la que se preparó antes de que comience el verano.”</strong>
          </div>
        </div>
      </section>

    </div>
  );
};
