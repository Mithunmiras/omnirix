import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (path, sectionId = null) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === path && sectionId) {
      // If already on the page, just scroll
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
      <nav className="nav container">
        <Link to="/" className="nav-logo" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="logo-icon">
            <svg viewBox="0 0 40 40" width="40" height="40">
              <circle cx="20" cy="20" r="3" fill="#00ACD4" className="pulse-dot"/>
              <circle cx="10" cy="10" r="2" fill="#00ACD4" opacity="0.8"/>
              <circle cx="30" cy="10" r="2" fill="#00ACD4" opacity="0.8"/>
              <circle cx="10" cy="30" r="2" fill="#00ACD4" opacity="0.8"/>
              <circle cx="30" cy="30" r="2" fill="#00ACD4" opacity="0.8"/>
              <circle cx="20" cy="5" r="1.5" fill="#86E3CE" opacity="0.6"/>
              <circle cx="35" cy="20" r="1.5" fill="#86E3CE" opacity="0.6"/>
              <circle cx="20" cy="35" r="1.5" fill="#86E3CE" opacity="0.6"/>
              <circle cx="5" cy="20" r="1.5" fill="#86E3CE" opacity="0.6"/>
            </svg>
          </div>
          <span className="logo-text">
            <span className="logo-omni">omni</span>
            <span className="logo-brix">brix</span>
          </span>
        </Link>

        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="navMenu">
          <ul className="nav-list">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={() => handleNavClick('/')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/services" 
                className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                onClick={() => handleNavClick('/services')}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={() => handleNavClick('/about')}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={() => handleNavClick('/contact')}
              >
                Contact
              </Link>
            </li>
          </ul>
          <Link 
            to="/contact" 
            className="btn btn-primary nav-cta" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>

        <div 
          className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
          id="navToggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;