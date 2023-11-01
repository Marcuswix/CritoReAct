import React from 'react'

const RecentPosts = ({headline, date}) => {
  return (
    <div>
        <b>{headline}</b>
        <br />
        <p>{date}</p>
        <hr />
    </div>
  )
}

export default RecentPosts