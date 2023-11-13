import React from 'react'
import '../css/SectionTitle/style.css'

const SectionTitle = ({title, headline}) => {
  return (
    <>
        <div>
        <h4 className='pageTitle'>{title}</h4>
        <h1 className="sectionsHeadlines">{headline}</h1>
        </div>
    </>
  )
}

export default SectionTitle