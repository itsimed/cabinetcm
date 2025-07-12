export interface ServiceData {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  url?: string;
  features?: string[];
  details?: string[];
  duration?: string;
  price?: string;
  advantages?: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: "cash-management-tms",
    title: "Cash Management & TMS",
    description: "Optimisation de la gestion de trésorerie à travers des outils modernes et des systèmes TMS performants pour maximiser l'efficacité financière.",
    longDescription: "Notre expertise en Cash Management et Treasury Management Systems (TMS) vous permet d'automatiser vos processus de trésorerie, d'améliorer la visibilité sur vos flux financiers et d'optimiser vos décisions d'investissement. Nous vous accompagnons dans le choix, l'implémentation et l'optimisation de solutions TMS adaptées à vos besoins.",
    image: "/services/1.jpg",
    url: "#cash-management",
    features: [
      "Mise en place de systèmes TMS",
      "Automatisation des processus",
      "Reporting en temps réel",
      "Optimisation des flux financiers"
    ],
    details: [
      "Audit complet de vos processus actuels",
      "Sélection et implémentation de solutions TMS",
      "Formation de vos équipes",
      "Support continu et maintenance"
    ],
    duration: "4-8 semaines",
    price: "Sur devis",
    advantages: [
      "Réduction de 30% du temps de traitement",
      "Amélioration de la visibilité financière",
      "Automatisation des tâches répétitives",
      "Conformité réglementaire renforcée"
    ]
  },
  {
    id: "diagnostic-tresorerie",
    title: "Diagnostic de trésorerie",
    description: "Analyse complète et approfondie de vos flux de trésorerie pour identifier les opportunités d'amélioration et d'optimisation financière.",
    longDescription: "Notre diagnostic de trésorerie offre une vision claire et détaillée de votre situation financière. Nous analysons vos flux entrants et sortants, identifions les goulots d'étranglement et proposons des solutions concrètes pour améliorer votre gestion de trésorerie.",
    image: "/services/2.jpg",
    url: "#diagnostic",
    features: [
      "Analyse des flux de trésorerie",
      "Identification des risques",
      "Recommandations personnalisées",
      "Plan d'action détaillé"
    ],
    details: [
      "Analyse approfondie de vos flux financiers",
      "Identification des inefficacités",
      "Évaluation des risques de trésorerie",
      "Recommandations d'optimisation"
    ],
    duration: "2-3 semaines",
    price: "À partir de 2 500€",
    advantages: [
      "Vision claire de votre situation financière",
      "Identification d'économies potentielles",
      "Plan d'action concret et mesurable",
      "Support pour la mise en œuvre"
    ]
  },
  {
    id: "gestion-liquidite",
    title: "Gestion de liquidité",
    description: "Amélioration de la visibilité sur les liquidités et optimisation des placements financiers pour maximiser le rendement de vos excédents.",
    longDescription: "Notre service de gestion de liquidité vous aide à optimiser vos excédents de trésorerie et à maintenir un niveau de liquidité optimal. Nous développons des stratégies de placement adaptées à votre profil de risque et à vos besoins opérationnels.",
    image: "/services/3.jpg",
    url: "#liquidite",
    features: [
      "Prévisions de trésorerie",
      "Optimisation des placements",
      "Gestion des excédents",
      "Stratégies de liquidité"
    ],
    details: [
      "Analyse de vos besoins en liquidité",
      "Développement de stratégies de placement",
      "Mise en place d'outils de prévision",
      "Suivi et optimisation continue"
    ],
    duration: "3-6 semaines",
    price: "Sur devis",
    advantages: [
      "Amélioration du rendement de 15-25%",
      "Réduction des coûts de financement",
      "Meilleure gestion des risques",
      "Flexibilité adaptée à vos besoins"
    ]
  },
  {
    id: "relation-entente-client",
    title: "Relation et entente client",
    description: "Renforcement des accords bancaires et amélioration de la communication financière avec vos partenaires bancaires.",
    longDescription: "Nous vous accompagnons dans l'optimisation de vos relations bancaires, la négociation de conditions financières avantageuses et la mise en place de partenariats stratégiques durables avec vos institutions financières.",
    image: "/services/4.jpg",
    url: "#relation-client",
    features: [
      "Négociation bancaire",
      "Optimisation des conditions",
      "Gestion multi-banques",
      "Partenariats stratégiques"
    ],
    details: [
      "Audit de vos relations bancaires actuelles",
      "Négociation de conditions améliorées",
      "Mise en place de partenariats stratégiques",
      "Suivi et optimisation des relations"
    ],
    duration: "4-12 semaines",
    price: "Sur devis",
    advantages: [
      "Réduction des coûts bancaires de 20-40%",
      "Conditions de financement améliorées",
      "Relations bancaires optimisées",
      "Support dédié et personnalisé"
    ]
  },
  {
    id: "appel-offres",
    title: "Appel d'offres",
    description: "Accompagnement personnalisé et expertise dans vos démarches d'appel d'offre bancaire pour obtenir les meilleures conditions.",
    longDescription: "Notre expertise dans les appels d'offres bancaires vous garantit un processus optimisé et des conditions financières compétitives. Nous vous accompagnons de la préparation du dossier jusqu'à la sélection finale.",
    image: "/services/5.jpg",
    url: "#appel-offres",
    features: [
      "Préparation des dossiers",
      "Analyse comparative",
      "Négociation optimisée",
      "Sélection des partenaires"
    ],
    details: [
      "Préparation complète du dossier d'appel d'offres",
      "Analyse comparative des propositions",
      "Négociation des conditions finales",
      "Accompagnement dans la transition"
    ],
    duration: "8-16 semaines",
    price: "Sur devis",
    advantages: [
      "Économies moyennes de 25-35%",
      "Conditions bancaires optimisées",
      "Processus structuré et transparent",
      "Expertise dédiée et expérimentée"
    ]
  },
  {
    id: "economie-argent",
    title: "Économie d'argent",
    description: "Réduction des coûts financiers par une gestion optimisée et des stratégies ciblées pour maximiser vos économies.",
    longDescription: "Nos stratégies d'économie d'argent visent à réduire vos coûts financiers tout en maintenant la qualité de vos services bancaires. Nous identifions les opportunités d'économies et mettons en place des solutions concrètes.",
    image: "/services/6.jpg",
    url: "#economie",
    features: [
      "Audit des coûts financiers",
      "Optimisation des tarifs",
      "Stratégies d'économies",
      "Suivi des performances"
    ],
    details: [
      "Audit complet de vos coûts financiers",
      "Identification des opportunités d'économies",
      "Mise en place de stratégies d'optimisation",
      "Suivi et reporting des économies réalisées"
    ],
    duration: "2-4 semaines",
    price: "À partir de 1 500€",
    advantages: [
      "Économies moyennes de 15-30%",
      "Optimisation des coûts sans perte de qualité",
      "Stratégies personnalisées et adaptées",
      "Suivi continu des performances"
    ]
  },
  {
    id: "amelioration-processus",
    title: "Amélioration des processus",
    description: "Modernisation et optimisation des processus financiers internes pour gagner en efficacité et en productivité.",
    longDescription: "Nous analysons vos processus financiers actuels et proposons des améliorations concrètes pour automatiser, simplifier et optimiser vos opérations de trésorerie et de gestion financière.",
    image: "/services/7.jpg",
    url: "#processus",
    features: [
      "Analyse des processus",
      "Automatisation des tâches",
      "Optimisation des workflows",
      "Formation des équipes"
    ],
    details: [
      "Analyse détaillée de vos processus actuels",
      "Identification des points d'amélioration",
      "Mise en place de solutions d'automatisation",
      "Formation et accompagnement des équipes"
    ],
    duration: "6-12 semaines",
    price: "Sur devis",
    advantages: [
      "Gain de productivité de 40-60%",
      "Réduction des erreurs humaines",
      "Processus standardisés et optimisés",
      "Équipes formées et autonomes"
    ]
  }
];

// Fonction utilitaire pour récupérer un service par ID
export const getServiceById = (id: string): ServiceData | undefined => {
  return servicesData.find(service => service.id === id);
};

// Fonction utilitaire pour récupérer les services principaux (tous les services)
export const getFeaturedServices = (): ServiceData[] => {
  return servicesData;
};

export default servicesData;