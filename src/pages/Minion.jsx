import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Minion = props => {
  const [employee, setEmployee] = useState([])

  const getEmployee = async () => {
    const apiUrl =
      'https://sdg-staff-directory-app.herokuapp.com/api/GruInc/Employees/' +
      employeeID
    const resp = await axios.get(apiUrl)
    setEmployee(resp.data)
    console.log(resp)
  }
  // Use Effect for Page Render
  useEffect(() => {
    // do something here
    console.log('Rendered EMPLOYEE - useEffect []')
    getEmployee()
  }, [])

  console.log('my props ', props)
  const employeeID = props.match.params.actorID
  return (
    <div>
      This page will display the employee details.
      <p>{employeeID}</p>
    </div>
  )
}

export default Minion
