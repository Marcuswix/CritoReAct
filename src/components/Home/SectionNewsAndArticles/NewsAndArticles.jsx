import React from 'react'
import Article from '../../NewsAndArticlesPage/Articles'
import img_Digitalization from '../../../assets/images/image-article1.png'
import img_CSS from '../../../assets/images/Image-article2.png'
import img_ChatGPT from '../../../assets/images/Image-article3.png'
import SectionTitle from '../../generics/SectionTitle'
import BtnTransparent from '../../generics/BtnTransparent'
import '../../css/NewsAndArticlesSection/style.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const NewsAndArticles = () => {

  const [articles, setArticles] = useState([])
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => 
  {
    getArticles()
  }, [])

  useEffect(() =>
  {
    console.log('is active')
  }, [isActive])

  async function getArticles()
  {
    const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
    setArticles(await result.json())
  }

  const cutText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength)
    }
    return text;
  };

  return (
  <>
  <section className="section section-article">
    <div className="headerArticleNews">
    <SectionTitle title="Article & News" headline="Get Every Single Articles & News" />
      <div className="button">
        <BtnTransparent title="Browse Articles" linkTo="/News" />
      </div>
    </div>

  <div className="sliderArticleNews">

    <div className="articleContainer">
      {articles.slice(0, 3).map(article => (
        <div className="article" key={article.id}>
          <Article month={cutText(article.published, 10)} category={article.category} title={article.title} img={article.imageUrl} linkTo={`/Articles/${article.id}`} content={article.content} />
        </div>
      ))}
    </div>

  </div>

  <div className="slider-mobilversion">
  <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      {articles.map((article, index) => (
        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
          <div className='imageContainer'>
            <img className="image-article" src={article.imageUrl} alt={article.title} />
          </div>
            <div className='sliderLink'>
              <p className="p-headline">{article.category}</p>
              <Link key={article.id} to={`/Articles/${article.id}`}>
              <h3 className="linkTitle">{article.title}</h3>
              </Link>
            </div>
          </div>
          ))}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
    </div>
  </div>  
  </section>
</>
  )
}

export default NewsAndArticles