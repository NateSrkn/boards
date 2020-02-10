import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const boards = useSelector(state => state.boards.data)
  return (
    <nav className="navbar navbar-expand" >
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a href="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Boards
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {boards.map(board => (
                <Link to={`/b/${board.shortLink}`} className="dropdown-item" key={board.shortLink}>
                  {board.name}
                </Link>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar