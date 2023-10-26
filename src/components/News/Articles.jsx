import React from 'react'
import '../css/NewsAndArticles/style.css'

const Articles = ({month, date, subject, headline, img, url}) => {
  return (
    <>
    <article class="content">
        <div class="picture-and-date">
            <div class="date">
                <h3 class="date-number">{date}</h3>
                <p>{month}</p>
            </div>
            <img class="image-article" src={img} />
        </div>
            <p class="p-headline">{subject}</p>
            <a href={url}><h3>{headline}</h3></a>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>        
    </article>
    </>
  )
}

export default Articles