import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../css/Menu/style.css';

const Menu = ({ menuOpen }) => {
  
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <>
      <nav id="menu" className={menuOpen ? '' : 'hide'}>
        <ul>
          <NavLink className={`NavLink ${activeLink === '/' ? 'active' : ''}`} to="/">
            <li id="option-home">Home</li>
          </NavLink>
          <NavLink className={`NavLink ${activeLink === '/Services' ? 'active' : ''}`} to="/Services">
            <li id="option-services">Services</li>
          </NavLink>
          <NavLink className={`NavLink ${activeLink === '/News' ? 'active' : ''}`} to="/News">
            <li id="option-news">News</li>
          </NavLink>
          <NavLink className={`NavLink ${activeLink === '/contacts' ? 'active' : ''}`} to="/contacts">
            <li id="option-contact">Contact</li>
          </NavLink>
          <NavLink className={`NavLink ${activeLink === '/login' ? 'active' : ''}`} to="/login">
            <li id="option-login">Login</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
