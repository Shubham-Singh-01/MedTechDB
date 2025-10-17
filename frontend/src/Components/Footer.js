import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-container">
          {/* Company Info Section */}
          <div className="footer-section">
            <div className="footer-brand">
              <img
                src="/Favicon.ico"
                alt="MedTech Logo"
                className="footer-logo"
              />
              <h3 className="footer-brand-name">MedTech</h3>
            </div>
            <p className="footer-description">
              Revolutionizing healthcare access and emergency response with
              secure patient data management.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/shubham_singh_l" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com/in/singh200410/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com/_shubham.singh.__" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/LoginSelect" className="footer-link">
                  Get Started
                </Link>
              </li>
              <li>
                <Link to="/ImageGallery" className="footer-link">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li>
                <Link to="/LoginSelect" className="footer-link">
                  Patient Records
                </Link>
              </li>
              <li>
                <Link to="/LoginSelect" className="footer-link">
                  Doctor Portal
                </Link>
              </li>
              <li>
                <Link to="/LoginSelect" className="footer-link">
                  Emergency Access
                </Link>
              </li>
              <li>
                <Link to="/LoginSelect" className="footer-link">
                  Health Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>singh200410@gmail.com</span>
              </li>
              <li className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+91 (637) 803-1001</span>
              </li>
              <li className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>A-45, Vasant Vihar, Delhi, India, 110070.</span>
              </li>
            </ul>
            <Link to="/contact" className="footer-contact-btn">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentYear} MedTech. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link to="/about" className="bottom-link">
                Privacy Policy
              </Link>
              <span className="separator">|</span>
              <Link to="/about" className="bottom-link">
                Terms of Service
              </Link>
              <span className="separator">|</span>
              <Link to="/about" className="bottom-link">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
