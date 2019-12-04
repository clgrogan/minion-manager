import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Review Minions</Link>
          </li>
          <li className="titleNavLi">
            <h1 className="titleH1">Minion Management System</h1>
          </li>
          <li>
            <Link to="/AddMinion">Add New Minion</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
