import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function ExcemptionVerificationCard (state) {
  const location = useLocation()
  const [users, setUsers] = useState([])
  const inputs = { username: location.state.roll }

  axios
    .post(
      'http://localhost:81/KEC-Credit-Automation-DB/getByRollNo.php',
      inputs
    )
    .then(function (response) {
      setUsers(response.data)
      console.log(
        'file: ExemptionVerificationCard.js:7 ~ ExcemptionVerificationCard ~ users',
        users
      )
    })

  return (
    <div className="w-screen h-screen p-6 rounded-md shadow-md bg-pELC flex flex-col justify-center items-center">
      <div className="border border-pMC w-1/2">
        <table className="w-full text-sm text-left text-pMC ">
          <tbody>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className=" px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
              >
                Name
              </th>
              <td className="px-6 py-4 uppercase">{location.state.roll}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
              >
                Roll Number
              </th>
              <td className="px-6 py-4 uppercase">
                {location.state.academic_course_name}
              </td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
              >
                Email
              </th>
              <td className="px-6 py-4">{location.state.semester}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
              >
                Department
              </th>
              <td className="px-6 py-4 uppercase">
                {location.state.type_of_course}
              </td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
              >
                Batch
              </th>
              <td className="px-6 py-4">
                {location.state.academic_course_code}
              </td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
              >
                Section
              </th>
              <td className="px-6 py-4 uppercase">
                {location.state.academic_course_credit}
              </td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
              >
                Semester
              </th>
              <td className="px-6 py-4 ">{location.state.course_code}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
              >
                Semester
              </th>
              <td className="px-6 py-4 ">{location.state.course_credit}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
              >
                Semester
              </th>
              <td className="px-6 py-4 ">{location.state.course_name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center mt-4">
        <button
          type="submit"
          className="bg-pLC hover:bg-pMC text-pC hover:text-pLC font-bold py-2 px-4 border-b-4 border-pC rounded"
        >
          Approve
        </button>
      </div>
    </div>
  )
}

export default ExcemptionVerificationCard
