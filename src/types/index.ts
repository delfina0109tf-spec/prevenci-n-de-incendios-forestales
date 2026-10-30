export type TabType = 'home' | 'patagonia' | 'noa' | 'mapa' | 'prevencion';

export type RiskLevel = 'Bajo' | 'Moderado' | 'Alto' | 'Muy alto';

export interface RegionRiskInfo {
  id: string;
  name: string;
  riskLevel: RiskLevel;
  season: string;
  vegetation: string;
  factors: string[];
  preventiveFocus: string;
  description: string;
  coordinates: { x: number; y: number };
}

export interface QuizScenario {
  id: number;
  question: string;
  situation: string;
  iconName: string;
  options: {
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}

export interface ReportData {
  photoUrl?: string;
  photoName?: string;
  location: string;
  time: string;
  incidentType: 'Humo' | 'Fuego' | 'Columna de humo grande' | 'Fuego cerca de viviendas' | 'Otro';
  description: string;
}
