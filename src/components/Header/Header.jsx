import React from 'react'
import img_logo from '../../assets/images/Logo.svg';
import { NavLink, Link } from 'react-router-dom';
import BtnYellow from '../generics/BtnYellow';
import { useState } from 'react'
import Menu from './Menu'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  function handleMenu()
  {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
    <Menu menuOpen={menuOpen} />
    <header className="header">
      
      <div className="container">
          <Link to="/"><img src={img_logo} alt="Crito logotype" /></Link> 
          
          <button id="toggle-menu" className="menu-bars"onClick={handleMenu}>
          { menuOpen 
            ? <i id="bars" className="fa-solid fa-xmark"></i> 
            : <i id="xmark" className="fa-solid fa-bars"></i>
          }
          </button>

            



          <div className="menu">
                <div className="top-menu">
                  <div className="contact-information">
                    <div className="box-content">
                      <i className="fa-solid fa-phone"></i>+46 (8) 121 470 50
                    </div>
                    <div className="box-content">
                      <a href="mailto:info@crito.com"><i className="fa-regular fa-envelope"></i>info@crito.com</a>
                    </div>
                    <div className="box-content-last">
                      <a href="https://www.google.com/maps/place/Sveav%C3%A4gen+31,+111+34+Stockholm/@59.3310828,18.0387879,13z/data=!4m6!3m5!1s0x465f9d6799554e87:0x6562d2c842903003!8m2!3d59.336637!4d18.0620105!16s%2Fg%2F11c0rp4jyr?entry=ttu"><i className="fa-solid fa-location-dot"></i>Sveavägen 31, 111 34 STOCKHOLM</a>
                    </div>
                  </div>

                  <div className="social-media">
                      <a href="https://www.facebook.com" target='_blank'><i className="fa-brands fa-facebook"></i></a>
                      <a href="https://twitter.com" target='_blank'><i className="fa-brands fa-x-twitter"></i></a>
                      <a href="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                      <a href="https://www.linkedin.com/home" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                  </div>
                </div>
                  <div className="main-menu">
                    <nav>
                      <NavLink to="/">Home</NavLink>
                      <NavLink to="/services">Services</NavLink>
                      <NavLink to="/news">News</NavLink>
                      <NavLink to="/contacts">Contacts</NavLink>
                    </nav>
                    
                    <BtnYellow title="Login" linkTo="/login" />
                  </div>
          </div>
        </div>
      </header>
      </>
  )
}

export default Header