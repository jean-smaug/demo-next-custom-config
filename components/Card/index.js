import React from "react"

import "./Card.scss"

function Card(props) {
  return (
    <div className='Card'>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  )
}

export default Card
