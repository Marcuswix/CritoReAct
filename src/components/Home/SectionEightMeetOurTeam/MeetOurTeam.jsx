import React from 'react';
import SectionTitle from '../../generics/SectionTitle';
import BtnTransparent from '../../generics/BtnTransparent';
import img_Palmer from '../../../assets/images/Palmer.png'
import img_Arubi from '../../../assets/images/Aubri.png';
import img_Hansen from '../../../assets/images/Hansen.png';
import img_Willoman from '../../../assets/images/Willoman.png';
import OurTeam from './OurTeam';


const MeetOurTeam = () => {
  
  const team = [
    {name: "Kristine Palmer", title: "Chef Operation Officer", img: img_Palmer, id: "Kristine", dataLabel: "Kristine", alt: "A picture of Kristine Palmer"},
    {name: "Mark Arubi", title: "Senior Consultant", img: img_Arubi, id: "Mark", dataLabel: "Mark", alt: "A picture of Mark Arubi"},
    {name: "Kimberly Hansen", title: "Senior Consultant", img: img_Hansen, id: "Kimberly", dataLabel: "Kimberly", alt: "A picture of Kimberly Hansen"},
    {name: "Justin Willoman", title: "Senior Tech Consultant", img: img_Willoman, id: "Justin", dataLabel: "Justin", alt: "A picture of Justin Willoman"},
  ]

  return (
    <>
    <section className="section-our-team">

      <div className="headlines">
        <div>
          <SectionTitle title="Meet Our Team" headline="Experience Team Members" />
        </div>
        <div>
          <BtnTransparent title="Meet-our-team" linkTo="/UnderConstruction" />
        </div>
      </div>

      <div className="slider">
      {
        team.map((team, index) => (
          <OurTeam key={index} name={team.name} title={team.title} img={team.img} alt={team.alt} />
        ))
      }
      </div>
  </section>
</>
  )
}

export default MeetOurTeam