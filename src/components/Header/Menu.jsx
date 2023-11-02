import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../css/Menu/style.css'

const Menu = () => {
  return (
    <>
        {/* <div id="overlay"></div> */}
          <nav id="menu" className='hide'>
            <ul>
              <li id="option-home"><NavLink className="NavLink" to="/" >Home</NavLink></li>
              <li id="option-services"><NavLink className="NavLink" to="/Services" >Services</NavLink></li>
              <li id="option-news"><NavLink className="NavLink" to="/News" >News</NavLink></li>
              <li id="option-contact"><NavLink className="NavLink" to="/contacts" >Contact</NavLink></li>
              <li id="option-login"><NavLink className="NavLink" to="/login">Login</NavLink></li>
            </ul>
          </nav>
    </>
  )
}

export default Menu