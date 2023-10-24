import React from 'react'
import SectionTitle from '../generics/SectionTitle';
import ProjectAndCaseStudiesArticles from './ProjectAndCaseStudiesArticles';
import img_box1 from '../../assets/images/Image-paper.png';
import img_box2 from '../../assets/images/Image-stapler.png';
import img_box3 from '../../assets/images/Image-notes.png';
import img_box4 from '../../assets/images/Image-computer.png';
import BtnBlack from '../generics/BtnBlack';

const ProjectAndCaseStudies = () => {
  return (
    <>
<section className="section-project-and-case">
    <div className="container">
        <div className="section-title">
            <SectionTitle title="Projects & Case Studies" headline="Let's Looks Our Global Projects"  />
        </div>
        <div className="project-and-cases">
            <ProjectAndCaseStudiesArticles title="Grow Your Business" src={img_box1} alt="A picture of a mans hands reading a business paper" url="services.html" />
            <ProjectAndCaseStudiesArticles title="Why your client needs a responsive website" src={img_box2} alt="A picture on a tablet, smartwatch, glases and a pen laying on a desk" url="services.html" />
            <ProjectAndCaseStudiesArticles title="Educate your employees to get better results" src={img_box3} alt="A picture on a notebook, pen, ruler and a mug" url="services.html" />
            <ProjectAndCaseStudiesArticles title="Business Insights is a important piece of your business" src={img_box4} alt="A picture on a laptop showing different diagrams" url="services.html" />
        </div>
    </div>

    <div className="btn-position">
        <BtnBlack title="All-recent-projects" url="RecentProjects.html" />
    </div>
</section>
</>
  )
}

export default ProjectAndCaseStudies