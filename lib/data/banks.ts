export interface Bank {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  pros: string[];
  cons: string[];
  features: {
    cardFee: string;
    minIncome: string;
    withdraw: string;
    support: string;
    app: string;
  };
  rating: number;
  highlight: string;
  // Nouvelles données détaillées
  readingTime?: string;
  publicTarget?: string;
  positioning?: string;
  distinction?: string;
  accountTypes?: string[];
  entryConditions?: string[];
  cards?: {
    name: string;
    type: string;
    details: string;
  }[];
  mobilePay?: {
    applePay: boolean;
    googlePay: boolean;
    samsungPay: boolean;
  };
  instantTransfer?: string;
  overdraft?: string;
  appDetails?: {
    features: string[];
    appStoreRating: string;
    googlePlayRating: string;
  };
  security?: {
    features: string[];
    depositGuarantee: string;
    score: string;
  };
  tradingOffer?: {
    platform: string;
    instruments: string;
    fees: string;
  };
  internationalServices?: {
    iban: string;
    withdrawals: string;
    payments: string;
    multiCurrency: boolean;
    assistance: string;
  };
  detailedFees?: {
    category: string;
    items: { label: string; fosfo?: string; gold?: string; worldElite?: string; standard?: string }[];
  }[];
  clientProfile?: {
    ideal: string[];
    notSuitedFor: string[];
  };
  scores?: {
    security: string;
    price: string;
    innovation: string;
    simplicity: string;
    support: string;
    global: string;
  };
  conclusion?: {
    summary: string;
    recommendedProfile: string;
    recommendation: string;
  };
}

const banks: Bank[] = [
  {
    name: "Fortuneo",
    slug: "fortuneo",
    tagline: "La banque en ligne 100% française",
    description: "Fortuneo est une banque en ligne française créée en 2000 et appartenant au Crédit Mutuel Arkéa depuis 2006. C'est l'une des pionnières de la banque en ligne en France et elle figure parmi les leaders du marché avec plus d'un million de clients.",
    pros: [
      "Offre bancaire complète : Épargne, investissement, crédit immobilier, tous sous un même toit",
      "Cartes premium gratuites : Gold CB et World Elite accessibles sous conditions de revenus attractives",
      "Assurances et assistances incluses : Excellentes garanties voyage, location voiture, achat avec les cartes premium",
      "Plateforme de trading performante : Large choix de valeurs et tarifs compétitifs pour investisseurs actifs",
      "Service client réactif : Conseillers joignables par téléphone, chat et email, reconnus pour leur qualité",
      "Solidité financière : Appartenance au Crédit Mutuel Arkéa, groupe bancaire français solide",
      "Application mobile intuitive : Interface moderne et fonctionnalités complètes",
      "Produits d'épargne compétitifs : Livrets boostés, assurance-vie performante",
      "Pas de frais de tenue de compte : Aucun frais si conditions d'utilisation respectées"
    ],
    cons: [
      "Conditions de revenus élevées : Moins accessible que d'autres néobanques (1 200 € minimum)",
      "Utilisation obligatoire de la carte : Au moins 1 paiement/mois sinon 3 € de frais sur Fosfo",
      "Virements instantanés payants : 1 € par virement instantané (sauf Gold)",
      "Retraits limités hors zone euro : Seulement 3 retraits gratuits/mois avec Gold, payants avec Fosfo",
      "Pas de compte professionnel : Inadapté pour auto-entrepreneurs et freelances",
      "Découvert autorisé limité : Montants souvent moins généreux que banques traditionnelles",
      "Frais de trading moyens : Plus cher que Trade Republic ou Degiro pour petits portefeuilles",
      "Pas de multi-devises : Moins adapté pour usage international fréquent que Wise ou Revolut"
    ],
    features: {
      cardFee: "Gratuite (sous conditions de revenus)",
      minIncome: "1 200€/mois pour Fosfo",
      withdraw: "Gratuits en zone euro",
      support: "Lundi-vendredi 8h-20h, samedi 8h-18h",
      app: "4.5/5 App Store | 4.3/5 Google Play"
    },
    rating: 4.5,
    highlight: "Meilleure banque française",
    readingTime: "8 minutes",
    publicTarget: "Clientèle aisée recherchant une banque complète avec services d'épargne et d'investissement, CSP+ (Catégories Socio-Professionnelles supérieures), investisseurs particuliers.",
    positioning: "Fortuneo se positionne comme une banque en ligne premium, offrant une large gamme de produits bancaires et d'investissement. Elle mise sur la qualité de service et la richesse de son offre plutôt que sur les prix les plus bas.",
    distinction: "Fortuneo se distingue par son offre d'investissement complète (assurance-vie, PEA, compte-titres), sa carte haut de gamme gratuite (sous conditions) et son appartenance à un groupe bancaire solide, rassurant pour les clients exigeants.",
    accountTypes: [
      "Compte courant Fosfo (standard)",
      "Compte Gold MasterCard",
      "Comptes épargne (Livret+, LDD, LEP)",
      "Assurance-vie",
      "PEA et PEA-PME",
      "Compte-titres",
      "Pas de compte professionnel dédié"
    ],
    entryConditions: [
      "Carte Fosfo : 1 200 € de revenus nets mensuels OU 5 000 € d'épargne à transférer",
      "Carte Gold CB : 1 800 € de revenus nets mensuels OU 5 000 € d'épargne",
      "Carte World Elite MasterCard : 4 000 € de revenus nets mensuels",
      "Justificatifs : pièce d'identité, justificatif de domicile, RIB, justificatif de revenus"
    ],
    cards: [
      {
        name: "Fosfo MasterCard",
        type: "Débit immédiat ou différé",
        details: "Gratuite sous conditions (1 paiement/mois OU 1 200€ revenus)"
      },
      {
        name: "Gold CB Visa",
        type: "Débit différé",
        details: "Gratuite avec 1 800€ de revenus mensuels"
      },
      {
        name: "World Elite MasterCard",
        type: "Débit différé",
        details: "Gratuite avec 4 000€ de revenus mensuels"
      }
    ],
    mobilePay: {
      applePay: true,
      googlePay: true,
      samsungPay: true
    },
    instantTransfer: "Disponibles (gratuits avec Gold/World Elite, 1€ avec Fosfo)",
    overdraft: "Oui, négociable selon profil client. TAEG variable selon montant et durée (~7-8%)",
    appDetails: {
      features: [
        "Interface ergonomique et complète",
        "Consultation des comptes en temps réel",
        "Gestion des virements et RIB",
        "Gestion des plafonds de carte",
        "Opposition carte",
        "Chat avec conseiller",
        "Catégorisation automatique des dépenses",
        "Disponible iOS et Android"
      ],
      appStoreRating: "4.5/5",
      googlePlayRating: "4.3/5"
    },
    security: {
      features: [
        "Authentification forte (biométrie, code)",
        "Système 3D Secure",
        "Notifications en temps réel",
        "Garantie des dépôts jusqu'à 100 000 € (FGDR)",
        "Assurance moyens de paiement incluse",
        "Contrôle des plafonds personnalisable"
      ],
      depositGuarantee: "100 000 € par client (FGDR) + 70 000 € garantie titres (FGTI)",
      score: "9/10"
    },
    tradingOffer: {
      platform: "Fortuneo Bourse",
      instruments: "Plus de 30 000 valeurs (actions, ETF, obligations, warrants, turbos)",
      fees: "Actions françaises : 0,20% (min 2€) | Actions européennes : 0,20% (min 7,50€) | Actions US/Canada : 0,20% (min 14,50$)"
    },
    internationalServices: {
      iban: "IBAN français (FR)",
      withdrawals: "Retraits gratuits dans la zone euro (3 retraits/mois hors zone euro avec Gold, gratuit partout avec World Elite)",
      payments: "Paiements gratuits en devises étrangères (taux BCE)",
      multiCurrency: false,
      assistance: "Assistance à l'étranger 24/7 avec cartes Gold et World Elite"
    },
    detailedFees: [
      {
        category: "Frais bancaires généraux",
        items: [
          { label: "Tenue de compte", fosfo: "Gratuit", gold: "Gratuit", worldElite: "Gratuit" },
          { label: "Carte bancaire", fosfo: "Gratuite (1 paiement/mois)", gold: "Gratuite (1 800€/mois)", worldElite: "Gratuite (4 000€/mois)" },
          { label: "Carte sans condition", fosfo: "3 €/mois si < 1 paiement", gold: "N/A", worldElite: "N/A" },
          { label: "Retrait zone euro", fosfo: "Gratuit", gold: "Gratuit", worldElite: "Gratuit" },
          { label: "Retrait hors zone euro", fosfo: "1,94% + 1€", gold: "3 gratuits/mois puis 1,94%", worldElite: "Gratuit partout" },
          { label: "Paiement zone euro", fosfo: "Gratuit", gold: "Gratuit", worldElite: "Gratuit" },
          { label: "Paiement hors zone euro", fosfo: "Gratuit (taux BCE)", gold: "Gratuit (taux BCE)", worldElite: "Gratuit (taux BCE)" }
        ]
      },
      {
        category: "Virements et opérations",
        items: [
          { label: "Virement SEPA", fosfo: "Gratuit", gold: "Gratuit", worldElite: "Gratuit" },
          { label: "Virement instantané", fosfo: "1 €", gold: "Gratuit", worldElite: "Gratuit" },
          { label: "Virement international", fosfo: "Variable (5-20€)", gold: "Variable (5-20€)", worldElite: "Variable (5-20€)" },
          { label: "Commission d'intervention", fosfo: "8€ (max 80€/mois)", gold: "8€ (max 80€/mois)", worldElite: "8€ (max 80€/mois)" },
          { label: "Rejet prélèvement", fosfo: "20 €", gold: "20 €", worldElite: "20 €" }
        ]
      },
      {
        category: "Carte et services",
        items: [
          { label: "Opposition carte", fosfo: "Gratuit", gold: "Gratuit", worldElite: "Gratuit" },
          { label: "Remplacement carte", fosfo: "Gratuit (standard)", gold: "Gratuit (standard)", worldElite: "Gratuit (standard)" },
          { label: "Carte de remplacement express", fosfo: "20 €", gold: "20 €", worldElite: "20 €" },
          { label: "Découvert autorisé (TAEG)", fosfo: "Variable ~7-8%", gold: "Variable ~7-8%", worldElite: "Variable ~7-8%" },
          { label: "Chéquier", fosfo: "Gratuit", gold: "Gratuit", worldElite: "Gratuit" }
        ]
      },
      {
        category: "Frais de trading",
        items: [
          { label: "Actions françaises", standard: "0,20% (min 2€)" },
          { label: "Actions européennes", standard: "0,20% (min 7,50€)" },
          { label: "Actions US/Canada", standard: "0,20% (min 14,50$)" },
          { label: "ETF PEA", standard: "0,20% (min 2€)" },
          { label: "Frais de gestion PEA", standard: "0 €" },
          { label: "Frais de gestion compte-titres", standard: "0 €" },
          { label: "Droit de garde", standard: "0€ (France), 0,36%/an (étranger)" }
        ]
      }
    ],
    clientProfile: {
      ideal: [
        "Particulier avec revenus confortables (> 1 800 €/mois)",
        "Investisseur souhaitant gérer épargne et bourse au même endroit",
        "Voyageur occasionnel cherchant bonne assurance carte",
        "Personne recherchant une banque complète et fiable",
        "Client valorisant qualité de service et appartenance à groupe solide"
      ],
      notSuitedFor: [
        "Étudiants ou revenus modestes",
        "Auto-entrepreneurs et professionnels",
        "Traders très actifs (frais plus élevés que courtiers low-cost)",
        "Nomades digitaux nécessitant multi-devises",
        "Personnes recherchant banque 100% gratuite sans condition"
      ]
    },
    scores: {
      security: "9/10",
      price: "7/10",
      innovation: "7/10",
      simplicity: "8/10",
      support: "8.5/10",
      global: "8/10"
    },
    conclusion: {
      summary: "Fortuneo est une banque en ligne mature, fiable et complète, idéale pour les clients recherchant un établissement sérieux avec une offre étendue en épargne et investissement. Son appartenance au Crédit Mutuel Arkéa rassure, et ses cartes premium gratuites constituent un atout majeur pour les revenus moyens-élevés.",
      recommendedProfile: "Particulier actif avec revenus réguliers supérieurs à 1 800 €/mois, souhaitant centraliser comptes courants, épargne et investissements, avec besoin d'une carte premium pour voyages et assurances incluses.",
      recommendation: "⭐⭐⭐⭐ (4/5) - Excellent choix pour une banque principale complète. Les conditions de revenus peuvent être un frein pour certains, mais l'offre globale justifie amplement ce positionnement premium. Alternative sérieuse aux banques traditionnelles avec tous leurs avantages et sans leurs inconvénients (frais, lourdeur)."
    }
  },
  {
    name: "Monabanq",
    slug: "monabanq",
    tagline: "La banque qui vous accompagne",
    description: "Monabanq est une banque en ligne française créée en 2006 et filiale du Crédit Mutuel depuis 2011. Elle se distingue par son positionnement accessible et son approche \"humaine\" de la banque en ligne, avec un conseiller dédié pour chaque client.",
    pros: [
      "Aucune condition de revenus : Accessible à tous, étudiants, petits revenus, CDD",
      "Conseiller bancaire dédié : Chaque client dispose d'un conseiller joignable directement par téléphone ou email",
      "Tarification transparente et simple : 3 formules claires, pas de frais cachés",
      "Virements instantanés gratuits : Inclus dans toutes les formules sans surcoût",
      "Service client de qualité : Reconnu comme l'un des meilleurs du secteur, joignable 6j/7",
      "Appartenance au Crédit Mutuel : Solidité financière et confiance d'un grand groupe bancaire",
      "Découvert autorisé accessible : Possible même pour petits revenus",
      "Carte Premier abordable : 5 €/mois pour Visa Premier avec assurances voyage",
      "Application ergonomique : Interface pensée pour débutants et utilisateurs confirmés",
      "Chéquier inclus : Fourni gratuitement (rare chez certaines néobanques)"
    ],
    cons: [
      "Cartes payantes : Contrairement à la concurrence, toutes les cartes sont payantes (dès 2 €/mois)",
      "Pas d'offre de bourse : Aucun PEA, compte-titres ou trading (uniquement assurance-vie)",
      "Retraits hors zone euro limités : Payants ou limités selon formule",
      "Frais de paiement en devises : Commissions sur paiements hors zone euro (2 % formule Pratiq)",
      "Pas de compte professionnel : Inadapté pour freelances et entrepreneurs",
      "Offre moins innovante : Moins de fonctionnalités modernes que néobanques pures",
      "Pas d'agrégation bancaire : Impossible de voir autres comptes dans l'application",
      "Frais de découvert élevés : 8 % TAEG environ, plus cher que certains concurrents"
    ],
    features: {
      cardFee: "À partir de 2€/mois",
      minIncome: "Aucun (0€)",
      withdraw: "Gratuits en zone euro",
      support: "Lundi-vendredi 8h-20h, samedi 8h30-16h30",
      app: "4.3/5 App Store | 4.1/5 Google Play"
    },
    rating: 4.3,
    highlight: "Meilleur service client",
    readingTime: "7 minutes",
    publicTarget: "Clientèle large, sans conditions de revenus minimum, recherchant une banque accessible avec relation client de qualité, familles, primo-accédants à la banque en ligne.",
    positioning: "Monabanq se positionne comme une banque en ligne \"pour tous\", accessible sans conditions de revenus, avec un service client privilégié. Elle mise sur la proximité et l'accompagnement personnalisé malgré son format digital.",
    distinction: "Monabanq est l'une des rares banques en ligne sans condition de revenus minimum, offrant un conseiller bancaire dédié joignable directement, et proposant des formules simples à comprendre avec tarification transparente.",
    accountTypes: [
      "Compte courant (3 formules : Pratiq, Pratiq+, Uniq)",
      "Comptes épargne (Livret A, LDD, LEP, Livret Monabanq)",
      "Assurance-vie",
      "Crédit immobilier",
      "Crédit consommation",
      "Pas de compte professionnel ni de bourse"
    ],
    entryConditions: [
      "Aucune condition de revenus minimum (rare dans le secteur)",
      "Ouverture dès 18 ans",
      "Résidence fiscale en France",
      "Justificatifs : pièce d'identité, justificatif de domicile, RIB",
      "Dépôt initial : 150 € minimum"
    ],
    cards: [
      {
        name: "Visa Classic (Pratiq)",
        type: "Débit immédiat ou différé",
        details: "2 €/mois - Sans condition de revenus"
      },
      {
        name: "Visa Premier (Pratiq+)",
        type: "Débit immédiat ou différé",
        details: "5 €/mois - Assurances voyage incluses"
      },
      {
        name: "Visa Premier (Uniq)",
        type: "Débit immédiat ou différé",
        details: "9 €/mois - Tout inclus + garanties étendues"
      }
    ],
    mobilePay: {
      applePay: true,
      googlePay: true,
      samsungPay: false
    },
    instantTransfer: "Disponibles et gratuits (inclus dans toutes les formules)",
    overdraft: "Oui, négociable selon profil et formule. Montant indicatif : jusqu'à 600 € selon revenus. TAEG : environ 8%",
    appDetails: {
      features: [
        "Interface claire et intuitive",
        "Consultation des comptes en temps réel",
        "Virements, RIB, gestion des plafonds",
        "Catégorisation des dépenses",
        "Chat avec conseiller dédié",
        "Opposition carte",
        "Disponible iOS et Android"
      ],
      appStoreRating: "4.3/5",
      googlePlayRating: "4.1/5"
    },
    security: {
      features: [
        "Authentification forte (biométrie, code PIN)",
        "3D Secure pour paiements en ligne",
        "Notifications push instantanées",
        "Garantie des dépôts 100 000 € (FGDR)",
        "Assurance moyens de paiement (selon formule)",
        "Contrôle des plafonds"
      ],
      depositGuarantee: "100 000 € par client (FGDR) - Appartenance Crédit Mutuel : sécurité maximale",
      score: "9/10"
    },
    tradingOffer: {
      platform: "❌ Pas disponible",
      instruments: "Pas de compte-titres ni PEA - Uniquement assurance-vie pour investissement",
      fees: "N/A"
    },
    internationalServices: {
      iban: "IBAN français (FR)",
      withdrawals: "Retraits gratuits en zone euro - Retraits limités hors zone euro (payants ou inclus selon formule)",
      payments: "Paiements en devises : frais variables (2% Pratiq, 1% Pratiq+, gratuit Uniq)",
      multiCurrency: false,
      assistance: "Assistance internationale selon carte"
    },
    detailedFees: [
      {
        category: "Frais bancaires généraux",
        items: [
          { label: "Tenue de compte", fosfo: "Gratuit", gold: "Gratuit", worldElite: "Gratuit" },
          { label: "Carte bancaire", fosfo: "2 €/mois (Visa Classic)", gold: "5 €/mois (Visa Premier)", worldElite: "9 €/mois (Visa Premier)" },
          { label: "Conditions de gratuité", fosfo: "Aucune", gold: "Aucune", worldElite: "Aucune" },
          { label: "Retrait zone euro", fosfo: "Gratuit (illimité)", gold: "Gratuit (illimité)", worldElite: "Gratuit (illimité)" },
          { label: "Retrait hors zone euro", fosfo: "2% + 1€", gold: "3 gratuits/mois puis 2%", worldElite: "Gratuit (illimité)" },
          { label: "Paiement zone euro", fosfo: "Gratuit", gold: "Gratuit", worldElite: "Gratuit" },
          { label: "Paiement hors zone euro", fosfo: "2%", gold: "1%", worldElite: "Gratuit" }
        ]
      },
      {
        category: "Virements et opérations",
        items: [
          { label: "Virement SEPA", fosfo: "Gratuit", gold: "Gratuit", worldElite: "Gratuit" },
          { label: "Virement instantané", fosfo: "Gratuit", gold: "Gratuit", worldElite: "Gratuit" },
          { label: "Virement international", fosfo: "8-15 €", gold: "8-15 €", worldElite: "8-15 €" },
          { label: "Commission d'intervention", fosfo: "8€ (max 80€/mois)", gold: "8€ (max 80€/mois)", worldElite: "8€ (max 80€/mois)" },
          { label: "Rejet prélèvement", fosfo: "20 €", gold: "20 €", worldElite: "10 €" }
        ]
      },
      {
        category: "Carte et services",
        items: [
          { label: "Opposition carte", fosfo: "Gratuit", gold: "Gratuit", worldElite: "Gratuit" },
          { label: "Remplacement carte", fosfo: "10 €", gold: "10 €", worldElite: "Gratuit" },
          { label: "Carte de remplacement express", fosfo: "30 € (48h)", gold: "30 € (48h)", worldElite: "20 € (48h)" },
          { label: "Découvert autorisé (TAEG)", fosfo: "~8%", gold: "~8%", worldElite: "~8%" },
          { label: "Chéquier", fosfo: "Gratuit", gold: "Gratuit", worldElite: "Gratuit" },
          { label: "Assurance moyens de paiement", fosfo: "1,80 €/mois (option)", gold: "Inclus", worldElite: "Inclus" },
          { label: "Garantie décès/invalidité", fosfo: "❌", gold: "❌", worldElite: "Inclus" }
        ]
      },
      {
        category: "Services spécifiques Uniq (9 €/mois)",
        items: [
          { label: "Frais bancaires à l'étranger", standard: "Gratuits (retraits + paiements)" },
          { label: "Assurance voyage étendue", standard: "Inclus" },
          { label: "Garantie neige/ski", standard: "Inclus" },
          { label: "Garantie annulation voyage", standard: "Inclus" },
          { label: "Assistance juridique", standard: "Inclus" }
        ]
      }
    ],
    clientProfile: {
      ideal: [
        "Personne sans revenus fixes ou revenus modestes",
        "Étudiant en transition vers première banque \"adulte\"",
        "Client valorisant relation humaine et conseiller dédié",
        "Personne recherchant simplicité et transparence",
        "Famille cherchant banque fiable sans prise de tête",
        "Primo-accédant à la banque en ligne"
      ],
      notSuitedFor: [
        "Investisseur souhaitant gérer bourse et titres",
        "Voyageur très fréquent hors zone euro (sauf formule Uniq)",
        "Personne recherchant banque 100% gratuite",
        "Auto-entrepreneur ou professionnel",
        "Adepte de fonctionnalités ultra-modernes (crypto, multi-devises)"
      ]
    },
    scores: {
      security: "9/10",
      price: "6/10",
      innovation: "6/10",
      simplicity: "9/10",
      support: "9/10",
      global: "7.5/10"
    },
    conclusion: {
      summary: "Monabanq est une banque en ligne accessible et humaine, qui mise tout sur la qualité de la relation client avec son conseiller dédié. Sans condition de revenus, elle convient parfaitement aux primo-accédants et aux personnes recherchant une banque simple, claire et fiable, même si ses cartes payantes et l'absence de bourse peuvent rebuter certains profils.",
      recommendedProfile: "Particulier avec revenus modestes ou irréguliers, étudiant ou jeune actif, personne valorisant accompagnement humain et simplicité d'utilisation, client souhaitant une banque \"sans surprise\" avec tarification transparente.",
      recommendation: "⭐⭐⭐½ (3.5/5) - Excellent choix pour banque principale accessible à tous avec excellent service client. Le modèle payant (dès 2 €/mois) est justifié par la qualité d'accompagnement, mais l'absence de bourse et les frais à l'étranger limitent son attractivité face à des concurrents plus complets. Idéal pour ceux qui privilégient sécurité et relation humaine au low-cost."
    }
  },
  {
    name: "Trade Republic",
    slug: "trade-republic",
    tagline: "La banque des investisseurs",
    description: "Trade Republic est une néobanque allemande fondée en 2015 et lancée en France en 2021. Elle révolutionne le secteur en proposant un compte bancaire intégré à une plateforme d'investissement ultra-compétitive, avec rémunération attractive de l'épargne.",
    pros: [
      "Rémunération de l'épargne exceptionnelle : 3,25% annuels (sous conditions, 3% sans conditions) sur liquidités non investies",
      "Frais de trading imbattables : 1€ fixe par ordre, quel que soit le montant",
      "Grande variété d'actifs : Actions, ETF, cryptos, dérivés, obligations, tout dans une seule app",
      "Plans d'épargne automatiques gratuits : Investissement programmé sans frais (idéal DCA)",
      "Carte bancaire gratuite : Visa Debit sans condition ni frais mensuel",
      "Application exceptionnelle : Design soigné, rapide, intuitive, multi-récompensée",
      "Ordres fractionnés : Investir dans actions chères (Amazon, Tesla) avec petits montants",
      "Pas de frais cachés : Transparence totale sur la tarification",
      "Ouverture ultra-rapide : Compte ouvert en 10 minutes",
      "Innovation constante : Nouvelles fonctionnalités régulières (récemment : obligations, taux 3,25%)"
    ],
    cons: [
      "Pas de chéquier : Paiements par carte ou virement uniquement",
      "Pas de découvert autorisé : Impossible d'être à découvert, peut bloquer opérations urgentes",
      "IBAN allemand (DE) : Certains organismes français peuvent refuser (rare mais possible)",
      "Pas d'interface web complète : Tout se passe sur mobile (peut gêner certains utilisateurs)",
      "Service client perfectible : Principalement par email/chat, parfois lent, pas de téléphone",
      "Retraits limités : 8 retraits gratuits/mois en zone euro, ensuite payants",
      "Pas de compte joint : Impossible d'ouvrir compte à deux",
      "Pas de PEA fiscal français : Compte-titres ordinaire (CTO), donc fiscalité moins avantageuse que PEA",
      "Dépôt d'espèces impossible : Pas de solution pour alimenter compte en cash",
      "Jeune entreprise : Moins d'historique que banques traditionnelles (risque réglementaire)"
    ],
    features: {
      cardFee: "Gratuite (Visa Debit)",
      minIncome: "Aucun (0€)",
      withdraw: "Gratuits (8/mois en zone euro)",
      support: "Chat in-app et email",
      app: "4.6/5 App Store | 4.4/5 Google Play"
    },
    rating: 4.6,
    highlight: "Meilleurs intérêts",
    readingTime: "8 minutes",
    publicTarget: "Investisseurs débutants à confirmés, jeunes actifs tech-savvy, épargnants recherchant rendement élevé sur liquidités, personnes souhaitant centraliser banque et investissement à moindre coût.",
    positioning: "Trade Republic se positionne comme un \"courtier bancaire\" ou \"banque d'investissement pour tous\", avec tarification ultra-aggressive (1€ par ordre d'achat/vente d'actions), rémunération de l'épargne à 3,25% (sous conditions) et application mobile ultra-moderne.",
    distinction: "Trade Republic se distingue par son taux de rémunération exceptionnel sur l'épargne disponible (parmi les plus élevés d'Europe), ses frais de trading minimaux (1€ fixe), son interface mobile minimaliste et élégante, et son absence totale de frais cachés.",
    accountTypes: [
      "Compte de paiement (compte courant)",
      "Compte d'investissement (actions, ETF, cryptos, obligations)",
      "Compte épargne rémunéré (Cash Account)",
      "Pas de compte professionnel"
    ],
    entryConditions: [
      "Aucune condition de revenus",
      "Âge minimum : 18 ans",
      "Résidence dans l'UE",
      "Justificatifs : pièce d'identité uniquement",
      "Ouverture 100% mobile en quelques minutes",
      "Pas de dépôt minimum obligatoire"
    ],
    cards: [
      {
        name: "Visa Debit physique",
        type: "Débit immédiat",
        details: "Gratuite - Sans condition"
      },
      {
        name: "Carte virtuelle",
        type: "Débit immédiat",
        details: "Gratuite - Utilisable immédiatement"
      }
    ],
    mobilePay: {
      applePay: true,
      googlePay: true,
      samsungPay: true
    },
    instantTransfer: "Gratuits (virements SEPA et virements instantanés disponibles)",
    overdraft: "❌ Non disponible - Impossible d'être à découvert",
    appDetails: {
      features: [
        "Application uniquement (pas de version web complète)",
        "Design minimaliste et élégant",
        "Interface ultra-intuitive",
        "Graphiques en temps réel des investissements",
        "Notifications personnalisables",
        "Recherche d'actions/ETF simplifiée",
        "Plans d'épargne automatiques (savings plans)",
        "Parmi les meilleures applications fintech"
      ],
      appStoreRating: "4.6/5",
      googlePlayRating: "4.4/5"
    },
    security: {
      features: [
        "Licence bancaire allemande (BaFin)",
        "Garantie des dépôts : 100 000€ (fonds allemand de garantie)",
        "Titres ségrégués (protection totale des actifs)",
        "Authentification forte (biométrie, PIN)",
        "3D Secure pour paiements"
      ],
      depositGuarantee: "100 000€ (Einlagensicherung) - Titres ségrégués chez dépositaire (HSBC) : protection totale même en cas de faillite",
      score: "8.5/10"
    },
    tradingOffer: {
      platform: "Trade Republic (Application mobile uniquement)",
      instruments: "Plus de 10 000 actions européennes et américaines | Plus de 2 000 ETF | Plus de 3 000 produits dérivés (warrants, turbos) | 1 ETF Obligations | 50+ cryptomonnaies",
      fees: "Tarif unique : 1€ par ordre (achat/vente) | Plans d'épargne : gratuits | Pas de frais de garde | Pas de frais de change EUR/USD | Ordres fractionnés disponibles"
    },
    internationalServices: {
      iban: "IBAN allemand (DE)",
      withdrawals: "Retraits gratuits en zone euro (8 par mois) | Retraits hors zone euro : 2%",
      payments: "Paiements gratuits en zone euro | Paiements hors zone euro : 2%",
      multiCurrency: false,
      assistance: "Moins adapté pour usage international intensif"
    },
    detailedFees: [
      {
        category: "Frais bancaires généraux",
        items: [
          { label: "Tenue de compte", standard: "Gratuit" },
          { label: "Carte bancaire Visa Debit", standard: "Gratuit" },
          { label: "Conditions de gratuité", standard: "Aucune" },
          { label: "Retrait zone euro", standard: "Gratuit (8/mois) puis 1€" },
          { label: "Retrait hors zone euro", standard: "2%" },
          { label: "Paiement zone euro", standard: "Gratuit" },
          { label: "Paiement hors zone euro", standard: "2%" }
        ]
      },
      {
        category: "Virements et opérations",
        items: [
          { label: "Virement SEPA", standard: "Gratuit" },
          { label: "Virement instantané", standard: "Gratuit" },
          { label: "Virement international", standard: "Variable" },
          { label: "Commission d'intervention", standard: "Non applicable (pas de découvert)" },
          { label: "Rejet prélèvement", standard: "0€ (solde insuffisant = rejet sans frais)" },
          { label: "Opposition carte", standard: "Gratuit" },
          { label: "Remplacement carte", standard: "Gratuit" },
          { label: "Découvert autorisé", standard: "Non disponible" },
          { label: "Chéquier", standard: "Non disponible" }
        ]
      },
      {
        category: "Frais de trading",
        items: [
          { label: "Achat/vente action", standard: "1€" },
          { label: "Achat/vente ETF", standard: "1€" },
          { label: "Achat/vente crypto", standard: "1€" },
          { label: "Achat/vente dérivés", standard: "1€" },
          { label: "Plan d'épargne programmé", standard: "Gratuit" },
          { label: "Frais de garde", standard: "0€" },
          { label: "Frais de change EUR/USD", standard: "0€" },
          { label: "Frais de gestion", standard: "0€" },
          { label: "Dividend withholding (US)", standard: "15% (selon convention fiscale)" }
        ]
      },
      {
        category: "Rémunération de l'épargne",
        items: [
          { label: "Taux de base", standard: "3% par an (applicable à tous)" },
          { label: "Taux boosté", standard: "3,25% par an si plan d'épargne actif (50€/mois minimum)" },
          { label: "Calcul", standard: "Calculé quotidiennement, versé mensuellement" },
          { label: "Plafond", standard: "Aucun plafond" }
        ]
      }
    ],
    clientProfile: {
      ideal: [
        "Investisseur débutant souhaitant se lancer facilement",
        "Épargnant cherchant meilleur taux sur liquidités",
        "Jeune actif tech-savvy aimant applications modernes",
        "Personne pratiquant DCA (Dollar Cost Averaging)",
        "Investisseur passif ETF",
        "Client recherchant solution tout-en-un banque + investissement"
      ],
      notSuitedFor: [
        "Trader actif institutionnel (ordres complexes, PRO tools)",
        "Personne nécessitant chéquier",
        "Client voulant PEA fiscal français",
        "Personne ayant besoin de découvert autorisé",
        "Client préférant interface web desktop",
        "Personne nécessitant support téléphonique réactif"
      ]
    },
    scores: {
      security: "8.5/10",
      price: "10/10",
      innovation: "10/10",
      simplicity: "9/10",
      support: "6.5/10",
      global: "8.5/10"
    },
    conclusion: {
      summary: "Trade Republic révolutionne la banque et l'investissement en proposant une solution ultra-compétitive, moderne et accessible. Avec sa rémunération de l'épargne exceptionnelle (3,25%), ses frais de trading imbattables (1€) et son application primée, elle séduit une nouvelle génération d'épargnants-investisseurs.",
      recommendedProfile: "Investisseur débutant à intermédiaire, jeune actif (25-40 ans) à l'aise avec le digital, personne pratiquant investissement régulier (DCA) en ETF, épargnant cherchant meilleur taux sur liquidités, client souhaitant centraliser banque quotidienne et investissement.",
      recommendation: "⭐⭐⭐⭐ (4.5/5) - Coup de cœur innovation et rapport qualité/prix. Trade Republic est aujourd'hui l'une des meilleures solutions pour allier banque quotidienne et investissement accessible. L'absence de PEA français et le support client perfectible sont les seuls freins. Excellent choix en compte principal pour profils compatibles, ou en complément d'une banque traditionnelle pour la partie investissement."
    }
  },
  {
    name: "Hello Bank!",
    slug: "hello-bank",
    tagline: "Hello la banque différente",
    description: "Hello bank! est la banque en ligne du groupe BNP Paribas, lancée en France en 2013. Elle bénéficie de toute l'infrastructure et de la solidité financière de la première banque européenne, tout en proposant une expérience 100% digitale.",
    pros: [
      "Solidité BNP Paribas : Confiance et sécurité de la 1ère banque européenne",
      "Offre de bienvenue attractive : Jusqu'à 80€ offerts + offres parrainage régulières",
      "Accès au réseau d'agences BNP Paribas : Possibilité RDV conseiller en agence (sur demande)",
      "Carte Visa Premier gratuite : Sous conditions de revenus (1 500€/mois), avec excellentes assurances voyage",
      "Offre complète : Banque au quotidien, épargne, investissement, crédits",
      "Virements instantanés gratuits : Inclus sans surcoût",
      "Application performante : Héritée de la technologie BNP Paribas, complète et stable",
      "Agrégation bancaire : Visualiser tous vos comptes (autres banques) dans l'application",
      "Compte jeune innovant : Pour 12-17 ans avec carte et application dédiée",
      "Service client de qualité : Conseillers formés BNP Paribas, disponibles par téléphone et chat"
    ],
    cons: [
      "Conditions de revenus : 1 000€ minimum (élimine étudiants et petits revenus)",
      "Utilisation obligatoire de la carte : Minimum 3 paiements/mois sinon frais (5€/mois)",
      "Pas d'offre de trading intégrée moderne : Tarifs bourse élevés comparés à Trade Republic ou Degiro",
      "Application moins moderne : Interface fonctionnelle mais moins sexy que néobanques pures",
      "Frais de découvert élevés : Taux similaires banques traditionnelles (~7-8%)",
      "Retraits hors zone euro limités : Même avec Hello Prime, seulement 3 gratuits/mois",
      "Frais exceptionnels élevés : Commissions d'intervention, rejets prélèvement (tarifs classiques)",
      "Moins innovant : Fonctionnalités en retard sur néobanques pures (crypto, multi-devises, etc.)"
    ],
    features: {
      cardFee: "Gratuite (sous conditions)",
      minIncome: "1 000€/mois",
      withdraw: "Gratuits en zone euro",
      support: "Lundi-vendredi 8h-22h, samedi 8h-18h",
      app: "4.4/5 App Store | 4.2/5 Google Play"
    },
    rating: 4.2,
    highlight: "Réseau BNP Paribas",
    readingTime: "7 minutes",
    publicTarget: "Particuliers recherchant sécurité d'une grande banque avec modernité du digital, familles, clients BNP Paribas souhaitant migrer en ligne, personnes valorisant conseil et accompagnement.",
    positioning: "Hello bank! se positionne comme une banque en ligne \"premium accessible\", combinant les avantages du digital (tarifs attractifs, disponibilité 24/7) avec la puissance et la confiance d'une banque historique. Elle offre un écosystème complet avec possibilité d'accès aux agences BNP Paribas.",
    distinction: "Hello bank! se distingue par son adossement à BNP Paribas (1ère banque européenne), son offre de bienvenue attractive (jusqu'à 80€ offerts), la possibilité de bénéficier du réseau d'agences BNP Paribas (sur RDV), et son application héritée de la technologie BNP Paribas.",
    accountTypes: [
      "Compte courant Hello One (offre standard)",
      "Compte courant Hello Prime (offre premium)",
      "Comptes épargne (Livret A, LDD, LEP, Livret Hello+)",
      "Assurance-vie",
      "PEA et compte-titres (via BNP Paribas Banque de Bourse)",
      "Crédit immobilier et consommation",
      "Compte jeune (12-17 ans)",
      "Pas de compte professionnel dédié"
    ],
    entryConditions: [
      "Hello One : 1 000€ de revenus nets mensuels OU dépôt initial de 5 000€",
      "Hello Prime : 1 500€ de revenus nets mensuels OU dépôt initial de 10 000€",
      "Âge minimum : 18 ans (12 ans pour compte jeune)",
      "Résidence fiscale en France",
      "Justificatifs : identité, domicile, revenus, RIB"
    ],
    cards: [
      {
        name: "Hello One Visa",
        type: "Débit immédiat ou différé",
        details: "Gratuite avec 3 paiements/mois minimum (sinon 5€/mois)"
      },
      {
        name: "Visa Classic",
        type: "Débit immédiat ou différé",
        details: "Gratuite sous conditions (Hello One)"
      },
      {
        name: "Visa Premier (Hello Prime)",
        type: "Débit immédiat ou différé",
        details: "Gratuite avec 1 500€ revenus/mois + 3 paiements/mois (sinon 9€/mois)"
      }
    ],
    mobilePay: {
      applePay: true,
      googlePay: true,
      samsungPay: true
    },
    instantTransfer: "Gratuits (inclus dans les offres)",
    overdraft: "Oui, négociable selon profil. Montant indicatif : 300€ à 1 500€ selon revenus. TAEG : environ 7-8%",
    appDetails: {
      features: [
        "Basée sur technologie BNP Paribas",
        "Interface complète et fonctionnelle",
        "Consultation comptes temps réel",
        "Virements, RIB, gestion plafonds",
        "Catégorisation des dépenses",
        "Agrégation de comptes externes",
        "Accès à la bourse (via extension)",
        "Disponible iOS et Android"
      ],
      appStoreRating: "4.4/5",
      googlePlayRating: "4.2/5"
    },
    security: {
      features: [
        "Sécurité niveau BNP Paribas (maximum)",
        "Authentification forte (biométrie, code)",
        "3D Secure renforcé",
        "Garantie des dépôts : 100 000€ (FGDR)",
        "Assurance moyens de paiement incluse (Hello Prime)",
        "Protection maximale grâce au groupe"
      ],
      depositGuarantee: "100 000€ (FGDR) - Sécurité maximale : BNP Paribas, 1ère banque européenne",
      score: "10/10"
    },
    tradingOffer: {
      platform: "BNP Paribas Banque de Bourse",
      instruments: "PEA, PEA-PME, compte-titres | Large gamme de valeurs (actions, ETF, obligations, OPCVM)",
      fees: "Actions françaises : 0,20% (min 6,95€, max 75€) | Actions européennes : 0,30% (min 15€) | Actions US : 0,30% (min 20$) | Frais de garde CTO : 0,36%/an (min 36€)"
    },
    internationalServices: {
      iban: "IBAN français (FR)",
      withdrawals: "Retraits gratuits zone euro | Retraits hors zone euro : 3 gratuits/mois (Prime) puis 3,50€",
      payments: "Paiements gratuits en devises",
      multiCurrency: false,
      assistance: "Assistance internationale 24/7 (Hello Prime) | Possibilité retrait d'urgence à l'étranger"
    },
    detailedFees: [
      {
        category: "Frais bancaires généraux",
        items: [
          { label: "Tenue de compte", fosfo: "Gratuit", gold: "Gratuit" },
          { label: "Carte bancaire", fosfo: "Gratuite (sous conditions)", gold: "Gratuite (sous conditions)" },
          { label: "Conditions de gratuité", fosfo: "3 paiements/mois", gold: "3 paiements/mois" },
          { label: "Carte sans condition", fosfo: "5 €/mois", gold: "9 €/mois" },
          { label: "Retrait zone euro", fosfo: "Gratuit (illimité)", gold: "Gratuit (illimité)" },
          { label: "Retrait hors zone euro", fosfo: "3,50 €", gold: "3 gratuits/mois puis 3,50 €" },
          { label: "Paiement zone euro", fosfo: "Gratuit", gold: "Gratuit" },
          { label: "Paiement hors zone euro", fosfo: "Gratuit", gold: "Gratuit" }
        ]
      },
      {
        category: "Virements et opérations",
        items: [
          { label: "Virement SEPA", fosfo: "Gratuit", gold: "Gratuit" },
          { label: "Virement instantané", fosfo: "Gratuit", gold: "Gratuit" },
          { label: "Virement international", fosfo: "Variable (10-25 €)", gold: "Variable (10-25 €)" },
          { label: "Commission d'intervention", fosfo: "8€ (max 80€/mois)", gold: "8€ (max 80€/mois)" },
          { label: "Rejet prélèvement", fosfo: "20 €", gold: "20 €" }
        ]
      },
      {
        category: "Carte et services",
        items: [
          { label: "Opposition carte", fosfo: "Gratuit", gold: "Gratuit" },
          { label: "Remplacement carte", fosfo: "15 €", gold: "Gratuit" },
          { label: "Carte remplacement express", fosfo: "25 €", gold: "15 €" },
          { label: "Découvert autorisé (TAEG)", fosfo: "~7,5%", gold: "~7,5%" },
          { label: "Chéquier", fosfo: "Gratuit", gold: "Gratuit" },
          { label: "Assurance moyens paiement", fosfo: "1,50 €/mois (option)", gold: "Inclus" }
        ]
      },
      {
        category: "Frais de bourse (BNP Paribas Banque de Bourse)",
        items: [
          { label: "Actions françaises (en ligne)", standard: "0,20% (min 6,95€, max 75€)" },
          { label: "Actions européennes", standard: "0,30% (min 15€)" },
          { label: "Actions US", standard: "0,30% (min 20$)" },
          { label: "ETF", standard: "Selon marché" },
          { label: "Frais de garde PEA", standard: "0€" },
          { label: "Frais de garde compte-titres", standard: "0,36%/an (min 36€)" },
          { label: "Droits de garde (titres étrangers)", standard: "0,50%/an" }
        ]
      },
      {
        category: "Offre de bienvenue (sous conditions)",
        items: [
          { label: "Ouverture compte + conditions", standard: "80€ offerts" },
          { label: "Parrainage", standard: "50€ (parrain et filleul)" },
          { label: "Promotions", standard: "Offres régulières" }
        ]
      }
    ],
    clientProfile: {
      ideal: [
        "Particulier avec revenus stables ≥ 1 000€/mois",
        "Client BNP Paribas souhaitant passer en ligne",
        "Personne recherchant sécurité banque traditionnelle + tarifs en ligne",
        "Famille valorisant possibilité RDV agence occasionnel",
        "Client souhaitant offre bancaire complète sous une même enseigne",
        "Investisseur occasionnel (PEA, assurance-vie)"
      ],
      notSuitedFor: [
        "Étudiants ou revenus < 1 000€/mois",
        "Trader actif (frais bourse trop élevés)",
        "Voyageur fréquent hors zone euro",
        "Personne recherchant innovation et fonctionnalités ultra-modernes",
        "Auto-entrepreneur ou professionnel",
        "Client recherchant gratuité totale sans conditions"
      ]
    },
    scores: {
      security: "10/10",
      price: "7/10",
      innovation: "6/10",
      simplicity: "7.5/10",
      support: "8/10",
      global: "7.5/10"
    },
    conclusion: {
      summary: "Hello bank! représente le meilleur compromis entre modernité de la banque en ligne et solidité d'une banque traditionnelle. Adossée à BNP Paribas (1ère banque européenne), elle offre sécurité maximale, offre complète et possibilité d'accès physique en agence, tout en conservant tarifs compétitifs et expérience digitale moderne.",
      recommendedProfile: "Particulier avec revenus moyens-élevés (≥ 1 000€/mois), famille recherchant banque principale fiable et complète, client valorisant sécurité et possibilité de RDV agence occasionnel, personne souhaitant centraliser banque quotidienne et investissement modéré.",
      recommendation: "⭐⭐⭐⭐ (3.5/5) - Excellent choix pour banque principale sécurisée. Hello bank! conviendra parfaitement aux personnes recherchant le \"meilleur des deux mondes\" : tarifs attractifs du digital et solidité du traditionnel. Les conditions de revenus et l'absence d'innovation forte comparée aux néobanques pures sont les principaux freins. Choix rassurant et équilibré."
    }
  },
  {
    name: "BforBank",
    slug: "bforbank",
    tagline: "La banque premium en ligne",
    description: "BforBank est une banque en ligne française créée en 2009 et filiale du Crédit Agricole depuis 2017. Elle se positionne comme une banque en ligne premium, ciblant une clientèle aisée avec une offre bancaire et patrimoniale complète.",
    pros: [
      "Service client exceptionnel : Élu meilleur service client banque en ligne (trophées réguliers), conseillers experts et disponibles",
      "Carte Visa Premier gratuite : Excellentes assurances voyage et assistance internationale, gratuité sous conditions légères",
      "Retraits gratuits partout dans le monde : Aucun frais de retrait à l'étranger (rare et très avantageux)",
      "Offre patrimoniale complète : Assurance-vie performante, PEA, gestion conseillée disponible",
      "Appartenance Crédit Agricole : Solidité et confiance du 1er bancassureur français",
      "Conseillers spécialisés : Expertise patrimoine, conseil personnalisé selon profil",
      "Virements instantanés gratuits : Inclus sans limite",
      "Application performante : Agrégation bancaire, gestion complète, interface soignée",
      "Pas de frais cachés : Transparence totale sur tarification",
      "Conditions d'entrée flexibles : Revenus OU épargne (facilite accès investisseurs)"
    ],
    cons: [
      "Positionnement premium : Revenus minimum 1 200€ OU 10 000€ épargne (exclut clients modestes)",
      "Une seule formule de carte : Pas de carte gratuite économique pour petits besoins",
      "Utilisation obligatoire : Minimum 3 paiements par trimestre sinon frais (3€/mois)",
      "Frais de trading moyens : Plus cher que courtiers low-cost (Trade Republic, Degiro)",
      "Pas de compte professionnel : Inadapté auto-entrepreneurs",
      "Offre moins innovante : Pas de crypto, multi-devises, fonctionnalités modernes",
      "Ouverture compte lente : Délais plus longs que néobanques (vérifications manuelles)",
      "Chéquier parfois payant : Premier chéquier gratuit, suivants parfois facturés"
    ],
    features: {
      cardFee: "Gratuite (Visa Premier)",
      minIncome: "1 200€/mois OU 10 000€ d'épargne",
      withdraw: "Gratuits partout dans le monde",
      support: "Lundi-vendredi 8h-22h, samedi 8h-18h",
      app: "4.4/5 App Store | 4.3/5 Google Play"
    },
    rating: 4.4,
    highlight: "Carte Gold gratuite",
    readingTime: "7 minutes",
    publicTarget: "CSP+ (Catégories Socio-Professionnelles supérieures), clients patrimoniaux, investisseurs avertis, cadres et professions libérales, personnes disposant d'épargne conséquente.",
    positioning: "BforBank se positionne comme une banque en ligne haut de gamme orientée patrimoine et investissement. Elle mise sur la qualité de service, l'expertise conseil et une offre d'investissement riche, avec un service client primé et reconnu comme l'un des meilleurs du secteur.",
    distinction: "BforBank se distingue par son service client d'excellence (élu meilleur service client banque en ligne à plusieurs reprises), son offre patrimoniale complète, sa carte Visa Premier gratuite (sous conditions), et son positionnement premium assumé.",
    accountTypes: [
      "Compte courant (carte Visa Premier)",
      "Comptes épargne (Livret A, LDD, LEP, Livret BforBank)",
      "Assurance-vie (plusieurs contrats)",
      "PEA et PEA-PME",
      "Compte-titres ordinaire (CTO)",
      "Crédit immobilier",
      "Pas de compte professionnel"
    ],
    entryConditions: [
      "1 200€ de revenus nets mensuels OU",
      "10 000€ d'épargne à transférer (assurance-vie, PEA, compte-titres)",
      "Âge minimum : 18 ans",
      "Résidence fiscale en France",
      "Justificatifs : identité, domicile, revenus ou épargne"
    ],
    cards: [
      {
        name: "Visa Premier",
        type: "Débit immédiat ou différé",
        details: "Gratuite avec 3 paiements par trimestre (sinon 3€/mois) - Unique formule"
      }
    ],
    mobilePay: {
      applePay: true,
      googlePay: true,
      samsungPay: true
    },
    instantTransfer: "Gratuits (inclus)",
    overdraft: "Oui, négociable selon profil. Montant : jusqu'à 1 mois de revenus (sous réserve). TAEG : environ 7-8%",
    appDetails: {
      features: [
        "Interface claire et fonctionnelle",
        "Consultation comptes en temps réel",
        "Virements, RIB, gestion plafonds",
        "Catégorisation des dépenses",
        "Agrégation de comptes externes",
        "Accès espace bourse",
        "Disponible iOS et Android"
      ],
      appStoreRating: "4.4/5",
      googlePlayRating: "4.3/5"
    },
    security: {
      features: [
        "Appartenance Crédit Agricole (1er bancassureur France)",
        "Authentification forte (biométrie, code)",
        "3D Secure",
        "Garantie dépôts : 100 000€ (FGDR)",
        "Assurance moyens de paiement incluse",
        "Surveillance transactions temps réel"
      ],
      depositGuarantee: "100 000€ (FGDR) + 70 000€ garantie titres (FGTI) - Sécurité maximale Crédit Agricole",
      score: "9.5/10"
    },
    tradingOffer: {
      platform: "BforBank Bourse",
      instruments: "Actions françaises et internationales | ETF, trackers | Obligations | OPCVM | PEA, PEA-PME, CTO",
      fees: "Actions françaises : 0,18% (min 3€) | Actions européennes : 0,30% (min 15€) | Actions US : 0,30% (min 15$) | Frais de gestion : 0€"
    },
    internationalServices: {
      iban: "IBAN français (FR)",
      withdrawals: "Retraits gratuits en zone euro | Retraits hors zone euro : gratuits (illimités) - Atout majeur",
      payments: "Paiements gratuits en devises",
      multiCurrency: false,
      assistance: "Assistance internationale 24/7 | Assurance voyage incluse (Visa Premier)"
    },
    detailedFees: [
      {
        category: "Frais bancaires généraux",
        items: [
          { label: "Tenue de compte", standard: "Gratuit" },
          { label: "Carte bancaire Visa Premier", standard: "Gratuite (sous conditions)" },
          { label: "Conditions de gratuité", standard: "3 paiements par trimestre" },
          { label: "Carte sans condition", standard: "3 €/mois" },
          { label: "Retrait zone euro", standard: "Gratuit (illimité)" },
          { label: "Retrait hors zone euro", standard: "Gratuit (illimité) ✓" },
          { label: "Paiement zone euro", standard: "Gratuit" },
          { label: "Paiement hors zone euro", standard: "Gratuit" }
        ]
      },
      {
        category: "Virements et opérations",
        items: [
          { label: "Virement SEPA", standard: "Gratuit" },
          { label: "Virement instantané", standard: "Gratuit" },
          { label: "Virement international", standard: "Variable (10-20 €)" },
          { label: "Commission d'intervention", standard: "8€ (max 80€/mois)" },
          { label: "Rejet prélèvement", standard: "20 €" }
        ]
      },
      {
        category: "Carte et services",
        items: [
          { label: "Opposition carte", standard: "Gratuit" },
          { label: "Remplacement carte", standard: "Gratuit (standard)" },
          { label: "Carte remplacement express", standard: "20 € (48h)" },
          { label: "Découvert autorisé (TAEG)", standard: "~7-8%" },
          { label: "Chéquier", standard: "1er gratuit, suivants variables" }
        ]
      },
      {
        category: "Frais de bourse (BforBank Bourse)",
        items: [
          { label: "Actions françaises (en ligne)", standard: "0,18% (min 3€)" },
          { label: "Actions européennes", standard: "0,30% (min 15€)" },
          { label: "Actions US", standard: "0,30% (min 15$)" },
          { label: "ETF", standard: "Selon marché" },
          { label: "Frais de gestion PEA", standard: "0€" },
          { label: "Frais de gestion CTO", standard: "0€" },
          { label: "Droits de garde", standard: "0,36%/an (titres étrangers)" }
        ]
      },
      {
        category: "Produits d'épargne et investissement",
        items: [
          { label: "Livret BforBank", standard: "Taux boosté promotionnel régulier" },
          { label: "Assurance-vie", standard: "Frais de gestion 0,60%/an (compétitif)" },
          { label: "PEA", standard: "0€ de frais de tenue" },
          { label: "Gestion pilotée", standard: "Disponible avec frais spécifiques" }
        ]
      }
    ],
    clientProfile: {
      ideal: [
        "Particulier avec revenus ≥ 1 200€/mois ou épargne ≥ 10 000€",
        "Investisseur recherchant accompagnement patrimonial",
        "Voyageur fréquent (retraits gratuits partout)",
        "Client valorisant service client d'excellence",
        "Personne souhaitant centraliser banque et patrimoine",
        "Cadre ou profession libérale recherchant conseil"
      ],
      notSuitedFor: [
        "Étudiants ou revenus modestes sans épargne",
        "Trader très actif (frais plus élevés que low-cost)",
        "Auto-entrepreneurs et professionnels",
        "Personnes recherchant innovation et fonctionnalités ultra-modernes",
        "Client voulant banque 100% gratuite sans conditions"
      ]
    },
    scores: {
      security: "9.5/10",
      price: "7.5/10",
      innovation: "6/10",
      simplicity: "8/10",
      support: "9.5/10",
      global: "8/10"
    },
    conclusion: {
      summary: "BforBank est une banque en ligne premium qui excelle par son service client d'exception et son approche patrimoniale. Adossée au Crédit Agricole, elle offre sécurité maximale, conseil personnalisé et gratuité des retraits internationaux (atout majeur pour voyageurs). Son positionnement sélectif la réserve à une clientèle aisée.",
      recommendedProfile: "Particulier avec revenus confortables (≥ 1 200€/mois) ou patrimoine (≥ 10 000€), voyageur international fréquent, investisseur recherchant accompagnement et conseil, client valorisant service client d'excellence et relation de confiance, cadre ou profession libérale souhaitant banque principale complète.",
      recommendation: "⭐⭐⭐⭐ (4/5) - Excellent choix pour banque principale premium. BforBank justifie pleinement son positionnement haut de gamme par son service client exceptionnel et ses avantages pour voyageurs. Le meilleur rapport qualité/service du secteur pour clientèle aisée. Alternative crédible et qualitative aux banques traditionnelles premium."
    }
  },
  {
    name: "BoursoBank",
    slug: "boursobank",
    tagline: "Leader des banques en ligne",
    description: "BoursoBank (anciennement Boursorama Banque jusqu'en 2023) est la banque en ligne du groupe Société Générale, créée en 2002. Pionnière et leader du secteur avec plus de 4 millions de clients, elle s'est construite une réputation d'excellence en combinant gratuité, innovation et offre complète.",
    pros: [
      "Leader du marché : 4+ millions de clients, banque en ligne la plus réputée et fiable",
      "Offre la plus complète : Seule à proposer banque perso + pro + jeunes + bourse dans un écosystème intégré",
      "Gratuité maximale : Cartes gratuites sous conditions légères, pas de frais cachés",
      "Plateforme bourse d'excellence : L'une des meilleures pour investisseurs particuliers, outils pros, formations",
      "Innovation constante : Régulièrement pionnière (Apple Pay, agrégation, fonctionnalités inédites)",
      "Application remarquable : Interface moderne, fluide, complète, régulièrement primée",
      "Offre jeunes exceptionnelle : Kador (12-17 ans) et Freedom (18-25 ans) parmi les meilleures du marché",
      "Communauté active : Forum, actualités, analyses, sentiment d'appartenance",
      "Assurance-vie performante : Contrats compétitifs avec bons rendements",
      "Service client de qualité : Conseillers disponibles, chat réactif",
      "Compte professionnel : Rare parmi banques en ligne, idéal auto-entrepreneurs"
    ],
    cons: [
      "Conditions d'utilisation strictes : Obligation utilisation régulière carte sinon frais (Welcome)",
      "Conditions de revenus : 1 000€ minimum (élimine très petits revenus)",
      "Carte Ultim Metal chère sans conditions : 30€/mois si revenus < 3 000€",
      "Retraits limités hors zone euro (Welcome) : Frais élevés pour petite formule",
      "Frais de bourse moyens : Moins compétitifs que Trade Republic ou Degiro pour petits ordres",
      "Délai ouverture compte : Plus long que néobanques pures (7-15 jours)",
      "Support téléphonique parfois saturé : Attente longue aux heures de pointe",
      "Offres promotionnelles complexes : Conditions parfois difficiles à décrypter"
    ],
    features: {
      cardFee: "Gratuite (sous conditions)",
      minIncome: "1 000€/mois",
      withdraw: "Gratuits en zone euro",
      support: "Lundi-vendredi 8h-22h, samedi 8h-18h",
      app: "4.6/5 App Store | 4.5/5 Google Play"
    },
    rating: 4.7,
    highlight: "Banque #1 en France",
    readingTime: "9 minutes",
    publicTarget: "Grand public, de l'étudiant au cadre supérieur, investisseurs débutants à confirmés, familles, primo-accédants à la banque en ligne, clients recherchant le meilleur rapport qualité/prix.",
    positioning: "BoursoBank se positionne comme la banque en ligne de référence, leader incontesté du marché français. Elle combine gratuité maximale, innovation constante, offre la plus complète du secteur (y compris bourse et pro), et communication dynamique axée communauté.",
    distinction: "BoursoBank se distingue par son statut de leader (4+ millions clients), son offre la plus complète (banque + bourse + pro + jeunes), sa plateforme de trading reconnue, ses innovations constantes (première sur nombreuses fonctionnalités), et sa communauté active.",
    accountTypes: [
      "Compte courant Welcome (entrée de gamme)",
      "Compte Ultim (premium)",
      "Compte Ultim Metal (très premium)",
      "Comptes épargne (Livret A, LDD, LEP, Livret BoursoBank)",
      "Assurance-vie (plusieurs contrats performants)",
      "PEA, PEA-PME, compte-titres",
      "Compte professionnel (auto-entrepreneurs, freelances)",
      "Compte jeune (12-17 ans : Kador) et étudiant (18-25 ans : Freedom)",
      "Crédit immobilier et consommation"
    ],
    entryConditions: [
      "Welcome : 1 000€ de revenus nets mensuels OU justifier d'une épargne",
      "Ultim : 1 800€ de revenus nets mensuels",
      "Ultim Metal : 3 000€ de revenus nets mensuels",
      "Kador (12-17 ans) et Freedom (18-25 ans) : sans conditions de revenus",
      "Justificatifs : identité, domicile, revenus"
    ],
    cards: [
      {
        name: "Welcome - Visa Classic",
        type: "Débit immédiat ou différé",
        details: "Gratuite avec 1 paiement/mois + 1K€ revenus (sinon 9€/mois)"
      },
      {
        name: "Ultim - Visa Premier",
        type: "Débit immédiat ou différé",
        details: "Gratuite avec 1 paiement/mois + 1,8K€ revenus (sinon 9€/mois)"
      },
      {
        name: "Ultim Metal - Visa Infinite Metal",
        type: "Débit immédiat ou différé",
        details: "Gratuite avec 4 paiements/mois + 3K€ revenus (sinon 30€/mois)"
      },
      {
        name: "Freedom (18-25 ans) - Visa Ultim",
        type: "Débit immédiat ou différé",
        details: "Gratuite sans conditions de revenus - Avantages Ultim inclus"
      }
    ],
    mobilePay: {
      applePay: true,
      googlePay: true,
      samsungPay: true
    },
    instantTransfer: "Gratuits (inclus dans toutes les formules)",
    overdraft: "Oui, négociable selon profil et formule. Montant indicatif : jusqu'à 2 mois de revenus (Welcome), plus pour Ultim. TAEG : environ 7%",
    appDetails: {
      features: [
        "L'une des meilleures du marché",
        "Interface moderne, intuitive et complète",
        "Consultation comptes temps réel",
        "Virements, RIB, gestion plafonds",
        "Catégorisation automatique des dépenses",
        "Agrégation de comptes externes",
        "Accès intégré à la bourse (cotations, ordres)",
        "Chat avec conseiller",
        "Communauté et actualités financières",
        "Disponible iOS et Android"
      ],
      appStoreRating: "4.6/5",
      googlePlayRating: "4.5/5"
    },
    security: {
      features: [
        "Appartenance Société Générale (2ème banque française)",
        "Authentification forte (biométrie, code, clé digitale)",
        "3D Secure avancé",
        "Garantie dépôts : 100 000€ (FGDR)",
        "Garantie titres : 70 000€ (FGTI)",
        "Assurance moyens de paiement incluse (Ultim)",
        "Surveillance transactions IA"
      ],
      depositGuarantee: "100 000€ (FGDR) + 70 000€ garantie titres (FGTI) - Société Générale",
      score: "9.5/10"
    },
    tradingOffer: {
      platform: "BoursoBank Bourse (plateforme reconnue et primée)",
      instruments: "Plus de 30 000 valeurs (actions, ETF, obligations, warrants, turbos, trackers) | PEA, PEA-PME, compte-titres, SRD",
      fees: "Actions françaises : 0,50% (min 1,99€) | Actions européennes : 0,50% (min 5€) | Actions US : 0,50% (min 8,50$) | Tarifs dégressifs selon volumes | Outils d'analyse professionnels (ProRealTime) | Formations et webinaires gratuits"
    },
    internationalServices: {
      iban: "IBAN français (FR)",
      withdrawals: "Retraits gratuits zone euro | Retraits hors zone euro : 1,69% (Welcome), 3 gratuits/mois puis 1,69% (Ultim), Gratuit illimité (Ultim Metal)",
      payments: "Paiements gratuits en devises (taux BCE)",
      multiCurrency: false,
      assistance: "Assistance internationale 24/7 (Ultim, Metal) | Assurances voyage étendues (Ultim Metal)"
    },
    detailedFees: [
      {
        category: "Frais bancaires généraux",
        items: [
          { label: "Tenue de compte", fosfo: "Gratuit", gold: "Gratuit", worldElite: "Gratuit" },
          { label: "Carte bancaire", fosfo: "Gratuite (sous conditions)", gold: "Gratuite (sous conditions)", worldElite: "Gratuite (sous conditions)" },
          { label: "Conditions de gratuité", fosfo: "1 paiement/mois + 1K€ revenus", gold: "1 paiement/mois + 1,8K€ revenus", worldElite: "4 paiements/mois + 3K€ revenus" },
          { label: "Carte sans condition", fosfo: "9 €/mois", gold: "9 €/mois", worldElite: "30 €/mois" },
          { label: "Retrait zone euro", fosfo: "Gratuit (illimité)", gold: "Gratuit (illimité)", worldElite: "Gratuit (illimité)" },
          { label: "Retrait hors zone euro", fosfo: "1,69%", gold: "3 gratuits/mois puis 1,69%", worldElite: "Gratuit (illimité)" },
          { label: "Paiement zone euro", fosfo: "Gratuit", gold: "Gratuit", worldElite: "Gratuit" },
          { label: "Paiement hors zone euro", fosfo: "Gratuit (taux BCE)", gold: "Gratuit (taux BCE)", worldElite: "Gratuit (taux BCE)" }
        ]
      },
      {
        category: "Virements et opérations",
        items: [
          { label: "Virement SEPA", fosfo: "Gratuit", gold: "Gratuit", worldElite: "Gratuit" },
          { label: "Virement instantané", fosfo: "Gratuit", gold: "Gratuit", worldElite: "Gratuit" },
          { label: "Virement international", fosfo: "Variable (5-20 €)", gold: "Variable (5-20 €)", worldElite: "Variable (5-20 €)" },
          { label: "Commission d'intervention", fosfo: "8€ (max 80€/mois)", gold: "8€ (max 80€/mois)", worldElite: "0 €" },
          { label: "Rejet prélèvement", fosfo: "20 €", gold: "20 €", worldElite: "0 €" }
        ]
      },
      {
        category: "Carte et services",
        items: [
          { label: "Opposition carte", fosfo: "Gratuit", gold: "Gratuit", worldElite: "Gratuit" },
          { label: "Remplacement carte", fosfo: "10 €", gold: "Gratuit", worldElite: "Gratuit" },
          { label: "Carte remplacement express", fosfo: "25 €", gold: "15 €", worldElite: "Gratuit" },
          { label: "Découvert autorisé (TAEG)", fosfo: "~7%", gold: "~7%", worldElite: "~7%" },
          { label: "Chéquier", fosfo: "Gratuit", gold: "Gratuit", worldElite: "Gratuit" },
          { label: "Assurance moyens paiement", fosfo: "2 €/mois (option)", gold: "Inclus", worldElite: "Inclus" }
        ]
      },
      {
        category: "Frais de bourse (BoursoBank Bourse)",
        items: [
          { label: "Actions françaises (en ligne)", standard: "0,50% (min 1,99€)" },
          { label: "Actions européennes", standard: "0,50% (min 5€)" },
          { label: "Actions US", standard: "0,50% (min 8,50$)" },
          { label: "ETF PEA", standard: "0,50% (min 1,99€)" },
          { label: "Warrants, turbos", standard: "0,50% (min 1,99€)" },
          { label: "Frais de gestion PEA", standard: "0€" },
          { label: "Frais de gestion compte-titres", standard: "0€" },
          { label: "Droits de garde", standard: "0€ (France), 0,36%/an (étranger)" },
          { label: "Tarifs dégressifs", standard: "Réductions progressives pour traders actifs" }
        ]
      },
      {
        category: "Offre Freedom (18-25 ans)",
        items: [
          { label: "Carte Visa Ultim", standard: "Gratuite sans conditions de revenus" },
          { label: "Avantages", standard: "Tous avantages Ultim inclus" },
          { label: "Public", standard: "Parfait pour étudiants et jeunes actifs" }
        ]
      },
      {
        category: "Produits d'épargne",
        items: [
          { label: "Livret BoursoBank", standard: "Taux boosté promotionnel fréquent (jusqu'à 4-5% sur 3 mois)" },
          { label: "Assurance-vie", standard: "Frais de gestion 0,60-0,75%/an selon contrat" }
        ]
      }
    ],
    clientProfile: {
      ideal: [
        "Particulier recherchant banque principale complète et gratuite",
        "Investisseur débutant à confirmé souhaitant bourse accessible",
        "Étudiant ou jeune (18-25 ans) avec offre Freedom",
        "Parent pour compte enfant (Kador 12-17 ans)",
        "Auto-entrepreneur ou freelance (compte pro)",
        "Famille recherchant écosystème bancaire complet",
        "Client valorisant innovation et communauté"
      ],
      notSuitedFor: [
        "Trader très actif (frais moins compétitifs que courtiers low-cost)",
        "Voyageur très fréquent hors zone euro (sauf Ultim Metal)",
        "Personne recherchant support client téléphonique ultra-réactif",
        "Client nécessitant compte joint complexe",
        "Personne préférant relation bancaire physique en agence"
      ]
    },
    scores: {
      security: "9.5/10",
      price: "9/10",
      innovation: "10/10",
      simplicity: "8.5/10",
      support: "7.5/10",
      global: "9/10"
    },
    conclusion: {
      summary: "BoursoBank est le leader incontesté des banques en ligne françaises, et ce statut est pleinement mérité. Avec son offre la plus complète du marché (perso + pro + jeunes + bourse), son innovation constante, sa plateforme d'investissement d'excellence et sa gratuité maximale, elle représente le meilleur rapport qualité/prix global. Son appartenance à la Société Générale garantit solidité et pérennité.",
      recommendedProfile: "Tout particulier recherchant banque principale complète, gratuite et moderne, de l'étudiant (18+) au cadre supérieur. Idéal pour investisseurs souhaitant gérer bourse et comptes au même endroit, familles avec ados (Kador), auto-entrepreneurs (compte pro), et personnes valorisant innovation et communauté.",
      recommendation: "⭐⭐⭐⭐⭐ (4.5/5) - Meilleure banque en ligne française toutes catégories. BoursoBank combine tous les avantages (gratuité, offre complète, innovation, solidité) avec peu d'inconvénients majeurs. Choix #1 recommandé pour banque principale pour la grande majorité des profils. Seuls les traders ultra-actifs (frais) et voyageurs très fréquents hors UE (retraits) devraient considérer des alternatives spécialisées. Référence du secteur."
    }
  },
  {
    name: "Wise",
    slug: "wise",
    tagline: "La banque des voyageurs",
    description: "Wise est une fintech britannique fondée en 2011, spécialisée dans les transferts d'argent internationaux et la gestion multi-devises. Ce n'est pas une banque au sens traditionnel, mais un compte de paiement électronique révolutionnaire qui a disrupté le marché des virements internationaux.",
    pros: [
      "Taux de change réel : Aucune majoration sur taux (mid-market rate), jusqu'à 8x moins cher que banques",
      "Transparence totale : Frais affichés clairement AVANT transaction, calculateur en temps réel",
      "Compte multi-devises unique : Détenir et gérer 50+ devises dans une seule application",
      "IBAN locaux multiples : EUR, GBP, USD, AUD, etc. = recevoir virements comme un local",
      "Idéal expatriés et nomades : Optimise coûts et facilite vie internationale",
      "Application exceptionnelle : Design, UX et fonctionnalités parmi les meilleures du secteur fintech",
      "Rapidité des transferts : Souvent quelques heures, bien plus rapide que banques classiques",
      "Carte multi-devises : Paiements automatiquement dans la bonne devise (évite frais conversion)",
      "Frais ultra-compétitifs : Imbattables sur virements internationaux",
      "Compte business performant : Parfait freelances et entreprises avec clients/fournisseurs internationaux",
      "Pas de frais cachés : Ce que vous voyez est ce que vous payez"
    ],
    cons: [
      "Ce n'est pas une banque complète : Pas d'épargne rémunérée, crédit, découvert, chéquier",
      "Pas de garantie dépôts bancaires : Fonds ségrégués mais pas de FGDR (protection moindre)",
      "Retraits limités : Seulement 200€/mois gratuits, puis 2% de frais",
      "IBAN parfois non-accepté : IBAN belge (BE) pour EUR peut être refusé par certains organismes français",
      "Pas de virements instantanés : SEPA classique uniquement (1-2 jours)",
      "Service client perfectible : Principalement chat/email, pas de téléphone facilement accessible",
      "Pas d'investissement : Aucune possibilité bourse, crypto, épargne rémunérée",
      "Pas de découvert : Peut bloquer en cas de solde insuffisant",
      "Frais de carte physique : 7€ one-time (rare mais existe)",
      "Conversion obligatoire : Pour payer dans devise non détenue = frais conversion (même si faibles)"
    ],
    features: {
      cardFee: "7€ (one-time) - Carte virtuelle gratuite",
      minIncome: "Aucun (0€)",
      withdraw: "Gratuits jusqu'à 200€/mois, puis 2%",
      support: "Chat in-app et email",
      app: "4.7/5 App Store | 4.6/5 Google Play"
    },
    rating: 4.6,
    highlight: "Champion multi-devises",
    readingTime: "7 minutes",
    publicTarget: "Nomades digitaux, expatriés, freelances internationaux, e-commerçants, voyageurs fréquents, personnes effectuant régulièrement des transactions en devises étrangères, familles multiculturelles.",
    positioning: "Wise se positionne comme l'alternative transparente et économique aux banques pour tout ce qui touche aux devises étrangères. Sa mission : rendre les transferts internationaux aussi simples et peu coûteux qu'un virement national. Transparence totale et technologie sont au cœur du modèle.",
    distinction: "Wise se distingue par son taux de change réel (mid-market rate, sans majoration), ses frais ultra-compétitifs sur virements internationaux (jusqu'à 8x moins cher que banques), son compte multi-devises (détention et conversion de 50+ devises), et sa transparence absolue sur les coûts.",
    accountTypes: [
      "Compte personnel (multi-devises)",
      "Compte business (pour entreprises et freelances)",
      "Compte pour enfants/ados (sous tutelle parent)",
      "Pas de compte d'épargne rémunéré",
      "Pas de produits d'investissement (actions, ETF, crypto)"
    ],
    entryConditions: [
      "Aucune condition de revenus",
      "Âge minimum : 18 ans (compte perso), tout âge (compte enfant sous tutelle)",
      "Résidence : nombreux pays acceptés dont France",
      "Justificatifs : pièce d'identité uniquement",
      "Ouverture 100% en ligne en quelques minutes",
      "Pas de dépôt minimum"
    ],
    cards: [
      {
        name: "Carte de débit Wise (Mastercard)",
        type: "Débit immédiat",
        details: "7€ (one-time fee) - Plusieurs cartes possibles"
      },
      {
        name: "Carte virtuelle",
        type: "Débit immédiat",
        details: "Gratuite - Utilisable immédiatement"
      }
    ],
    mobilePay: {
      applePay: true,
      googlePay: true,
      samsungPay: true
    },
    instantTransfer: "Non disponibles (SEPA standard) - Vitesse varie selon devises : quelques heures à 2 jours",
    overdraft: "❌ Non disponible - Impossible d'être à découvert",
    appDetails: {
      features: [
        "Excellence absolue",
        "Interface ultra-moderne et intuitive",
        "Gestion multi-devises avec tableaux de bord clairs",
        "Conversion instantanée entre devises",
        "Calculateur de frais transparent en temps réel",
        "Alertes de taux de change",
        "Notifications push instantanées",
        "Envoi d'argent simplifié (contacts, email, téléphone)",
        "Disponible iOS et Android",
        "L'une des meilleures applications fintech au monde"
      ],
      appStoreRating: "4.7/5",
      googlePlayRating: "4.6/5"
    },
    security: {
      features: [
        "Régulation FCA (Financial Conduct Authority, UK) et autorités locales (ACPR en France)",
        "Fonds clients ségrégués (protection totale)",
        "Pas de garantie dépôts bancaires traditionnels (pas une banque)",
        "Authentification forte (biométrie, 2FA)",
        "3D Secure pour paiements"
      ],
      depositGuarantee: "Fonds clients ségrégués (protection même en cas faillite) - Pas de garantie dépôts FGDR (pas une banque)",
      score: "8/10"
    },
    tradingOffer: {
      platform: "❌ Aucune offre disponible",
      instruments: "Wise est purement axé paiements et transferts - Pas de bourse, crypto ou investissement",
      fees: "N/A"
    },
    internationalServices: {
      iban: "IBAN locaux multiples : EUR (Belgique), GBP (UK), USD (US), AUD, NZD, CAD, TRY, RON, HUF, SGD...",
      withdrawals: "Retraits gratuits jusqu'à 200€/mois, puis 2% (zone euro et hors zone euro)",
      payments: "Paiements en devises : frais minimes | Paiements en devise détenue : gratuits",
      multiCurrency: true,
      assistance: "Compte multi-devises : 50+ devises détenues simultanément | Conversion au taux réel (mid-market) | Idéal expatriés, freelances, e-commerce | Envoi d'argent dans 160+ pays"
    },
    detailedFees: [
      {
        category: "Frais bancaires généraux",
        items: [
          { label: "Tenue de compte", standard: "Gratuit" },
          { label: "Carte physique (one-time)", standard: "7€" },
          { label: "Carte virtuelle", standard: "Gratuit" },
          { label: "Remplacement carte", standard: "5€" },
          { label: "Retrait zone euro", standard: "Gratuit jusqu'à 200€/mois, puis 2%" },
          { label: "Retrait hors zone euro", standard: "Gratuit jusqu'à 200€/mois, puis 2%" },
          { label: "Paiement en devise détenue", standard: "Gratuit" },
          { label: "Paiement nécessitant conversion", standard: "Frais conversion (0,41-2%)" }
        ]
      },
      {
        category: "Virements et conversions",
        items: [
          { label: "Virement SEPA (EUR)", standard: "Gratuit (réception) / ~0,41% (envoi)" },
          { label: "Virement international", standard: "0,41% à 2% selon devises" },
          { label: "Réception virement international", standard: "Gratuit (avec IBAN locaux)" },
          { label: "Conversion entre devises", standard: "0,41% à 2% selon paires" },
          { label: "Découvert autorisé", standard: "Non disponible" },
          { label: "Chéquier", standard: "Non disponible" }
        ]
      },
      {
        category: "Exemples de frais transferts internationaux (pour 1 000€)",
        items: [
          { label: "EUR → USD", standard: "~4€ (0,41%) vs 20-40€ banque classique" },
          { label: "EUR → GBP", standard: "~4€ (0,41%) vs 15-35€ banque classique" },
          { label: "EUR → CAD", standard: "~6€ (0,6%) vs 25-45€ banque classique" },
          { label: "EUR → THB", standard: "~10€ (1%) vs 30-50€ banque classique" },
          { label: "EUR → AUD", standard: "~6€ (0,6%) vs 20-40€ banque classique" }
        ]
      },
      {
        category: "Détention de devises",
        items: [
          { label: "Devises disponibles", standard: "50+ devises" },
          { label: "Frais de détention", standard: "Pas de frais pour détention" },
          { label: "Conversion entre soldes", standard: "Frais transparents (0,41-2%)" }
        ]
      }
    ],
    clientProfile: {
      ideal: [
        "Expatrié vivant à l'étranger ou avec revenus multi-pays",
        "Nomade digital travaillant pour clients internationaux",
        "Freelance international facturant en devises étrangères",
        "Voyageur très fréquent (plusieurs pays/mois)",
        "E-commerçant vendant à l'international",
        "Famille multiculturelle avec transferts réguliers",
        "Personne envoyant de l'argent régulièrement à l'étranger"
      ],
      notSuitedFor: [
        "Personne recherchant banque complète (épargne, crédit, découvert)",
        "Client ayant uniquement besoins bancaires domestiques (France)",
        "Investisseur souhaitant bourse/crypto",
        "Personne nécessitant chéquier",
        "Client valorisant garantie dépôts bancaires classiques",
        "Personne effectuant peu/pas de transactions internationales"
      ]
    },
    scores: {
      security: "8/10",
      price: "10/10",
      innovation: "10/10",
      simplicity: "9.5/10",
      support: "7/10",
      global: "9/10"
    },
    conclusion: {
      summary: "Wise est LA référence absolue pour virements internationaux et gestion multi-devises. Sa transparence totale, ses frais imbattables (jusqu'à 8x moins cher que banques), son taux de change réel et son application exceptionnelle en font un outil indispensable pour toute personne ayant une vie financière internationale. Ce n'est pas une banque complète, mais un complément parfait.",
      recommendedProfile: "Expatrié, nomade digital, freelance international, voyageur très fréquent (plusieurs pays/an), e-commerçant international, personne envoyant régulièrement de l'argent à l'étranger, famille multiculturelle. Essentiel pour toute personne avec besoins internationaux réguliers.",
      recommendation: "⭐⭐⭐⭐⭐ (5/5) pour usage international - Wise révolutionne les transferts internationaux et s'impose comme un incontournable. Impossible de faire mieux en termes de coûts, transparence et simplicité pour tout ce qui touche aux devises étrangères. À utiliser en complément d'une banque principale pour besoins domestiques. Indispensable pour profils internationaux."
    }
  },
  {
    name: "Revolut",
    slug: "revolut",
    tagline: "La super-app financière",
    description: "Revolut est une néobanque britannique fondée en 2015, devenue licorne et comptant plus de 30 millions d'utilisateurs dans le monde. Positionnée comme une \"super-app\" financière, elle ambitionne de centraliser tous les services financiers (paiements, épargne, investissement, crypto) dans une seule application mobile moderne.",
    pros: [
      "Super-app tout-en-un : Banque + bourse + crypto + voyage + épargne dans une seule application",
      "Compte gratuit fonctionnel : Formule Standard utilisable quotidiennement sans frais mensuels",
      "Multi-devises performant : 35+ devises avec excellents taux (jusqu'à plafond)",
      "Application exceptionnelle : Design, UX et fonctionnalités parmi les meilleures du monde fintech",
      "Investissement intégré : Actions, ETF, crypto accessibles directement (1€ par ordre)",
      "Innovation constante : Nouvelles fonctionnalités régulières (IA, analytics, services)",
      "Cartes virtuelles jetables : Sécurité maximale pour achats en ligne",
      "Épargne rémunérée : Jusqu'à 4% sur savings vaults (plans payants)",
      "Budgeting intelligent : Outils catégorisation et analytics avancés",
      "Croissance et stabilité : 30M+ utilisateurs, financement solide, expansion continue",
      "Offre complète jeunes et business : Junior accounts et comptes professionnels performants"
    ],
    cons: [
      "IBAN lituanien (LT) : Parfois refusé par organismes français (employeurs, CAF, impôts)",
      "Plafonds conversion devises : Frais après dépassement (0,5-1%), même en semaine (Standard)",
      "Service client controversé : Principalement chatbot, support humain difficile d'accès, délais longs",
      "Modèle freemium agressif : Formule gratuite limitée, pousse vers abonnements payants",
      "Frais crypto élevés : Spread 1,5-2,5% (plus cher que exchanges purs)",
      "Pas de chéquier : Paiements carte/virement uniquement",
      "Controverses passées : Culture d'entreprise critiquée, régulation parfois lente, incidents passés",
      "Pas de découvert : Impossible d'être à découvert (peut bloquer opérations)",
      "Dépendance application : Pas d'interface web complète, tout sur mobile",
      "Limites formule gratuite : Retraits limités (5 par mois, 200€), conversion week-end payante, etc."
    ],
    features: {
      cardFee: "Gratuite (Standard) - Physique 5,99€ one-time",
      minIncome: "Aucun (0€)",
      withdraw: "5/mois (max 200€) gratuits, puis 2%",
      support: "Chatbot + chat humain (priorité selon formule)",
      app: "4.5/5 App Store | 4.3/5 Google Play"
    },
    rating: 4.5,
    highlight: "Plus innovante",
    readingTime: "8 minutes",
    publicTarget: "Jeunes actifs tech-savvy (25-40 ans), voyageurs fréquents, early adopters, investisseurs débutants crypto/bourse, expatriés, personnes recherchant application financière tout-en-un moderne.",
    positioning: "Revolut se positionne comme une super-app financière globale, visant à remplacer banque + courtier + app crypto + bureau de change. Innovation technologique, croissance agressive et marketing viral sont au cœur de sa stratégie. Modèle freemium avec formules payantes premium.",
    distinction: "Revolut se distingue par son écosystème ultra-complet (banque + investissement + crypto + voyage), sa croissance fulgurante (30M+ utilisateurs), son modèle freemium sophistiqué (5 formules), ses innovations régulières (nouvelles fonctionnalités chaque mois), et son ambition globale.",
    accountTypes: [
      "Compte Standard (gratuit)",
      "Compte Plus (2,99€/mois)",
      "Compte Premium (7,99€/mois)",
      "Compte Metal (13,99€/mois)",
      "Compte Ultra (45€/mois)",
      "Compte Business (pour professionnels)",
      "Compte Junior (pour enfants <18 ans)"
    ],
    entryConditions: [
      "Aucune condition de revenus",
      "Âge minimum : 18 ans (6 ans pour Junior avec parent)",
      "Résidence : nombreux pays dont France",
      "Justificatifs : pièce d'identité uniquement",
      "Ouverture 100% mobile en quelques minutes"
    ],
    cards: [
      {
        name: "Standard - Carte virtuelle",
        type: "Débit immédiat",
        details: "Gratuite - Utilisable immédiatement"
      },
      {
        name: "Plus - Carte physique personnalisée",
        type: "Débit immédiat",
        details: "2,99€/mois - Design personnalisé"
      },
      {
        name: "Premium - Carte personnalisée",
        type: "Débit immédiat",
        details: "7,99€/mois - Accès lounges inclus"
      },
      {
        name: "Metal - Carte en métal",
        type: "Débit immédiat",
        details: "13,99€/mois - Carte métal premium + 1% cashback"
      },
      {
        name: "Ultra - Carte en métal exclusive",
        type: "Débit immédiat",
        details: "45€/mois - VIP + 2% cashback"
      }
    ],
    mobilePay: {
      applePay: true,
      googlePay: true,
      samsungPay: true
    },
    instantTransfer: "Gratuits (entre utilisateurs Revolut) - SEPA standard pour virements externes",
    overdraft: "❌ Non disponible en France - Impossible d'être à découvert",
    appDetails: {
      features: [
        "Application uniquement (pas d'interface web complète)",
        "Design ultra-moderne, minimaliste et soigné",
        "Gestion multi-devises intuitive",
        "Budgeting et catégorisation automatiques",
        "Notifications intelligentes",
        "Trading actions/crypto intégré",
        "Cartes virtuelles jetables (sécurité)",
        "Split de facture entre amis",
        "Coffres d'épargne (vaults)",
        "Analytics dépenses avancés",
        "L'une des applications fintech les plus complètes"
      ],
      appStoreRating: "4.5/5",
      googlePlayRating: "4.3/5"
    },
    security: {
      features: [
        "Licence bancaire européenne (Lituanie, 2018)",
        "Garantie des dépôts : 100 000€ (fonds lituanien)",
        "Authentification forte (biométrie, PIN, 2FA)",
        "Blocage/déblocage carte instantané in-app",
        "Cartes virtuelles jetables (protection fraude)",
        "3D Secure",
        "Contrôle géographique des paiements"
      ],
      depositGuarantee: "100 000€ (fonds lituanien) - Régulation BCE et autorités nationales",
      score: "8.5/10"
    },
    tradingOffer: {
      platform: "Revolut (intégré dans l'application)",
      instruments: "3 000+ actions US et européennes | ETF disponibles | 80+ cryptomonnaies (BTC, ETH, etc.) | Métaux précieux (or, argent) | Trading fractionnaire",
      fees: "Actions/ETF : 1€ par ordre (Standard), gratuit plans payants (avec limites) | Crypto : 1,5-2,5% spread | Auto-invest (DCA automatique)"
    },
    internationalServices: {
      iban: "IBAN locaux : EUR (LT), GBP (UK), USD (US), autres selon formule",
      withdrawals: "Retraits gratuits selon formule : 200€ (Standard), 200-800€ (payant), Illimité (Metal/Ultra)",
      payments: "Paiements en devises : excellents taux | Taux de change mid-market jusqu'à plafond mensuel (puis majoration 0,5-1%)",
      multiCurrency: true,
      assistance: "Compte multi-devises : 35+ devises | Plafonds conversion gratuite : 1 000€/mois (Standard), 5 000€ (Plus), 15 000€ (Premium), Illimité (Metal) | Assurance voyage (Premium+) | Carte eSIM internationale"
    },
    detailedFees: [
      {
        category: "Abonnements mensuels",
        items: [
          { label: "Standard", standard: "Gratuit" },
          { label: "Plus", standard: "2,99€/mois" },
          { label: "Premium", standard: "7,99€/mois" },
          { label: "Metal", standard: "13,99€/mois" },
          { label: "Ultra", standard: "45€/mois" }
        ]
      },
      {
        category: "Cartes et retraits",
        items: [
          { label: "Carte physique", fosfo: "5,99€ (one-time)", gold: "Incluse", worldElite: "Incluse (métal)" },
          { label: "Carte virtuelle", fosfo: "Gratuite", gold: "Gratuite", worldElite: "Gratuite" },
          { label: "Retraits gratuits", fosfo: "5/mois (max 200€)", gold: "200-400€/mois", worldElite: "800€/mois - Illimité" },
          { label: "Retraits après limite", fosfo: "2%", gold: "2%", worldElite: "2% ou -" },
          { label: "Remplacement carte", standard: "5,99€" }
        ]
      },
      {
        category: "Virements et conversion",
        items: [
          { label: "Virement SEPA", standard: "Gratuit" },
          { label: "Virement international", fosfo: "Frais variables", gold: "Frais réduits", worldElite: "Gratuit (limité/illimité)" },
          { label: "Conversion devises gratuite", fosfo: "1 000€/mois (semaine)", gold: "5 000€/mois", worldElite: "15 000€/mois - Illimité" },
          { label: "Conversion week-end", fosfo: "1% markup", gold: "1% markup / Gratuit", worldElite: "Gratuit" }
        ]
      },
      {
        category: "Trading et investissement",
        items: [
          { label: "Trading actions/ETF", fosfo: "1€ par ordre", gold: "Gratuit (limité)", worldElite: "Gratuit (illimité)" },
          { label: "Trading crypto", fosfo: "Spread 1,5-2,5%", gold: "Spread réduit", worldElite: "Spread minimal" },
          { label: "Épargne rémunérée", fosfo: "❌", gold: "~2,5%", worldElite: "~3,5-4%+" }
        ]
      },
      {
        category: "Services premium",
        items: [
          { label: "Assurance voyage", fosfo: "❌", gold: "Limitée / Incluse", worldElite: "Incluse étendue / VIP" },
          { label: "Accès lounges aéroport", fosfo: "❌", gold: "❌ / 3/an", worldElite: "8/an - Illimité" },
          { label: "Cashback", fosfo: "❌", gold: "0,1-0,25%", worldElite: "1-2%" }
        ]
      },
      {
        category: "Limites formule Standard (gratuit)",
        items: [
          { label: "Retraits", standard: "5/mois max (total 200€)" },
          { label: "Conversion gratuite", standard: "1 000€/mois en semaine uniquement" },
          { label: "Conversion week-end", standard: "1% de frais" },
          { label: "Épargne rémunérée", standard: "❌" },
          { label: "Assurance voyage", standard: "❌" },
          { label: "Trading actions", standard: "1€ par ordre" }
        ]
      }
    ],
    clientProfile: {
      ideal: [
        "Jeune actif tech-savvy (25-40 ans)",
        "Voyageur fréquent en zone euro et hors UE",
        "Personne souhaitant application financière tout-en-un",
        "Investisseur débutant (actions, crypto) cherchant simplicité",
        "Expatrié ou nomade digital avec vie multi-devises",
        "Early adopter aimant nouvelles technologies",
        "Client acceptant de payer abonnement pour services premium"
      ],
      notSuitedFor: [
        "Personne nécessitant support client réactif et humain",
        "Client avec besoins uniquement domestiques (France)",
        "Trader actif crypto (frais élevés)",
        "Personne recherchant banque principale traditionnelle",
        "Client valorisant stabilité et régulation française stricte",
        "Personne nécessitant chéquier ou découvert",
        "Client refusant IBAN non-français"
      ]
    },
    scores: {
      security: "8.5/10",
      price: "7/10",
      innovation: "10/10",
      simplicity: "8/10",
      support: "5.5/10",
      global: "7.5/10"
    },
    conclusion: {
      summary: "Revolut est une super-app financière ambitieuse et innovante, proposant un écosystème ultra-complet (banque + investissement + crypto + voyage) dans une application moderne. Sa croissance fulgurante (30M+ utilisateurs) témoigne de son attrait, mais son modèle freemium, son support client critiqué et son IBAN lituanien peuvent rebuter. Excellent en complément, plus discutable en banque principale unique.",
      recommendedProfile: "Jeune actif tech-savvy avec revenus moyens-élevés, voyageur fréquent international, investisseur débutant souhaitant toucher à tout (actions + crypto), expatrié ou nomade digital, personne prête à payer abonnement pour services premium (Metal/Ultra), client cherchant application financière moderne et complète.",
      recommendation: "⭐⭐⭐⭐ (3.5/5) - Revolut excelle en tant que compte secondaire ou complément d'une banque principale. L'application est remarquable, l'offre complète séduisante, mais IBAN lituanien et support client perfectible freinent son usage en banque principale unique. Formule gratuite OK pour tester, formules payantes (Premium/Metal) recommandées pour usage intensif. Excellent pour voyages et investissements diversifiés, moins pour besoins bancaires quotidiens stricts."
    }
  },
  {
    name: "N26",
    slug: "n26",
    tagline: "La banque 100% mobile",
    description: "N26 est une néobanque allemande fondée en 2013, pionnière du modèle \"mobile-first\" en Europe. Avec plus de 8 millions de clients dans 25 pays, elle incarne la banque 100% mobile, minimaliste et moderne, ciblant une génération connectée recherchant simplicité et contrôle total via smartphone.",
    pros: [
      "Simplicité absolue : Interface minimaliste, onboarding en 8 minutes, aucune complexité",
      "Design exceptionnel : Application primée, UX épurée, expérience utilisateur remarquable",
      "Compte gratuit complet : Formule Standard utilisable quotidiennement sans frais",
      "IBAN allemand (DE) : Généralement mieux accepté que LT (Revolut) ou BE (Wise)",
      "Notification instantanée : Chaque transaction notifiée en temps réel (contrôle maximal)",
      "Spaces (sous-comptes) : Organisation de l'épargne par objectifs, visuel et pratique",
      "Licence bancaire allemande : Garantie dépôts 100 000€, régulation stricte",
      "Carte Metal premium : Design élégant en acier, statut symbolique",
      "Rapidité d'exécution : Ouverture, virements, opérations ultra-rapides",
      "Pas de paperasse : Tout 100% digital, aucun document papier",
      "Compte business performant : Idéal freelances et indépendants"
    ],
    cons: [
      "Fonctionnalités limitées : Pas d'investissement, crypto, épargne rémunérée (France)",
      "Retraits limités (Standard) : Seulement 3 gratuits/mois en zone euro, puis 2€",
      "IBAN allemand (DE) : Parfois refusé par certains organismes français (rare mais existe)",
      "Pas de chéquier : Paiements carte/virement uniquement",
      "Pas de découvert : Impossible d'être à découvert",
      "Service client critiqué : Principalement chat, support humain difficile d'accès, délais longs",
      "Formules payantes chères : 16,90€/mois pour Metal (vs 13,99€ Revolut)",
      "Pas d'interface web : Tout sur mobile uniquement (peut gêner certains)",
      "Moins innovant récemment : Dépassé par Revolut et Trade Republic en termes de fonctionnalités",
      "Multi-devises limité : Conversion automatique, pas de détention réelle multi-devises"
    ],
    features: {
      cardFee: "Gratuite (Standard) - Métal 16,90€/mois",
      minIncome: "Aucun (0€)",
      withdraw: "3 gratuits/mois en zone euro, puis 2€",
      support: "Chat in-app et email",
      app: "4.5/5 App Store | 4.2/5 Google Play"
    },
    rating: 4.4,
    highlight: "Design le plus épuré",
    readingTime: "7 minutes",
    publicTarget: "Millennials et Gen Z (20-35 ans), urbains connectés, minimalistes digitaux, jeunes actifs, étudiants, voyageurs occasionnels, personnes valorisant design et simplicité au-dessus de tout.",
    positioning: "N26 se positionne comme la banque mobile pure, avec philosophie \"mobile-first, mobile-only\". Pas d'agence, pas de paperasse, tout dans le smartphone. Design minimaliste, expérience utilisateur épurée, rapidité d'exécution. Modèle freemium avec 4 formules.",
    distinction: "N26 se distingue par son design épuré et élégant (régulièrement primé), sa simplicité d'usage (onboarding en 8 minutes), son IBAN allemand (DE), ses fonctionnalités minimalistes mais efficaces, et sa philosophie mobile-only assumée.",
    accountTypes: [
      "N26 Standard (gratuit)",
      "N26 Smart (4,90€/mois)",
      "N26 You (9,90€/mois)",
      "N26 Metal (16,90€/mois)",
      "N26 Business (pour indépendants et freelances)",
      "Pas de compte épargne rémunéré en France",
      "Pas de produits d'investissement (actions, crypto)"
    ],
    entryConditions: [
      "Aucune condition de revenus",
      "Âge minimum : 18 ans",
      "Résidence : 25 pays européens dont France",
      "Justificatifs : pièce d'identité uniquement",
      "Ouverture 100% mobile en 8 minutes (record)"
    ],
    cards: [
      {
        name: "N26 Standard",
        type: "Débit immédiat",
        details: "Mastercard virtuelle + physique gratuite"
      },
      {
        name: "N26 Smart",
        type: "Débit immédiat",
        details: "Mastercard personnalisée (choix de 5 couleurs) - 4,90€/mois"
      },
      {
        name: "N26 You",
        type: "Débit immédiat",
        details: "Mastercard personnalisée + couleurs exclusives - 9,90€/mois"
      },
      {
        name: "N26 Metal",
        type: "Débit immédiat",
        details: "Mastercard en métal (acier inoxydable, 18g) - 16,90€/mois"
      }
    ],
    mobilePay: {
      applePay: true,
      googlePay: true,
      samsungPay: true
    },
    instantTransfer: "Gratuits (entre utilisateurs N26) - Disponibles pour virements SEPA (0,49€ Standard, gratuit You/Metal)",
    overdraft: "❌ Non disponible en France - Impossible d'être à découvert",
    appDetails: {
      features: [
        "Application uniquement (philosophie mobile-only)",
        "Design minimaliste, épuré, élégant",
        "Interface ultra-simple et intuitive",
        "Notifications push instantanées (chaque transaction)",
        "Catégorisation automatique des dépenses",
        "Statistiques mensuelles claires",
        "Espaces (Spaces) : sous-comptes d'épargne",
        "Arrondi automatique pour épargne",
        "Gestion plafonds et sécurité",
        "Blocage/déblocage carte instantané",
        "Disponible iOS et Android",
        "Design primé internationalement"
      ],
      appStoreRating: "4.5/5",
      googlePlayRating: "4.2/5"
    },
    security: {
      features: [
        "Licence bancaire allemande complète (BaFin, 2016)",
        "Garantie des dépôts : 100 000€ (fonds allemand)",
        "Supervision BCE et BaFin",
        "Authentification forte (biométrie, PIN)",
        "3D Secure Mastercard Identity Check",
        "Notifications temps réel",
        "Contrôle géographique paiements"
      ],
      depositGuarantee: "100 000€ (fonds allemand) - Supervision BCE (régulation stricte)",
      score: "9/10"
    },
    tradingOffer: {
      platform: "❌ Aucune offre disponible",
      instruments: "N26 est purement banque mobile du quotidien - Pas de bourse, crypto ou investissement",
      fees: "N/A"
    },
    internationalServices: {
      iban: "IBAN allemand (DE) pour tous",
      withdrawals: "Retraits gratuits zone euro (3-8/mois selon formule) | Retraits hors zone euro : inclus (Smart, You, Metal) ou payants 1,7% (Standard)",
      payments: "Paiements en devises : gratuits (taux Mastercard)",
      multiCurrency: false,
      assistance: "Pas de compte multi-devises réel (conversion automatique) | Assurance voyage incluse (You, Metal) | Moins performant que Wise/Revolut pour usage international intensif"
    },
    detailedFees: [
      {
        category: "Abonnements mensuels",
        items: [
          { label: "Standard", standard: "Gratuit" },
          { label: "Smart", standard: "4,90€/mois" },
          { label: "You", standard: "9,90€/mois" },
          { label: "Metal", standard: "16,90€/mois" }
        ]
      },
      {
        category: "Cartes et retraits",
        items: [
          { label: "Carte physique", fosfo: "Gratuite", gold: "Incluse (colorée)", worldElite: "Incluse (métal)" },
          { label: "Carte virtuelle", fosfo: "Gratuite", gold: "Gratuite", worldElite: "Gratuite" },
          { label: "Retraits zone euro (gratuits)", fosfo: "3/mois", gold: "5/mois (Smart) - 8/mois (You)", worldElite: "Illimité" },
          { label: "Retraits après limite", fosfo: "2€", gold: "2€", worldElite: "-" },
          { label: "Retraits hors zone euro", fosfo: "1,7%", gold: "Inclus (limité/illimité)", worldElite: "Inclus (illimité)" },
          { label: "Remplacement carte", fosfo: "6€", gold: "6€", worldElite: "Gratuit" }
        ]
      },
      {
        category: "Virements et opérations",
        items: [
          { label: "Virement SEPA", standard: "Gratuit" },
          { label: "Virement instantané", fosfo: "0,49€", gold: "0,49€ (Smart) - Gratuit (You)", worldElite: "Gratuit" },
          { label: "Virement international", standard: "Variable" },
          { label: "Opposition carte", standard: "Gratuit" }
        ]
      },
      {
        category: "Services premium",
        items: [
          { label: "Assurance voyage", fosfo: "❌", gold: "❌ (Smart) - Incluse (You)", worldElite: "Incluse étendue" },
          { label: "Assurance location voiture", fosfo: "❌", gold: "❌ (Smart) - Incluse (You)", worldElite: "Incluse" },
          { label: "Assurance achat", fosfo: "❌", gold: "❌ (Smart) - Partielle (You)", worldElite: "Complète" },
          { label: "Assistance téléphone", fosfo: "❌", gold: "❌", worldElite: "Incluse (réparation/vol)" },
          { label: "Cashback partenaires", fosfo: "❌", gold: "Limité", worldElite: "Maximum" }
        ]
      },
      {
        category: "Spaces (sous-comptes d'épargne)",
        items: [
          { label: "Nombre de Spaces", fosfo: "2", gold: "10 + Spaces partagés (You)", worldElite: "10 + Spaces partagés" },
          { label: "Taux rémunération", standard: "0% (en France)" }
        ]
      }
    ],
    clientProfile: {
      ideal: [
        "Millennial ou Gen Z (20-35 ans)",
        "Urbain connecté, smartphone-first",
        "Minimaliste valorisant design et simplicité",
        "Personne recherchant banque quotidienne basique sans superflu",
        "Étudiant ou jeune actif avec besoins bancaires simples",
        "Client acceptant IBAN allemand",
        "Personne n'ayant pas besoin d'investissement intégré"
      ],
      notSuitedFor: [
        "Investisseur souhaitant bourse/crypto/épargne rémunérée",
        "Personne nécessitant support client réactif et humain",
        "Client voulant fonctionnalités avancées (multi-devises réel, découvert)",
        "Voyageur très fréquent hors zone euro (formule Standard)",
        "Personne nécessitant chéquier",
        "Client recherchant innovation et fonctionnalités nombreuses"
      ]
    },
    scores: {
      security: "9/10",
      price: "7/10",
      innovation: "6/10",
      simplicity: "10/10",
      support: "6/10",
      global: "7.5/10"
    },
    conclusion: {
      summary: "N26 incarne la banque mobile minimaliste parfaite : design épuré, simplicité absolue, rapidité d'exécution. Elle excelle pour besoins bancaires quotidiens basiques, mais l'absence d'investissement, d'épargne rémunérée (France) et le support client critiqué limitent son attractivité face à concurrents plus complets. Son IBAN allemand et sa licence bancaire stricte rassurent.",
      recommendedProfile: "Jeune urbain connecté (20-35 ans) recherchant banque quotidienne simple et design, étudiant avec besoins basiques, personne valorisant minimalisme et contrôle total via smartphone, client acceptant limites fonctionnelles en échange de simplicité maximale. Excellent en compte secondaire ou pour débuter.",
      recommendation: "⭐⭐⭐½ (3.5/5) - N26 est une excellente néobanque pour besoins basiques, mais dépassée par Revolut (fonctionnalités) et Trade Republic (épargne + investissement). Son design remarquable et sa simplicité séduisent, mais l'absence d'évolution récente et le support client problématique freinent. Bon choix en compte secondaire, limité en banque principale unique. Idéal pour puristes du minimalisme digital acceptant de sacrifier fonctionnalités avancées."
    }
  }
];

export default banks;

