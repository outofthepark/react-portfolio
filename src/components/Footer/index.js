import React from 'react';
//import { NavLink } from 'react-router-dom';

const Footer = () => {
  
    return (
      <div className="footer">
          <nav className="footer-nav">
                {/* <NavLink activeClassName="navlink-active" className="navlink" to="/contact">Contact</NavLink> */}
              <a><img src="/github-icon.png" alt="Github" /></a>
              <a><img src="/linkedin-icon.png" alt="LinkedIn" /></a>
          </nav>
      </div>
    );
  };
  
  export default Footer;