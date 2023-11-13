import React from 'react'
import './css/UnderConstruction/style.css'
import img_UnderConstruction from '../assets/images/UnderConstruction.png'
import BtnYellow from './generics/BtnYellow'

const UnderConstruction = () => {
  return (
    <>
        <section className='UnderConstruction'>
            <div className='imageContainer'>
                <img id="ConstructionImage" src={img_UnderConstruction} alt="A picture of construction-site" />
            </div>
            <div className="textConstruction">
                <h1>This Page is Under Construction...</h1>
            </div>
            <div className='ButtonNotFound'>
                <BtnYellow title="Get Back To Home" linkTo="/" />
            </div>
        </section>
    </>
  )
}

export default UnderConstruction