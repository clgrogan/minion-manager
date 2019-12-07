import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import EmployeeListItem from '../components/EmployeeListItem'

const Minions = () => {
  const [employees, setEmployees] = useState([])

  const getEmployees = async () => {
    const apiUrl =
      'https://sdg-staff-directory-app.herokuapp.com/api/GruInc/Employees'
    const resp = await axios.get(apiUrl)
    setEmployees(resp.data)
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
      <main>
        <section className="mainSection">
          <table className="employeeTable">
            <tbody className="employeeTableBody">
              <tr>
                <th scope="col"> </th>
                <th scope="col">Name</th>
                <th scope="col">Title</th>
                <th scope="col">Emp. ID</th>
                <th scope="col">Type</th>
              </tr>
              {console.log('print array ', employees)}
              {employees.map(employee => {
                return (
                  <EmployeeListItem key={employee.id} employee={employee} />
                )
              })}
            </tbody>
          </table>
        </section>
      </main>
    </>
  )
}

export default Minions
