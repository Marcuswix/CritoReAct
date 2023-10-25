import React from 'react'
import SectionOurServices from '../components/SectionOurServices/OurServices';
import SectionAboutCompany from '../components/SectionAboutCompany/AboutCompany';
import SectionFeatures from '../components/SectionFeatures/Features';
import SectionWhyChooseUs from '../components/SectionWhyChooseUs/WhyChooseUs';
import SectionSevenProjectAndCaseStudies from '../components/SectionSevenProjectAndCaseStudies/ProjectAndCaseStudies';
import SectionEigthMeetOurTeam from '../components/SectionEightMeetOurTeam/MeetOurTeam'
import SectionNineTestimonial from '../components/SectionNineTestimonial/Testimonial'
import SectionTwoLogotypes from '../components/SectionTwoLogotypes/Logotypes'
import SectionOneShowcase from '../components/SectionOneShowcase/Showcase'
import SectionElevenGetNews from '../components/SectionElevenGetNews/GetNews'
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
      <SectionElevenGetNews />
      <Footer />
    </>
  );
}

export default Home