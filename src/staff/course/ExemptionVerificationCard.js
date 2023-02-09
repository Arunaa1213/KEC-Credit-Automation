import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function ExcemptionVerificationCard (state) {
  const location = useLocation()
  const [users, setUsers] = useState([])
  const inputs = {username:location.state.roll};

    axios
    .post(
      'http://localhost:81/KEC-Credit-Automation-DB/getByRollNo.php',
      inputs
      )
      .then(function (response) {
        setUsers(response.data)
        console.log("file: ExemptionVerificationCard.js:7 ~ ExcemptionVerificationCard ~ users", users);
      })
  

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-pMC ">
          <tbody>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Name
              </th>
              <td className="px-6 py-4 uppercase">{location.state.roll}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
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
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Email
              </th>
              <td className="px-6 py-4">{location.state.semester}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
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
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
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
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
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
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Semester
              </th>
              <td className="px-6 py-4 ">{location.state.course_code}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Semester
              </th>
              <td className="px-6 py-4 ">{location.state.course_credit}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Semester
              </th>
              <td className="px-6 py-4 ">{location.state.course_name}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ExcemptionVerificationCard
