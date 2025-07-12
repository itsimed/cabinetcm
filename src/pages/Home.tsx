import React from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Services from '../components/sections/Services';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';

const Home: React.FC = () => {
  return (
    <main className="scroll-smooth">
      <SEO 
        title="Cabinet CM360 – Expert en gestion de trésorerie pour entreprises"
        description="Cabinet de consultation spécialisé dans l'optimisation de la trésorerie, le cash management et les processus financiers. 7+ ans d'expérience, 150+ clients satisfaits. Contactez-nous au 438-521-3151."
        keywords="cabinet gestion trésorerie, cash management, TMS, diagnostic trésorerie, gestion liquidité, processus financiers, consultation financière Montréal, optimisation trésorerie entreprise"
        url="/"
      />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="mt-0">
        <WhyChooseUs />
      </section>

      {/* Services Section */}
      <section id="services" className="mt-0">
        <Services />
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-0">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;