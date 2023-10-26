import React from 'react'
import img_Element from '../../assets/images/Element-left.svg'

const PageTitle = ({title, headline}) => {
  return (
    <>
    <div class="header-and-section-1">
        <section class="lets-connect">
        <img class="element" title="Image-element" src={img_Element} alt="A design element" />
        <div class="container">
            <div class="content">
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
