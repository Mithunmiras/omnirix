import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactInfo() {
  return (
    <div className="contact-info-wrapper scroll-reveal" style={{ animationDelay: '0.2s' }}>
      <div className="contact-info-card">
        <h3>Contact Information</h3>
        <p>Choose the way that best suits you to reach out.</p>

        <div className="contact-info-list">
          <div className="contact-info-item">
            <div className="info-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="info-content">
              <h4>Email</h4>
              <a href="mailto:hello@omnibrix.ai">hello@omnibrix.ai</a>
              <a href="mailto:support@omnibrix.ai">support@omnibrix.ai</a>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="info-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="info-content">
              <h4>Phone</h4>
              <a href="tel:+1-555-123-4567">+1 (555) 123-4567</a>
              <p className="info-note">Mon-Fri, 9AM-6PM EST</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="info-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="info-content">
              <h4>Office</h4>
              <p>123 AI Innovation Drive<br />San Francisco, CA 94105<br />United States</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="info-icon">
              <i className="fas fa-clock"></i>
            </div>
            <div className="info-content">
              <h4>Business Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM EST<br />
              Saturday - Sunday: Closed<br />
              24/7 Support Available</p>
            </div>
          </div>
        </div>

        <div className="contact-social">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/omnibrix/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/omnibrix_consulting?igsh=aHM5bmcwMHRyb2lj" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/share/1D5YQJPBBz/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-youtube"></i>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
