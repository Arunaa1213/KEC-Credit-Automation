import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function SemCourses() {
  const location = useLocation()
  const navigate = useNavigate()
  const inputs = {
    user_dept: location.state.user_dept,
    user_regulation: location.state.user_regulation,
    user_sem: location.state.user_sem
  }
  console.log(inputs);
  useEffect(() => {

    axios
      .post(
        'http://localhost:81/KEC-Credit-Automation-DB/semcourses.php',
        inputs
      )
      .then(function (response) {
        console.log(response.data)
        setCourses(response.data)
      })
  }, [])
  const [courses, setCourses] = useState([])


  return (
    <div className="flex flex-col justify-center items-center h-screen bg-pELC">
      <button className="absolute left-16 top-10" onClick={() => navigate(-1)}>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="h-4 inline m-2"
        >
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
      </button>
      <div className="mx-auto mb-10 text-3xl text-pC font-extrabold uppercase">
        <h2>Current Semester Courses</h2>
      </div>
      <table className="table-fixed  text-center w-1/2 h-1/2">
        <thead className="bg-pMC text-pLC border border-pC">
          <tr>
            <th className="w-1/2 p-0 sm:px-4 py-2 border border-pLC break-words">
              Course Type
            </th>
            <th className="w-1/2 p-0 sm:px-4 py-2 border border-pLC break-words">
              Course Code
            </th>
            <th className="w-1/2 p-0 sm:px-4 py-2 border border-pLC break-words">
              Course Name
            </th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, key) => {
            return (
              <tr key={key} className="bg-pLC border-b border-pC ">
                <td className="border-r border-pC">{course.Category}</td>

                <td className="border-r border-pC">{course.CourseCode}</td>
                <td>{(course.CourseTitle)}</td>
                <td>
                  <div className="max-w-fit">
                    {course.exempted == 0 ? (
                      <button

                        onClick={() => {
                          navigate('/exemption', {
                            state: {
                              course_code: course.CourseCode,
                              course_name: course.CourseTitle,
                              course_sem: course.semester,
                              course_regulation: course.regulation,
                              course_category: course.Category,
                              course_credit: course.Credit,
                              user_roll: location.state.user_roll
                            }
                          })
                        }}
                        className="bg-pLC hover:bg-pMC text-pC hover:text-pLC font-bold py-2 px-4 ml-4 rounded-full "
                      >
                        <p>Exempt</p>
                      </button>) : <p className="text-pC font-bold py-2 px-4 ml-4 rounded-full whitespace-nowrap	"> Core Subject</p>
                    }
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
