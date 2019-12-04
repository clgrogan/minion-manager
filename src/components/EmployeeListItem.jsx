import React from 'react'
import { Link } from 'react-router-dom'

const EmployeeListItem = props => {
  console.log('li props ', props)
  const empName = props.employee.firstName + ' ' + props.employee.lastName
  const empID = props.employee.id
  const empTitle = props.employee.jobTitle
  const empImageUrl = props.employee.profileImage
  const empImageAltText = 'Profile image for ' + empName

  return (
    <>
      <Link className="employeeName" to={'/minion/' + empID}>
        {/* '/actor/' + prop.actor.id */}
        Link to Minion Page
      </Link>
      <tr className="employeeTd">
        {console.log('tr props ', props)}
        <td className="imageTd">
          <img
            src={empImageUrl}
            alt={empImageAltText}
            className="profileImageTd"
          />
        </td>
        <td className="fullNameTd">{empName}</td>
        <td className="titleTd">{empTitle}</td>
        <td className="employeIdTd">{empID}</td>
      </tr>
    </>
  )
}

export default EmployeeListItem
