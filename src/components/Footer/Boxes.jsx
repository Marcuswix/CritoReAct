import React from 'react'

const Boxes = ({headline, url_1, url_2, url_3, url_4, name_1, name_2, name_3, name_4}) => {
  return (
    <>
          <h3>{headline}</h3>
          <a href={url_1}>{name_1}</a>
          <br />
          <a href={url_2}>{name_2}</a>
          <br />
          <a href={url_3}>{name_3}</a>
          <br />
          <a href={url_4}>{name_4}</a>
          <br /> 
    </>
  )
}

export default Boxes