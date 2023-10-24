import React from 'react'

const BtnYellow = ({url, title}) => {
  return (
    <>
    <button className="btn-yellow">
      <a href={url}>
      {title}
        <svg className="arrow" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
        </svg>
        </a>
      </button>
    </> 
  )
}

export default BtnYellow