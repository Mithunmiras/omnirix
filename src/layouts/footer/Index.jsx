import React, { useState } from "react";

export default function Footer() {
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
            <a href="/" className="footer-logo">
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
            </a>
            <p className="footer-desc">Empowering businesses with AI super agents and intelligent automation solutions.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/omnibrix/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/omnibrix_consulting?igsh=aHM5bmcwMHRyb2lj" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/share/1D5YQJPBBz/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a> */}
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="/services">AI Consulting</a></li>
              <li><a href="/services">AI Digital Roadmap</a></li>
              <li><a href="/services">Build Custom Agents</a></li>
              <li><a href="/services">Voice AI Solutions</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/careers">Careers</a></li>
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
          <p>&copy; {new Date().getFullYear()} Omnibrix. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
