import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getallproject } from "../../../action/projectaction";
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Projects.css'; 

const ProjectList = () => { 
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(getallproject());
  }, [dispatch]);

  return (
    <div className="quantum-projects">
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
            <span className="quantum-pulse">PROJECT</span>
            <span className="quantum-flare">UNIVERSE</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="quantum-subtitle"
          >
            Where <span className="quantum-highlight">code</span> becomes <span className="quantum-highlight">art</span>
          </motion.p>
          <div className="quantum-header-ornament"></div>
        </div>
      </motion.header>

      {/* Quantum Project Grid */}
      {loading ? (
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
          <p className="quantum-load-text">Initializing Quantum Render...</p>
        </div>
      ) : (
        <div className="quantum-grid-system">
          {data.slice(0, 4).map((project, index) => (
            <motion.div
              key={index}
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
                <div className="quantum-card-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    className="quantum-card-image"
                  />
                  <div className="quantum-card-image-overlay"></div>
                  <div className="quantum-card-tech-matrix">
                    {project.technologies?.slice(0, 4).map((tech, i) => (
                      <span key={i} className="quantum-tech-particle">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Card Data Core */}
                <div className="quantum-card-databank">
                  <h3 className="quantum-card-title">{project.title}</h3>
                  <div className="quantum-card-rating">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="quantum-star" />
                    ))}
                  </div>
                  <p className="quantum-card-description">{project.description}</p>
                  
                  {/* Card Interface Ports */}
                  <div className="quantum-card-interfaces">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="quantum-interface quantum-interface-primary"
                    >
                      <FiExternalLink className="quantum-interface-icon" />
                      <span>Live Portal</span>
                      <div className="quantum-interface-hover"></div>
                    </a>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="quantum-interface quantum-interface-secondary"
                      >
                        <FiGithub className="quantum-interface-icon" />
                        <span>Source Matrix</span>
                        <div className="quantum-interface-hover"></div>
                      </a>
                    )}
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

export default ProjectList;