import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../../config/theme';

interface ServiceDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    image: string;
    description: string;
    details?: string[];
    duration?: string;
    price?: string;
    advantages?: string[];
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

  // Animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      y: 30,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const staggerItem = {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose} // Close when clicking overlay
        >
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 backdrop-blur-md bg-black/40"
            initial={{ backdropFilter: 'blur(0px)' }}
            animate={{ backdropFilter: 'blur(8px)' }}
            exit={{ backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
            style={{ 
              fontFamily: theme.fonts.body,
              backgroundColor: `${theme.colors.white}E6` // 90% opacity
            }}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full backdrop-blur-sm border flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2"
              style={{ 
                backgroundColor: `${theme.colors.primary}20`,
                borderColor: `${theme.colors.primary}30`,
                color: theme.colors.primary,
                focusRingColor: theme.colors.primary
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: 90,
                transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
              }}
              whileTap={{ scale: 0.9 }}
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
            </motion.button>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <motion.div variants={contentVariants} initial="hidden" animate="visible">
                {/* Image Section */}
                <motion.div 
                  className="relative mb-6 rounded-xl overflow-hidden"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 sm:h-64 object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-48 sm:h-64 flex items-center justify-center" style="background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})">
                            <div class="text-center text-white">
                              <div class="text-4xl mb-2">💼</div>
                              <p class="text-lg font-semibold">${service.title}</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                  {/* Gradient overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  />
                </motion.div>

                {/* Title */}
                <motion.h2 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight"
                  style={{ 
                    color: theme.colors.primary,
                    fontFamily: theme.fonts.heading 
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {service.title}
                </motion.h2>

                {/* Description */}
                <motion.p 
                  className="text-base sm:text-lg leading-relaxed mb-6"
                  style={{ color: theme.colors.text }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {service.description}
                </motion.p>

                {/* Additional Details Grid */}
                {(service.details || service.duration || service.price || service.advantages) && (
                  <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {/* Duration */}
                    {service.duration && (
                      <motion.div 
                        className="backdrop-blur-sm rounded-xl p-4 border"
                        style={{ 
                          backgroundColor: `${theme.colors.primary}10`,
                          borderColor: `${theme.colors.primary}20`
                        }}
                        variants={staggerItem}
                        whileHover={{ 
                          scale: 1.02,
                          transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                        }}
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <motion.div 
                            className="p-2 rounded-full"
                            style={{ backgroundColor: `${theme.colors.primary}20` }}
                            whileHover={{ 
                              scale: 1.1,
                              transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                            }}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                              style={{ color: theme.colors.primary }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </motion.div>
                          <h3 className="font-semibold text-lg" style={{ color: theme.colors.primary }}>
                            Durée
                          </h3>
                        </div>
                        <p className="text-sm" style={{ color: theme.colors.text }}>
                          {service.duration}
                        </p>
                      </motion.div>
                    )}

                    {/* Price */}
                    {service.price && (
                      <motion.div 
                        className="backdrop-blur-sm rounded-xl p-4 border"
                        style={{ 
                          backgroundColor: `${theme.colors.primary}10`,
                          borderColor: `${theme.colors.primary}20`
                        }}
                        variants={staggerItem}
                        whileHover={{ 
                          scale: 1.02,
                          transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                        }}
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <motion.div 
                            className="p-2 rounded-full"
                            style={{ backgroundColor: `${theme.colors.secondary}20` }}
                            whileHover={{ 
                              scale: 1.1,
                              transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                            }}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                              style={{ color: theme.colors.secondary }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                          </motion.div>
                          <h3 className="font-semibold text-lg" style={{ color: theme.colors.primary }}>
                            Tarif
                          </h3>
                        </div>
                        <p className="text-sm" style={{ color: theme.colors.text }}>
                          {service.price}
                        </p>
                      </motion.div>
                    )}

                    {/* Details */}
                    {service.details && service.details.length > 0 && (
                      <motion.div 
                        className="backdrop-blur-sm rounded-xl p-4 border sm:col-span-2"
                        style={{ 
                          backgroundColor: `${theme.colors.primary}10`,
                          borderColor: `${theme.colors.primary}20`
                        }}
                        variants={staggerItem}
                        whileHover={{ 
                          scale: 1.01,
                          transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                        }}
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <motion.div 
                            className="p-2 rounded-full"
                            style={{ backgroundColor: `${theme.colors.primary}20` }}
                            whileHover={{ 
                              scale: 1.1,
                              transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                            }}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                              style={{ color: theme.colors.primary }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </motion.div>
                          <h3 className="font-semibold text-lg" style={{ color: theme.colors.primary }}>
                            Détails du service
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {service.details.map((detail, index) => (
                            <motion.li 
                              key={index} 
                              className="flex items-start space-x-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                            >
                              <span className="mt-1" style={{ color: theme.colors.primary }}>•</span>
                              <span className="text-sm" style={{ color: theme.colors.text }}>
                                {detail}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {/* Advantages */}
                    {service.advantages && service.advantages.length > 0 && (
                      <motion.div 
                        className="backdrop-blur-sm rounded-xl p-4 border sm:col-span-2"
                        style={{ 
                          backgroundColor: `${theme.colors.primary}10`,
                          borderColor: `${theme.colors.primary}20`
                        }}
                        variants={staggerItem}
                        whileHover={{ 
                          scale: 1.01,
                          transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                        }}
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <motion.div 
                            className="p-2 rounded-full"
                            style={{ backgroundColor: `${theme.colors.secondary}20` }}
                            whileHover={{ 
                              scale: 1.1,
                              transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                            }}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                              style={{ color: theme.colors.secondary }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                          </motion.div>
                          <h3 className="font-semibold text-lg" style={{ color: theme.colors.primary }}>
                            Avantages
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {service.advantages.map((advantage, index) => (
                            <motion.li 
                              key={index} 
                              className="flex items-start space-x-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                            >
                              <span className="mt-1" style={{ color: theme.colors.secondary }}>✓</span>
                              <span className="text-sm" style={{ color: theme.colors.text }}>
                                {advantage}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* Action Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
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
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceDetails; 