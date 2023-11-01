import React from 'react'
import img_cryingMan from '../assets/images/NotFound.jpg';
import BtnYellow from '../components/generics/BtnYellow';
import Footer from '../components/Footer/Footer';

const NotFound = () => {
  return (
    <>
    <section class="NotFoundSection">
        <div className="NotFoundContainer">
            <img src={img_cryingMan} alt="A picture on a man crying" />
            <h1 class="NotFoundHeadline">404 - Page Not Found</h1>
            <div className='ButtonNotFound'>
                <BtnYellow title="Get Back To Home" linkTo="/" />
            </div>
        </div>
      </section>
        <Footer />
    </> 
  )
}

export default NotFound