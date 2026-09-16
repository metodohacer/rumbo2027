export interface PlannerSheet {
  id: string;
  title: string;
  category: 'Estructura' | 'Planificación' | 'Finanzas' | 'Hábitos' | 'Estrategia' | 'Contenido';
  tagline: string;
  description: string;
  badge?: string;
  image?: string;
  sections: {
    title: string;
    items: string[];
  }[];
  quote?: string;
}

export interface BonusItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  realValue: string;
  description: string;
  features: string[];
  image?: string;
  companionTabs?: {
    id: string;
    name: string;
    description: string;
    highlight: string;
    badge: string;
  }[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Producto e Impresión' | 'Plataforma y Pago' | 'Garantía y Entrega';
}

export interface IdealCustomerProfile {
  name: string;
  demographics: string;
  motivations: string[];
  fears: string[];
  desires: string[];
  mainObjections: {
    objection: string;
    reframing: string;
  }[];
}
