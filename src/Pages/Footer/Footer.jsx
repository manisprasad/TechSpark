import React from 'react';
import './Footer.css'; 
import {FaInstagram, FaLinkedin , FaEnvelope} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p><FaEnvelope size={20} />   techsparkdseu@gmail.com</p>
        </div>

        <div className="footer-section logo-and-social">
          <img src="../../../../../Users/meth/Downloads/TechSpark-main/public/Logo.jpg" alt="Site Logo" className="logo" />
          <h1>Tech Spark</h1>
          <p>
            <i><b>Where Ideas Catch fire</b></i>
          </p>
          <div className="social-media-icons">
            <a href="https://www.instagram.com/techsparkdseu" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com/company/tech-spark-dseu-okhla-ii/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        <div className="footer-section quick-links">
          <div>
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#resources">Resources</a></li>
            </ul>
          </div>

          <div>
            <h2>Other</h2>
            <ul>
              <li><a href="#students">Students</a></li>
              <li><a href="#alumni">Alumni</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
            <p>© 2024 Tech Spark. All Rights Reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;