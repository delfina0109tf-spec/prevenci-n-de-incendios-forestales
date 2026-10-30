export interface YesNoQuestion {
  id: number;
  question: string;
  correctAnswer: boolean; // true = SÍ, false = NO
  difficulty: 'Fácil' | 'Intermedia' | 'Difícil';
  category: 'Prevención' | 'Tecnología' | 'Ecosistemas' | 'Comunidad';
  explanation: string;
}

export const YES_NO_QUESTIONS: YesNoQuestion[] = [
  {
    id: 1,
    question: '¿Las Yungas y los bosques patagónicos tienen la misma vegetación?',
    correctAnswer: false,
    difficulty: 'Fácil',
    category: 'Ecosistemas',
    explanation: 'Son ecosistemas diferentes, con especies y condiciones ambientales propias.'
  },
  {
    id: 2,
    question: '¿Un incendio puede afectar el suelo incluso después de que se apagan las llamas?',
    correctAnswer: true,
    difficulty: 'Intermedia',
    category: 'Ecosistemas',
    explanation: 'Puede alterar sus propiedades, eliminar materia orgánica y aumentar la erosión.'
  },
  {
    id: 3,
    question: '¿Los incendios forestales pueden contaminar el aire a kilómetros de distancia?',
    correctAnswer: true,
    difficulty: 'Fácil',
    category: 'Ecosistemas',
    explanation: 'El humo y las partículas pueden desplazarse grandes distancias.'
  },
  {
    id: 4,
    question: '¿Los incendios pueden afectar a los animales aunque estos logren escapar de las llamas?',
    correctAnswer: true,
    difficulty: 'Fácil',
    category: 'Ecosistemas',
    explanation: 'También pierden refugios, alimento y lugares de reproducción.'
  },
  {
    id: 5,
    question: '¿Si veo humo en un bosque debería acercarme para comprobar qué está pasando?',
    correctAnswer: false,
    difficulty: 'Fácil',
    category: 'Prevención',
    explanation: 'Hay que mantenerse alejado y avisar a las autoridades.'
  },
  {
    id: 6,
    question: '¿Si un incendio parece pequeño significa que es seguro acercarse?',
    correctAnswer: false,
    difficulty: 'Fácil',
    category: 'Prevención',
    explanation: 'Puede propagarse rápidamente y el humo también representa un peligro.'
  },
  {
    id: 7,
    question: '¿Los vecinos pueden colaborar con la prevención aunque no sean bomberos?',
    correctAnswer: true,
    difficulty: 'Fácil',
    category: 'Comunidad',
    explanation: 'Pueden mantener sus viviendas protegidas, evitar conductas riesgosas y comunicar situaciones sospechosas.'
  },
  {
    id: 8,
    question: '¿La detección temprana garantiza que un incendio no se convierta en un desastre?',
    correctAnswer: false,
    difficulty: 'Intermedia',
    category: 'Tecnología',
    explanation: 'Ayuda a mejorar la respuesta, pero no elimina todos los riesgos.'
  },
  {
    id: 9,
    question: '¿La reforestación consiste simplemente en plantar cualquier árbol en una zona quemada?',
    correctAnswer: false,
    difficulty: 'Intermedia',
    category: 'Ecosistemas',
    explanation: 'Deben considerarse las especies nativas y las características del ecosistema.'
  },
  {
    id: 10,
    question: '¿Un incendio forestal puede modificar el ciclo del agua de un ecosistema?',
    correctAnswer: true,
    difficulty: 'Intermedia',
    category: 'Ecosistemas',
    explanation: 'La pérdida de vegetación puede alterar la infiltración, la escorrentía y la regulación hídrica.'
  },
  {
    id: 11,
    question: '¿Todos los bosques tienen la misma capacidad de recuperarse después de un incendio?',
    correctAnswer: false,
    difficulty: 'Intermedia',
    category: 'Ecosistemas',
    explanation: 'Depende de las especies, la intensidad del fuego y las condiciones ambientales.'
  },
  {
    id: 12,
    question: 'Si alguien tira una botella de vidrio en un bosque, ¿podría contribuir a iniciar un incendio bajo determinadas condiciones?',
    correctAnswer: true,
    difficulty: 'Fácil',
    category: 'Prevención',
    explanation: 'En determinadas circunstancias, el vidrio puede concentrar la luz solar y contribuir a generar un foco de ignición. No significa que cualquier botella provoque automáticamente un incendio, pero nunca se debe dejar basura en el bosque.'
  },
  {
    id: 13,
    question: '¿Los incendios forestales se producen por causas naturales?',
    correctAnswer: false,
    difficulty: 'Fácil',
    category: 'Prevención',
    explanation: 'También pueden originarse por actividades humanas, como fogatas mal apagadas o quemas no controladas.'
  },
  {
    id: 14,
    question: '¿Los satélites y la inteligencia artificial pueden ayudar a detectar anomalías térmicas?',
    correctAnswer: true,
    difficulty: 'Intermedia',
    category: 'Tecnología',
    explanation: 'El análisis de información satelital permite identificar señales que pueden indicar la presencia de focos de calor.'
  },
  {
    id: 15,
    question: '¿La prevención de incendios es únicamente apagar el fuego cuando aparece?',
    correctAnswer: false,
    difficulty: 'Intermedia',
    category: 'Prevención',
    explanation: 'También incluye educación, monitoreo, manejo de vegetación, planificación y preparación comunitaria.'
  },
  {
    id: 16,
    question: '¿El manejo de vegetación seca puede ayudar a reducir la intensidad de un incendio?',
    correctAnswer: true,
    difficulty: 'Intermedia',
    category: 'Prevención',
    explanation: 'Reducir la acumulación de combustible vegetal puede disminuir la cantidad de material disponible para alimentar el fuego.'
  },
  {
    id: 17,
    question: '¿Las condiciones de viento y sequedad pueden hacer que un incendio avance más rápidamente?',
    correctAnswer: true,
    difficulty: 'Difícil',
    category: 'Ecosistemas',
    explanation: 'El viento aporta oxígeno, desplaza el calor y puede transportar partículas encendidas. La vegetación seca facilita la propagación.'
  },
  {
    id: 18,
    question: '¿En las Yungas y el Chaco Seco debemos enfocarnos en la prevención de las actividades agrícolas no controladas y las quemas?',
    correctAnswer: true,
    difficulty: 'Intermedia',
    category: 'Comunidad',
    explanation: 'Las quemas agrícolas no controladas pueden convertirse en incendios y afectar ecosistemas y comunidades.'
  },
  {
    id: 19,
    question: '¿Una cámara inteligente que detecta humo reemplaza completamente el trabajo de los brigadistas?',
    correctAnswer: false,
    difficulty: 'Difícil',
    category: 'Tecnología',
    explanation: 'La tecnología ayuda a detectar y comunicar alertas, pero la evaluación de la situación y la respuesta requieren personal capacitado.'
  },
  {
    id: 20,
    question: '¿La participación de las comunidades puede mejorar la prevención de incendios?',
    correctAnswer: true,
    difficulty: 'Intermedia',
    category: 'Comunidad',
    explanation: 'La capacitación, las alertas tempranas y la organización comunitaria ayudan a reducir riesgos.'
  },
  {
    id: 21,
    question: '¿Un mapa educativo de riesgo representa necesariamente las condiciones reales de peligro de incendio de ese mismo día?',
    correctAnswer: false,
    difficulty: 'Difícil',
    category: 'Tecnología',
    explanation: 'Un mapa educativo sirve para comprender y representar niveles de riesgo, pero no necesariamente contiene información meteorológica ni datos oficiales actualizados en tiempo real.'
  }
];
