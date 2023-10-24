import React from 'react'
import ButtonsOurServices from './ButtonsOurServices'

const ServiceBox = ({title, description}) => {
  return ( 
    <div className="service-box">
        <hr className="line" />
        <h3>{title}</h3>
        <p>{description}</p>
        <ButtonsOurServices />
    </div>
  )
}

export default ServiceBox