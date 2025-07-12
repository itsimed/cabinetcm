import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Cabinet CM360 – Expert en gestion de trésorerie pour entreprises',
  description = 'Cabinet de consultation spécialisé dans l\'optimisation de la trésorerie, le cash management et les processus financiers. Accompagnement personnalisé pour améliorer votre gestion de liquidité.',
  keywords = 'cabinet gestion trésorerie, cash management, processus financiers, consultation financière, optimisation liquidité, TMS, diagnostic trésorerie, gestion liquidité entreprise',
  image = '/og-image.jpg',
  url = 'https://cabinetcm360.com',
  type = 'website',
  author = 'Cabinet CM360',
  publishedTime,
  modifiedTime
}) => {
  const fullTitle = title.includes('Cabinet CM360') ? title : `${title} | Cabinet CM360`;
  const fullUrl = url.startsWith('http') ? url : `https://cabinetcm360.com${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://cabinetcm360.com${image}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updatePropertyTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Primary Meta Tags
    updateMetaTag('title', fullTitle);
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'French');
    updateMetaTag('revisit-after', '7 days');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = fullUrl;

    // Open Graph / Facebook
    updatePropertyTag('og:type', type);
    updatePropertyTag('og:title', fullTitle);
    updatePropertyTag('og:description', description);
    updatePropertyTag('og:image', fullImageUrl);
    updatePropertyTag('og:url', fullUrl);
    updatePropertyTag('og:site_name', 'Cabinet CM360');
    updatePropertyTag('og:locale', 'fr_FR');

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', fullImageUrl);
    updateMetaTag('twitter:creator', '@CabinetCM360');

    // LinkedIn
    updatePropertyTag('linkedin:title', fullTitle);
    updatePropertyTag('linkedin:description', description);
    updatePropertyTag('linkedin:image', fullImageUrl);

    // Article specific meta tags
    if (type === 'article') {
      if (publishedTime) {
        updatePropertyTag('article:published_time', publishedTime);
      }
      if (modifiedTime) {
        updatePropertyTag('article:modified_time', modifiedTime);
      }
      updatePropertyTag('article:author', author);
      updatePropertyTag('article:section', 'Finance');
      updatePropertyTag('article:tag', 'Gestion de trésorerie');
      updatePropertyTag('article:tag', 'Cash Management');
    }

    // Business/Contact Info
    updateMetaTag('geo.region', 'CA-QC');
    updateMetaTag('geo.placename', 'Montréal');
    updateMetaTag('geo.position', '45.5017;-73.5673');
    updateMetaTag('ICBM', '45.5017, -73.5673');

    // Mobile/Responsive
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('format-detection', 'telephone=yes');

    // Preconnect to external domains
    const preconnectGoogleFonts = document.querySelector('link[rel="preconnect"][href="https://fonts.googleapis.com"]');
    if (!preconnectGoogleFonts) {
      const link1 = document.createElement('link');
      link1.rel = 'preconnect';
      link1.href = 'https://fonts.googleapis.com';
      document.head.appendChild(link1);
    }

    const preconnectGoogleStatic = document.querySelector('link[rel="preconnect"][href="https://fonts.gstatic.com"]');
    if (!preconnectGoogleStatic) {
      const link2 = document.createElement('link');
      link2.rel = 'preconnect';
      link2.href = 'https://fonts.gstatic.com';
      link2.crossOrigin = 'anonymous';
      document.head.appendChild(link2);
    }

    // Structured Data - JSON-LD
    let structuredData = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.type = 'application/ld+json';
      document.head.appendChild(structuredData);
    }

    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Cabinet CM360",
      "description": description,
      "url": fullUrl,
      "logo": `${fullUrl}/logo.png`,
      "image": fullImageUrl,
      "telephone": "438-521-3151",
      "email": "info@cabinetcm360.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Montréal",
        "addressRegion": "QC",
        "addressCountry": "CA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "45.5017",
        "longitude": "-73.5673"
      },
      "openingHours": [
        "Mo-Fr 09:00-17:00"
      ],
      "serviceType": [
        "Gestion de trésorerie",
        "Cash Management",
        "Consultation financière",
        "Optimisation des processus financiers"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "Canada"
      }
    });

  }, [fullTitle, description, keywords, author, fullUrl, fullImageUrl, type, publishedTime, modifiedTime]);

  // This component doesn't render anything visible
  return null;
};

export default SEO;