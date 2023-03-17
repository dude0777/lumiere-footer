import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css';
import smalllogo from "./smalllogo.png";
const Footer = () => {
  return (
    <footer className="footer-container">
       
      <div className="logo-container">
      <p>Lumiere’23</p> 
        <img src={smalllogo} alt="College Logo" className="logo" />
       
      </div>
      <div className='address-container'>
        <p className='text'>Address</p>
      <p >College of Engineering Kidangoor,Kottayam,Kerala</p>
      </div>
      <div className="social-container">
        <p className='text'>Socials</p>
        <div>
        <a href="https://www.instagram.com/cek_lumiere/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://www.facebook.com/ceklumiere" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaFacebook className="social-icon" />
        </a></div>
      </div>
      <div className="contact-container">
        <p className="contact-info">Contact Us: ceklumiere18@gmail.com | 123-456-7890</p>
      </div>
    </footer>
  );
}

export default Footer;
