import React from 'react'
import img_Element from '../../assets/images/Element-left.svg'
import Info from './ContactInformation'
import { useState } from 'react'

const Contact = () => {

  const [name, setName] = useState('') 
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [errorName, setErrorName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [successMessage, setSuccessMeassage] = useState("Your Message has successfully been sent!")

  async function handleSubmit(e)
  {
    e.preventDefault()

    let isValid = true;
    const data = {name, email, message}
    const messageSuccess = document.getElementById("MessageHasBeenSent")

        //Validate Message
        if (!message)
        {
          setErrorMessage (<p>Message is empty. Please type a message.</p>)
          document.getElementById("message").classList.add("error")
          isValid = false;
        }
        else
        {
          setErrorMessage('')
          document.getElementById("message").classList.remove("error")
        }
        
        // Validate Name
        const nameRegEx = /^[A-Za-z\s]{2,}$/;
        if (!name || !nameRegEx.test(name))
        {
          setErrorName (<p>The name is invalid. Please type a valid name.</p>)
          document.getElementById("name").classList.add("error")
          isValid = false;
        }
        else
        {
          setErrorName('')
          document.getElementById("name").classList.remove("error")
        }
    
        // Validate Email
        const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegEx.test(email))
        {
          setErrorEmail (<p>No vaild Email. Please type a vaild email</p>)
          document.getElementById("email").classList.add("error")
          isValid = false;
        }
        else
        {
          setErrorEmail('')
          document.getElementById("email").classList.remove("error")
        }

    if (isValid)
    {
      fetch('https://win23-assignment.azurewebsites.net/api/contactform' , {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    .then(function (response) {
    if (response.ok) {
    setName('');
    setEmail('');
    setMessage('');
    messageSuccess.style.opacity = 1;
    messageSuccess.style.zIndex = 1;
    setTimeout(() => {
    messageSuccess.style.opacity = 0
    }, 2600)
    setTimeout(() => {
      messageSuccess.style.zIndex = -1;
      }, 3600)
    // alert('your message has been sent successfully')
    console.log("Your message has been sent");
    } 
    else {
    console.error("Error in response");
    }
    })
    .catch(function (error) {
    console.error("Error", error);
    }); 
    }
    else
    console.log("Form is not valid")
  }

return (
    <>
<section className="lets-connect">
  <img className="element" title="Image-element" src={img_Element} alt="A design element" />
    <div className="container">
      <div className="content">
        <p>Home Contact</p>
        <h1>Let’s Connect</h1>
      </div>
    </div>
</section>

<section className="visit-call-email">
    <div className="container">
      <Info title="Visit us" info_one="Sveavägen 31" info_two="111 34 STOCKHOLM"  svg={<svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
            <g id="Icon" transform="translate(-360 -588)">
            <circle id="Ellipse_10" data-name="Ellipse 10" cx="30" cy="30" r="30" transform="translate(360 588)" fill="#191919"/>
            <g id="fluent:location-48-filled" transform="translate(378 606.75)">
            <rect id="fluent:location-48-filled-2" data-name="fluent:location-48-filled" width="24" height="24" fill="none"/>
            <g id="Group">
            <path id="Vector" d="M16.008,12.49a8.519,8.519,0,0,1-.91,1.37c-.035.044-.071.087-.108.13h0L14.981,14H15L9.956,19.355a2,2,0,0,1-2.911,0L2,14h.019l-.009-.01L2,13.977A8.5,8.5,0,1,1,16.007,12.49Zm-5.384-1.618A3,3,0,1,0,8.5,11.75,3,3,0,0,0,10.623,10.871Z" transform="translate(3.5 2)" fill="#fff"/>
            </g></g></g></svg>} />
      <Info title="Call us" info_one="+46 (8) 121 470 50" info_two="+46 (8) 121 470 51" svg={<svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
            <g id="Icon" transform="translate(-810 -588)">
            <circle id="Ellipse_10" data-name="Ellipse 10" cx="30" cy="30" r="30" transform="translate(810 588)" fill="#191919"/>
            <g id="ic:round-call" transform="translate(828 606)">
            <rect id="ic:round-call-2" data-name="ic:round-call" width="24" height="24" fill="none"/>
            <path id="Vector" d="M12.631,11.4a.985.985,0,0,1,.9-.26l3.67.73a1,1,0,0,1,.8.98V17a1,1,0,0,1-1.03,1A18.049,18.049,0,0,1,9,15.57,18.075,18.075,0,0,1,2.431,9,17.921,17.921,0,0,1,0,1.03,1,1,0,0,1,1,0h4.15a1,1,0,0,1,.98.8l.75,3.68a1.026,1.026,0,0,1-.27.9L4.111,7.9a16.144,16.144,0,0,0,6,6l2.52-2.5Z" transform="translate(2.999 3)" fill="#fff"/>
            </g></g></svg>} />
      <Info title="Email us" info_one="info@crito.com" info_two="support@crito.com" svg={<svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
            <g id="Icon" transform="translate(-1263 -588)">
              <circle id="Ellipse_10" data-name="Ellipse 10" cx="30" cy="30" r="30" transform="translate(1263 588)" fill="#191919"/>
              <g id="dashicons:email-alt" transform="translate(1281 606)">
              <rect id="dashicons:email-alt-2" data-name="dashicons:email-alt" width="24" height="24" fill="none"/>
              <path id="Vector" d="M18.612,14.4H1.8A1.8,1.8,0,0,1,0,12.6V1.8A1.8,1.8,0,0,1,1.8,0H18.612a1.8,1.8,0,0,1,1.8,1.8V12.6A1.8,1.8,0,0,1,18.612,14.4ZM18.84,1.668c-.4-.4-.8-.2-1.14.084L10.2,7.8,2.712,1.752c-.336-.288-.744-.48-1.14-.084a.659.659,0,0,0,.036,1.008L6.48,7.14,1.8,12.012a.465.465,0,0,0-.072.612.546.546,0,0,0,.672.06L7.644,8.208l2.556,2.34,2.568-2.34,5.244,4.476a.546.546,0,0,0,.672-.06.465.465,0,0,0-.072-.612L13.932,7.14,18.8,2.676a.659.659,0,0,0,.036-1.008Z" transform="translate(2.388 4.8)" fill="#fff"/>
            </g></g></svg>} />   
    </div>
</section>

<section className="leave-us-a-message">
    <div className="wrapper-grid">
        <div className="container">
            <div className="textbox">
              <h1>Leave us a message<br />for any information.</h1>
            </div>
            <form className="forms" method="post" id="Contact-form" title="Contact-form" autoComplete="on" noValidate>
              <input className="input" tabIndex="1" type="text" id="name" name="name" title="Name" placeholder="Name*" value={name} onChange={ (e) => setName(e.target.value)} />
              <span id="invalidName" className='inValid'>{errorName}</span>
              <input className="input" tabIndex="2" type="email" id="email" name="email" title="Email" placeholder="Email*" value={email} onChange={ (e) => setEmail(e.target.value)} />
              <span id="invalidEmail" className='inValid'>{errorEmail}</span>
              <textarea className="input" tabIndex="3" type="textarea" id="message" title="Your meassage" name="message" placeholder="Your Message*" value={message} onChange={ (e) => setMessage(e.target.value)} >
              </textarea>
              <span id="invalidMessage" className='inValid'>{errorMessage}</span>
              <button className="btn-yellow" tabIndex="4" type="submit" title="Send" onClick={handleSubmit}>Send
              <svg className="arrow bi bi-arrow-up-right" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
              </svg>   
              </button>
            </form>
            <div className="MessageHasBeenSent" id="MessageHasBeenSent">
              {successMessage}  
            </div>
        </div>
    </div>
</section>

<section className="mapWrapper">
  <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15218.90215123078!2d18.06346706264281!3d59.3332896355906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6799554e87%3A0x6562d2c842903003!2sSveav%C3%A4gen%2031%2C%20111%2034%20Stockholm!5e0!3m2!1ssv!2sse!4v1694702183755!5m2!1ssv!2sse" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</section> 
</>
  )
}
export default Contact