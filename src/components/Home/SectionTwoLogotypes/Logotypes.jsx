import React from 'react'
import img_Paperz from '../../../assets/images/Paperz logo.svg';
import img_Dorfus from '../../../assets/images/Dorfus logo.svg';
import img_Martino from '../../../assets/images/Martino logo.svg';
import img_Square from '../../../assets/images/Square logo.svg';
import img_Gobona from '../../../assets/images/Gobana logo.svg';

const Logotypes = () => {
  return (
    <>
    <section className="section-company-logotypes">
        <div className="container">
        <img src={img_Paperz} alt="Paperz logotype" />
        <img src={img_Dorfus} alt="Dorfus logotype" />
        <img src={img_Martino} alt="Martino logotype" />
        <img src={img_Square} alt="Square logotype" />
        <img className="gobona" src={img_Gobona} alt="Gobana logotype" />
        </div>
    </section>
    </>
  )
}

export default Logotypes