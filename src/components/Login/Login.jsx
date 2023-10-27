import React from 'react'
import PageTitle from '../generics/PageTitle'
import img_ELement from '../../assets/images/Element-left.svg'

const Login = () => {
  return (
    <>
<section className="section login">
  <div className="design-element">
    <img id="element" src={img_ELement} title="Image-element" alt="A design element" />
  </div>
    <div className="container login">
      <h3>Login</h3>
      <form className="form" action="process_login-php" method="post" autocomplete="on" onSubmit={validateUser} noValidate>
        <label for="username">Username:</label>
        <input className="input" tabindex="1" type="text" title="Username" id="username" name="username" required />
        <span id="errorUsername"></span>
        <label for="password">Password:</label>
        <input className="input" tabindex="2" type="password" title="Password" id="password" name="password" required />
        <span id="errorPassword"></span>
        <button className="btn-black bi bi-arrow-up-right" tabindex="3" title="Login" type="submit" onclick="alert('You can not login')">Login<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
        </svg>  
        </button>
      </form>
    </div>
</section>  
    </>
  )
}
export default Login

function validateUser(event) 
{
  event.preventDefault();

  const user = {
    userName: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  if (validateName(user.userName)) {
    document.getElementById("username").classList.remove("error");
    document.getElementById("errorUsername").innerHTML = "";
    console.log("Username is valid");
  } else {
    document.getElementById("username").classList.add("error");
    document.getElementById("errorUsername").innerHTML = "Invalid Username";
    console.log("Username is invalid");
  }

  if (validatePassword(user.password)) {
    document.getElementById("password").classList.remove("error");
    document.getElementById("errorPassword").innerHTML = "";
    console.log("Password is valid");
  } else {
    document.getElementById("password").classList.add("error");
    document.getElementById("errorPassword").innerHTML = "Invalid password";
    console.log("Password is invalid");
  }
}

function validateName(userName) {
  const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;

  return usernameRegex.test(userName);
}

function validatePassword(password) {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

  return passwordRegex.test(password);
}