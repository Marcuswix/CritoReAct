import React from 'react'
import PageTitle from '../../components/generics/PageTitle'
import GetNews from '../Home/SectionElevenGetNews/GetNews'
import Articles from './Articles'
import img_Digitalization from '../../assets/images/image-article1.png'
import img_ChatGPT from '../../assets/images/Image-article2.png'
import img_CSS from '../../assets/images/Image-article3.png'

const News = () => {
  return (
    <>
    <PageTitle title="Home News" headline="News & Articles" />

<section>
<div className="wrapper-grid-news">
    <h1>Our News & Articles</h1>
        <div className="container">
            <Articles month="Mar" date="25" subject="Business" headline="How To Use Digitalization In The Classroom" img={img_Digitalization} url="NewsArticles" />
            <Articles month="Mar" date="17" subject="Business" headline="How To Implement Chat GPT In Your Projects" img={img_ChatGPT} url="NewsArticles"/>
            <Articles month="Mar" date="13" subject="Business" headline="The Guide To Support Modern CSS Design" img={img_CSS} url="NewsArticles"/>
            <Articles month="Mar" date="07" subject="Business" headline="How To Use Digitalization In The Classroom" img={img_Digitalization} url="NewsArticles"/>
            <Articles month="Feb" date="23" subject="Business" headline="How To Use Digitalization In The Classroom" img={img_Digitalization} url="NewsArticles"/>
            <Articles month="Feb" date="15" subject="Business" headline="How To Use Digitalization In The Classroom" img={img_Digitalization} url="NewsArticles"/>
            <Articles month="Feb" date="12" subject="Business" headline="How To Use Digitalization In The Classroom" img={img_Digitalization} url="NewsArticles"/>
            <Articles month="Feb" date="8" subject="Business" headline="How To Use Digitalization In The Classroom" img={img_Digitalization} url="NewsArticles"/>
            <Articles month="Feb" date="2" subject="Business" headline="How To Use Digitalization In The Classroom" img={img_Digitalization} url="NewsArticles"/>
        </div>

    <div className="slider">
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">

                <div className="carousel-item active">
                    <Articles month="Mar" date="25" subject="Business" headline="How To Use Digitalization In The Classroom" img={img_Digitalization} />
                </div>

                <div className="carousel-item">
                    <Articles month="Mar" date="17" subject="Business" headline="How To Implement Chat GPT In Your Projects" img={img_ChatGPT} />
                </div>

                <div className="carousel-item">
                    <Articles month="Mar" date="13" subject="Business" headline="The Guide To Support Modern CSS Design" img={img_CSS} />
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


    <nav aria-label="Page navigation example">
        <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#"><span aria-hidden="true">&laquo;</span></a></li>
            <li className="page-item"><a className="page-link" href="news&articles.html">1</a></li>
            <li className="page-item"><a className="page-link" href="news&articles-2.html">2</a></li>
            <li className="page-item"><a className="page-link" href="news&articles-3.html">3</a></li>
            <li className="page-item"><a className="page-link" href="#"><span aria-hidden="true">&raquo;</span></a></li>
          </ul>
    </nav>
</div>   
</section>
    
<GetNews />

    </>
  )
}

export default News