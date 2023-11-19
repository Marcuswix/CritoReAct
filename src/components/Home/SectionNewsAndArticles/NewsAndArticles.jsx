import React from 'react'
import Article from '../../NewsAndArticlesPage/Articles'
import SectionTitle from '../../generics/SectionTitle'
import BtnTransparent from '../../generics/BtnTransparent'
import '../../css/NewsAndArticlesSection/style.css'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

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

  function gateDate(date) {

    const getDate = date
    const day = getDate.substring(8, 10)
  
    console.log(day)

    return day;
  }


function getMonth(monthNumber) {
  const getDate = monthNumber
  const month = getDate.substring(5, 7)

  console.log(month)

  let monthText = '';
  switch (month) {
    case "1":
      monthText = 'JAN';
      break;
    case "2":
      monthText = 'FEB';
      break;
    case "3":
      monthText = 'MAR';
      break;
      case "4":
      monthText = 'APR';
      break;
    case "5":
      monthText = 'MAY';
      break;
    case "6":
      monthText = 'JUN';
      break;
      case "7":
        monthText = 'JUL';
        break;
      case "8":
        monthText = 'AUG';
        break;
      case "9":
        monthText = 'SEP';
        break;
        case "10":
        monthText = 'OKT';
        break;
      case "11":
        monthText = 'NOV';
        break;
      case "12":
        monthText = 'DEC';
        break;
    default:
      monthText = 'Invalid Month';
  }
  return monthText;
} 

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
          <Article date ={gateDate(article.published)} month={getMonth(article.published)} category={article.category} title={article.title} img={article.imageUrl} linkTo={`/Articles/${article.id}`} content={article.content} />
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
              <NavLink className="linkTitle" key={article.id} to={`/Articles/${article.id}`}>
              <h3 >{article.title}</h3>
              </NavLink>
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