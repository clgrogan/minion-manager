import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Minions = () => {
  const [employees, setEmployees] = useState([])

  const getEmployees = async () => {
    const apiUrl =
      'https://sdg-staff-directory-app.herokuapp.com/api/GruInc/Employees'
    const resp = await axios.get(apiUrl)
    setEmployees(resp)
    console.log(resp)
  }
  // Use Effect for Page Render
  useEffect(() => {
    // do something here
    console.log('Rendered - useEffect []')
    getEmployees()
  }, [])
  return (
    <>
      <Link className="employeeName" to={'/minion/'}>
        Link to Minion Page
      </Link>
    </>
  )
}

export default Minions
