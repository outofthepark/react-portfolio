import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  
    return (
      <div className="footer">
          <nav className="footer-nav">
                <Link to="/contact">Contact</Link>
          </nav>
      </div>
    );
  };
  
  export default Footer;