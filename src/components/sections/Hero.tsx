import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../../config/theme';

const Hero: React.FC = () => {
  // Animation variants - Optimized for performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const videoVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden"
      style={{ 
        backgroundColor: theme.colors.background,
        fontFamily: theme.fonts.body 
      }}
    >
      {/* Background Video for Mobile */}
      <motion.div
        variants={videoVariants}
        className="absolute inset-0 w-full h-full md:hidden z-0"
      >
        <motion.video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          onError={(e) => {
            console.error('Video failed to load:', e);
          }}
        >
          <source 
            src="/large.mp4"
            type="video/mp4"
          />
        </motion.video>
        {/* Dark overlay for better text readability on mobile */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="w-full h-full flex flex-col md:flex-row items-stretch relative z-10">
        {/* Left Column - Text Content */}
        <motion.div
          variants={itemVariants}
          className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-6 text-center md:text-left order-1 px-2 sm:px-4 md:px-8 lg:px-16 py-12 sm:py-16 md:py-0"
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight hero-title"
            style={{ 
              fontFamily: theme.fonts.heading 
            }}
          >
            Et si vous arrêtiez de perdre de l'argent sans le savoir ?
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-3xl mx-auto md:mx-0 hero-description"
          >
            La trésorerie n'est pas qu'un chiffre : c'est le cœur de votre entreprise.
            Avec CM360, transformez votre gestion financière en levier de réussite.
          </motion.p>
          
          <motion.div
            variants={buttonVariants}
            className="pt-4 sm:pt-6 md:pt-8"
          >
            <motion.button
              variants={buttonVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -2,
                transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }
              }}
              whileTap={{ scale: 0.99 }}
              className="px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 rounded-full font-semibold text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-500 ease-out shadow-lg hover:shadow-2xl w-full sm:w-auto"
              style={{ 
                backgroundColor: theme.colors.primary,
                color: theme.colors.white,
                boxShadow: '0 4px 15px rgba(0, 64, 128, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#003366';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 64, 128, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.primary;
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 64, 128, 0.2)';
              }}
              onClick={() => {
                const servicesSection = document.querySelector('#services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              Découvrir nos services
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column - Video (Desktop only) */}
        <motion.div
          variants={videoVariants}
          className="hidden md:flex flex-1 w-full h-screen order-2"
        >
          <motion.div
            variants={videoVariants}
            className="relative w-full h-full overflow-hidden rounded-xl"
            style={{ backgroundColor: theme.colors.light }}
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }
            }}
          >
            {/* Video Element */}
            <motion.video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              style={{ borderRadius: '0.75rem', minHeight: '100%', minWidth: '100%' }}
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              onError={(e) => {
                console.error('Video failed to load:', e);
                // Fallback content will be shown below
              }}
            >
              <source 
                src="/large.mp4"
                type="video/mp4"
              />
              {/* Fallback content for unsupported browsers */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">💼</div>
                  <h3 
                    className="text-xl font-semibold mb-2"
                    style={{ color: theme.colors.primary, fontFamily: theme.fonts.heading }}
                  >
                    Expertise en Gestion de Trésorerie
                  </h3>
                  <p 
                    className="text-sm opacity-70"
                    style={{ color: theme.colors.text }}
                  >
                    Solutions professionnelles pour votre entreprise
                  </p>
                </div>
              </div>
            </motion.video>

            {/* Simple hero filter overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;