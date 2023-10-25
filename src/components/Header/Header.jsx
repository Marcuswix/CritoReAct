import React from 'react'
import img_logo from '../../assets/images/Logo.svg';
import { NavLink } from 'react-router-dom';
import BtnYellow from '../generics/BtnYellow';

const Header = () => {
  return (
    <header className="header">
    
      <button id="to-top-btn" onclick="goToTop()" className="hide-btn">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
        </svg>
      </button>
      
      <div className="container">
          <img src={img_logo} alt="Crito logotype" />
          <button id="toggle-menu" className="menu-bars" ><i className="fa-solid fa-bars"></i>
          </button>

        <div id="overlay">
        </div>
          <nav id="menu" className="">
            <ul>
              <li><img id="logo-menu-mobil" src={img_logo} alt="Crito logotype" /></li>
              <li id="option-home"><NavLink to="/" >Home</NavLink></li>
              <li id="option-services"><NavLink to="/Service" >Service</NavLink></li>
              <li id="option-news"><NavLink to="/News" >News</NavLink></li>
              <li id="option-contact"><NavLink to="/contacts" >Contact</NavLink></li>
              <li id="option-login"><NavLink to="/login">Login</NavLink></li>
            </ul>
          </nav>
    
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
                      <a href="https://www.facebook.com/campaign/landing.php?campaign_id=10823226160&extra_1=s%7Cc%7C514041439169%7Cb%7Cfacebook%7C&placement=&creative=514041439169&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D10823226160%26adgroupid%3D110178056158%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-11403291%26loc_physical_ms%3D1012475%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwo9unBhBTEiwAipC116HZpmxyfUmhluYdTArXaEbPa9jMVHk0s1f-1T9giPi9Ds_KqUhZcRoC6W0QAvD_BwE"><i className="fa-brands fa-facebook"></i></a>
                      <a href="https://twitter.com/X"><i className="fa-brands fa-x-twitter"></i></a>
                      <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                      <a href="https://www.linkedin.com/home"><i className="fa-brands fa-linkedin"></i></a>
                  </div>
                </div>

                  <div className="main-menu">
                    <nav>
                      <NavLink to="/" >Home</NavLink>
                      <NavLink to="/Service">Service</NavLink>
                      <NavLink to="/News">News</NavLink>
                      <NavLink to="/contacts">Contacts</NavLink>
                    </nav>
                    
                    <BtnYellow title="Login" url="login.html" />
                  </div>
          </div>
        </div>
      </header>
  )
}

export default Header