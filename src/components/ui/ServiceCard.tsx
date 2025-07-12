import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceDetails from './ServiceDetails';

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
  url?: string;
  index: number;
  details?: string[];
  duration?: string;
  price?: string;
  advantages?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  image, 
  description, 
  url, 
  index,
  details,
  duration,
  price,
  advantages
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.1
      }
    }
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="group cursor-pointer"
        style={{ willChange: 'transform, opacity' }}
        onClick={handleCardClick}
        whileHover={{ 
          y: -8,
          transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
        }}
      >
        <div className="relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform h-96 group overflow-hidden" 
             style={{ willChange: 'transform, opacity' }}>
          {/* Image Container with overflow hidden and border radius */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              whileHover={{ 
                scale: 1.15,
                transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
              }}
              onError={(e) => {
                // Fallback for missing image
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                      <div class="text-center text-white">
                        <div class="text-6xl mb-4">💼</div>
                        <p class="text-lg font-semibold">Service Image</p>
                      </div>
                    </div>
                  `;
                }
              }}
            />
          </div>
          
          {/* Gradient Overlay - Enhanced for better text visibility */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 rounded-2xl"
            whileHover={{ 
              background: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.3), rgba(0,0,0,0.1))",
              transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
            }}
          />
          
          {/* Content Container */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
            {/* Title at the top */}
            <div className="flex justify-between items-start">
              <motion.h3 
                className="text-2xl font-bold leading-tight drop-shadow-2xl text-shadow-lg"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                }}
              >
                {title}
              </motion.h3>
              {/* Button in top right */}
              <motion.button
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 90,
                  transition: { type: "spring", stiffness: 400, damping: 15 }
                }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-white/40 transition-all duration-400 ease-out border border-white/30 hover:border-white/50"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
                title="En savoir plus"
              >
                <span className="text-lg font-bold">+</span>
              </motion.button>
            </div>

            {/* Description at the bottom */}
            <motion.div 
              className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.div 
                className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                whileHover={{ 
                  backgroundColor: "rgba(0,0,0,0.5)",
                  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                }}
              >
                <p className="text-sm leading-relaxed text-white/90 drop-shadow-lg">
                  {description}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Service Details Modal */}
      <ServiceDetails
        isOpen={isModalOpen}
        onClose={handleModalClose}
        service={{
          title,
          image,
          description,
          details,
          duration,
          price,
          advantages
        }}
      />
    </>
  );
};

export default ServiceCard;