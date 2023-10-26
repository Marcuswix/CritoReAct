import React from 'react'
import SectionOurServices from '../components/Home/SectionOurServices/OurServices';
import SectionAboutCompany from '../components/Home/SectionAboutCompany/AboutCompany';
import SectionFeatures from '../components/Home/SectionFeatures/Features';
import SectionWhyChooseUs from '../components/Home/SectionWhyChooseUs/WhyChooseUs';
import SectionSevenProjectAndCaseStudies from '../components/Home/SectionSevenProjectAndCaseStudies/ProjectAndCaseStudies';
import SectionEigthMeetOurTeam from '../components/Home/SectionEightMeetOurTeam/MeetOurTeam'
import SectionNineTestimonial from '../components/Home/SectionNineTestimonial/Testimonial'
import SectionTwoLogotypes from '../components/Home/SectionTwoLogotypes/Logotypes'
import SectionOneShowcase from '../components/Home/SectionOneShowcase/Showcase'
import SectionElevenGetNews from '../components/Home/SectionElevenGetNews/GetNews';
import SectionNewsAndArticles from '../components/Home/SectionNewsAndArticles/NewsAndArticles'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
   
function Home() {
  return (
    <>
      <Header />
      <SectionOneShowcase />
      <SectionTwoLogotypes />
      <SectionAboutCompany />
      <SectionOurServices />
      <SectionFeatures />
      <SectionWhyChooseUs />
      <SectionSevenProjectAndCaseStudies />
      <SectionEigthMeetOurTeam />
      <SectionNineTestimonial />
      <SectionNewsAndArticles />
      <SectionElevenGetNews />
      <Footer />
    </>
  );
}

export default Home