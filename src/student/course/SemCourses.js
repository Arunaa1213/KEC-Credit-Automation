import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function SemCourses () {
  const location = useLocation()
  const navigate = useNavigate()
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
  const inputs = {
    user_dept: location.state.user_dept,
    user_regulation: location.state.user_regulation,
    user_sem: location.state.user_sem
  }

  return (
    <div className="flex justify-center items-center h-screen">
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
                <td>{course.CourseTitle}</td>
                <td>
                  <div className="max-w-fit">
                    {course.exempted === 0 && (
                      <button

                      
                        onClick={() => {
                          navigate('/exemption', {
                            state: {
                              course_code : course.CourseCode,
                              course_name : course.CourseTitle,
                              course_sem : course.semester,
                              course_regulation : course.regulation,
                              course_category : course.Category,
                              course_credit : course.Credit,
                              user_roll : location.state.user_roll
                            }
                          })
                        }}
                        className="bg-pLC hover:bg-pMC text-pC hover:text-pLC font-bold py-2 px-4 ml-4 rounded-full whitespace-nowrap	"
                      >
                        <p>Exempt</p>
                      </button>
                    )}
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
