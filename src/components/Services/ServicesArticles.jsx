import React from 'react'
import '../../components/css/NewsAndArticles/style.css'

const ServicesArticles = ({img, headline, category}) => {
  return (
    <>
        <article className="content">
                <div className="picture-and-date">
                    <img className="image-article" src={img} />
                </div>
                <p className="p-headline">{category}</p>
                <a href="articles.html"><h3>{headline}</h3></a>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        </article>
    </>
  )
}

export default ServicesArticles