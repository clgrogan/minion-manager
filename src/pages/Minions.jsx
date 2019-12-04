import React from 'react'
import { Link } from 'react-router-dom'

const Minions = () => {
  return (
    <div>
      <Link className="employeeName" to={'/minion/'}>
        Link to Minion Page
      </Link>
    </div>
  )
}

export default Minions
