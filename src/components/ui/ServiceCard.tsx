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

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="group cursor-pointer transition-all duration-300 hover:-translate-y-1"
        onClick={handleCardClick}
      >
        <div className="relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform h-96 group overflow-hidden">
          {/* Image Container with overflow hidden and border radius */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 rounded-2xl transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-black/75 group-hover:via-black/30 group-hover:to-black/10" />
          
          {/* Content Container */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
            {/* Title at the top */}
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold leading-tight drop-shadow-2xl text-shadow-lg transition-transform duration-300 hover:scale-[1.005]">
                {title}
              </h3>
              {/* Button in top right */}
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 20,
                  transition: { duration: 0.1, ease: [0.25, 0.1, 0.25, 1] }
                }}
                whileTap={{ scale: 0.98 }}
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
            <div className="transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-white/20 transition-all duration-300 hover:bg-black/50">
                <p className="text-sm leading-relaxed text-white/90 drop-shadow-lg">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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