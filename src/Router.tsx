import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SEO from './components/SEO';

// Wrapper component for individual pages
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <main className="scroll-smooth">
    <Navbar />
    <div className="pt-16 lg:pt-20"> {/* Offset for fixed navbar */}
      {children}
    </div>
    <Footer />
  </main>
);

// Services page component
const ServicesPage: React.FC = () => (
  <PageWrapper>
    <SEO 
      title="Nos Services – Gestion de trésorerie et Cash Management"
      description="Découvrez nos services spécialisés : Cash Management & TMS, diagnostic de trésorerie, gestion de liquidité, amélioration des processus financiers. Solutions personnalisées pour optimiser votre trésorerie d'entreprise."
      keywords="services gestion trésorerie, cash management TMS, diagnostic trésorerie, gestion liquidité entreprise, processus financiers, appel d'offres financier, économie argent entreprise"
      url="/services"
    />
    <section id="services" className="min-h-screen py-16">
      <Services />
    </section>
  </PageWrapper>
);

// Contact page component
const ContactPage: React.FC = () => (
  <PageWrapper>
    <SEO 
      title="Contact – Cabinet CM360 | Consultation en gestion de trésorerie"
      description="Contactez Cabinet CM360 pour vos besoins en gestion de trésorerie. Téléphone : 438-521-3151, Email : info@cabinetcm360.com. Consultation gratuite et accompagnement personnalisé à Montréal."
      keywords="contact cabinet trésorerie, consultation gestion trésorerie Montréal, expert cash management contact, rendez-vous consultation financière"
      url="/contact"
    />
    <section id="contact" className="min-h-screen py-16">
      <Contact />
    </section>
  </PageWrapper>
);

// 404 Not Found page
const NotFoundPage: React.FC = () => (
  <PageWrapper>
    <SEO 
      title="Page non trouvée – Cabinet CM360"
      description="La page que vous recherchez n'existe pas. Retournez à l'accueil pour découvrir nos services de gestion de trésorerie et cash management."
      url="/404"
    />
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">Page non trouvée</h2>
        <p className="text-gray-500 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <a 
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  </PageWrapper>
);

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Home page - One page with all sections */}
      <Route path="/" element={<Home />} />
      
      {/* Individual pages for future scalability */}
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      
      {/* Redirect old paths to anchor links on home page */}
      <Route path="/accueil" element={<Navigate to="/" replace />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      
      {/* 404 page */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;