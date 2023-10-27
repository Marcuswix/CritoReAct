import React from 'react'
import ButtonsOurServices from './ButtonsOurServices'

const ServiceBox = ({title, description, linkTo}) => {
  return ( 
    <div className="service-box">
        <hr className="line" />
        <h3>{title}</h3>
        <p>{description}</p>
        <ButtonsOurServices linkTo={linkTo}/>
    </div>
  )
}

export default ServiceBox