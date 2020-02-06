import React from 'react'
import { Link } from 'react-router-dom'

const BoardCard = ({ board }) => {
  return (
    <div className="card">
      <header className="card-header">
        <h4 className="card-header-title">{board.name}</h4>
      </header>
      <div className="card-content">
        <div className="content has-text-left">
          {board.desc}
        </div>
      </div>
      <footer className="card-footer">
        <Link className="card-footer-item" to={`/b/${board.shortLink}`}>Open Board</Link>
      </footer>
    </div>
  )
}

export default BoardCard