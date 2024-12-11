import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 
import logo from '../assets/deepnetlogo.png'; 
import '../App.css'
const Footer = () => {
  return (
    <footer className="footer-container py-4 mt-5">
      <div className="footer-content d-flex justify-content-around">
        {/* First Box */}
        <div className="footer-box text-center p-4">
          <h5 className="text-primary fw-bolder">Connect with Us</h5>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <FaPhoneAlt className="footer-icon" />
            <p className="text-white ms-2">+919567843340</p>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-2">
            <FaEnvelope className="footer-icon" />
            <p className="text-white ms-2">info@deepnetsoft.com</p>
          </div>
        </div>

        {/* Second Box - Company Logo */}
        <div className="footer-box text-center p-4">
          <img src={logo} alt="Company Logo" style={{ width: '150px' }} />
        </div>

        {/* Third Box - Landmark */}
        <div className="footer-box text-center p-4">
          <h5 className="text-primary fw-bolder">Find Us Here</h5>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <FaMapMarkerAlt className="footer-icon" />
            <p className="text-white ms-2">First floor,Geo infopark ,Infopark EXPY,Kakkanad</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
