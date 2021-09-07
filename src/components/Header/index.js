import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  
    return (
      <header className="header">
        <div className="header-nav">
          <NavLink activeClassName="navlink-active" className="navlink site-title" exact={true} to="/">Allison Harden</NavLink>
          <nav className="nav-links">
                {/* <NavLink activeClassName="navlink-active" className="navlink" exact={true} to="/">Home</NavLink> */}
                <NavLink activeClassName="navlink-active" className="navlink" to="/about">About Me</NavLink>
                <NavLink activeClassName="navlink-active" className="navlink" to="/portfolio">Portfolio</NavLink>
                <NavLink activeClassName="navlink-active" className="navlink" to="/resume">Resume</NavLink>
                <NavLink activeClassName="navlink-active" className="navlink" to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  