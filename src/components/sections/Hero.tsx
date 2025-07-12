import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../../config/theme';

const Hero: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-2 sm:px-4 relative"
      style={{ 
        backgroundColor: theme.colors.background,
        fontFamily: theme.fonts.body 
      }}
    >
      <div className="w-full h-full flex flex-col md:flex-row items-stretch">
        {/* Left Column - Text Content (50% on desktop) */}
        <motion.div
          variants={itemVariants}
          className="flex-1 flex flex-col justify-center space-y-6 text-center md:text-left order-1 md:order-1 px-2 sm:px-4 md:px-8 lg:px-16 py-8 md:py-0 relative z-20 md:relative md:z-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            style={{ 
              color: theme.colors.primary,
              fontFamily: theme.fonts.heading 
            }}
          >
            Et si vous arrêtiez de perdre de l'argent sans le savoir ?
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-2xl lg:text-3xl leading-relaxed max-w-3xl mx-auto md:mx-0"
            style={{ color: theme.colors.text }}
          >
            La trésorerie n'est pas qu'un chiffre : c'est le cœur de votre entreprise.
            Avec CM360, transformez votre gestion financière en levier de réussite.
          </motion.p>
          
          <motion.div
            variants={buttonVariants}
            className="pt-6 sm:pt-8"
          >
            <motion.button
              variants={buttonVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
              }}
              whileTap={{ scale: 0.98 }}
              className="px-6 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-xl transition-all duration-500 ease-out shadow-lg hover:shadow-2xl"
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

        {/* Right Column - Video (50% on desktop) */}
        <motion.div
          variants={videoVariants}
          className="flex-1 w-full h-64 sm:h-80 md:h-screen order-2 md:order-2 mt-6 md:mt-0 absolute inset-0 md:relative md:inset-auto z-10 md:z-auto"
        >
          <motion.div
            variants={videoVariants}
            className="relative w-full h-full overflow-hidden rounded-xl md:rounded-xl"
            style={{ backgroundColor: theme.colors.light }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
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
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              onError={(e) => {
                console.error('Video failed to load:', e);
                // Fallback content will be shown below
              }}
            >
              <source 
                src="public/large.mp4"
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