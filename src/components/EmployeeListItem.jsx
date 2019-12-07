import React from 'react'
import { Link } from 'react-router-dom'

const EmployeeListItem = props => {
  console.log('li props ', props)
  const empName = props.employee.firstName + ' ' + props.employee.lastName
  const empID = props.employee.id
  const empFullTime = props.employee.isFullTime
  const empTitle = props.employee.jobTitle
  const empImageUrl = props.employee.profileImage
  const empImageAltText = 'Profile image for ' + empName

  const employmentType = fullTime => {
    console.log('adsfasdf', fullTime)
    return fullTime ? 'Full Time' : 'Part Time'
  }

  return (
    <>
      <tr className="employeeTd">
        {console.log('tr props ', props)}
        <td className="imageTd">
          <Link className="employeeLink" to={'/minion/' + empID}>
            <img
              src={empImageUrl}
              alt={empImageAltText}
              className="profileImageTd"
            />{' '}
          </Link>
        </td>
        <td className="fullNameTd">
          <Link className="employeeLink" to={'/minion/' + empID}>
            {empName}
          </Link>
        </td>
        <td className="titleTd">
          <Link className="employeeLink" to={'/minion/' + empID}>
            {empTitle}
          </Link>
        </td>
        <td className="employeeIdTd">
          <Link className="employeeLink" to={'/minion/' + empID}>
            {empID}
          </Link>
        </td>
        <td className="employeeFullTimeTd">
          <Link className="employeeLink" to={'/minion/' + empID}>
            {employmentType(empFullTime)}
          </Link>
        </td>
      </tr>
    </>
  )
}

export default EmployeeListItem
