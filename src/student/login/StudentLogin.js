import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function StudentLogin () {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState([])

  const handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(inputs)
    axios
      .post(
        'http://localhost:81/KEC-Credit-Automation-DB/studentLogin.php',
        inputs
      )
      .then(function (response) {
        console.log('after login', response.data)
        if (response.data.length === 0) {
          alert('invalid')
        } else {
          navigate('/studenthome', {
            state: {
              user_roll: response.data[0]['roll_no'],
              user_name: response.data[0]['student_name'],
              user_email: response.data[0]['student_email'],
              user_dept: response.data[0]['department'],
              user_sec: response.data[0]['section'],
              user_entire_credit: response.data[0]['entire_credit'],
              user_balance_credit: response.data[0]['balance_credit'],
              user_regulation: response.data[0]['regulation'],
              user_sem: response.data[0]['semester']
            }
          })
        }
      })
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-pELC">
      <button className="absolute left-16 top-10" onClick={() => navigate(-1)}>
        {' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="h-4 inline m-2"
        >
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
      </button>
      <div className="w-3/4 min-w-max max-w-xl p-6 m-auto bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-center text-pC ">
          Student Log In
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-pMC"
            >
              Roll Number
            </label>
            <input
              required
              name="username"
              type="text"
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-pC bg-pLC border rounded-md focus:border-pC focus:outline-none focus:bg-white"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-pMC"
            >
              Password
            </label>
            <input
              required
              name="password"
              type="password"
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-pC bg-pLC border rounded-md focus:border-pC focus:outline-none focus:bg-white"
            />
          </div>

          <div className="mt-6 flex flec-col justify-center">
            <button
              type="submit"
              className="px-4 py-2 tracking-wide text-white font-semibold transition-colors duration-200 transform bg-pC rounded-md hover:bg-pLC hover:text-pC focus:outline-none focus:bg-pMC"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default StudentLogin
