import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { theme } from '../../config/theme';

// Contact icons
const MailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Le nom complet est requis';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'L\'adresse e-mail est requise';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Veuillez entrer une adresse e-mail valide';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le numéro de téléphone est requis';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      setSubmitMessage('Message envoyé avec succès ! Nous vous contacterons bientôt.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MailIcon />,
      label: 'E-mail',
      value: 'info@cabinetcm360.com',
      href: 'mailto:info@cabinetcm360.com'
    },
    {
      icon: <PhoneIcon />,
      label: 'Téléphone',
      value: '438-521-3151',
      href: 'tel:438-521-3151'
    },
    {
      icon: <LocationIcon />,
      label: 'Adresse',
      value: 'Montréal, Québec, Canada',
      href: null
    }
  ];

  return (
    <motion.section 
      id="contact"
      className="relative py-16 lg:py-24 px-6 lg:px-12 overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${theme.colors.background} 0%, #f8fafc 50%, ${theme.colors.background} 100%)`
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-blue-200/20 to-cyan-200/20 blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-gradient-to-r from-purple-200/20 to-pink-200/20 blur-xl"
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
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
            Contactez-nous
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
            Prenez contact avec notre équipe pour toute demande ou information complémentaire.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.div 
              className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500"
              style={{ fontFamily: theme.fonts.body }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
              }}
            >
              <motion.h3 
                className="text-2xl font-bold mb-6"
                style={{ 
                  color: theme.colors.primary,
                  fontFamily: theme.fonts.heading 
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                }}
              >
                Envoyez-nous un message
              </motion.h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <label 
                    htmlFor="fullName"
                    className="block text-sm font-medium mb-2"
                    style={{ color: theme.colors.text }}
                  >
                    Nom complet *
                  </label>
                  <motion.input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    aria-label="Nom complet"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-full px-6 py-4 rounded-2xl border-2 transition-all duration-400 ease-out focus:outline-none backdrop-blur-sm bg-white/50 placeholder-gray-400 ${
                      errors.fullName 
                        ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-200' 
                        : 'border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 hover:border-gray-300'
                    }`}
                    placeholder="Entrez votre nom complet"
                  />
                  {errors.fullName && (
                    <motion.p 
                      className="mt-1 text-sm text-red-500"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      {errors.fullName}
                    </motion.p>
                  )}
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <label 
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: theme.colors.text }}
                  >
                    Adresse e-mail *
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    aria-label="Adresse e-mail"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-full px-6 py-4 rounded-2xl border-2 transition-all duration-400 ease-out focus:outline-none backdrop-blur-sm bg-white/50 placeholder-gray-400 ${
                      errors.email 
                        ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-200' 
                        : 'border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 hover:border-gray-300'
                    }`}
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <motion.p 
                      className="mt-1 text-sm text-red-500"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <label 
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                    style={{ color: theme.colors.text }}
                  >
                    Téléphone *
                  </label>
                  <motion.input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    aria-label="Numéro de téléphone"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-full px-6 py-4 rounded-2xl border-2 transition-all duration-400 ease-out focus:outline-none backdrop-blur-sm bg-white/50 placeholder-gray-400 ${
                      errors.phone 
                        ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-200' 
                        : 'border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 hover:border-gray-300'
                    }`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && (
                    <motion.p 
                      className="mt-1 text-sm text-red-500"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <label 
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: theme.colors.text }}
                  >
                    Message *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    aria-label="Message"
                    whileFocus={{ scale: 1.01 }}
                    className={`w-full px-6 py-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none resize-none backdrop-blur-sm bg-white/50 placeholder-gray-400 ${
                      errors.message 
                        ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-200' 
                        : 'border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 hover:border-gray-300'
                    }`}
                    placeholder="Décrivez votre demande ou question..."
                  />
                  {errors.message && (
                    <motion.p 
                      className="mt-1 text-sm text-red-500"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative w-full py-5 rounded-full font-semibold text-lg transition-all duration-600 ease-out overflow-hidden group ${
                    isSubmitting 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:shadow-2xl transform-gpu'
                  }`}
                  style={{ 
                    background: `linear-gradient(135deg, ${theme.colors.primary}, #0ea5e9)`,
                    color: theme.colors.white
                  }}
                >
                  {/* Animated background */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out"
                    whileHover={{ 
                      x: "100%",
                      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }
                    }}
                  />
                  
                  {/* Content */}
                  <span className="relative z-10">
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </span>
                </motion.button>

                {/* Submit Message */}
                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    className={`p-6 rounded-2xl text-center backdrop-blur-sm border ${
                      submitMessage.includes('succès') 
                        ? 'bg-green-50/80 text-green-800 border-green-200' 
                        : 'bg-red-50/80 text-red-800 border-red-200'
                    }`}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 ${
                        submitMessage.includes('succès') ? 'bg-green-200' : 'bg-red-200'
                      }`}
                    >
                      {submitMessage.includes('succès') ? '✓' : '⚠'}
                    </motion.div>
                    <p className="font-medium">{submitMessage}</p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="space-y-8"
          >
            <div>
              <motion.h3 
                className="text-2xl font-bold mb-6"
                style={{ 
                  color: theme.colors.primary,
                  fontFamily: theme.fonts.heading 
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                }}
              >
                Informations de contact
              </motion.h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.25, 0.1, 0.25, 1] }}
                    className="group flex items-center space-x-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-600 ease-out border border-white/30 cursor-pointer transform hover:-translate-y-2 hover:scale-[1.02]"
                    whileHover={{ 
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                    }}
                  >
                    <motion.div 
                      className="p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300"
                      style={{ 
                        background: `linear-gradient(135deg, ${theme.colors.primary}20, ${theme.colors.primary}10)`,
                        color: theme.colors.primary
                      }}
                      whileHover={{ 
                        rotate: 15, 
                        scale: 1.2,
                        transition: { type: "spring", stiffness: 300, damping: 15 }
                      }}
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <p 
                        className="text-sm font-medium opacity-75"
                        style={{ color: theme.colors.text }}
                      >
                        {info.label}
                      </p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-lg font-semibold hover:underline transition-colors duration-300"
                          style={{ color: theme.colors.primary }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p 
                          className="text-lg font-semibold"
                          style={{ color: theme.colors.primary }}
                        >
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Business Hours or Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
              }}
            >
              <motion.h4 
                className="text-lg font-bold mb-4"
                style={{ 
                  color: theme.colors.primary,
                  fontFamily: theme.fonts.heading 
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                }}
              >
                Heures d'ouverture
              </motion.h4>
              <div 
                className="space-y-2 text-sm"
                style={{ 
                  color: theme.colors.text,
                  fontFamily: theme.fonts.body 
                }}
              >
                <div className="flex justify-between">
                  <span>Lundi - Vendredi:</span>
                  <span>9h00 - 17h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi:</span>
                  <span>Sur rendez-vous</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche:</span>
                  <span>Fermé</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;