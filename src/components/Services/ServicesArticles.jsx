import React from 'react'
import '../../components/css/NewsAndArticles/style.css'
import { Link } from 'react-router-dom'

const ServicesArticles = ({img, headline, category, linkTo}) => {
  return (
    <>
        <article className="content">
                <div className="picture-and-date">
                    <img className="image-article" src={img} />
                </div>
                <p className="p-headline">{category}</p>
                <Link to={linkTo}><h3>{headline}</h3></Link>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        </article>
    </>
  )
}

export default ServicesArticles