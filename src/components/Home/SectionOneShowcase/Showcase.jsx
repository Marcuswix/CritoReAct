import React from 'react'
import img_Element from '../../../assets/images/Element-left.svg'
import img_Showcase from '../../../assets/images/main-menu-picture.svg'
import BtnYellow from '../../generics/BtnYellow'
import BtnTransparent from '../../generics/BtnTransparent'

const Showcase = () => {
  return (
    <>
        <section className="sectionShowcase">
            <div className="contentContainer">
                <div className="textContainer">
                    <h1 id="mainHeadline">We Provide The Best Business Solutions</h1>
                    <p id="mainText">Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <div className="Btndistans">
                        <BtnYellow title="Get Consulting" url="consulting.html" />
                        <BtnTransparent title="Learn More" url="consulting.html" />
                    </div>
                </div>

                <div className="imageContainer">
                    <img id="mainImage" src={img_Showcase} />
                </div>
                
                <img id="imgElementShowcase" src={img_Element} />
            </div>
        </section>
    </>
  )
}

export default Showcase