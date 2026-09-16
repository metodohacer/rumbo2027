import { BonusItem, FaqItem, IdealCustomerProfile, PlannerSheet } from '../types';

export const HOTMART_CHECKOUT_URL = 'https://pay.hotmart.com/F107542447Y?checkoutMode=10';

export const UNIQUE_MECHANISM = {
  name: 'El Sistema RUMBO 2027',
  shortName: 'RUMBO 2027 + Companion',
  concept: 'Una planificadora lista para imprimir que tienes en tu mesa para escribir y pensar con calma, junto con la herramienta digital Companion en tu navegador que te ayuda con los números y la ruta guiada paso a paso.',
  problem: 'A veces te sientas a trabajar y no sabes por dónde empezar, o te distraes con el teléfono y muchas aplicaciones complicadas.',
  solution: 'Con RUMBO 2027 tienes un mapa claro en papel y una herramienta digital que te ayuda a llevar el control y mantenerte organizada en cada etapa.',
};

export const OPTIMIZED_HEADLINE = {
  formula: '[Resultado Medible Deseado] + [Mecanismo Único] + [Sin la Mayor Objeción / Frustración]',
  // The SINGLE mention of tamaño carta in the header:
  pretitle: 'EDICIÓN ESPECIAL DESCARGABLE E IMPRIMIBLE EN TAMAÑO CARTA',
  title: 'RUMBO 2027: La planificadora para llevar el control y organizar tu emprendimiento',
  subtitle: 'La descargas, la imprimes y la tienes sobre tu mesa. Sin enredos ni programas difíciles: mantén tus prioridades claras y tu negocio siempre en orden.',
  shortTitleMobile: 'RUMBO 2027 · Lleva el control de tu emprendimiento',
};

export const SEO_DATA = {
  title: 'RUMBO 2027 · Planificadora de Emprendimiento + Companion',
  metaDescription: 'Descarga e imprime RUMBO 2027. Tu guía clara paso a paso con la herramienta digital Companion. Garantía de 7 días.',
  keywords: 'rumbo 2027, planner imprimible, planificadora emprendimiento, companion rumbo 2027, roadmap emprendimiento',
};

export const IDEAL_CUSTOMER_PROFILE: IdealCustomerProfile = {
  name: 'Emprendedor que busca claridad y orden paso a paso',
  demographics: 'Personas con ganas de crear o hacer crecer su propio negocio sin perderse en tecnicismos.',
  motivations: [
    'Tener un negocio propio ordenado y rentable.',
    'Saber qué hacer cada mañana sin perder el tiempo.',
    'Avanzar con calma y ver resultados reales cada semana.',
  ],
  fears: [
    'Miedo a no saber qué paso dar primero.',
    'Sentirse abrumado con tantas aplicaciones difíciles.',
    'Dejar su proyecto a medias por falta de orden.',
  ],
  desires: [
    'Tener una guía física en su escritorio.',
    'Conocer sus costos y precios sin ser matemático.',
    'Ver crecer su idea paso a paso con certeza.',
  ],
  mainObjections: [
    {
      objection: '“¿Es difícil de usar?”',
      reframing: 'Para nada. Es tan simple que hasta un niño de 7 años lo entiende. Tomas tu lápiz, sigues las preguntas y avanzas casilla por casilla.',
    },
    {
      objection: '“¿Cómo lo imprimo?”',
      reframing: 'Viene listo en formato PDF para imprimir en cualquier impresora común o papelería de tu barrio.',
    },
    {
      objection: '“¿Y si necesito ayuda con números o pasos?”',
      reframing: 'Tienes la herramienta digital Companion en tu navegador, que hace las cuentas por ti y te muestra la ruta completa.',
    },
  ],
};

export const PLANNER_SHEETS: PlannerSheet[] = [
  {
    id: 'gestor-de-campanas',
    title: 'Gestor de Campañas',
    category: 'Estrategia',
    tagline: 'Planificación, presupuesto y métricas de lanzamiento',
    description: 'Estructura tus campañas de marketing y publicidad paso a paso: define objetivo, fechas clave, presupuesto asignado, canales de difusión y mide el retorno de inversión (ROI) obtenido.',
    badge: 'Marketing · Campañas',
    image: '/gestor-campanas.png',
    sections: [
      {
        title: 'Estrategia y Presupuesto de Campaña',
        items: ['Definición del objetivo comercial y público segmentado', 'Fechas de inicio, cierre y calendario de publicaciones', 'Control de presupuesto invertido vs. resultados esperados'],
      },
      {
        title: 'Canales y Medición de Resultados',
        items: ['Seguimiento por canal (redes sociales, email marketing, anuncios)', 'Registro de métricas clave: alcance, clics, conversiones y ventas', 'Análisis final de rentabilidad para optimizar tus próximas campañas'],
      },
    ],
    quote: '“Una campaña bien planificada convierte cada centavo invertido en ventas predecibles.”',
  },
  {
    id: 'mercado-cliente-objetivo',
    title: 'Mercado y Cliente Objetivo',
    category: 'Estrategia',
    tagline: 'Perfil demográfico, necesidades y propuesta única',
    description: 'Ficha estratégica para definir exactamente a quién ayudas: sus datos demográficos, metas, valores, desafíos reales y la solución única que tu negocio le ofrece.',
    badge: 'Pág. 33 · Estrategia Clave',
    image: '/33.png',
    sections: [
      {
        title: 'Perfil y Datos Demográficos',
        items: ['Espacio para foto/arquetipo y tabla demográfica (edad, ocupación, ingresos, ubicación)', 'Identificación de metas personales y valores que más aprecia tu cliente', 'Comprensión profunda de sus principales dolores y desafíos diarios'],
      },
      {
        title: 'Propuesta de Valor Única',
        items: ['Definición clara de sus intereses y hábitos clave', 'Claridad total sobre a quién quieres servir y por qué es tu cliente ideal', 'Qué ofreces tú de manera diferente y única para solucionar su problema'],
      },
    ],
    quote: '“Cuando conoces a fondo a tu cliente ideal, vender se vuelve una conversación natural.”',
  },
  {
    id: 'planificador-redes-sociales',
    title: 'Planificador de Redes Sociales',
    category: 'Contenido',
    tagline: 'YouTube, Facebook, Instagram, Pinterest y X',
    description: 'Hojas estratégicas dedicadas para cada una de tus plataformas: YouTube, Facebook, Instagram, Pinterest y X. Estructura accesos, frecuencia de publicación, audiencia, temáticas clave y listas de contenido.',
    badge: 'Pág. 16 · Multi-Plataforma',
    image: '/16.png',
    sections: [
      {
        title: 'Planificación para Cada Canal',
        items: [
          'Hojas dedicadas para YouTube, Facebook, Instagram, Pinterest y X',
          'Definición de frecuencia de publicación, objetivos y llamadas a la acción',
          'Registro de perfiles, biografías y categorías temáticas oficiales',
        ],
      },
      {
        title: 'Audiencia y Pilares de Contenido',
        items: [
          'Espacio para definir la audiencia específica y tono de cada canal',
          'Estructuración de listas de reproducción, series y pilares temáticos',
          'Planificación previa de publicaciones para mantener constancia sin saturarte',
        ],
      },
    ],
    quote: '“Tener una estrategia clara para cada red te ahorra tiempo y atrae a la audiencia correcta a tu negocio.”',
  },
  {
    id: 'calculadora-precio-producto',
    title: 'Calculadora de Precio del Producto',
    category: 'Finanzas',
    tagline: 'Costos, margen de ganancia y precio final de venta',
    description: 'Herramienta práctica para desglosar materias primas, mano de obra y costos fijos, calcular con precisión tu margen de ganancia y fijar precios de venta sostenibles y rentables.',
    badge: 'Herramienta Clave · Precios',
    image: '/calculadora-precio.png',
    sections: [
      {
        title: 'Cálculo de Costos y Materiales',
        items: ['Desglose detallado de materias primas, insumos y tiempo de producción', 'Asignación de costos directos e indirectos por cada unidad', 'Espacio para registrar proveedores y costos unitarios de insumos'],
      },
      {
        title: 'Margen y Precio de Venta',
        items: ['Fórmula clara para definir tu porcentaje de margen de ganancia deseado', 'Cálculo del precio de venta al público y margen para venta mayorista', 'Estrategia para evitar cobrar de menos y asegurar la salud financiera de tu negocio'],
      },
    ],
    quote: '“Fijar el precio correcto protege la rentabilidad de tu negocio y dignifica tu tiempo y talento.”',
  },
  {
    id: 'mis-cuentas',
    title: 'Mis Cuentas de Redes Sociales',
    category: 'Estructura',
    tagline: 'Registro seguro y centralizado de perfiles',
    description: 'Mantén en papel los accesos, nombres de usuario, contraseñas, biografías y descripciones de tus redes sociales (Instagram, YouTube, Twitter, Facebook, Pinterest).',
    badge: 'Pág. 30 · Accesos & Seguridad',
    image: '/30.png',
    sections: [
      {
        title: 'Control de Perfiles',
        items: ['Campos para Red Social, Nombre de Usuario, Contraseña y Biografía', 'Iconos de las principales plataformas: Instagram, YouTube, Twitter, Facebook, Pinterest', 'Caja amplia de Descripción para notas de cada cuenta'],
      },
      {
        title: 'Seguridad en Papel',
        items: ['Evita olvidos de accesos y bloqueos de cuentas', 'Tus datos esenciales a mano sin depender de aplicaciones en la nube', 'Organización clara para cuando delegues tareas'],
      },
    ],
    quote: '“Tener el control de tus accesos en un solo lugar te da total tranquilidad.”',
  },
  {
    id: 'ganancias-perdidas-anuales',
    title: 'Ganancias y Pérdidas Anuales',
    category: 'Finanzas',
    tagline: 'Control financiero mes a mes del negocio',
    description: 'Tabla anual con las columnas exactas para registrar ventas, costos de materiales, salarios, marketing, depreciación y calcular tu ganancia neta mes a mes.',
    badge: 'Pág. 43 · Finanzas Claras',
    image: '/43.png',
    sections: [
      {
        title: 'Registro Mes a Mes',
        items: ['12 filas completas para todos los meses del año', 'Columnas detalladas: Ventas, Materiales, Salarios y Marketing', 'Columnas de Depreciación, Cumplimiento y Ganancia antes de impuestos'],
      },
      {
        title: 'Salud Financiera de Tu Negocio',
        items: ['Saber mes a mes si estás ganando dinero real', 'Controlar gastos hormiga y costos de materiales', 'Tener claridad total de tus números para crecer con seguridad'],
      },
    ],
    quote: '“Un negocio con números claros es un negocio con futuro y tranquilidad.”',
  },
];

export const BONUSES: BonusItem[] = [
  {
    id: 'companion',
    tag: 'BONO #1 INCLUIDO',
    title: 'Herramienta Digital Companion',
    subtitle: 'El soporte digital en tu pantalla que acompaña a tu planner RUMBO 2027',
    realValue: '$25 USD',
    description: 'Companion fue creado para complementar la experiencia del planner RUMBO 2027, no para reemplazarlo. Mientras el PDF impreso es tu espacio para pensar y escribir con calma sobre tu mesa, la herramienta digital te ayuda con los cálculos y las cosas ordenadas.',
    features: [
      'Lo abres en tu navegador desde tu computadora, tablet o teléfono.',
      'Roadmap con casillas interactivas que vas marcando para desbloquear el siguiente paso.',
      'Calculadora de costos y precios que hace las matemáticas por ti automáticamente.',
      'Guía paso a paso para definir tu cliente ideal sin perderte.',
    ],
    companionTabs: [
      {
        id: 'roadmap-tab',
        name: 'Roadmap Paso a Paso',
        description: 'La ruta guiada desde tu idea inicial hasta tus primeros clientes felices.',
        highlight: 'Te dice exactamente qué paso dar hoy para no dudar nunca.',
        badge: 'Ruta Guiada',
      },
      {
        id: 'cliente-tab',
        name: 'Ficha de Cliente Ideal',
        description: 'Preguntas sencillas para entender a quién le sirve tu producto.',
        highlight: 'Descubre qué necesita la gente para comprarte con alegría.',
        badge: 'Estrategia',
      },
      {
        id: 'precios-tab',
        name: 'Calculadora de Precios',
        description: 'Pon cuánto gastas y cuánto quieres ganar: la herramienta hace la cuenta sola.',
        highlight: 'Cuentas automáticas sin usar programas complicados.',
        badge: 'Números Fáciles',
      },
      {
        id: 'metricas-tab',
        name: 'Tu Progreso Visual',
        description: 'Mira en una barra cuánto has avanzado en tu proyecto.',
        highlight: 'Ver tu avance te da mucha motivación para seguir.',
        badge: 'Progreso',
      },
    ],
  },
  {
    id: 'complemento-2026',
    tag: 'BONO #2 INCLUIDO',
    title: 'Complemento de Arranque Inmediato',
    subtitle: '¿Por qué esperar si puedes empezar a dar tus primeros pasos hoy mismo?',
    realValue: '$15 USD',
    description: 'Muchas personas dicen "empiezo el próximo año", pero los negocios exitosos empiezan hoy con un paso pequeño. Con este complemento recibes hojas adicionales listas para imprimir para arrancar hoy mismo, ordenar tus ideas y tener tus primeros avances sin esperar nada.',
    features: [],
    image: '/creativo.png',
  },
];

export const STACK_OFFER_ITEMS = [
  {
    name: 'RUMBO 2027 (Edición Completa Imprimible en PDF de Alta Resolución)',
    val: '$27.00 USD',
    included: true,
  },
  {
    name: 'Bono 1: Herramienta Digital Companion con Roadmap Guiado de Estructuración',
    val: '$25.00 USD',
    included: true,
  },
  {
    name: 'Bono 2: Complemento de Arranque Inmediato (Para empezar hoy mismo)',
    val: '$15.00 USD',
    included: true,
  },
  {
    name: 'Licencia de Impresión Ilimitada de por Vida para Uso Personal',
    val: '$10.00 USD',
    included: true,
  },
  {
    name: 'Garantía Total de Satisfacción por 7 Días',
    val: 'Invaluable',
    included: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'Producto e Impresión',
    question: '¿Cómo recibo el producto después de hacer la compra?',
    answer: 'El acceso es 100% automático e inmediato. Una vez completado tu pago, recibes un correo con el acceso para descargar tus archivos PDF en alta resolución y entrar a la herramienta digital Companion.',
  },
  {
    category: 'Producto e Impresión',
    question: '¿Cómo imprimo el planner?',
    answer: 'El archivo viene listo y maquetado con márgenes perfectos en formato PDF. Puedes imprimirlo en tu impresora de casa, en una papelería o imprenta local, y colocarle espiral o anillas para tenerlo en tu mesa cómodamente.',
  },
  {
    category: 'Plataforma y Pago',
    question: '¿El precio de $5 USD es un pago único o hay cobros mensuales?',
    answer: 'Es un ÚNICO pago de $5 USD. No hay suscripciones, no hay cobros mensuales ni pagos sorpresas. Con este único pago tienes acceso de por vida a la planificadora RUMBO 2027, la herramienta digital Companion y todos los bonos.',
  },
  {
    category: 'Garantía y Entrega',
    question: '¿Cómo funciona la garantía de 7 días?',
    answer: 'Es muy simple y segura: descargas RUMBO 2027, imprimes tus hojas y pruebas la herramienta Companion durante 7 días. Si sientes que no es lo que esperabas o no te ayuda, solicitas tu devolución y te devolvemos el 100% de tu dinero sin preguntas.',
  },
  {
    category: 'Producto e Impresión',
    question: '¿Sirve si estoy empezando desde cero con una idea nueva?',
    answer: '¡Es el mejor momento! RUMBO 2027 te lleva desde el paso uno: aclarar qué sabes hacer, qué problema resuelves, quién es tu cliente y tus primeros números para avanzar con seguridad.',
  },
  {
    category: 'Producto e Impresión',
    question: '¿Qué diferencia hay entre este sistema y una libreta común en blanco?',
    answer: 'Una libreta común está vacía y no te dice qué hacer. RUMBO 2027 tiene preguntas y guías ordenadas paso a paso, y se apoya en la herramienta digital Companion para hacer cuentas y mostrarte el camino sin enredos.',
  },
];
