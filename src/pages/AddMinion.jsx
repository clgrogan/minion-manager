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
    const apiUrl =
      'https://sdg-staff-directory-app.herokuapp.com/api/Cow/Employees'
    const resp = await axios.post(apiUrl, employee)
    console.log(resp)
  }

  return (
    <>
      <section className="formSection">
        <form className="addEmployeeForm" onSubmit={addEmployeeApi}>
          <section className="formInputSection">
            <label className="firstName">
              First Name:
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={employee.firstName}
                onChange={handleInputOnChange}
                required
              />
            </label>
            <label className="lastName">
              Last Name:
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={employee.lastName}
                onChange={handleInputOnChange}
                required
              />
            </label>
            <label className="profileImage">
              Profile Img Url:
              <input
                type="text"
                name="profileImage"
                id="profileImage"
                value={employee.profileImage}
                onChange={handleInputOnChange}
                required
              />
            </label>
            <label className="birthday">
              Birth Date:
              <input
                type="date"
                name="birthday"
                id="birthday"
                value={employee.birthday}
                onChange={handleInputOnChange}
                required
              />
            </label>
            <label className="hiredDate">
              Hire Date:
              <input
                type="date"
                name="hiredDate"
                id="hiredDate"
                value={employee.hiredDate}
                onChange={handleInputOnChange}
                required
              />
            </label>
            <label className="jobTitle">
              Title:
              <input
                type="text"
                name="jobTitle"
                id="jobTitle"
                value={employee.jobTitle}
                onChange={handleInputOnChange}
                required
              />
            </label>
            <label className="jobDescription">
              Job Desc.:
              <input
                type="text"
                name="jobDescription"
                id="jobDescription"
                value={employee.jobDescription}
                onChange={handleInputOnChange}
                required
              />
            </label>
            <label className="isFullTime">
              Full Time Employee:
              <p>
                <input
                  className="checkBoxInput"
                  type="checkbox"
                  defaultChecked="{employee.isFullTime}"
                  name="isFullTime"
                  id="isFullTime"
                  value={employee.isFullTime}
                  onChange={handleInputOnChange}
                />
                (check box for yes)
              </p>
            </label>
            <label className="phoneNumber">
              Phone #:
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={employee.phoneNumber}
                onChange={handleInputOnChange}
                required
              />
            </label>
            <label className="email">
              Email:
              <input
                type="text"
                name="email"
                id="email"
                value={employee.email}
                onChange={handleInputOnChange}
                required
              />
            </label>
            <label className="ptoHours">
              PTO (Hours):
              <input
                type="text"
                name="ptoHours"
                id="ptoHours"
                value={employee.ptoHours}
                onChange={handleInputOnChange}
                required
              />
            </label>
            <label className="salary">
              Salary:
              <input
                type="text"
                name="salary"
                id="salary"
                value={employee.salary}
                onChange={handleInputOnChange}
                required
              />
            </label>
            <label className="interestingFact">
              Interesting Fact:
              <input
                type="text"
                name="interestingFact"
                id="interestingFact"
                value={employee.interestingFact}
                onChange={handleInputOnChange}
                required
              />
            </label>
            <label className="gender">
              Gender:
              <input
                type="text"
                name="gender"
                id="gender"
                value={employee.gender}
                onChange={handleInputOnChange}
                required
              />
            </label>
            <label className="address">
              Address:
              <input
                type="text"
                name="address"
                id="address"
                value={employee.address}
                onChange={handleInputOnChange}
                required
              />
            </label>
            <label className="city">
              City:
              <input
                type="text"
                name="city"
                id="city"
                value={employee.city}
                onChange={handleInputOnChange}
                required
              />
            </label>
            <label className="state">
              State:
              <input
                type="text"
                name="state"
                id="state"
                value={employee.state}
                onChange={handleInputOnChange}
                required
              />
            </label>
            <label className="zip">
              Zip:
              <input
                type="text"
                name="zip"
                id="zip"
                value={employee.zip}
                onChange={handleInputOnChange}
                required
              />
            </label>
            <label className="emergencyContactPerson">
              Emerg. Contact:
              <input
                type="text"
                name="emergencyContactPerson"
                id="emergencyContactPerson"
                value={employee.emergencyContactPerson}
                onChange={handleInputOnChange}
                required
              />
            </label>
            <label className="emergencyContactPhone">
              Emerg. Ctct. #:
              <input
                type="text"
                name="emergencyContactPhone"
                id="emergencyContactPhone"
                value={employee.emergencyContactPhone}
                onChange={handleInputOnChange}
                required
              />
            </label>
            <label className="emergencyContactAddress">
              Emerg. Ctct. Address:
              <input
                type="text"
                name="emergencyContactAddress"
                id="emergencyContactAddress"
                value={employee.emergencyContactAddress}
                onChange={handleInputOnChange}
                required
              />
            </label>
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
