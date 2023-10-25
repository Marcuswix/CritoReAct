import React from 'react'
import img_cryingMan from '../assets/images/CryingMan.jpg';
import BtnYellow from '../components/generics/BtnYellow';
import Footer from './../components/Footer/Footer';

const NotFound = () => {
  return (
    <>
        <div className="NotFoundSection">
            <h1>404 - Page Not Found</h1>
            <img src={img_cryingMan} alt="A picture on a man crying" />
            <div className='ButtonNotFound'>
                <BtnYellow title="Get Back To Home" url="Home.jsx" />
            </div>
        </div>
        <Footer />
    </> 
  )
}

export default NotFound