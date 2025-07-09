import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    FiCode, FiServer, FiBarChart2, FiStar,
    FiMail, FiUsers,  FiMenu, FiX
} from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeHover, setActiveHover] = useState(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPos = window.scrollY;
            setScrollProgress((scrollPos / scrollTotal) * 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navItems = [
        { name: 'Projects', path: '/projects', icon: <FiCode /> },
        { name: 'Services', path: '/services', icon: <FiServer /> },
        { name: 'Skills', path: '/skills', icon: <FiBarChart2 /> },
        { name: 'Testimonials', path: '/testimonials', icon: <FiStar /> },
        { name: 'Contact', path: '/contact', icon: <FiMail /> },
        { name: 'Team', path: '/team', icon: <FiUsers /> },
    ];

    return (
        <nav className="navbar">
            {/* Animated background element */}
            <div
                className="navbar-backdrop"
                style={{ '--scroll-progress': `${scrollProgress}%` }}
            ></div>

            <div className="nav-container">
                {/* Holographic Logo */}
                <Link to="/" className="logo">
                    <img src="/company.jpg" alt="Binazy Logo" className="logo-icon" />
                    <span className="logo-text">Binazy</span>
                    <div className="logo-halo"></div>
                </Link>


                {/* Desktop Navigation with Hover Effects */}
                <div className="desktop-nav">
                    <ul className="nav-list">
                        {navItems.map((item) => (
                            <li
                                key={item.path}
                                className="nav-item"
                                onMouseEnter={() => setActiveHover(item.path)}
                                onMouseLeave={() => setActiveHover(null)}
                            >
                                <Link
                                    to={item.path}
                                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                >
                                    <span className="nav-icon">{item.icon}</span>
                                    <span className="nav-text">{item.name}</span>
                                </Link>
                                {activeHover === item.path && (
                                    <div className="nav-hover-effect"></div>
                                )}
                            </li>
                        ))}
                    </ul>
                
                </div>

                {/* Holographic Mobile Menu Button */}
                <button
                    className={`mobile-menu-btn ${isOpen ? 'open' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Menu"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                    <div className="btn-halo"></div>
                </button>
            </div>

            {/* Futuristic Mobile Menu */}
            <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
                <div className="mobile-nav-content">
                    <ul className="mobile-nav-list">
                        {navItems.map((item) => (
                            <li key={item.path} className="mobile-nav-item">
                                <Link
                                    to={item.path}
                                    className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="mobile-nav-glow"></span>
                                    <span className="mobile-nav-icon">{item.icon}</span>
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

               
                <div className="grid-pattern"></div>
            </div>
        </nav>
    );
};

export default Navbar;