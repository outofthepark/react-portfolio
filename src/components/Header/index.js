import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  
    return (
      <header className="">
        <div className="">
          <Link to="/">
            <h1>Allison Harden's Portfolio</h1>
          </Link>
  
          <nav className="">
                <Link to="/about">About Me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/resume">Resume</Link>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  