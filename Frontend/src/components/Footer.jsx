import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-main">
        {/* Section 1: Brand/About */}
        <div className="footer-section about">
          <h3 className="footer-logo">Flower<span>Bokey</span></h3>
          <p>Crafting digital experiences with passion and precision. Join our journey on social media.</p>
          <div className="social-icons">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Section 3: Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <MapPin size={18} /> <span>123 Street, Gangodawila, Sri Lanka</span>
          </div>
          <div className="contact-item">
            <Phone size={18} /> <span>+94 71 111 1111</span>
          </div>
          <div className="contact-item">
            <Mail size={18} /> <span>dulneth@abcgmail.com</span>
          </div>
        </div>

        {/* Section 4: Payments */}
        <div className="footer-section payments">
          <h3>We Accept</h3>
          <div className="payment-grid">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Your Website Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};