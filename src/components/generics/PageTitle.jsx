import React from 'react'
import img_Element from '../../assets/images/Element-left.svg'

const PageTitle = ({title, headline}) => {
  return (
    <>
    <div className="header-and-section-1">
        <section className="lets-connect">
        <img className="element" title="Image-element" src={img_Element} alt="A design element" />
        <div className="container">
            <div className="content">
                <p>{title}</p>
                <h1>{headline}</h1>
            </div>
        </div>
        </section>
    </div>
    </>
  )
}

export default PageTitle
