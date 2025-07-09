import React from 'react';
import {
  FiGithub, FiInstagram,
  FiMail, FiPhone, FiMapPin, FiClock,

} from 'react-icons/fi';
import { FaWhatsapp,  } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-grid"></div>

      <div className="footer-border"></div>

      <div className="footer-container">

        <div className="footer-section">
          <div className="footer-logo">

            <span>Binazy</span>
            <div className="logo-halo"></div>
          </div>
          <p className="footer-description">
            Building the future with cutting-edge web solutions and immersive digital experiences.
          </p>
          <div className="social-links">
            <a href="#" aria-label="GitHub"><FiGithub /></a>
            <a href="https://www.instagram.com/binazy_" aria-label="Instagram"><FiInstagram /></a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

      
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

       
        <div className="footer-section">
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-links">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">Mobile Apps</a></li>
            <li><a href="#">Cloud Solutions</a></li>
            <li><a href="#">AI Integration</a></li>
            <li><a href="#">Blockchain</a></li>
          </ul>
        </div>

      
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="contact-info">
            <li>
              <FiMail className="contact-icon" />
              <span>Work@binazy.org</span>
            </li>
            <li>
              <FiPhone className="contact-icon" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li>
              <FiMapPin className="contact-icon" />
              <span>Engineering Chauraha, Aliganj, Lucknow</span>
            </li>
            <li>
              <FiClock className="contact-icon" />
              <span>Mon-Sat: 9AM - 6PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Binazy Technologies.2025 All rights reserved.
        </div>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;