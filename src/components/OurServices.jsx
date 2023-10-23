import React from 'react'
import ServiceBox from './ServiceBox'
import SectionTitle from './generics/SectionTitle'

const OurServices = () => {
  return (

<section className="section-our-services">
  <div className="design-element-2">
    <img className="image-element-2" src="images/Element-right.svg" alt="A design element" />
  </div>

  <div className="wrapper-grid">
    <div className="container">
      <SectionTitle title="Our services" headline="We provide The Best Business Counsulting Services" />
    </div>

    <ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="" />
    <ServiceBox title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="" />
    <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url=""/>
    <ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url=""/>

    <div className="end">
      <button className="btn-transparent" title="Browse-Service">
      <a href="services.html">Browse Service
      <svg className="arrow" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
      </svg>
      </a> 
      </button>
    </div>
  </div>
</section>
)
}

export default OurServices