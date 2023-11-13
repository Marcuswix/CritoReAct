import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../css/Menu/style.css'

const Menu = ({ menuOpen }) => {

  return (
    <>
          <nav id="menu" className={menuOpen ? '' : 'hide'}>
            <ul>
              <NavLink className="NavLink" to="/" ><li id="option-home">Home</li></NavLink>
              <NavLink className="NavLink" to="/Services" ><li id="option-services">Services</li></NavLink>
              <NavLink className="NavLink" to="/News" ><li id="option-news">News</li></NavLink>
              <NavLink className="NavLink" to="/contacts" ><li id="option-contact">Contact</li></NavLink>
              <NavLink className="NavLink" to="/login"><li id="option-login">Login</li></NavLink>
            </ul>
          </nav>
    </>
  )
}

export default Menu