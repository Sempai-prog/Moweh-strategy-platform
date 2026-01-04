import React from 'react';
import { Cpu, Scale, Briefcase, Leaf } from 'lucide-react';

export const sectors = [
  {
    id: 'digital',
    label: 'Innovation & Digital',
    themeColor: '#EAB308',
    colorClass: 'text-sector-digital',
    bgClass: 'bg-sector-digital',
    icon: <Cpu />,
    title: "Intelligence Artificielle & Influence",
    description: "Ne subissez pas la donnée, dominez-la. Nos stratégies digitales transforment le bruit en signal faible exploitable pour une prise de décision algorithmique.",
    services: [
        "Transformation IA & Automatisation",
        "Data Analytics & Prédiction",
        "Gestion de Crise Digitale",
        "Stratégies d'Influence & e-Réputation"
    ],
    kpis: [
        { 
            label: "Réduction Temps Analyse", 
            value: "-40%", 
            description: "Gain de temps moyen comparé à une analyse manuelle OSINT traditionnelle.",
            tooltip: "Diminution du temps de traitement des données grâce à nos algorithmes IA propriétaires."
        },
        { 
            label: "Détection Signaux", 
            value: "24/7", 
            description: "Monitoring continu des menaces et opportunités sur le web ouvert et dark web.",
            tooltip: "Monitoring continu des flux d'information pour identifier les menaces en temps réel."
        },
        { 
            label: "ROI Automatisé", 
            value: "x3.5", 
            description: "Retour sur investissement direct généré par l'automatisation des processus.",
            tooltip: "Retour sur investissement moyen constaté sur nos déploiements tech après 12 mois."
        }
    ]
  },
  {
    id: 'conseil',
    label: 'Conseil & Gouvernance',
    themeColor: '#F97316',
    colorClass: 'text-sector-conseil',
    bgClass: 'bg-sector-conseil',
    icon: <Scale />,
    title: "Diplomatie d'Affaires & Conformité",
    description: "Sécuriser vos arrières juridiques tout en avançant vos pions stratégiques. Une gouvernance sans faille qui transforme la contrainte réglementaire en avantage compétitif.",
    services: [
        "Audit Interne & Risk Management",
        "Diplomatie d'Affaires",
        "Structuration Juridique Complexe",
        "Conformité ISO 37001"
    ],
    kpis: [
        { 
            label: "Conformité", 
            value: "100%", 
            description: "Taux de mise en conformité ISO 37001 atteint sous 6 mois.",
            tooltip: "Garantie d'alignement total sur les standards internationaux anti-corruption."
        },
        { 
            label: "Litiges Évités", 
            value: "95%", 
            description: "Pourcentage de risques juridiques identifiés et neutralisés en amont.",
            tooltip: "Neutralisation proactive des risques légaux avant matérialisation."
        },
        { 
            label: "Vitesse Exécution", 
            value: "+2x", 
            description: "Accélération des validations administratives grâce à notre réseau diplomatique.",
            tooltip: "Réduction des délais administratifs via nos leviers diplomatiques."
        }
    ]
  },
  {
    id: 'projets',
    label: 'Projets & Opérations',
    themeColor: '#3B82F6',
    colorClass: 'text-sector-projets',
    bgClass: 'bg-sector-projets',
    icon: <Briefcase />,
    title: "PMO & Ingénierie Financière",
    description: "De la modélisation à la livraison. Nous pilotons la complexité opérationnelle pour garantir le ROI et l'alignement strict avec les objectifs macro-économiques.",
    services: [
        "PMO Externalisé (Project Management)",
        "Modélisation Financière",
        "Gestion de Joint-Ventures",
        "Pilotage de Grands Projets d'Infra"
    ],
    kpis: [
        { 
            label: "Budget Respecté", 
            value: "98%", 
            description: "Marge d'erreur minimale constatée sur les budgets d'infrastructure gérés.",
            tooltip: "Précision budgétaire atteinte grâce à notre modélisation prédictive des coûts."
        },
        { 
            label: "Gain Productivité", 
            value: "+30%", 
            description: "Optimisation de l'allocation des ressources et réduction des temps morts.",
            tooltip: "Augmentation de l'efficience opérationnelle par restructuration des processus."
        },
        { 
            label: "Livraison", 
            value: "On-Time", 
            description: "Respect strict des jalons critiques et de la date de livraison finale.",
            tooltip: "Zéro retard critique sur les jalons majeurs des projets pilotés."
        }
    ]
  },
  {
    id: 'impact',
    label: 'Impact & Durabilité',
    themeColor: '#10B981',
    colorClass: 'text-sector-impact',
    bgClass: 'bg-sector-impact',
    icon: <Leaf />,
    title: "Chaînes de Valeur & RSE",
    description: "L'agrobusiness de précision n'est pas une tendance, c'est l'avenir de la souveraineté économique. Nous structurons des filières durables et rentables.",
    services: [
        "Optimisation des Chaînes de Valeur",
        "Stratégie RSE & ESG",
        "Agriculture de Précision",
        "Souveraineté Alimentaire"
    ],
    kpis: [
        { 
            label: "Réduction CO2", 
            value: "-25%", 
            description: "Diminution mesurée de l'empreinte carbone sur l'ensemble de la chaîne de valeur.",
            tooltip: "Décarbonation active de la supply chain via optimisation logistique."
        },
        { 
            label: "Rendement", 
            value: "+15%", 
            description: "Augmentation moyenne de la production agricole à l'hectare via nos méthodes.",
            tooltip: "Productivité accrue par hectare grâce aux technologies de précision."
        },
        { 
            label: "Certification", 
            value: "GlobalGAP", 
            description: "Taux d'obtention des certifications internationales pour l'export.",
            tooltip: "Accès garanti aux marchés premium via les certifications internationales."
        }
    ]
  }
];