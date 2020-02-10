import React from 'react'
import { Link } from 'react-router-dom'

const BoardCard = ({ board }) => {
  return (
    <div className="card mr-3" style={{ width: '20rem' }}>
      <div className="card-body text-left">
        <h5 className="card-title">{board.name}</h5>
        <p className="card-text">
          {board.desc}
        </p>
        <Link to={`/b/${board.shortLink}`} onClick={(event) => console.log(event.target)}className="card-link">
          View Board
        </Link>
      </div>
    </div>
  )
}

export default BoardCard