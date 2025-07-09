import React, { useEffect, useState } from 'react';
import { FiArrowRight, FiDownload, FiPlay } from 'react-icons/fi';
import { 
    FaReact, FaNodeJs, FaPython, 
    FaJava, FaJs, FaPhp, 
    FaHtml5, FaCss3Alt, FaDocker,
    FaAws, FaGitAlt, FaSwift,
    FaRust, FaGofore,
  } from 'react-icons/fa';
  import { SiTypescript, SiKotlin, SiFlutter,
    SiRuby, SiCsharp, SiCplusplus,
    SiScala, SiPerl, SiElixir,
    SiDart, SiClojure, SiHaskell,
    SiGraphql, SiKubernetes, SiTensorflow,
    SiPostgresql, SiMongodb, SiRedis, SiTorbrowser, SiWireshark, SiBurpsuite, SiMetasploit
  } from 'react-icons/si';
import './Home.css';

const Homepage = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeHover, setActiveHover] = useState(null);

  // Track cursor position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const techStack = [
   
    
        // Frontend
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
        { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
        { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
      
        // Backend
        { icon: <FaNodeJs />, name: "Node.js", color: "#68A063" },
        { icon: <FaPython />, name: "Python", color: "#3776AB" },
        { icon: <FaJava />, name: "Java", color: "#007396" },
        { icon: <SiRuby />, name: "Ruby", color: "#CC342D" },
        { icon: <FaPhp />, name: "PHP", color: "#777BB4" },
        { icon: <SiKotlin />, name: "Kotlin", color: "#7F52FF" },
        { icon: <SiElixir />, name: "Elixir", color: "#4B275F" },
      
        // Mobile
        { icon: <FaSwift />, name: "Swift", color: "#F05138" },
        { icon: <SiDart />, name: "Dart", color: "#0175C2" },
        { icon: <SiFlutter />, name: "Flutter", color: "#02569B" },
        // Systems/Compiled
        { icon: <SiCplusplus />, name: "C++", color: "#00599C" },
        { icon: <FaRust />, name: "Rust", color: "#000000" },
        { icon: <FaGofore />, name: "Go", color: "#00ADD8" },
        { icon: <SiScala />, name: "Scala", color: "#DC322F" },
      
        // Functional
        { icon: <SiHaskell />, name: "Haskell", color: "#5D4F85" },
        { icon: <SiClojure />, name: "Clojure", color: "#5881D8" },
      
        // Databases
        { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
        { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
        { icon: <SiRedis />, name: "Redis", color: "#DC382D" },
      
        // DevOps/Cloud
        { icon: <FaDocker />, name: "Docker", color: "#2496ED" },
        { icon: <SiKubernetes />, name: "Kubernetes", color: "#326CE5" },
        { icon: <FaAws />, name: "AWS", color: "#232F3E" },
        { icon: <SiTensorflow />, name: "TensorFlow", color: "#FF6F00" },
        { icon: <SiGraphql />, name: "GraphQL", color: "#E10098" },
        { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
       
        { icon: <SiTorbrowser />, name: "Tor Browser", color: "#7E4798" },
        { icon: <SiWireshark />, name: "Wireshark", color: "#1679BE" },
        { icon: <SiBurpsuite />, name: "Burp Suite", color: "#FF6600" },
        { icon: <SiMetasploit />, name: "Metasploit", color: "#1A1A1A" },
        
     

      
  
  ];

  const features = [
    {
      title: "Quantum UI",
      desc: "Next-gen interface powered by AI algorithms",
      icon: "⚡"
    },
    {
      title: "Neural Networks",
      desc: "Deep learning integration for smart solutions",
      icon: "🧠"
    },
    {
      title: "Blockchain Core",
      desc: "Decentralized architecture for security",
      icon: "⛓️"
    }
  ];

  return (
    <div className="homepage">
      {/* Cursor Gradient Effect */}
      <div 
        className="cursor-gradient"
        style={{
          transform: `translate(${cursorPos.x - 250}px, ${cursorPos.y - 250}px)`
        }}
      ></div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span>NEW</span> Future-ready solutions
          </div>
          <h1 className="hero-title">
            <span className="title-line">Building The</span>
            <span className="title-line">
              <span className="title-highlight">Digital Future</span>
            </span>
          </h1>
          <p className="hero-text">
            We create immersive experiences with cutting-edge technology and 
            innovative design for tomorrow's world.
          </p>
          <div className="hero-buttons">
            <button 
              className="primary-btn"
              onMouseEnter={() => setActiveHover('primary')}
              onMouseLeave={() => setActiveHover(null)}
            >
              <span>Explore Now</span>
              <FiArrowRight className="btn-icon" />
              {activeHover === 'primary' && (
                <div className="btn-hover-effect"></div>
              )}
            </button>
            <button className="secondary-btn">
              <FiPlay className="btn-icon" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div 
            className="floating-cube"
            style={{
              transform: `rotateX(${scrollY * 0.2}deg) rotateY(${scrollY * 0.2}deg)`
            }}
          >
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face left"></div>
            <div className="cube-face right"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
          <div className="visual-grid"></div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-section">
        <div className="tech-grid">
          {techStack.map((tech, index) => (
            <div 
              key={index} 
              className="tech-card"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="tech-icon" style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <h3 className="tech-name">{tech.name}</h3>
              <div className="tech-underline"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-line">Our Cutting</span>
            <span className="title-line">Edge Features</span>
          </h2>
          <p className="section-subtitle">
            Designed to push boundaries and redefine possibilities
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ '--delay': `${index * 0.15}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
              <div className="feature-halo"></div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to Transform <br />Your Digital Presence?
          </h2>
          <button className="cta-button">
            <FiDownload className="btn-icon" />
            <span>Download Brochure</span>
          </button>
        </div>
        <div className="cta-particles">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{
                '--size': `${Math.random() * 6 + 4}px`,
                '--delay': `${Math.random() * 2}s`,
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`
              }}
            ></div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;