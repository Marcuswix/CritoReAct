import React from 'react'

const OurTeam = (id, dataLabel, img, alt, name, title) => {
  return (
    <>
    <div className="slider-item" id={id} data-label={dataLabel}>
        <img src={img} alt={alt} className="slider-image" />
            <div className="text-container">
            <h3>{name}</h3>
            <p>{title}</p>
        </div>
    </div>
    </>
  )
}

export default OurTeam