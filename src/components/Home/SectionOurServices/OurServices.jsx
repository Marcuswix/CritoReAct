import React from 'react'
import ServiceBox from './ServiceBox'
import SectionTitle from '../../generics/SectionTitle'
import BtnTransparent from '../../generics/BtnTransparent'
import img_backgroundelement from '../../../assets/images/Element-right.svg'

const OurServices = () => {
  return (

<section className="section-our-services">
  <div className="design-element-2">
    <img className="image-element-2" src={img_backgroundelement} alt="A design element" />
  </div>

  <div className="wrapper-grid">
    <div className="containerHeadlineOurServices">
      <SectionTitle title="Our services" headline="We provide The Best Business Counsulting Services" />
    </div>

    <div className="grid-container">
      <ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." linkTo="/Services" />
      <ServiceBox title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." linkTo="/Services" />
      <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." linkTo="/Services" />
      <ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." linkTo="/Services" />
    </div>
    <div className="end">
      <BtnTransparent title="Browes Services" linkTo="/Services" />
    </div>
  </div>
</section>
)
}

export default OurServices