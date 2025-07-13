import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../../config/theme';

const Hero: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload video for better performance
    const video = new window.Image();
    video.src = '/large.mp4';
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    setVideoError(false);
    setIsLoading(false);
  };

  const handleVideoError = () => {
    console.error('Video failed to load');
    setVideoError(true);
    setVideoLoaded(false);
    setIsLoading(false);
  };

  return (
    <section 
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden transition-opacity duration-600"
      style={{ 
        backgroundColor: theme.colors.background,
        fontFamily: theme.fonts.body 
      }}
    >
      {/* Background pour Mobile : image responsive */}
      <div className="absolute inset-0 w-full h-full md:hidden z-0 transition-opacity duration-500">
        <img
          src="/heromobile.webp"
          alt="CM360 Hero Mobile"
          className="w-full h-full object-cover"
          style={{ objectFit: 'cover' }}
        />
        {/* Dark overlay for better text readability on mobile */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="w-full h-full flex flex-col md:flex-row items-stretch relative z-10">
        {/* Left Column - Text Content */}
        <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-6 text-center md:text-left order-1 px-2 sm:px-4 md:px-8 lg:px-16 py-12 sm:py-16 md:py-0 transition-all duration-400">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight hero-title transition-all duration-400"
            style={{ 
              fontFamily: theme.fonts.heading 
            }}
          >
            Et si vous arrêtiez de perdre de l'argent sans le savoir ?
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-3xl mx-auto md:mx-0 hero-description transition-all duration-400">
            La trésorerie n'est pas qu'un chiffre : c'est le cœur de votre entreprise.
            Avec CM360, transformez votre gestion financière en levier de réussite.
          </p>
          
          <div className="pt-4 sm:pt-6 md:pt-8 transition-all duration-300">
            <button
              className="px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 rounded-full font-semibold text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-500 ease-out shadow-lg hover:shadow-2xl w-full sm:w-auto hover:scale-102 hover:-translate-y-1 active:scale-99"
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
            </button>
          </div>
        </div>

        {/* Right Column - Video (Desktop only) */}
        <div className="hidden md:flex flex-1 w-full h-screen order-2 transition-opacity duration-500">
          <div
            className="relative w-full h-full overflow-hidden rounded-xl transition-transform duration-200 hover:scale-101"
            style={{ backgroundColor: theme.colors.light }}
          >
            {/* Loading Indicator for Desktop */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center z-10 rounded-xl"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 border-3 border-blue-500 border-t-transparent rounded-full"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Video Element */}
            {!videoError ? (
              <motion.video
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover transition-transform duration-800"
                style={{ borderRadius: '0.75rem', minHeight: '100%', minWidth: '100%' }}
                onLoadedData={handleVideoLoad}
                onError={handleVideoError}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ 
                  opacity: videoLoaded ? 1 : 0,
                  scale: videoLoaded ? 1 : 1.05
                }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <source src="/large.webm" type="video/webm" />
              </motion.video>
            ) : (
              /* Fallback content for video error */
              <motion.div 
                className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
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
              </motion.div>
            )}

            {/* Simple hero filter overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none transition-opacity duration-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: videoLoaded ? 1 : 0 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;