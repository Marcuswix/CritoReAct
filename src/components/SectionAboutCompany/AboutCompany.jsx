import React from 'react'
import img_Samantha from '../../assets/images/Image-Samantha.png';
import SectionTitle from '../generics/SectionTitle';
import BtnBlack from '../generics/BtnBlack';

const AboutCompany = () => {
  return (
<section class="section-about-company">
      
    <div class="container">
        <div class="image-and-text-container">
          <img class="image-samantha" src={img_Samantha} alt="A picture on the founder Samantha Brown" />
            <div class="text-container-blue">
              <div class="Samantha"><h3 class="h3">Samantha Brown, </h3>
                <h5 class="h5">Founder</h5></div>
                <p class="p1">"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
            </div>
        </div>
    
        <div class="content">
            <SectionTitle title="About company" headline="We Are Business Consulting & Credit Repair Experts" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.<br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>   

            <div class="btn-container">
                <BtnBlack title="Learn More" url="learnMore.html" />

                <button class="btn-play" title="Play">
                <a href="https://www.youtube.com/watch?v=7TIr9ajYzfQ&ab_channel=Wix-Topic">
                    <svg class="playicon" id="Video" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <g id="Ellipse_24" data-name="Ellipse 24" fill="none" stroke="#191919" stroke-width="1">
                    <circle cx="24" cy="24" r="24" stroke="none"/>
                    <circle cx="24" cy="24" r="23.5" fill="none"/>
                    </g>
                    <path id="Vector" d="M0,0,8,4.8,0,9.6Z" transform="translate(20 19.2)" fill="#191919"/>
                     </svg>Intro video
                </a>
                </button>
            </div>
        </div>
      
    </div>
</section>
  )
}

export default AboutCompany