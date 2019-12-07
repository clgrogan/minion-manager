import React, { useState } from 'react'
import axios from 'axios'
import EmployeeListItem from '../components/EmployeeListItem'

const AddMinion = () => {
  const [employee, setEmployee] = useState({
    id: 0,
    firstName: '',
    lastName: '',
    birthday: 0,
    hiredDate: 0,
    isFullTime: true,
    profileImage: '',
    jobTitle: '',
    jobDescription: '',
    phoneNumber: '',
    interestingFact: '',
    address: '',
    city: '',
    zip: '',
    state: '',
    salary: 0,
    gender: '',
    email: '',
    emergencyContactPerson: '',
    emergencyContactPhone: '',
    emergencyContactAddress: '',
    ptoHours: 0,
    companyKey: 'GruInc',
  })

  // Handle Input onChange
  const handleInputOnChange = e => {
    console.log('executed handleInputOnChange')
    e.persist()
    setEmployee(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // Post Call to API
  const addEmployeeApi = async e => {
    e.preventDefault()
    console.log(employee)
    return
    const apiUrl =
      'https://sdg-staff-directory-app.herokuapp.com/api/GruInc/Employees'
    const resp = await axios.post(apiUrl, employee)
  }

  return (
    <>
      <section className="formSection">
        <form className="addEmployeeForm" onSubmit={addEmployeeApi}>
          <section className="formInputSection">
            <div className="inputGroup">
              <label className="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={employee.firstName}
                onChange={handleInputOnChange}
                required
              />
            </div>
          </section>

          <button className="addEmployeeBtn" type="submit">
            Add Employee
          </button>
        </form>
      </section>
    </>
  )
}

export default AddMinion

// {
//   "id": 0,
//   "firstName": "string",
//   "lastName": "string",
//   "birthday": "2019-12-05T19:37:04.129Z",
//   "hiredDate": "2019-12-05T19:37:04.129Z",
//   "isFullTime": true,
//   "profileImage": "string",
//   "jobTitle": "string",
//   "jobDescription": "string",
//   "phoneNumber": "string",
//   "interestingFact": "string",
//   "address": "string",
//   "city": "string",
//   "zip": "string",
//   "state": "string",
//   "salary": 0,
//   "gender": "string",
//   "email": "string",
//   "emergencyContactPerson": "string",
//   "emergencyContactPhone": "string",
//   "emergencyContactAddress": "string",
//   "ptoHours": 0,
//   "companyKey": "string"
// }
