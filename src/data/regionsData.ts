import { RegionRiskInfo, RiskLevel } from '../types';

export interface RiskLevelGuide {
  level: RiskLevel;
  badge: string;
  title: string;
  meaning: string;
  preventionActions: string[];
  colorClass: string;
  borderClass: string;
}

export const RISK_LEVEL_GUIDES: Record<RiskLevel, RiskLevelGuide> = {
  'Bajo': {
    level: 'Bajo',
    badge: '🟢 Bajo',
    title: 'Peligro Bajo (Verde)',
    meaning: 'Vegetación con alto contenido de humedad edáfica, temperaturas moderadas o bajas y vientos calmos. La probabilidad de ignición es reducida.',
    preventionActions: [
      'Mantenimiento regular de picadas cortafuego y senderos.',
      'Vigilancia preventiva y patrullaje de rutina en parques.',
      'Campañas de concientización ambiental a visitantes.'
    ],
    colorClass: 'text-emerald-400 bg-emerald-950/60',
    borderClass: 'border-emerald-500/50'
  },
  'Moderado': {
    level: 'Moderado',
    badge: '🟡 Moderado',
    title: 'Peligro Moderado (Amarillo)',
    meaning: 'Pastizales y rastrojos secos en áreas abiertas con vientos moderados. Un fuego iniciado puede propagarse si no se ataca con rapidez.',
    preventionActions: [
      'Fogatas permitidas estrictamente en campings habilitados con agua al lado.',
      'Restricción de quemas agrícolas en horarios de mediodía.',
      'Alistamiento de autobombas y monitoreo por cámaras térmicas.'
    ],
    colorClass: 'text-yellow-400 bg-yellow-950/60',
    borderClass: 'border-yellow-500/50'
  },
  'Alto': {
    level: 'Alto',
    badge: '🟠 Alto',
    title: 'Peligro Alto (Naranja)',
    meaning: 'Sequedad marcada de la vegetación fina y mediana, temperaturas elevadas y vientos persistentes. Los focos cobran intensidad rápidamente.',
    preventionActions: [
      'Prohibición total de cualquier tipo de fuego al aire libre.',
      'Suspensión de permisos de quema de rastrojos en campos y cañaverales.',
      'Guardias activas en torres de observación y patrullas de brigadistas.'
    ],
    colorClass: 'text-orange-400 bg-orange-950/60',
    borderClass: 'border-orange-500/50'
  },
  'Muy alto': {
    level: 'Muy alto',
    badge: '🔴 Muy alto / Extremo',
    title: 'Peligro Muy Alto a Extremo (Rojo)',
    meaning: 'Humedad relativa inferior al 20%, ráfagas de viento fuertes y acumulación crítica de biomasa seca. Peligro de fuego de copa explosivo.',
    preventionActions: [
      'Alerta roja interinstitucional coordinada (SNMF, Bomberos, Defensa Civil).',
      'Despliegue preventivo de medios aéreos e hidrantes en bases operativas.',
      'Cierre preventivo de senderos de montaña y vigilancia en interfaz urbana.'
    ],
    colorClass: 'text-red-400 bg-red-950/60',
    borderClass: 'border-red-500/50'
  }
};

export const ARGENTINA_REGIONS: RegionRiskInfo[] = [
  {
    id: 'noa',
    name: 'Yungas y Chaco Seco (NOA)',
    riskLevel: 'Alto',
    season: 'Mayo a Noviembre (período seco invernal/primaveral)',
    vegetation: 'Selva de Yungas en laderas y bosque xerófilo de Chaco Seco (Salta, Jujuy, Tucumán)',
    factors: [
      'Sequía estacional marcada de invierno y primavera',
      'Vientos fuertes y orografía escarpada que acelera el fuego',
      'Quemas no controladas de pasturas y rastrojos agrícolas'
    ],
    preventiveFocus: 'Monitoreo comunitario, calendarios y regulación estricta de quemas, acuerdos con productores y escuelas rurales.',
    description: 'Comprende Salta, Jujuy, Tucumán, Catamarca y Santiago del Estero. Las pendientes pronunciadas y la biomasa densa de las Yungas exigen brigadas adaptadas al terreno.',
    coordinates: { x: 34, y: 16 }
  },
  {
    id: 'patagonia-norte',
    name: 'Cordillera Austral Norte (Patagonia)',
    riskLevel: 'Muy alto',
    season: 'Diciembre a Marzo (verano austral seco y ventoso)',
    vegetation: 'Bosque Andino Patagónico (Coihue, Lenga, Ciprés) e interfaz urbano-forestal',
    factors: [
      'Veranos con baja humedad y vientos patagónicos intensos del oeste',
      'Gran expansión de viviendas en zonas de interfaz con bosque',
      'Acumulación de biomasa seca y especies exóticas pirogénicas (pinos)'
    ],
    preventiveFocus: 'Red de domos inteligentes 360°, sensores térmicos, teledetección, raleo de biomasa y autoprotección comunitaria.',
    description: 'Abarca zonas cordilleranas de Río Negro, Neuquén y Chubut (Bariloche, El Bolsón, Lago Puelo). La convivencia de bosque y urbanización es el foco prioritario.',
    coordinates: { x: 26, y: 64 }
  },
  {
    id: 'patagonia-sur',
    name: 'Patagonia Sur (Estepa y Bosques)',
    riskLevel: 'Moderado',
    season: 'Diciembre a Febrero',
    vegetation: 'Estepa patagónica y bosque subantártico (Santa Cruz, Tierra del Fuego)',
    factors: [
      'Vientos constantes de alta velocidad',
      'Turismo y campamentos en áreas remotas de difícil acceso'
    ],
    preventiveFocus: 'Patrullaje preventivo en parques nacionales, control estricto de fogatas y concientización turística.',
    description: 'Grandes extensiones con baja densidad poblacional pero alta vulnerabilidad por vientos que propagan focos en minutos.',
    coordinates: { x: 25, y: 84 }
  },
  {
    id: 'centro-sierras',
    name: 'Centro y Sierras de Córdoba',
    riskLevel: 'Muy alto',
    season: 'Agosto a Noviembre',
    vegetation: 'Espinal, matorrales serranos y pastizales de altura',
    factors: [
      'Inviernos secos con heladas que desecan pastizales',
      'Vientos del norte cálidos y secos (efecto Zonda/viento norte)',
      'Alta densidad urbana en piedemonte serrano'
    ],
    preventiveFocus: 'Sistemas de alerta temprana meteorológica, planes de contingencia municipal y erradicación de quemas.',
    description: 'Zona con histórico de incendios de rápida propagación que comprometen viviendas e infraestructura turística.',
    coordinates: { x: 44, y: 42 }
  },
  {
    id: 'cuyo',
    name: 'Cuyo (Mendoza, San Juan, San Luis)',
    riskLevel: 'Alto',
    season: 'Julio a Noviembre',
    vegetation: 'Monte de llanura, arbustales xerófilos y pastizales',
    factors: [
      'Episodios de viento Zonda con ráfagas secas e intensas',
      'Clima árido y semiárido con escasas precipitaciones anuales'
    ],
    preventiveFocus: 'Guardias de alerta durante alertas por Zonda, mantenimiento de picadas cortafuego y protección de oasis productivos.',
    description: 'El viento Zonda desciende de la cordillera elevando la temperatura súbitamente y bajando la humedad al mínimo.',
    coordinates: { x: 29, y: 44 }
  },
  {
    id: 'nea',
    name: 'NEA y Humedales del Delta',
    riskLevel: 'Moderado',
    season: 'Agosto a Octubre / Enero a Febrero',
    vegetation: 'Pastizales, pajonales de humedal, selva paranaense y esteros',
    factors: [
      'Bajantes extraordinarias de ríos y períodos de sequía',
      'Uso tradicional del fuego para renovación de pasturas'
    ],
    preventiveFocus: 'Monitoreo de islas mediante drones y satélites, regulación estricta del manejo ganadero y restauración de humedales.',
    description: 'Humedales clave como el Delta del Paraná y los Esteros del Iberá, donde la materia orgánica seca puede arder en profundidad.',
    coordinates: { x: 62, y: 28 }
  },
  {
    id: 'selva-misionera',
    name: 'Selva Paranaense y Misiones',
    riskLevel: 'Bajo',
    season: 'Temporada invernal/primaveral húmeda',
    vegetation: 'Selva subtropical paranaense con dosel denso y cursos de agua abundantes',
    factors: [
      'Precipitaciones promedio superiores a 1800 mm anuales',
      'Alta humedad en el sotobosque que impide la ignición espontánea',
      'Riesgo sólo durante sequías extremas extraordinarias'
    ],
    preventiveFocus: 'Conservación de corredores biológicos continuos y control de desmontes que puedan secar los bordes de selva.',
    description: 'Ecosistema de altísima biodiversidad con microclima húmedo protector. Las copas continuas retienen la humedad y reducen naturalmente el peligro de incendio.',
    coordinates: { x: 74, y: 19 }
  },
  {
    id: 'tierra-del-fuego',
    name: 'Bosques Fueguinos y Turberas (Tierra del Fuego)',
    riskLevel: 'Bajo',
    season: 'Noviembre a Marzo (Bajo a moderado en verano)',
    vegetation: 'Bosque de lenga, guindo y extensas turberas húmedas australes',
    factors: [
      'Bajas temperaturas medias anuales y suelos con alta retención hídrica',
      'Turberas que actúan como esponjas naturales de agua',
      'Peligro concentrado en días de vientos fuertes y campamentos turísticos'
    ],
    preventiveFocus: 'Monitoreo de sitios de acampe habilitados, protección especial de turberas y concientización a visitantes.',
    description: 'En el extremo sur, las bajas temperaturas y la humedad del suelo mantienen el riesgo basal en niveles bajos la mayor parte del año.',
    coordinates: { x: 30, y: 92 }
  }
];
