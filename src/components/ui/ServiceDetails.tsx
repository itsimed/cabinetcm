import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { theme } from '../../config/theme';

interface ServiceDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    image: string;
    description: string;
    details?: string[];
    advantages?: string[];
    longDescription?: string;
    features?: string[];
    duration?: string;
    price?: string;
  };
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ isOpen, onClose, service }) => {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scroll when modal is open
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Données enrichies pour chaque service
  const getServiceEnrichment = (serviceTitle: string) => {
    const enrichments: { [key: string]: any } = {
      "Cash Management & TMS": {
        testimonials: [
          {
            name: "Marie Dubois",
            position: "Directrice Financière",
            company: "TechCorp",
            text: "L'implémentation du TMS a révolutionné notre gestion de trésorerie. Nous avons gagné 40% de temps et une visibilité parfaite sur nos flux."
          },
          {
            name: "Pierre Martin",
            position: "Trésorier",
            company: "IndustriePlus",
            text: "Une équipe professionnelle qui a su adapter la solution à nos besoins spécifiques. Résultats exceptionnels !"
          }
        ],
        processSteps: [
          { step: 1, title: "Audit initial", description: "Analyse complète de vos processus actuels et identification des besoins" },
          { step: 2, title: "Sélection", description: "Choix de la solution TMS la plus adaptée à votre organisation" },
          { step: 3, title: "Implémentation", description: "Mise en place et configuration personnalisée du système" },
          { step: 4, title: "Formation", description: "Formation complète de vos équipes et transfert de compétences" },
          { step: 5, title: "Optimisation", description: "Ajustements et optimisations continues pour maximiser les résultats" }
        ],
        faqs: [
          {
            question: "Combien de temps faut-il pour implémenter un TMS ?",
            answer: "L'implémentation complète prend généralement 4 à 8 semaines selon la complexité de votre organisation et vos besoins spécifiques."
          },
          {
            question: "Quels sont les prérequis techniques ?",
            answer: "Nous évaluons votre infrastructure existante et proposons des solutions adaptées. Aucun prérequis technique majeur n'est nécessaire."
          },
          {
            question: "Le TMS est-il compatible avec nos systèmes existants ?",
            answer: "Oui, nos solutions s'intègrent parfaitement avec la plupart des systèmes ERP et bancaires du marché."
          }
        ],
        results: [
          "Réduction de 30% du temps de traitement des opérations",
          "Amélioration de 50% de la visibilité sur les flux financiers",
          "Automatisation de 80% des tâches répétitives",
          "Conformité réglementaire renforcée à 100%"
        ]
      },
      "Diagnostic de trésorerie": {
        testimonials: [
          {
            name: "Sophie Bernard",
            position: "CEO",
            company: "StartupInnov",
            text: "Le diagnostic nous a ouvert les yeux sur des opportunités d'économies que nous n'avions jamais soupçonnées."
          },
          {
            name: "Jean Moreau",
            position: "Directeur Administratif",
            company: "GroupeTradition",
            text: "Un rapport détaillé et des recommandations concrètes qui nous ont permis d'économiser 25% sur nos coûts financiers."
          }
        ],
        processSteps: [
          { step: 1, title: "Collecte de données", description: "Récupération et analyse de vos données financières" },
          { step: 2, title: "Analyse approfondie", description: "Étude détaillée de vos flux et processus" },
          { step: 3, title: "Identification des opportunités", description: "Détection des points d'amélioration" },
          { step: 4, title: "Recommandations", description: "Élaboration d'un plan d'action personnalisé" },
          { step: 5, title: "Présentation", description: "Remise du rapport détaillé avec accompagnement" }
        ],
        faqs: [
          {
            question: "Quelles données sont nécessaires pour le diagnostic ?",
            answer: "Nous analysons vos relevés bancaires, flux de trésorerie, contrats bancaires et processus internes."
          },
          {
            question: "Combien de temps dure l'analyse ?",
            answer: "Le diagnostic complet prend 2 à 3 semaines selon la complexité de votre organisation."
          },
          {
            question: "Quels sont les livrables ?",
            answer: "Vous recevez un rapport détaillé avec analyse, recommandations et plan d'action concret."
          }
        ],
        results: [
          "Identification d'économies potentielles de 15-30%",
          "Vision claire de votre situation financière",
          "Plan d'action concret et mesurable",
          "Support pour la mise en œuvre des recommandations"
        ]
      },
      "Gestion de liquidité": {
        testimonials: [
          {
            name: "Claire Leroy",
            position: "Trésorière",
            company: "MegaCorp",
            text: "Notre rendement sur les excédents a augmenté de 22% grâce à leur stratégie de placement optimisée."
          },
          {
            name: "Marc Durand",
            position: "Directeur Financier",
            company: "PME-Expert",
            text: "Une gestion de liquidité intelligente qui nous permet de maintenir notre flexibilité tout en optimisant nos revenus."
          }
        ],
        processSteps: [
          { step: 1, title: "Évaluation des besoins", description: "Analyse de vos besoins en liquidité et contraintes" },
          { step: 2, title: "Définition de la stratégie", description: "Élaboration d'une stratégie de placement adaptée" },
          { step: 3, title: "Mise en place", description: "Implémentation des outils et processus" },
          { step: 4, title: "Monitoring", description: "Suivi continu et ajustements" },
          { step: 5, title: "Optimisation", description: "Amélioration continue des performances" }
        ],
        faqs: [
          {
            question: "Quels types de placements recommandez-vous ?",
            answer: "Nous proposons des placements adaptés à votre profil de risque : fonds monétaires, obligations, placements structurés."
          },
          {
            question: "Quelle est la liquidité de ces placements ?",
            answer: "Nous privilégions des placements avec une liquidité optimale pour répondre à vos besoins opérationnels."
          },
          {
            question: "Comment gérez-vous les risques ?",
            answer: "Nous diversifions les placements et mettons en place des garde-fous pour minimiser les risques."
          }
        ],
        results: [
          "Amélioration du rendement de 15-25%",
          "Réduction des coûts de financement",
          "Meilleure gestion des risques",
          "Flexibilité adaptée à vos besoins"
        ]
      },
      "Relation et entente client": {
        testimonials: [
          {
            name: "Isabelle Rousseau",
            position: "Directrice Générale",
            company: "InnovTech",
            text: "Ils ont négocié des conditions bancaires exceptionnelles. Nous avons économisé 35% sur nos coûts bancaires."
          },
          {
            name: "Thomas Laurent",
            position: "Président",
            company: "GroupeExpansion",
            text: "Un accompagnement de qualité qui nous a permis de renforcer nos relations avec nos banques partenaires."
          }
        ],
        processSteps: [
          { step: 1, title: "Audit relationnel", description: "Analyse de vos relations bancaires actuelles" },
          { step: 2, title: "Stratégie de négociation", description: "Élaboration d'une stratégie personnalisée" },
          { step: 3, title: "Négociation", description: "Négociation des conditions avec vos banques" },
          { step: 4, title: "Accord", description: "Finalisation des accords et contrats" },
          { step: 5, title: "Suivi", description: "Accompagnement dans la durée" }
        ],
        faqs: [
          {
            question: "Pouvez-vous négocier avec nos banques existantes ?",
            answer: "Oui, nous négocions avec vos banques actuelles ou vous aidons à identifier de nouveaux partenaires."
          },
          {
            question: "Quels types d'économies peut-on espérer ?",
            answer: "Nos clients réalisent en moyenne 20-40% d'économies sur leurs coûts bancaires."
          },
          {
            question: "Le processus est-il confidentiel ?",
            answer: "Absolument, nous respectons la plus stricte confidentialité dans toutes nos négociations."
          }
        ],
        results: [
          "Réduction des coûts bancaires de 20-40%",
          "Conditions de financement améliorées",
          "Relations bancaires optimisées",
          "Support dédié et personnalisé"
        ]
      },
      "Appel d'offres": {
        testimonials: [
          {
            name: "Nicolas Petit",
            position: "Directeur Financier",
            company: "GroupeInternational",
            text: "L'appel d'offres nous a permis d'obtenir des conditions exceptionnelles. Un processus parfaitement maîtrisé."
          },
          {
            name: "Anne-Marie Dubois",
            position: "Trésorière",
            company: "CorpLeader",
            text: "Une expertise remarquable qui nous a fait économiser 30% sur nos coûts bancaires globaux."
          }
        ],
        processSteps: [
          { step: 1, title: "Préparation", description: "Élaboration du cahier des charges et critères" },
          { step: 2, title: "Lancement", description: "Diffusion de l'appel d'offres aux banques" },
          { step: 3, title: "Analyse", description: "Évaluation comparative des propositions" },
          { step: 4, title: "Négociation", description: "Négociation des conditions finales" },
          { step: 5, title: "Sélection", description: "Choix du partenaire et transition" }
        ],
        faqs: [
          {
            question: "Combien de banques contactons-nous ?",
            answer: "Nous contactons généralement 8-12 banques pour garantir une concurrence optimale."
          },
          {
            question: "Le processus est-il transparent ?",
            answer: "Oui, nous vous tenons informés à chaque étape et vous impliquons dans les décisions importantes."
          },
          {
            question: "Quelle est la durée moyenne ?",
            answer: "Un appel d'offres complet prend 8 à 16 semaines selon la complexité."
          }
        ],
        results: [
          "Économies moyennes de 25-35%",
          "Conditions bancaires optimisées",
          "Processus structuré et transparent",
          "Expertise dédiée et expérimentée"
        ]
      },
      "Économie d'argent": {
        testimonials: [
          {
            name: "Laurent Simon",
            position: "Gérant",
            company: "PME-Famille",
            text: "En seulement 3 semaines, nous avons identifié et réalisé 28% d'économies sur nos coûts financiers."
          },
          {
            name: "Céline Moreau",
            position: "Directrice Administrative",
            company: "StartupGrowth",
            text: "Un audit rapide et efficace qui nous a permis d'optimiser nos dépenses sans perdre en qualité de service."
          }
        ],
        processSteps: [
          { step: 1, title: "Audit des coûts", description: "Analyse détaillée de tous vos coûts financiers" },
          { step: 2, title: "Identification", description: "Détection des opportunités d'économies" },
          { step: 3, title: "Stratégie", description: "Élaboration d'un plan d'optimisation" },
          { step: 4, title: "Mise en œuvre", description: "Application des mesures d'économies" },
          { step: 5, title: "Suivi", description: "Monitoring des économies réalisées" }
        ],
        faqs: [
          {
            question: "Quels types de coûts analysez-vous ?",
            answer: "Nous analysons tous vos coûts bancaires : commissions, agios, frais de tenue de compte, etc."
          },
          {
            question: "Les économies sont-elles durables ?",
            answer: "Oui, nous mettons en place des processus pour maintenir les économies dans le temps."
          },
          {
            question: "Y a-t-il des risques ?",
            answer: "Non, nos recommandations préservent la qualité de vos services bancaires."
          }
        ],
        results: [
          "Économies moyennes de 15-30%",
          "Optimisation des coûts sans perte de qualité",
          "Stratégies personnalisées et adaptées",
          "Suivi continu des performances"
        ]
      },
      "Amélioration des processus": {
        testimonials: [
          {
            name: "David Martin",
            position: "Directeur Opérationnel",
            company: "IndustrieModerne",
            text: "L'automatisation de nos processus nous a fait gagner 50% de productivité. Une transformation remarquable."
          },
          {
            name: "Julie Rousseau",
            position: "Responsable Financier",
            company: "TechStartup",
            text: "Des processus optimisés qui nous permettent de nous concentrer sur notre cœur de métier."
          }
        ],
        processSteps: [
          { step: 1, title: "Cartographie", description: "Analyse détaillée de vos processus actuels" },
          { step: 2, title: "Identification", description: "Détection des points d'amélioration" },
          { step: 3, title: "Conception", description: "Élaboration des nouveaux processus" },
          { step: 4, title: "Implémentation", description: "Mise en place et formation" },
          { step: 5, title: "Optimisation", description: "Ajustements et améliorations continues" }
        ],
        faqs: [
          {
            question: "Quels processus peuvent être améliorés ?",
            answer: "Tous vos processus financiers : comptabilité, trésorerie, reporting, contrôle de gestion."
          },
          {
            question: "L'automatisation est-elle complexe ?",
            answer: "Nous privilégions des solutions simples et intuitives, avec formation complète de vos équipes."
          },
          {
            question: "Quel est l'impact sur les équipes ?",
            answer: "Nos améliorations libèrent du temps pour des tâches à plus forte valeur ajoutée."
          }
        ],
        results: [
          "Gain de productivité de 40-60%",
          "Réduction des erreurs humaines",
          "Processus standardisés et optimisés",
          "Équipes formées et autonomes"
        ]
      }
    };

    return enrichments[serviceTitle] || {
      testimonials: [],
      processSteps: [],
      faqs: [],
      results: []
    };
  };

  const enrichment = getServiceEnrichment(service.title);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 backdrop-blur-md bg-black/40 transition-all duration-200"
        onClick={onClose} // Close when clicking overlay
      />
      
      {/* Modal */}
      <div
        className="relative w-full max-w-6xl max-h-[95vh] overflow-y-auto bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
        style={{ 
          fontFamily: theme.fonts.body,
          backgroundColor: `${theme.colors.white}F2` // 95% opacity
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full backdrop-blur-sm border flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2"
          style={{ 
            backgroundColor: `${theme.colors.primary}20`,
            borderColor: `${theme.colors.primary}30`,
            color: theme.colors.primary,
            focusRingColor: theme.colors.primary
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = `${theme.colors.primary}30`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = `${theme.colors.primary}20`;
          }}
          aria-label="Fermer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne principale */}
            <div className="lg:col-span-2">
              {/* Image Section */}
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 sm:h-80 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-64 sm:h-80 flex items-center justify-center" style="background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})">
                          <div class="text-center text-white">
                            <div class="text-6xl mb-4">💼</div>
                            <p class="text-2xl font-semibold">${service.title}</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                
                {/* Badge de prix/durée */}
                {(service.price || service.duration) && (
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {service.price && (
                      <div 
                        className="px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm"
                        style={{ 
                          backgroundColor: `${theme.colors.primary}E6`,
                          color: theme.colors.white
                        }}
                      >
                        {service.price}
                      </div>
                    )}
                    {service.duration && (
                      <div 
                        className="px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm"
                        style={{ 
                          backgroundColor: `${theme.colors.secondary}E6`,
                          color: theme.colors.white
                        }}
                      >
                        {service.duration}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Title */}
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                style={{ 
                  color: theme.colors.primary,
                  fontFamily: theme.fonts.heading 
                }}
              >
                {service.title}
              </h2>

              {/* Description longue */}
              <p 
                className="text-lg sm:text-xl leading-relaxed mb-6"
                style={{ color: theme.colors.text }}
              >
                {service.longDescription || service.description}
              </p>

              {/* Features */}
              {service.features && service.features.length > 0 && (
                <div className="mb-8">
                  <h3 
                    className="text-xl font-semibold mb-4"
                    style={{ color: theme.colors.primary }}
                  >
                    Fonctionnalités principales
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                        style={{ 
                          backgroundColor: `${theme.colors.primary}08`,
                          border: `1px solid ${theme.colors.primary}15`
                        }}
                      >
                        <div 
                          className="p-1 rounded-full"
                          style={{ backgroundColor: `${theme.colors.primary}20` }}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            style={{ color: theme.colors.primary }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium" style={{ color: theme.colors.text }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Process Steps */}
              {enrichment.processSteps && enrichment.processSteps.length > 0 && (
                <div className="mb-8">
                  <h3 
                    className="text-xl font-semibold mb-4"
                    style={{ color: theme.colors.primary }}
                  >
                    Notre processus
                  </h3>
                  <div className="space-y-4">
                    {enrichment.processSteps.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div 
                          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                          style={{ 
                            backgroundColor: theme.colors.primary,
                            color: theme.colors.white
                          }}
                        >
                          {step.step}
                        </div>
                        <div>
                          <h4 
                            className="font-semibold mb-1"
                            style={{ color: theme.colors.primary }}
                          >
                            {step.title}
                          </h4>
                          <p className="text-sm" style={{ color: theme.colors.text }}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Results */}
              {enrichment.results && enrichment.results.length > 0 && (
                <div className="mb-8">
                  <h3 
                    className="text-xl font-semibold mb-4"
                    style={{ color: theme.colors.primary }}
                  >
                    Résultats attendus
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {enrichment.results.map((result, index) => (
                      <div 
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg"
                        style={{ 
                          backgroundColor: `${theme.colors.secondary}08`,
                          border: `1px solid ${theme.colors.secondary}15`
                        }}
                      >
                        <div 
                          className="p-1 rounded-full"
                          style={{ backgroundColor: `${theme.colors.secondary}20` }}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            style={{ color: theme.colors.secondary }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium" style={{ color: theme.colors.text }}>
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Colonne latérale */}
            <div className="lg:col-span-1 space-y-6">
              {/* Additional Details Grid */}
              {(service.details || service.advantages) && (
                <div className="space-y-4">
                  {/* Details */}
                  {service.details && service.details.length > 0 && (
                    <div 
                      className="backdrop-blur-sm rounded-xl p-4 border transition-all duration-300 hover:scale-[1.01]"
                      style={{ 
                        backgroundColor: `${theme.colors.primary}10`,
                        borderColor: `${theme.colors.primary}20`
                      }}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div 
                          className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                          style={{ backgroundColor: `${theme.colors.primary}20` }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            style={{ color: theme.colors.primary }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="font-semibold text-lg" style={{ color: theme.colors.primary }}>
                          Détails du service
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {service.details.map((detail, index) => (
                          <li 
                            key={index} 
                            className="flex items-start space-x-2"
                          >
                            <span className="mt-1" style={{ color: theme.colors.primary }}>•</span>
                            <span className="text-sm" style={{ color: theme.colors.text }}>
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Advantages */}
                  {service.advantages && service.advantages.length > 0 && (
                    <div 
                      className="backdrop-blur-sm rounded-xl p-4 border transition-all duration-300 hover:scale-[1.01]"
                      style={{ 
                        backgroundColor: `${theme.colors.primary}10`,
                        borderColor: `${theme.colors.primary}20`
                      }}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div 
                          className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                          style={{ backgroundColor: `${theme.colors.secondary}20` }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            style={{ color: theme.colors.secondary }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        </div>
                        <h3 className="font-semibold text-lg" style={{ color: theme.colors.primary }}>
                          Avantages
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {service.advantages.map((advantage, index) => (
                          <li 
                            key={index} 
                            className="flex items-start space-x-2"
                          >
                            <span className="mt-1" style={{ color: theme.colors.secondary }}>✓</span>
                            <span className="text-sm" style={{ color: theme.colors.text }}>
                              {advantage}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              

              {/* FAQ */}
              {enrichment.faqs && enrichment.faqs.length > 0 && (
                <div>
                  <h3 
                    className="text-lg font-semibold mb-4"
                    style={{ color: theme.colors.primary }}
                  >
                    Questions fréquentes
                  </h3>
                  <div className="space-y-3">
                    {enrichment.faqs.map((faq, index) => (
                      <details 
                        key={index}
                        className="group"
                      >
                        <summary 
                          className="cursor-pointer font-medium text-sm p-3 rounded-lg transition-all duration-300 hover:bg-opacity-10"
                          style={{ 
                            color: theme.colors.primary,
                            backgroundColor: `${theme.colors.primary}05`
                          }}
                        >
                          {faq.question}
                        </summary>
                        <p className="text-sm p-3 pt-0" style={{ color: theme.colors.text }}>
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 mt-8 border-t"
            style={{ borderColor: `${theme.colors.primary}20` }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ 
                background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                color: theme.colors.white
              }}
              onClick={() => {
                // Close modal first
                onClose();
                
                // Wait a bit for modal to close, then scroll to contact section
                setTimeout(() => {
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }, 300);
              }}
            >
              Nous contacter
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300"
              style={{ 
                borderColor: theme.colors.primary,
                color: theme.colors.primary,
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${theme.colors.primary}10`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              onClick={onClose}
            >
              Fermer
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails; 