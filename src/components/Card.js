import React from 'react'

const Card = ({ card }) => {
  return (
    <li className="list-group-item">
      {card.name}
    </li>
  )
}

export default Card