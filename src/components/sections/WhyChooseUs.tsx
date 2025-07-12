import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../../config/theme';

// Heroicons components (placeholder SVGs if package not available)
const BriefcaseIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4a2 2 0 00-2-2H8a2 2 0 00-2 2v2m0 0v12a2 2 0 002 2h8a2 2 0 002-2V6m0 0V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m0 0h8" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const ChartBarIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

interface WhyChooseUsItem {
  icon: string;
  title: string;
  description: string;
}

const WhyChooseUs: React.FC = () => {
  const data: WhyChooseUsItem[] = [
    {
      icon: 'briefcase',
      title: '7+ ans d\'expérience',
      description: 'Nous accompagnons des entreprises depuis plus de 7 ans.'
    },
    {
      icon: 'users',
      title: '150+ clients satisfaits',
      description: 'Une approche personnalisée qui fait ses preuves.'
    },
    {
      icon: 'chart-bar',
      title: 'Amélioration mesurable',
      description: 'Des résultats concrets sur votre gestion de liquidité.'
    },
    {
      icon: 'clock',
      title: 'Réactivité & proximité',
      description: 'Un accompagnement rapide et humain.'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'briefcase':
        return <BriefcaseIcon />;
      case 'users':
        return <UsersIcon />;
      case 'chart-bar':
        return <ChartBarIcon />;
      case 'clock':
        return <ClockIcon />;
      default:
        return <BriefcaseIcon />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
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

  return (
    <motion.section 
      className="relative py-16 lg:py-24 px-6 lg:px-12 overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${theme.colors.background} 0%, #f1f5f9 50%, ${theme.colors.background} 100%)`
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 200, 0],
            y: [0, -100, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-blue-100/30 to-cyan-100/30 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 200, 0],
            rotate: [360, 0]
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-gradient-to-r from-purple-100/30 to-pink-100/30 blur-3xl"
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ 
              fontFamily: theme.fonts.heading,
              color: theme.colors.primary 
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
            }}
          >
            Pourquoi nous choisir ?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: theme.fonts.body,
              color: theme.colors.text 
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Une expertise reconnue au service de votre trésorerie.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{ willChange: 'transform, opacity' }}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
              }}
            >
              <motion.div 
                className="relative bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-600 ease-out transform group-hover:-translate-y-4 group-hover:scale-110 h-full flex flex-col items-center text-center border border-white/30 hover:border-white/50 overflow-hidden"
                style={{ 
                  fontFamily: theme.fonts.body
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                }}
              >
                {/* Gradient background overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-out"
                  whileHover={{ 
                    opacity: 1,
                    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                  }}
                />
                
                {/* Border accent */}
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r transition-all duration-500 ease-out group-hover:h-3"
                  style={{ 
                    background: `linear-gradient(90deg, ${theme.colors.primary}, #0ea5e9, ${theme.colors.primary})`
                  }}
                  whileHover={{ 
                    height: "12px",
                    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                  }}
                />
                
                {/* Icon */}
                <motion.div 
                  className="relative mb-6 p-6 rounded-full transition-all duration-600 ease-out group-hover:scale-125"
                  style={{ 
                    background: `linear-gradient(135deg, ${theme.colors.primary}20, ${theme.colors.primary}10)`,
                    color: theme.colors.primary
                  }}
                  whileHover={{ 
                    rotate: 20, 
                    scale: 1.3,
                    transition: { type: "spring", stiffness: 300, damping: 15 }
                  }}
                >
                  {/* Icon glow effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-out blur-xl"
                    style={{ 
                      background: `linear-gradient(135deg, ${theme.colors.primary}30, #0ea5e930)`
                    }}
                    whileHover={{ 
                      opacity: 1,
                      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                    }}
                  />
                  <div className="relative z-10">
                    {getIcon(item.icon)}
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="relative text-xl font-bold mb-4 group-hover:text-2xl transition-all duration-500 ease-out"
                  style={{ 
                    color: theme.colors.primary,
                    fontFamily: theme.fonts.heading
                  }}
                  whileHover={{ 
                    scale: 1.08,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                >
                  {item.title}
                  {/* Underline effect */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"
                    style={{
                      background: `linear-gradient(90deg, ${theme.colors.primary}, #0ea5e9)`
                    }}
                    whileHover={{ 
                      width: "100%",
                      left: 0,
                      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                    }}
                  />
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="relative leading-relaxed flex-grow text-sm group-hover:text-base transition-all duration-500 ease-out"
                  style={{ color: theme.colors.text }}
                  initial={{ opacity: 0.8 }}
                  whileHover={{ 
                    opacity: 1,
                    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                  }}
                >
                  {item.description}
                </motion.p>
                
                {/* Hover indicator */}
                <motion.div
                  className="mt-4 w-8 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-600 ease-out"
                  style={{
                    background: `linear-gradient(90deg, ${theme.colors.primary}, #0ea5e9)`
                  }}
                  initial={{ width: 0 }}
                  whileHover={{ 
                    width: "2rem",
                    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;