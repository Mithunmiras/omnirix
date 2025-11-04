import React, { useState } from 'react';
import { useContactAPI } from '../../../../hooks/useContactAPI';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    newsletter: false
  });
  const [message, setMessage] = useState({ text: '', type: '' });
  const { createContact, loading } = useContactAPI();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const result = await createContact(formData);
      
      if (result.success) {
        setMessage({ 
          text: "✓ Message sent successfully! We'll be in touch soon.", 
          type: 'success' 
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
          newsletter: false
        });

        // Clear message after 10 seconds
        setTimeout(() => {
          setMessage({ text: '', type: '' });
        }, 10000);
      } else {
        setMessage({ 
          text: `✗ ${result.error || 'Failed to send message. Please try again.'}`, 
          type: 'error' 
        });
      }
    } catch (error) {
      setMessage({ 
        text: '✗ Failed to send message. Please try again.', 
        type: 'error' 
      });
    }
  };

  return (
    <div className="contact-form-wrapper scroll-reveal">
      <h2>Send Us a Message</h2>
      <p>Fill out the form and we'll get back to you within 24 hours.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="company">Company Name</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="service">Interested In *</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="AI Consulting">AI Consulting</option>
            <option value="AI Digital Roadmap">AI Digital Roadmap</option>
            <option value="Build Custom Agents">Build Custom Agents</option>
            <option value="Voice AI Solutions">Voice AI Solutions</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="newsletter"
              id="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            <span>Subscribe to our newsletter for AI insights and updates</span>
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-lg btn-block pulse-btn" disabled={loading}>
          {loading ? (
            <>
              <i className="fas fa-spinner fa-spin"></i> Sending...
            </>
          ) : (
            <>
              Send Message <i className="fas fa-paper-plane"></i>
            </>
          )}
        </button>
      </form>

      {message.text && (
        <div className={`form-message ${message.type}`}>
          {message.text}
        </div>
      )}
    </div>
  );
}
