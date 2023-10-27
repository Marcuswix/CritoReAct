import React from 'react';
import PageTitle from '../generics/PageTitle';
import Article from './ServicesArticles';
import img_box1 from '../../assets/images/Image-paper.png';
import img_box2 from '../../assets/images/Image-stapler.png';
import img_box3 from '../../assets/images/Image-notes.png';
import '../css/NewsAndArticlesSection/style.css'

const Services = () => {
  return (
    <>
    <PageTitle headline="Our Services" title="Services" />
<section>
    <div className="wrapper-grid-Services">

      <div className="containerServices">
          <Article headline="Business Advice" category="Business" img={img_box1} />
          <Article headline="Strategic Planning" category="Business" img={img_box2} />
          <Article headline="Experience Design" category="Business" img={img_box3} />
          <Article headline="Digitalization" category="Business" img={img_box1} />
          <Article headline="Startup Business" category="Business" img={img_box2} />
          <Article headline="Digitalization" category="Business" img={img_box3} />
          <Article headline="Business Advice" category="Business" img={img_box1} />
          <Article headline="Strategic Planning" category="Business" img={img_box2} />
          <Article headline="Business Advice" category="Business" img={img_box3} />
      </div>  

  <div className="slider">
    <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
              <Article headline="Business Advice" category="Business" img={img_box1} />
            </div>
            <div className="carousel-item">
              <Article headline="Strategic Planning" category="Business" img={img_box2} />
            </div>
            <div className="carousel-item">
              <Article headline="Experience Design" category="Business" img={img_box3} />
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
    </>
  )
}

export default Services