import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllServices } from '../../../action/projectaction';
import { FiCpu, FiCode, FiDatabase, FiServer, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const dispatch = useDispatch();
  const { services, serviceLoading, serviceError } = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  const getServiceIcon = (iconName) => {
    const iconMap = {
      'fa-mobile-alt': <FiCpu className="quantum-service-icon" />,
      'fa-laptop-code': <FiCode className="quantum-service-icon" />,
      'fa-server': <FiServer className="quantum-service-icon" />,
      'fa-database': <FiDatabase className="quantum-service-icon" />,
      default: <FiCpu className="quantum-service-icon" />
    };
    return iconMap[iconName] || iconMap.default;
  };

  return (
    <div className="quantum-services">
      {/* Cosmic Background Elements */}
      <div className="quantum-bg-nexus"></div>
      <div className="quantum-particle-field"></div>
      <div className="quantum-grid-overlay"></div>
      
      {/* Holographic Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="quantum-header"
      >
        <div className="quantum-header-inner">
          <h1 className="quantum-main-title">
            <span className="quantum-flare">BINAZY</span> 
            <span className="quantum-pulse">SERVICES</span>
            <span className="quantum-flare">MATRIX</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="quantum-subtitle"
          >
            Our <span className="quantum-highlight">digital alchemy</span> transforms ideas into <span className="quantum-highlight">technological reality</span>
          </motion.p>
          <div className="quantum-header-ornament"></div>
        </div>
      </motion.header>

      {/* Quantum Services Grid */}
      {serviceLoading ? (
        <div className="quantum-load-state">
          <div className="quantum-loader">
            <div className="quantum-loader-core"></div>
            <div className="quantum-loader-ring"></div>
            <div className="quantum-loader-particles">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="quantum-loader-particle"></div>
              ))}
            </div>
          </div>
          <p className="quantum-load-text">Initializing Service Matrix...</p>
        </div>
      ) : serviceError ? (
        <div className="quantum-error-state">
          <div className="quantum-error-core"></div>
          <p className="quantum-error-text">Service Matrix Failure: {serviceError}</p>
        </div>
      ) : (
        <div className="quantum-grid-system">
          {services?.map((service, index) => (
            <motion.div
              key={service._id || index}
              className="quantum-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                damping: 12
              }}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 216, 255, 0.25)"
              }}
            >
              {/* Card Energy Field */}
              <div className="quantum-card-energy"></div>
              
              {/* Card Holographic Display */}
              <div className="quantum-card-hologram">
                {/* Icon Section */}
                <div className="quantum-service-icon-container">
                  {getServiceIcon(service.icon)}
                  <div className="quantum-service-icon-glow"></div>
                </div>
                
                {/* Card Data Core */}
                <div className="quantum-card-databank">
                  <h3 className="quantum-card-title">{service.name}</h3>
                  <p className="quantum-card-description">{service.description}</p>
                  
                  {/* Features Matrix */}
                  {service.features?.length > 0 && (
                    <div className="quantum-features-matrix">
                      <h4 className="quantum-features-title">FEATURE MATRIX</h4>
                      <ul className="quantum-features-list">
                        {service.features.map((feature, i) => (
                          <li key={i} className="quantum-feature-item">
                            <span className="quantum-feature-marker"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Tech Stack */}
                  {service.technologyStack?.length > 0 && (
                    <div className="quantum-tech-stack">
                      <h4 className="quantum-tech-title">TECH CORE</h4>
                      <div className="quantum-tech-tags">
                        {service.technologyStack.map((tech, i) => (
                          <span key={i} className="quantum-tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Card Interfaces */}
                  <div className="quantum-card-interfaces">
                    <a
                      href="/contact"
                      className="quantum-interface quantum-interface-primary"
                    >
                      <FiExternalLink className="quantum-interface-icon" />
                      <span>Request Service</span>
                      <div className="quantum-interface-hover"></div>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Card Holographic Glow */}
              <div className="quantum-card-aura"></div>
            </motion.div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Services;