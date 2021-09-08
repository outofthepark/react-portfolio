import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({routes}) => {
  
    return (
    <nav className="nav-links">
            {routes.map(route => (
                <NavLink activeClassName="navlink-active" className="navlink" to={route.link}>{route.title}</NavLink>
            ))}
    </nav>
  );
};
export default Navigation;

