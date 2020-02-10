import React from 'react'
import Card from './Card'

const CardList = ({ cards }) => {
  return (
    <div className="card text-left" style={{ width: '20rem' }}>
      <ul className="list-group list-group-flush">
        {cards.map(card => (
          <Card card={card} />
        ))}
      </ul>
    </div>
  )
}

export default CardList