import React from 'react';
import { Globe, Target, Cpu, Leaf } from 'lucide-react';

export const bentoCards = [
  {
    id: '01',
    category: 'Conseil & Gouvernance',
    title: "Stratégie & Diplomatie",
    description: "Élaboration de plans stratégiques, audit interne, et structuration juridique.",
    colSpan: 'md:col-span-12 lg:col-span-6',
    icon: <Globe className="h-6 w-6" />,
    bullets: [
        "Planification stratégique",
        "Structuration juridique & financière",
        "Audit interne & Gestion des risques",
        "Intelligence économique"
    ],
    details: "Nous garantissons l'intégrité de vos structures via des audits de conformité ISO 37001 et une ingénierie juridique blindée. Une gouvernance sans faille est le pré-requis absolu pour opérer durablement en zones à risque et transformer la contrainte réglementaire en actif stratégique.",
    themeColor: '#F97316',
    bgGradient: "from-orange-500/20 to-transparent",
    hoverIcon: 'group-hover:text-sector-conseil',
    dotColor: 'bg-sector-conseil'
  },
  {
    id: '02',
    category: 'Projets & Opérations',
    title: "Projets & Opérations",
    description: "Montage et pilotage de projets complexes nationaux et internationaux.",
    colSpan: 'md:col-span-6 lg:col-span-3',
    icon: <Target className="h-6 w-6" />,
    bullets: [
        "PMO Externalisé",
        "Études de faisabilité",
        "Levées de fonds",
        "Joint-ventures"
    ],
    details: "Pilotage de haute précision pour grands projets d'infrastructure. Le PMO Moweh aligne la réalité terrain avec vos impératifs financiers, sécurisant le ROI par une gestion des risques proactive et une maîtrise totale du chemin critique.",
    themeColor: '#3B82F6',
    bgGradient: "from-blue-500/20 to-transparent",
    hoverIcon: 'group-hover:text-sector-projets',
    dotColor: 'bg-sector-projets'
  },
  {
    id: '03',
    category: 'Innovation & Digital',
    title: "Innovation & Digital",
    description: "Intégration technologique et déploiement de solutions data.",
    colSpan: 'md:col-span-6 lg:col-span-3',
    icon: <Cpu className="h-6 w-6" />,
    bullets: [
        "Transformation Digitale",
        "Solutions IA & Drones",
        "Influence Digitale",
        "Gestion de crise"
    ],
    details: "Déploiement d'architectures de souveraineté numérique et stratégies d'influence. Nous transformons vos données en bouclier cognitif contre la désinformation, utilisant l'IA pour détecter les signaux faibles avant qu'ils ne deviennent des crises.",
    themeColor: '#EAB308',
    bgGradient: "from-yellow-500/20 to-transparent",
    hoverIcon: 'group-hover:text-sector-digital',
    dotColor: 'bg-sector-digital'
  },
  {
    id: '04',
    category: 'Impact & Durabilité',
    title: "Impact & Durabilité",
    description: "RSE & Chaînes de Valeur. Structuration durable et agriculture de précision.",
    colSpan: 'md:col-span-12 lg:col-span-12',
    icon: <Leaf className="h-6 w-6" />,
    bullets: [
        "Agriculture de précision",
        "Développement Durable (RSE)",
        "Formation & Coaching",
        "Psychologie du management"
    ],
    details: "Structuration de filières agricoles durables et rentables. Nous intégrons les normes RSE au cœur du modèle économique pour sécuriser l'accès aux marchés internationaux et aux fonds verts, faisant de la durabilité un levier de performance financière.",
    themeColor: '#10B981',
    bgGradient: "from-emerald-500/20 to-transparent",
    hoverIcon: 'group-hover:text-sector-impact',
    dotColor: 'bg-sector-impact'
  }
];