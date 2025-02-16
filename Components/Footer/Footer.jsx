import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp ,FaYoutube} from "react-icons/fa"; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          
          {/* Left Column - Company Info */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Your Company Name</h5>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Center Column - Navigation Links */}
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">About</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Right Column - Social Media Icons */}
          <div className="col-md-4 text-md-end text-center">
            <h5>Follow Us :</h5>
            <a href="https://www.facebook.com/vishuddhvigya" target="_blank" className="text-white me-3"><FaFacebook size={20} /></a>
            <a href="https://wa.me/918923850711" target="_blank" className="text-white me-3"><FaWhatsapp size={20} /></a>
            <a href="https://www.instagram.com/vishuddhvigya/" target="_blank" className="text-white"><FaInstagram size={20} /></a>
            <a href="https://www.youtube.com/@VishuddhVigyavaani/videos" target="_blank" className="text-white"><FaYoutube size={20} /></a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
