import React from 'react';
import Stars from './Stars';

const TestimonialReviews = ({name, title, companyName, img, alt}) => {
  return (
    <>
        <div id="Cassandra-slide" className="slider-item">
          <div className="slider-content">
            <Stars />
            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
            <div className="foto-name-title">
                <img className="round-foto" src={img} alt={alt} />
                <div className="name-title">
                  <h3>{name}</h3>
                  <h4>{title}, {companyName}</h4>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default TestimonialReviews