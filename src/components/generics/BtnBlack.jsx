import React from 'react'
import { Link } from 'react-router-dom'

const BtnBlack = ({linkTo, title}) => {
  return (
    <>
    <Link to={linkTo}>
    <button className="btn-black">{title}
        <svg className="arrow" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/> 
        </svg>
    </button>
    </Link>
    </>
  )
}

export default BtnBlack