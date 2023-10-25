import React from 'react'
import img_Logo from '../../assets/images/Logo-black.svg';
import img_Element from '../../assets/images/Element grey 2.svg'
import Boxes from './Boxes';

const Footer = () => {
  return (
    <>
<section className="footer">
  <div className="wrapper-grid">
    
    <div className="design-element-4">
      <img className="image-element-4" src={img_Element} alt="A design element" />
    </div>

      <div className="container-parent">
        <div className="logo"><img src={img_Logo} alt="Critos logotype" />
          <p className="p-company">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
        </div>  

        <div className="section-company">
          <Boxes headline="Company" name_1="About" name_2="Featuers" name_3="Works" name_4="Career" url_1="About.html" url_2="Feautuers.html" url_3="Work.html" url_4="Career.html" />
        </div>
    
        <div className="section-help">
          <Boxes headline="Help" name_1="Costumer Support" name_2="Delivery Details" name_3="Terms & Conditions" name_4="Privacy Policy" url_1="CusterSupport.html" url_2="DeliveryDetails.html" url_3="Terms&Condition.html" url_4="PrivatePolicy.html" />
        </div>

        <div className="section-resorces">
          <Boxes headline="Resources" name_1="Free eBooks" name_2="Development Tutorial" name_3="How to - Blog" name_4="Youtube Playlist" url_1="#" url_2="#" url_3="#" url_4="#" />
        </div>
  
        <div className="section-link">
          <Boxes headline="Links" name_1="Free eBooks" name_2="Development Tutorial" name_3="How to - Blog" name_4="Youtube Playlist" url_1="#" url_2="#" url_3="#" url_4="#" />
        </div>
      </div>
    </div>

    <footer>
      <div className="page-end">
        <p className="copy-right">© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
        <div className="social-media">
          <a href="https://www.facebook.com/campaign/landing.php?campaign_id=10823226160&extra_1=s%7Cc%7C514041439169%7Cb%7Cfacebook%7C&placement=&creative=514041439169&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D10823226160%26adgroupid%3D110178056158%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-11403291%26loc_physical_ms%3D1012475%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwo9unBhBTEiwAipC116HZpmxyfUmhluYdTArXaEbPa9jMVHk0s1f-1T9giPi9Ds_KqUhZcRoC6W0QAvD_BwE"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://twitter.com/X"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/home"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
</section>
    </>
  )
}

export default Footer