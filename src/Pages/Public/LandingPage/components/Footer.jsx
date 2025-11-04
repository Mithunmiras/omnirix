import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage({ text: '✓ Successfully subscribed!', type: 'success' });
      setEmail('');
      setTimeout(() => setMessage({ text: '', type: '' }), 5000);
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              <div className="logo-icon">
                <svg viewBox="0 0 40 40" width="40" height="40">
                  <circle cx="20" cy="20" r="3" fill="#00ACD4"/>
                  <circle cx="10" cy="10" r="2" fill="#00ACD4" opacity="0.8"/>
                  <circle cx="30" cy="10" r="2" fill="#00ACD4" opacity="0.8"/>
                  <circle cx="10" cy="30" r="2" fill="#00ACD4" opacity="0.8"/>
                  <circle cx="30" cy="30" r="2" fill="#00ACD4" opacity="0.8"/>
                </svg>
              </div>
              <span className="logo-text">
                <span className="logo-omni">omni</span>
                <span className="logo-brix">brix</span>
              </span>
            </Link>
            <p className="footer-desc">Empowering businesses with AI super agents and intelligent automation solutions.</p>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-github"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/#services">AI Consulting</Link></li>
              <li><Link to="/#services">AI Digital Roadmap</Link></li>
              <li><Link to="/#services">Build Custom Agents</Link></li>
              <li><Link to="/#services">Voice AI Solutions</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="#">Careers</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Newsletter</h4>
            <p>Subscribe to receive AI insights and updates.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
            {message.text && (
              <div className={`newsletter-message ${message.type}`}>
                {message.text}
              </div>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Omnibrix. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;