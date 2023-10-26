import React from 'react'
import img_Element from '../../../assets/images/Element-right.svg'

const GetNews = () => {
  return (
    <>
  <section className="section-get-news">

    <div className="design-element-3">
      <img className="image-element-3" src={img_Element} alt="A design element" />
    </div>

    <div className="my-container">
      <h1>Get News Updates By Signup</h1>

        <form className="buttons" method="post" actions="#">
          <input className="input" title="Email" type="email" id="email" name="email" placeholder="username@domain.com" />
          <button type="submit" title="Subscribe" className="btn-yellow">Subscribe
            <svg className="arrow bi bi-arrow-up-right" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg>   
          </button>
        </form>
    </div>  
</section>
    </>
  )
}

export default GetNews