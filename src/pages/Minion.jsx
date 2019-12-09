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

  const formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  })

  const employmentType = fullTime => {
    console.log(fullTime)
    return fullTime ? 'Full Time' : 'Part Time'
  }

  // Use Effect for Page Render
  useEffect(() => {
    // do something here
    console.log('Rendered EMPLOYEE - useEffect []')
    getEmployee()
  }, [])

  console.log('my props ', props)
  const employeeID = props.match.params.employeeID
  return (
    <>
      {console.log(employee)}
      <main>
        <section className="mainInfoSection">
          <h1 className="personalInfoHeader">
            {employee.firstName + ' ' + employee.lastName + "'s "}Personal
            Information
          </h1>
          <section className="personalInfoSection">
            <section className="personalInfoImageSection">
              <img
                src={employee.profileImage}
                alt={
                  'Profile image for ' +
                  employee.firstName +
                  ' ' +
                  employee.lastName
                }
                className="largeProfileImage"
              />
            </section>
            <section className="personalInfoDataSection">
              <table className="personalInfoDataTable">
                <tbody className="personalInfoTableBody">
                  <tr>
                    <td className="personalInfoItem">Employee ID:</td>
                    <td className="personalInfoData">{employee.id}</td>
                  </tr>
                  <tr>
                    <td className="personalInfoItem">Name: </td>
                    <td className="personalInfoData">
                      {employee.firstName + ' ' + employee.lastName}
                    </td>
                  </tr>
                  <tr>
                    <td className="personalInfoItem">Birthday:</td>
                    <td className="personalInfoData">{employee.birthday}</td>
                  </tr>
                  <tr>
                    <td className="personalInfoItem">Hire Date:</td>
                    <td className="personalInfoData">{employee.hiredDate}</td>
                  </tr>
                  <tr>
                    <td className="personalInfoItem">Title:</td>
                    <td className="personalInfoData">{employee.jobTitle}</td>
                  </tr>
                  <tr>
                    <td className="personalInfoItem">Job Description:</td>
                    <td className="personalInfoData">
                      {employee.jobDescription}
                    </td>
                  </tr>
                  <tr>
                    <td className="personalInfoItem">Employment Type:</td>
                    <td className="personalInfoData">
                      {employmentType(employee.isFullTime)}
                    </td>
                  </tr>
                  <tr>
                    <td className="personalInfoItem">PTO (hours):</td>
                    <td className="personalInfoData">{employee.ptoHours}</td>
                  </tr>
                  <tr>
                    <td className="personalInfoItem">Salary:</td>
                    <td className="personalInfoData">
                      {formatter.format(employee.salary)}
                    </td>
                  </tr>
                  <tr>
                    <td className="personalInfoItem">Oddity:</td>
                    <td className="personalInfoData">
                      {employee.interestingFact}
                    </td>
                  </tr>
                  <tr>
                    <td className="personalInfoItem">Gender:</td>
                    <td className="personalInfoData">{employee.gender}</td>
                  </tr>
                  <tr>
                    <td className="personalInfoItem">Address:</td>
                    <td className="personalInfoData">
                      <div>{employee.address}</div>
                      <div>
                        {employee.city +
                          ', ' +
                          employee.state +
                          ' ' +
                          employee.zip}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="personalInfoItem">Email:</td>
                    <td className="personalInfoData">{employee.email}</td>
                  </tr>
                  <tr>
                    <td className="personalInfoItem">Phone Number:</td>
                    <td className="personalInfoData">{employee.phoneNumber}</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </section>
        </section>
        <h1 className="personalInfoHeader">Emergency Contact Information</h1>
        <section className="emergencyContactInfo">
          <table className="emergencyContactInfoTable">
            <tbody>
              <tr>
                <td className="emergencyContactItem">Contact Name:</td>
                <td className="emergencyContactData">
                  {employee.emergencyContactPerson}
                </td>
              </tr>
              <tr>
                <td className="emergencyContactItem">Contact Number:</td>
                <td className="emergencyContactData">
                  {employee.emergencyContactPhone}
                </td>
              </tr>
              <tr>
                <td className="emergencyContactItem">Contact Address:</td>
                <td className="emergencyContactData">
                  {employee.emergencyContactAddress}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  )
}

export default Minion
