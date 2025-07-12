// SEO Analysis and Optimization Guidelines for Cabinet CM360

export const seoGuidelines = {
  // Title Tag Optimization
  titleTag: {
    maxLength: 60,
    minLength: 30,
    guidelines: [
      'Include primary keyword early in title',
      'Keep under 60 characters to avoid truncation',
      'Use compelling, action-oriented language',
      'Include brand name (Cabinet CM360) when space allows'
    ]
  },

  // Meta Description Optimization
  metaDescription: {
    maxLength: 160,
    minLength: 120,
    guidelines: [
      'Include primary and secondary keywords naturally',
      'Write compelling copy that encourages clicks',
      'Include call-to-action when appropriate',
      'Mention phone number or location for local SEO'
    ]
  },

  // Content Structure
  contentStructure: {
    guidelines: [
      'Use single H1 tag per page',
      'Implement logical heading hierarchy (H1 > H2 > H3)',
      'Include keywords in headings naturally',
      'Use descriptive alt text for all images',
      'Implement proper semantic HTML5 elements'
    ]
  },

  // Target Keywords by Page
  targetKeywords: {
    homepage: [
      'cabinet gestion trésorerie',
      'cash management Montréal',
      'consultation financière entreprise',
      'optimisation trésorerie',
      'expert trésorerie Québec'
    ],
    services: [
      'services gestion trésorerie',
      'TMS treasury management system',
      'diagnostic trésorerie entreprise',
      'processus financiers optimisation',
      'cash management solutions'
    ],
    contact: [
      'contact expert trésorerie',
      'consultation trésorerie Montréal',
      'rendez-vous cash management',
      'cabinet CM360 téléphone'
    ]
  },

  // Local SEO Optimization
  localSEO: {
    guidelines: [
      'Include "Montréal" and "Québec" in key content',
      'Optimize for "near me" searches',
      'Include business address in schema markup',
      'Target French-language keywords',
      'Include business hours and contact info'
    ]
  },

  // Technical SEO Checklist
  technicalSEO: {
    performance: [
      'Optimize images (WebP format, proper sizing)',
      'Implement lazy loading for images',
      'Minimize CSS/JS bundle sizes',
      'Use CDN for static assets',
      'Implement service worker for caching'
    ],
    accessibility: [
      'Proper contrast ratios (4.5:1 minimum)',
      'Keyboard navigation support',
      'Screen reader compatibility',
      'Alt text for all images',
      'Focus indicators for interactive elements'
    ],
    mobile: [
      'Responsive design implementation',
      'Mobile-first CSS approach',
      'Touch-friendly button sizes (44px minimum)',
      'Fast mobile page load times',
      'Proper viewport meta tag'
    ]
  }
};

// Utility function to analyze SEO metrics
export const analyzeSEO = (title: string, description: string) => {
  const analysis = {
    title: {
      length: title.length,
      isOptimal: title.length >= 30 && title.length <= 60,
      containsKeyword: title.toLowerCase().includes('cabinet') || title.toLowerCase().includes('trésorerie'),
      suggestions: []
    },
    description: {
      length: description.length,
      isOptimal: description.length >= 120 && description.length <= 160,
      containsKeyword: description.toLowerCase().includes('trésorerie') || description.toLowerCase().includes('cash management'),
      suggestions: []
    }
  };

  // Add suggestions based on analysis
  if (!analysis.title.isOptimal) {
    if (analysis.title.length < 30) {
      analysis.title.suggestions.push('Titre trop court - ajouter plus de mots-clés descriptifs');
    }
    if (analysis.title.length > 60) {
      analysis.title.suggestions.push('Titre trop long - risque de troncature dans les résultats de recherche');
    }
  }

  if (!analysis.description.isOptimal) {
    if (analysis.description.length < 120) {
      analysis.description.suggestions.push('Description trop courte - ajouter plus de détails sur les services');
    }
    if (analysis.description.length > 160) {
      analysis.description.suggestions.push('Description trop longue - risque de troncature dans les résultats');
    }
  }

  if (!analysis.title.containsKeyword) {
    analysis.title.suggestions.push('Inclure des mots-clés principaux dans le titre');
  }

  if (!analysis.description.containsKeyword) {
    analysis.description.suggestions.push('Inclure des mots-clés principaux dans la description');
  }

  return analysis;
};

export default seoGuidelines;