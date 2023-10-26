import React from 'react'
import Article from '../../News/Articles'
import img_Digitalization from '../../../assets/images/image-article1.png'
import img_CSS from '../../../assets/images/Image-article2.png'
import img_ChatGPT from '../../../assets/images/Image-article3.png'
import SectionTitle from '../../generics/SectionTitle'
import BtnTransparent from '../../generics/BtnTransparent'
import '../../css/NewsAndArticlesSection/style.css'

const NewsAndArticles = () => {
  return (
    <>
   
  <section className="section section-article">
    <div className="headerArticleNews">
    <SectionTitle title="Article & News" headline="Get Every Single Articles & News" />
      <div className="button">
        <BtnTransparent title="Browse Articles" url="" />
      </div>
    </div>

  <div className="sliderArticleNews">

    <Article headline="How To Use Digitalization In The Classroom" img={img_Digitalization} subject="Business" url="" month="Mar" date="25" alt="A picture of a young woman sitting a classroom"/>
    <Article headline="The Guide To Support Modern CSS Design" img={img_ChatGPT} subject="Business" url="" month="Mar" date="19" alt="A picture on a computerscreen showing different texts"/>
    <Article headline="How To Use Digitalization In The Classroom" img={img_CSS} subject="Business" url="" month="Mar" date="25" alt="A picture on two book about javascript and css" />

  </div>

  <div className="slider-mobilversion">
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Article headline="How To Use Digitalization In The Classroom" img={img_CSS} subject="Business" url="" month="Mar" date="25" alt="A picture on two book about javascript and css" />
        </div>

        <div className="carousel-item">
          <Article headline="How To Use Digitalization In The Classroom" img={img_Digitalization} subject="Business" url="" month="Mar" date="25" alt="A picture of a young woman sitting a classroom"/>
        </div>

        <div className="carousel-item">
          <Article headline="The Guide To Support Modern CSS Design" img={img_ChatGPT} subject="Business" url="" month="Mar" date="19" alt="A picture on a computerscreen showing different texts"/>
        </div>
      </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="false"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="false"></span>
          <span className="visually-hidden">Next</span>
        </button>

    </div>
  </div>  
  </section>
</>
  )
}

export default NewsAndArticles