import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { theme } from '../../config/theme';

// Hamburger menu icon
const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="w-6 h-6 flex flex-col justify-center items-center">
    <motion.span
      className="block h-0.5 w-6 bg-current mb-1"
      animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    />
    <motion.span
      className="block h-0.5 w-6 bg-current mb-1"
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    />
    <motion.span
      className="block h-0.5 w-6 bg-current"
      animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    />
  </div>
);

// Close icon
const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

interface NavLink {
  name: string;
  href: string;
  isAnchor?: boolean;
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationLinks: NavLink[] = [
    { name: 'Accueil', href: '#top', isAnchor: true },
    { name: 'Services', href: location.pathname === '/' ? '#services' : '/services', isAnchor: location.pathname === '/' },
    { name: 'Contact', href: location.pathname === '/' ? '#contact' : '/contact', isAnchor: location.pathname === '/' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Smooth scroll to anchor
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (href === '#top') {
        // Scroll to top of page
        window.scrollTo({ 
          top: 0, 
          behavior: 'smooth' 
        });
      } else {
        const element = document.querySelector(href);
        if (element) {
          try {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          } catch (error) {
            // Fallback for older browsers
            const yOffset = -100; // Account for fixed navbar
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        } else {
          console.log('Element not found:', href);
          // Try alternative selector
          const altElement = document.getElementById(href.substring(1));
          if (altElement) {
            altElement.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
      setIsMobileMenuOpen(false);
    }
  };

  // Handle mobile link click
  const handleMobileLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      // Close mobile menu first
      setIsMobileMenuOpen(false);
      
      // Handle anchor links with a delay to ensure menu is closed
      setTimeout(() => {
        if (href === '#top') {
          // Scroll to top of page
          window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
          });
        } else {
          const element = document.querySelector(href);
          if (element) {
            try {
              element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            } catch (error) {
              // Fallback for older browsers
              const yOffset = -100; // Account for fixed navbar
              const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          } else {
            console.log('Element not found:', href);
            // Try alternative selector
            const altElement = document.getElementById(href.substring(1));
            if (altElement) {
              altElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            } else {
              // If still not found, try to find any element with services in the id or class
              const servicesElement = document.querySelector('[id*="services"], [class*="services"]');
              if (servicesElement) {
                servicesElement.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }
          }
        }
      }, 200);
    } else {
      // Close mobile menu for non-anchor links
      setIsMobileMenuOpen(false);
    }
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scroll when menu is open
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const mobileMenuItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{ 
          fontFamily: theme.fonts.body
        }}
      >
        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-center pt-1 sm:pt-2 md:pt-4 px-1 sm:px-2 md:px-4">
          <motion.div 
            className={`transition-all duration-500 ease-out rounded-3xl sm:rounded-2xl md:rounded-full border border-white/20 shadow-lg backdrop-blur-md max-w-6xl w-full ${
              isScrolled ? 'bg-white/90 shadow-xl' : 'bg-white/30'
            }`}
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
            }}
          >
            <div className="px-2 sm:px-4 md:px-6 lg:px-8">
              <div className="flex items-center justify-between h-12 sm:h-14 md:h-16 lg:h-20">
                {/* Logo */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Link 
                    to="/"
                    className="flex items-center transition-all duration-300 hover:scale-105"
                  >
                    <picture>
                      <source srcSet="/logodesktop.webp" type="image/webp" />
                      <img 
                        src="/logodesktop.webp" 
                        alt="Cabinet CM360 - Expert en gestion de trésorerie"
                        className={`h-6 sm:h-8 md:h-12 lg:h-14 w-auto transition-all duration-300 ${
                          isScrolled ? '' : 'drop-shadow-lg brightness-125'
                        }`}
                        style={{
                          filter: isScrolled ? 'none' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                        }}
                      />
                    </picture>
                  </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="hidden md:flex items-center space-x-4 sm:space-x-6 lg:space-x-8"
                >
                  {navigationLinks.map((link, index) => {
                    const NavComponent = link.isAnchor ? 'a' : Link;
                    const linkProps = link.isAnchor 
                      ? { 
                          href: link.href,
                          onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleAnchorClick(e, link.href)
                        }
                      : { to: link.href };

                    return (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <NavComponent
                          {...linkProps}
                          className={`relative text-base sm:text-lg lg:text-xl font-medium transition-all duration-300 hover:scale-105 ${
                            isScrolled ? '' : 'text-white drop-shadow-md'
                          }`}
                          style={{ color: isScrolled ? theme.colors.text : 'white' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = isScrolled ? theme.colors.primary : theme.colors.secondary;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = isScrolled ? theme.colors.text : 'white';
                          }}
                        >
                          {link.name}
                          <motion.div
                            className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300"
                            style={{ backgroundColor: theme.colors.primary }}
                            whileHover={{ 
                              width: "100%",
                              transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                            }}
                          />
                        </NavComponent>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Navbar - Enhanced Design */}
        <div className="md:hidden flex justify-center pt-3 px-4">
          <div className="flex items-center justify-center w-full max-w-md relative">
            {/* Logo responsive : mobile et desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              {/* Logo mobile */}
              <Link 
                to="/"
                className="flex items-center transition-all duration-300 hover:scale-105 md:hidden"
              >
                <motion.img 
                  src="/logomobile.webp" 
                  alt="Cabinet CM360 - Mobile Logo"
                  className="h-12 w-auto transition-all duration-300"
                  style={{
                    filter: isScrolled 
                      ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' 
                      : 'drop-shadow(0 2px 8px rgba(0,0,0,0.3)) brightness-110'
                  }}
                  animate={{ opacity: isScrolled ? 0 : 1 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                  }}
                />
              </Link>
              {/* Logo desktop/tablette - Masqué sur mobile */}
              <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="hidden md:block"
                >
                  <Link 
                    to="/"
                    className="flex items-center transition-all duration-300 hover:scale-105"
                  >
                    <picture>
                      <source srcSet="/logodesktop.webp" type="image/webp" />
                      <img 
                        src="/logodesktop.webp" 
                        alt="Cabinet CM360 - Expert en gestion de trésorerie"
                        className={`h-6 sm:h-8 md:h-12 lg:h-14 w-auto transition-all duration-300 ${isScrolled ? '' : 'drop-shadow-lg brightness-125'}`}
                        style={{
                          filter: isScrolled ? 'none' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                        }}
                      />
                    </picture>
                  </Link>
                </motion.div>
            </motion.div>

            {/* Enhanced Mobile Menu Button - Absolute Position */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 absolute right-0 top-0"
              style={{ 
                color: isScrolled ? theme.colors.text : 'white',
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${isScrolled ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.25)'}`,
                boxShadow: isScrolled 
                  ? '0 4px 12px rgba(0, 0, 0, 0.1)' 
                  : '0 4px 12px rgba(0, 0, 0, 0.2)'
              }}
              whileHover={{ 
                scale: 1.08,
                transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }
              }}
              whileTap={{ scale: 0.92 }}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <HamburgerIcon isOpen={isMobileMenuOpen} />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu - Modern & Sophisticated */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden border-t backdrop-blur-xl rounded-3xl bg-white/95 shadow-xl mx-4"
              style={{ 
                borderColor: 'rgba(0, 0, 0, 0.06)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)'
              }}
            >
              <div className="px-6 py-6 space-y-2">
                {navigationLinks.map((link, index) => {
                  return (
                    <div key={index}>
                      <motion.div 
                        variants={mobileMenuItemVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        transition={{ delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        {link.isAnchor ? (
                          <button
                            onClick={() => handleMobileLinkClick(link.href)}
                            className="block w-full text-left py-3.5 px-5 text-base font-medium rounded-xl transition-all duration-300 text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            style={{ 
                              backgroundColor: 'transparent',
                              border: 'none',
                              outline: 'none'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.04)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                          >
                            {link.name}
                          </button>
                        ) : (
                          <Link
                            to={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-3.5 px-5 text-base font-medium rounded-xl transition-all duration-300 text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            style={{ 
                              backgroundColor: 'transparent'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.04)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                          >
                            {link.name}
                          </Link>
                        )}
                      </motion.div>
                      
                      {/* Gradient Separator */}
                      {index < navigationLinks.length - 1 && (
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          transition={{ delay: (index + 1) * 0.08 + 0.1, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                          className="mx-5 my-2 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                          style={{
                            background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%)'
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;