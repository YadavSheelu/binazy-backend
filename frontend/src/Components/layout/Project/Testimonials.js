import React, { useEffect, useState ,} from 'react';
import { useDispatch, useSelector,} from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { getApprovedTestimonials } from '../../../action/projectaction';
import { submitFeedback, } from '../../../action/userAction';

import { motion } from 'framer-motion';
import './Testimonials.css';

const TestimonialsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { testimonials = [], loading, error } = useSelector((state) => state.project);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    dispatch(getApprovedTestimonials());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitFeedback(formData));
    setShowFeedbackForm(false);
  };
  

  return (
    <div className="quantum-testimonials">
     
      <div className="quantum-bg-nexus"></div>
      <div className="quantum-particle-field"></div>
      <div className="quantum-grid-overlay"></div>
  
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="quantum-header"
      >
        <div className="quantum-header-inner">
          <h2 className="quantum-main-title">
            CLIENT <span className="quantum-flare">FEEDBACK</span> 
            <span className="quantum-pulse"> LOOP</span>
          </h2>
          <p className="quantum-subtitle">
            Verified <span className="quantum-highlight">quantum impressions</span> from our partners
          </p>
          <div className="quantum-header-ornament"></div>
        </div>
      </motion.header>

      {loading ? (
        <div className="quantum-load-state">
          <div className="quantum-loader">
            <div className="quantum-loader-core"></div>
            <div className="quantum-loader-ring"></div>
            <div className="quantum-loader-particles">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="quantum-loader-particle"
                  style={{ '--i': i }}
                ></div>
              ))}
            </div>
          </div>
          <p className="quantum-load-text">Decrypting client transmissions...</p>
        </div>
      ) : error ? (
        <motion.div 
          className="quantum-error-state"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="quantum-error-text">
            <span className="quantum-energy-pulse">ERROR 0x7E3F:</span> {error}
          </p>
        </motion.div>
      ) : testimonials.length === 0 ? (
        <motion.div
          className="quantum-empty-state"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="quantum-empty-text">
            No quantum signatures detected. <br />
            <span className="quantum-highlight">Be the first to share your experience</span>
          </p>
        </motion.div>
      ) : (
        <div className="quantum-testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial._id || index}
              className="quantum-testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              whileHover={{ 
                y: -8,
                boxShadow: '0 10px 25px rgba(183, 0, 255, 0.3)'
              }}
            >
              <div className="quantum-card-energy"></div>
              <div className="quantum-card-hologram">
                <div className="quantum-testimonial-quote">
                  <svg viewBox="0 0 24 24" className="quantum-quote-icon">
                    <path fill="currentColor" d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="quantum-testimonial-message">
                  {testimonial.message}
                </p>
                <div className="quantum-testimonial-author">
                  <div className="quantum-author-avatar">
                    {testimonial.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="quantum-author-details">
                    <h4 className="quantum-author-name">
                      {testimonial.name}
                      <span className="quantum-author-verified">
                        <svg viewBox="0 0 24 24">
                          <path fill="var(--quantum-core)" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </span>
                    </h4>
                    <p className="quantum-author-title">
                      {testimonial.designation} @ {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="quantum-card-aura"></div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
   <motion.div 
        className="quantum-feedback-button-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <button 
          className="quantum-feedback-button"
          onClick={() => setShowFeedbackForm(true)}
        >
          <span className="quantum-button-core"></span>
          <span className="quantum-button-text">Transmit Feedback</span>
          <span className="quantum-button-aura"></span>
        </button>
      </motion.div>

      {/* Feedback Form Modal */}
      {showFeedbackForm && (
        <div className="quantum-feedback-modal">
          <div className="quantum-modal-overlay" onClick={() => setShowFeedbackForm(false)}></div>
          <motion.div 
            className="quantum-modal-content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
           
            <h3 className="quantum-modal-title"> Your  Feedback</h3>
            <form onSubmit={handleSubmit} className="quantum-feedback-form">
              <div className="quantum-form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="quantum-form-group">
                <label htmlFor="designation">Designation</label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="quantum-form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="quantum-form-group">
                <label htmlFor="message">Your Quantum Experience</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="quantum-submit-button">
                <span className="quantum-submit-text">Submit Feedback</span>
                <span className="quantum-submit-glow"></span>
              </button>
              <button 
              className="quantum-modal-close"
              onClick={() => setShowFeedbackForm(false)}
            >
              &times;
            </button>
            </form>
          </motion.div>
        </div>
      )}

  
    </div>
  );
};

export default TestimonialsList;