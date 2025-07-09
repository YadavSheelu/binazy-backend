import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSkills } from '../../../action/projectaction';
import { FiCode, FiCpu, FiDatabase, FiServer, FiLayers,FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Skills.css';

const SkillsList = () => {
  const dispatch = useDispatch();
  const { skills = [], loading, error } = useSelector((state) => state.project);
  console.log("Skills from Redux:", skills);


  useEffect(() => {
    dispatch(getAllSkills());
  }, [dispatch]);

  const getSkillIcon = (iconName) => {
    const iconMap = {
      'react-icon': <FiCode className="quantum-skill-icon" />,
      'frontend-icon': <FiCpu className="quantum-skill-icon" />,
      'backend-icon': <FiServer className="quantum-skill-icon" />,
      'database-icon': <FiDatabase className="quantum-skill-icon" />,
      default: <FiLayers className="quantum-skill-icon" />
    };
    return iconMap[iconName] || iconMap.default;
  };

  return (
    <div className="quantum-skills">
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
            <span className="quantum-pulse">SKILLS</span>
            <span className="quantum-flare">MATRIX</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="quantum-subtitle"
          >
            Our <span className="quantum-highlight">expertise</span> across the <span className="quantum-highlight">technology spectrum</span>
          </motion.p>
          <div className="quantum-header-ornament"></div>
        </div>
      </motion.header>

      {/* Quantum Skills Grid */}
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
          <p className="quantum-load-text">Initializing Skill Matrix...</p>
        </div>
      ) : error ? (
        <div className="quantum-error-state">
          <div className="quantum-error-core"></div>
          <p className="quantum-error-text">Skill Matrix Failure: {error}</p>
        </div>
      ) : (
        <div className="quantum-grid-system">
          {skills?.map((skill, index) => (
            <motion.div
              key={skill._id || index}
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
                <div className="quantum-skill-icon-container">
                  {getSkillIcon(skill.icon)}
                  <div className="quantum-skill-icon-glow"></div>
                </div>
                
                {/* Card Data Core */}
                <div className="quantum-card-databank">
                  <h3 className="quantum-card-title">{skill.name}</h3>
                  <div className="quantum-skill-meta">
                    <span className="quantum-skill-category">{skill.category}</span>
                    <span className="quantum-skill-proficiency">{skill.proficiency}</span>
                  </div>
                  
                  <p className="quantum-card-description">{skill.description}</p>
                  
                  {/* Tools Matrix */}
                  {skill.tools?.length > 0 && (
                    <div className="quantum-tools-matrix">
                      <h4 className="quantum-tools-title">TOOLS & TECHNOLOGIES</h4>
                      <div className="quantum-tools-tags">
                        {skill.tools.map((tool, i) => (
                          <span key={i} className="quantum-tool-tag">{tool}</span>
                        ))}
                      </div>
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
                  )}
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

export default SkillsList;