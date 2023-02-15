import axios from 'axios'
import { useEffect, useState } from 'react'
function CollegeOfferCoursesTable (student) {
  console.log(student)
  var inputs = { roll: student.user_roll }
  const [prevdata, setPrevdata] = useState([])
  useEffect(() => {
    axios
      .post(
        'http://localhost:81/KEC-Credit-Automation-DB/getcollegecourses.php',
        inputs
      )
      .then(function (response) {
        setPrevdata(response.data)
        console.log('response', response.data)
      })
  }, [])

  return (
    <div className="text-pC ">
      <h1 className="text-xl font-semibold sm:text-2xl md:text-2xl mb-4 ml-8 md:-ml-12">
        College Offered Courses
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-pMC m-4 md:m-0 max-w-1/2 min-w-3/5">
          <thead className="text-xs text-pLC uppercase bg-pC ">
            <tr>
              <th scope="col" className="md:px-6 md:py-3 ">
                Course code
              </th>
              <th scope="col" className="md:px-6 md:py-3">
                course name
              </th>
              <th scope="col" className="md:px-6 md:py-3">
                Total Credit
              </th>
              <th scope="col" className="md:px-6 md:py-3">
                Used credit
              </th>
              <th scope="col" className="md:px-6 md:py-3">
                Balance Credit
              </th>
            </tr>
          </thead>
          <tbody>
            {prevdata.map((e, k) => (
              <tr className="bg-pLC border-b text-pC">
                <td className="md:px-6 py-4">{e.course_code}</td>
                <td className="md:px-6 py-4">{e.course_name}</td>
                <td className="md:px-6 py-4">{e.total_credit}</td>
                <td className="md:px-6 py-4">{e.credit_used}</td>
                <td className="md:px-6 py-4">{e.credit_balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CollegeOfferCoursesTable
