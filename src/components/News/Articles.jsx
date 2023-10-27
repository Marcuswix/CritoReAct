import React from 'react'
import '../css/NewsAndArticles/style.css'

const Articles = ({month, date, subject, headline, img, url}) => {
  return (
    <>
    <article className="content">
        <div className="picture-and-date">
            <div className="date">
                <h3 className="date-number">{date}</h3>
                <p>{month}</p>
            </div>
            <img className="image-article" src={img} />
        </div>
            <p className="p-headline">{subject}</p>
            <a href={url}><h3>{headline}</h3></a>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>        
    </article>
    </>
  )
}

export default Articles