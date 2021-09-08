import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const handleClick = (e) => {
    if(document.querySelector(".nav-links").style.display === "block"){
      document.querySelector(".nav-links").style.display = "none"
    }else{
      document.querySelector(".nav-links").style.display = "block"
    }
  };

  //If the hamburger menu is closed when the window is enlarged past 1000px, the nav-links stay hidden even though the hamburger menu dissapears. This is obviously not good.
  function keepNavBarVisible() {
    if(window.innerWidth > 1000){
      document.querySelector(".nav-links").style.display = "flex"
    }else{
      //This listener changes the behaviour of the media query rule in App.css (somehow?) so it does not immediately set the display of nav-links to none when the window is shrunk, causing the nav-links to be temporarily improperly displayed until the hamburger icon is clicked and they are toggled closed. 
      document.querySelector(".nav-links").style.display = "none"
    }
  }
  
  window.onresize = keepNavBarVisible;
  
    return (
      <header className="header">
        <div className="header-nav">
          <NavLink activeClassName="navlink-active" className="navlink site-title" exact={true} to="/">Allison Harden</NavLink>
          <img src="hamburger-icon.png" alt="menu" className="hamburger-menu" onClick={handleClick} />
          <nav className="nav-links">
                {/* I think that this would look better with a homepage, hence the commented out code. */}
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
  