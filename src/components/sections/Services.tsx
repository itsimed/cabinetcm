import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../../config/theme';
import ServiceCard from '../ui/ServiceCard';
import { getFeaturedServices } from '../../data/services';

const Services: React.FC = () => {
  const services = getFeaturedServices();

  return (
    <section 
      id="services"
      className="py-16 lg:py-24 px-6 lg:px-12"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold transition-transform duration-300 hover:scale-[1.005]"
            style={{ 
              fontFamily: theme.fonts.heading,
              color: theme.colors.primary 
            }}
          >
            Nos Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;