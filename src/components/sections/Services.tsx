import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../../config/theme';
import ServiceCard from '../ui/ServiceCard';
import { getFeaturedServices } from '../../data/services';

const Services: React.FC = () => {
  const services = getFeaturedServices();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1
      }
    }
  };

  const headerVariants = {
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

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.15
      }
    }
  };

  return (
    <motion.section 
      id="services"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 lg:py-24 px-6 lg:px-12"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{ 
              fontFamily: theme.fonts.heading,
              color: theme.colors.primary 
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
            }}
          >
            Nos Services
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={gridVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <ServiceCard
                title={service.title}
                image={service.image}
                description={service.description}
                url={service.url}
                index={index}
                details={service.details}
                duration={service.duration}
                price={service.price}
                advantages={service.advantages}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;