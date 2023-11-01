import React from 'react'
import '../css/NewsAndArticles/style.css'
import { Link } from 'react-router-dom'

const Articles = ({month, date, category, title, img, linkTo, content}) => {
  
  return (
    <>
    <article className="content">
        <div className="picture-and-date">
            <div className="date">
                <h3 className="date-number">{date}</h3>
                <p className='dateDate' >{month}</p>
            </div>
            <div className='imageContainer'>
              <img className="image-article" src={img} />
            </div>
        </div>
            <p className="p-category">{category}</p>
            <Link to={linkTo}><h3>{title}</h3></Link>
            <p>{content}</p>        
    </article>
    </>
  )
}

export default Articles