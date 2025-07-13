import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 backdrop-blur-md bg-black/40 transition-all duration-200"
        onClick={onClose} // Close when clicking overlay
      />
      
      {/* Modal */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
        style={{ 
          fontFamily: theme.fonts.body,
          backgroundColor: `${theme.colors.white}E6` // 90% opacity
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full backdrop-blur-sm border flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2"
          style={{ 
            backgroundColor: `${theme.colors.primary}20`,
            borderColor: `${theme.colors.primary}30`,
            color: theme.colors.primary,
            focusRingColor: theme.colors.primary
          }}
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
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div>
            {/* Image Section */}
            <div className="relative mb-6 rounded-xl overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 sm:h-64 object-cover"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Title */}
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight"
              style={{ 
                color: theme.colors.primary,
                fontFamily: theme.fonts.heading 
              }}
            >
              {service.title}
            </h2>

            {/* Description */}
            <p 
              className="text-base sm:text-lg leading-relaxed mb-6"
              style={{ color: theme.colors.text }}
            >
              {service.description}
            </p>

            {/* Additional Details Grid */}
            {(service.details || service.duration || service.price || service.advantages) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Duration */}
                {service.duration && (
                  <div 
                    className="backdrop-blur-sm rounded-xl p-4 border transition-all duration-300 hover:scale-[1.02]"
                    style={{ 
                      backgroundColor: `${theme.colors.primary}10`,
                      borderColor: `${theme.colors.primary}20`
                    }}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div 
                        className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                        style={{ backgroundColor: `${theme.colors.primary}20` }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          style={{ color: theme.colors.primary }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-lg" style={{ color: theme.colors.primary }}>
                        Durée
                      </h3>
                    </div>
                    <p className="text-sm" style={{ color: theme.colors.text }}>
                      {service.duration}
                    </p>
                  </div>
                )}

                {/* Price */}
                {service.price && (
                  <div 
                    className="backdrop-blur-sm rounded-xl p-4 border transition-all duration-300 hover:scale-[1.02]"
                    style={{ 
                      backgroundColor: `${theme.colors.primary}10`,
                      borderColor: `${theme.colors.primary}20`
                    }}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div 
                        className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                        style={{ backgroundColor: `${theme.colors.secondary}20` }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          style={{ color: theme.colors.secondary }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-lg" style={{ color: theme.colors.primary }}>
                        Tarif
                      </h3>
                    </div>
                    <p className="text-sm" style={{ color: theme.colors.text }}>
                      {service.price}
                    </p>
                  </div>
                )}

                {/* Details */}
                {service.details && service.details.length > 0 && (
                  <div 
                    className="backdrop-blur-sm rounded-xl p-4 border sm:col-span-2 transition-all duration-300 hover:scale-[1.01]"
                    style={{ 
                      backgroundColor: `${theme.colors.primary}10`,
                      borderColor: `${theme.colors.primary}20`
                    }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div 
                        className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                        style={{ backgroundColor: `${theme.colors.primary}20` }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          style={{ color: theme.colors.primary }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-lg" style={{ color: theme.colors.primary }}>
                        Détails du service
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {service.details.map((detail, index) => (
                        <li 
                          key={index} 
                          className="flex items-start space-x-2"
                        >
                          <span className="mt-1" style={{ color: theme.colors.primary }}>•</span>
                          <span className="text-sm" style={{ color: theme.colors.text }}>
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Advantages */}
                {service.advantages && service.advantages.length > 0 && (
                  <div 
                    className="backdrop-blur-sm rounded-xl p-4 border sm:col-span-2 transition-all duration-300 hover:scale-[1.01]"
                    style={{ 
                      backgroundColor: `${theme.colors.primary}10`,
                      borderColor: `${theme.colors.primary}20`
                    }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div 
                        className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                        style={{ backgroundColor: `${theme.colors.secondary}20` }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          style={{ color: theme.colors.secondary }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-lg" style={{ color: theme.colors.primary }}>
                        Avantages
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {service.advantages.map((advantage, index) => (
                        <li 
                          key={index} 
                          className="flex items-start space-x-2"
                        >
                          <span className="mt-1" style={{ color: theme.colors.secondary }}>✓</span>
                          <span className="text-sm" style={{ color: theme.colors.text }}>
                            {advantage}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails; 