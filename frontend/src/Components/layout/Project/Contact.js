import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiPhone, FiMessageSquare, FiCheckCircle, FiAlertCircle, FiZap } from 'react-icons/fi';
import { submitMessage } from '../../../action/projectaction';
import './Contact.css';

const QuantumMessageForm = () => {
  const dispatch = useDispatch();
  const { loading, success, message: responseMessage, error } = useSelector(state => state.project);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [particles, setParticles] = useState([]);

  // Create quantum particles
  useEffect(() => {
    const particlesArray = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 2,
      speed: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      color: Math.random() > 0.5 ? '#00f0ff' : '#b700ff'
    }));
    setParticles(particlesArray);
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Quantum signature required';
    if (!formData.email.trim()) {
      errors.email = 'Transmission frequency needed';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid quantum mail pattern';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Neural link required';
    } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(formData.phone)) {
      errors.phone = 'Invalid neural frequency';
    }
    if (!formData.message.trim()) errors.message = 'Message waveform empty';
    return errors;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setIsTransmitting(true);
      dispatch(submitMessage(formData));
    } else {
      setFormErrors(errors);
    }
  };

  useEffect(() => {
    if (success || error) {
      setIsTransmitting(false);
      const timer = setTimeout(() => {
        if (success) {
          setFormData({ name: '', email: '', phone: '', message: '' });
        }
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  return (
    <div className="quantum-portal">
      {/* Quantum Background Elements */}
      <div className="quantum-bg-grid"></div>
      <div className="quantum-energy-flow"></div>
      
      {/* Floating Quantum Particles */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="quantum-particle"
          initial={{ 
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            opacity: 0
          }}
          animate={{ 
            x: [`${particle.x}vw`, `${particle.x + (Math.random() * 20 - 10)}vw`],
            y: [`${particle.y}vh`, `${particle.y + (Math.random() * 20 - 10)}vh`],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 10 + particle.speed,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.size}px ${particle.color}`
          }}
        />
      ))}

      {/* Main Content */}
      <div className="quantum-container">
        {/* Header */}
        <motion.header
          className="quantum-header"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <FiZap className="pulse-icon" />
          <h1 className="quantum-title">
            <span className="quantum-flare">BINAZY</span> MESSAGE TRANSMITTER
          </h1>
          <p className="quantum-subtitle">
            Encode your message into the <span className="highlight">Binazy network</span>
          </p>
          <div className="quantum-divider"></div>
        </motion.header>

        {/* Form */}
        <motion.div 
          className="quantum-form-container"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="quantum-form">
            {/* Name Field */}
            <div className={`form-group ${formErrors.name ? 'error' : ''}`}>
              <div className="input-icon">
                <FiUser />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="quantum-input"
              />
              <div className="input-underline"></div>
              {formErrors.name && <span className="error-message">{formErrors.name}</span>}
            </div>

            {/* Email Field */}
            <div className={`form-group ${formErrors.email ? 'error' : ''}`}>
              <div className="input-icon">
                <FiMail />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="quantum-input"
              />
              <div className="input-underline"></div>
              {formErrors.email && <span className="error-message">{formErrors.email}</span>}
            </div>

            {/* Phone Field */}
            <div className={`form-group ${formErrors.phone ? 'error' : ''}`}>
              <div className="input-icon">
                <FiPhone />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="quantum-input"
              />
              <div className="input-underline"></div>
              {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
            </div>

            {/* Message Field */}
            <div className={`form-group ${formErrors.message ? 'error' : ''}`}>
              <div className="input-icon">
                <FiMessageSquare />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Message "
                className="quantum-textarea"
                rows="6"
              />
              <div className="input-underline"></div>
              {formErrors.message && <span className="error-message">{formErrors.message}</span>}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className={`submit-button ${isTransmitting ? 'transmitting' : ''}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              disabled={isTransmitting}
            >
              {isTransmitting ? (
                <>
                  <div className="quantum-spinner"></div>
                  <span>PLEASE WAIT...</span>
                </>
              ) : (
                <>
                  <FiSend className="send-icon" />
                  <span>SEND MESSAGE</span>
                </>
              )}
            </motion.button>
          </form>

          {/* Status Messages */}
          <AnimatePresence>
            {(success || error) && (
              <motion.div
                className={`status-message ${success ? 'success' : 'error'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="status-icon">
                  {success ? <FiCheckCircle /> : <FiAlertCircle />}
                </div>
                <div className="status-text">
                  {success ? responseMessage : error}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
  </div>
  );
};

export default QuantumMessageForm;