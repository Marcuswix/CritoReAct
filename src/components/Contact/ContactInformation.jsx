import React from 'react'

const ContactInformation = ({svg, title, info_one, info_two}) => {
  return (
    <>
    <div className="content">
            {svg}
        <div className="text-content">
            <h2>{title}</h2>
            <p>{info_one}<br />{info_two}</p>
        </div>
    </div>
    </>
  )
}

export default ContactInformation