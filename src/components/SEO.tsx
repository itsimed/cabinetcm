import React from 'react';
import { Helmet } from 'react-helmet-async';

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

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="French" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Cabinet CM360" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@CabinetCM360" />
      
      {/* LinkedIn */}
      <meta property="linkedin:title" content={fullTitle} />
      <meta property="linkedin:description" content={description} />
      <meta property="linkedin:image" content={fullImageUrl} />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:section" content="Finance" />
          <meta property="article:tag" content="Gestion de trésorerie" />
          <meta property="article:tag" content="Cash Management" />
        </>
      )}
      
      {/* Business/Contact Info */}
      <meta name="geo.region" content="CA-QC" />
      <meta name="geo.placename" content="Montréal" />
      <meta name="geo.position" content="45.5017;-73.5673" />
      <meta name="ICBM" content="45.5017, -73.5673" />
      
      {/* Mobile/Responsive */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
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
        })}
      </script>
    </Helmet>
  );
};

export default SEO;