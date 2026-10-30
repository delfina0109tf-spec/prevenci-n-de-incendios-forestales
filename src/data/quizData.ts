import { QuizScenario } from '../types';

export const QUIZ_SCENARIOS: QuizScenario[] = [
  {
    id: 1,
    question: 'Condiciones meteorológicas de riesgo',
    situation: 'Estás en una zona rural o agreste. El día está muy ventoso y seco, y alguien del grupo propone encender una fogata para cocinar o quemar restos de ramas.',
    iconName: 'wind',
    options: [
      {
        text: 'Encenderla si se rodea con algunas piedras grandes para que no escape.',
        isCorrect: false,
        explanation: 'Las piedras no detienen las chispas ni las pavesas voladoras. Con viento fuerte, una chispa puede viajar decenas de metros y encender pasto seco instantáneamente.'
      },
      {
        text: 'No encender ningún fuego bajo condiciones de viento y sugerir alternativas como calentadores a gas en áreas habilitadas.',
        isCorrect: true,
        explanation: '¡Excelente decisión! Con ráfagas de viento y baja humedad relativa, el índice meteorológico de peligro es extremo. La única medida segura es evitar el encendido.'
      },
      {
        text: 'Hacerla pequeña y tener a mano una botella de agua para apagarla rápido si salta una chispa.',
        isCorrect: false,
        explanation: 'Una pequeña botella de agua no tiene caudal suficiente si el fuego se propaga a la vegetación circundante. La propagación con viento es cuestión de segundos.'
      }
    ]
  },
  {
    id: 2,
    question: 'Detección visual temprana',
    situation: 'Durante un recorrido o desde tu comunidad ves a lo lejos una columna de humo blanco o grisáceo elevándose sobre una ladera de monte nativo.',
    iconName: 'flame',
    options: [
      {
        text: 'Avisar inmediatamente a las autoridades locales de emergencia (bomberos o defensa civil) indicando ubicación y puntos de referencia claros.',
        isCorrect: true,
        explanation: '¡Correcto! En el manejo del fuego, cada minuto cuenta. El aviso temprano permite a los centros de monitoreo verificar satelitalmente o despachar brigadas antes de que el foco se vuelva incontrolable.'
      },
      {
        text: 'Esperar un par de horas para ver si el humo desaparece o si los vecinos ya se encargaron.',
        isCorrect: false,
        explanation: 'Nunca asumas que alguien más ya llamó. El retraso en la detección y alerta es una de las causas principales de que los incendios alcancen gran magnitud.'
      },
      {
        text: 'Subir a la montaña por tu cuenta con ramas para intentar sofocarlo solo.',
        isCorrect: false,
        explanation: 'El fuego en laderas es impredecible y el comportamiento del viento puede atraparte en cañadones o pendientes. El combate requiere equipo de protección personal y capacitación profesional.'
      }
    ]
  },
  {
    id: 3,
    question: 'Protección de la vivienda y el entorno',
    situation: 'Vivís en una casa próxima a una zona boscosa o de monte y notás que con el invierno y otoño se acumularon hojas secas en el techo, canaletas y pasto seco contra la pared.',
    iconName: 'home',
    options: [
      {
        text: 'Juntar todo en una pila contra el alambrado del fondo y prenderle fuego un domingo temprano.',
        isCorrect: false,
        explanation: 'La quema de restos domiciliarios o de poda es una de las causas más frecuentes de incendios descontrolados que afectan a vecinos y bosques.'
      },
      {
        text: 'Limpiar canaletas, retirar hojas y crear una franja de seguridad despejada alrededor de la vivienda, compostando los restos orgánicos.',
        isCorrect: true,
        explanation: '¡Muy bien! El "espacio defendible" de 10 a 30 metros alrededor de la casa reduce drásticamente el impacto de las pavesas y permite trabajar con seguridad a los bomberos.'
      },
      {
        text: 'Dejarlo porque las hojas secas protegen la humedad natural de la tierra y no representan ningún peligro.',
        isCorrect: false,
        explanation: 'La acumulación de material combustible fino y seco en techos o contra las paredes actúa como mecha inmediata ante la caída de una chispa traída por el viento.'
      }
    ]
  }
];
