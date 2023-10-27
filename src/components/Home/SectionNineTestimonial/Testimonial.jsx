import React from 'react'
import SectionTitle from '../../generics/SectionTitle';
import TestimonialReviews from './TestimonialReviews';
import img_Cassandra from '../../../assets/images/Image-Cassandra.png';
import img_Amanda from '../../../assets/images/Image Amanda.png';
import img_Jack from '../../../assets/images/Image Jack.png';
import BtnBlack from '../../generics/BtnBlack';

const Testimonial = () => {
  return (
<>
<section className="section-testimonial">

  <div className="white-background">
    <div className="TitleInTheMiddle">
      <SectionTitle title="Testimonial" headline="What Our Client Says" />
    </div>
{/* Reviews on desktopversion */}
    <div className="container-reviews"> 
      <TestimonialReviews name="Cassandra Warren" title="Business Manager" companyName="Dorfus" img={img_Cassandra} alt="A picture on Cassandra Warren" />
      <TestimonialReviews name="Amanda Tulling" title="Senior Developer" companyName="Square" img={img_Amanda} alt="A picture on Amanda Tulling" />
      <TestimonialReviews name="Jack McDogglas" title="Key Account Manager" companyName="Gobona" img={img_Jack} alt="A picture on Jack McDogglas" />
    </div>
  </div>

{/* Slider on mobilversion */}
  <div className="slider">
    {/* Slide 1 */}
    <div tabIndex="1" id="Cassandra" className="slidez">
        <div className="slider-content">
          <TestimonialReviews name="Cassandra Warren" title="Business Manager" companyName="Dorfus" img={img_Cassandra} alt="A picture on Cassandra Warren" />
        </div>
    </div>
    {/* Slide 2 */} 
    <div tabIndex="2" id="Amanda" className="slidez">
        <div className="slider-content">
          <TestimonialReviews name="Amanda Tulling" title="Senior Developer" companyName="Square" img={img_Amanda} alt="A picture on Amanda Tulling" />
        </div>
    </div>
    {/* Slide 3 */}
    <div tabIndex="3" id="Jack" className="slidez">
        <div className="slider-content">
          <TestimonialReviews name="Jack McDogglas" title="Key Account Manager" companyName="Gobona" img={img_Jack} alt="A picture on Jack McDogglas" />
        </div>
    </div> 
  </div>

  <div className="end-of-section">
    <BtnBlack title="All Reviews" url="AllReviews.html" />
  </div>

</section>
</>
  )
}

export default Testimonial

// Slide functions
let currentSlide = 0;
const slides = document.querySelectorAll('.slidez');

function showSlide(index) {
    slides.forEach((slidez, i) => {
        if (i === index) {
            slidez.style.display = 'block';
        } else {
            slidez.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length -0) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // Ändra bild var 4 sekunder (4000 ms)