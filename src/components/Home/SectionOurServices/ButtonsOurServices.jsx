import React from 'react'
import { Link } from 'react-router-dom'

const ButtonsOurServices = ({linkTo}) => {
  return (
    <div className="circlearrow">
    <button className="btn-round" title="Read-more-business">
    <Link to={linkTo}>
      <svg className="arrow-in-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.517 35.517">
      <g id="Arrow_right_up" data-name="Arrow right up" transform="translate(7.51 -20.49) rotate(30)">
      <path id="Vector" d="M0,0H26V26H0Z" transform="translate(15 15)" fill="none"/>
      <g id="Group_1000004854" data-name="Group 1000004854">
      <path id="Vector-2" data-name="Vector" d="M0,0V16.366" transform="translate(21.097 32.409) rotate(-120)" stroke="#FFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      <path id="Vector-3" data-name="Vector" d="M16.637,0,8.318,8.318,0,0" transform="translate(32.227 35.59) rotate(-120)" fill="none" stroke="#FFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      </g>
      </g>
      </svg>
    </Link>
    </button>
  </div>
  )
}

export default ButtonsOurServices