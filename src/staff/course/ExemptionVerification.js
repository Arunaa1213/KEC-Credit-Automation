import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function ExemptionVerification () {
  const navigate = useNavigate()

  const [users, setUsers] = useState([])
  useEffect(() => {
    getUsers()
  }, [])

  function getUsers () {
    axios
      .get('http://localhost:81/KEC-Credit-Automation-DB/displayRequest.php')
      .then(function (response) {
        setUsers(response.data)
      })
  }

  return (
    <div className="bg-pELC text-pC h-screen">
      <button className="absolute left-12 top-6" onClick={() => navigate(-1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="h-4 inline m-2"
        >
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
      </button>
      <div className="h-full">
        <div className="flex flex-col items-center ">
          <h2 className="text-3xl font-extrabold pt-8 mb-4">
            REQUESTED EXEMPTIONS
          </h2>
          <table className="table-fixed border-separate border-spacing-1 text-center w-1/2">
            <thead className="bg-pMC text-pLC border border-pC">
              <tr>
                <th className="w-1/2 p-0 sm:px-4 py-2 border border-pLC break-words">
                  Roll Number
                </th>
                <th className="w-1/2 p-0 sm:px-4 py-2 border border-pLC break-words">
                  Academic Course Name
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, key) => (
                <tr key={key}>
                  <td className="border border-pC bg-pLC">{user.roll}</td>
                  <td className="border border-pC bg-pLC">
                    {user.academic_course_name}{' '}
                  </td>
                  <td><div className="max-w-fit">
                    <button
                      onClick={() => {
                        navigate("/exemptionverificationcard", {
                        state: {
                            roll:user.roll,
                            academic_course_name:user.academic_course_name,
                            semester:user.semester,
                            type_of_course:user.type_of_course,
                            academic_course_code:user.academic_course_code,
                            academic_course_credit:user.academic_course_credit,
                            course_code:user.course_code,
                            course_credit:user.course_credit,
                            course_name:user.course_name
                        },
                      });}}
                      className="bg-pLC hover:bg-pMC text-pC hover:text-pLC font-bold py-2 px-4 rounded-full whitespace-nowrap	"
                    >
                      <p>View</p>
                    </button>
                  </div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// {/* <td className="border border-pC" > */}
// {/* </td> */}
//     {/* <th className="w-1/4 p-0 sm:px-4 py-2 border border-pLC break-words">Semester</th>
//       <th className="w-1/4 p-0 sm:px-4 py-2 border border-pLC break-words">Type of courses</th>
//       <th className="w-1/4 p-0 sm:px-4 py-2 border border-pLC break-words">Academic Course Code</th> */}
//     {/* <th className="w-1/4 p-0 sm:px-4 py-2 border border-pLC break-words">Academic Course Credit</th>
//       <th className="w-1/4 p-0 sm:px-4 py-2 border border-pLC break-words">Course Code</th>
//       <th className="w-1/4 p-0 sm:px-4 py-2 border border-pLC break-words">Course Credit</th>
//       <th className="w-1/4 p-0 sm:px-4 py-2 border border-pLC break-words">Course Name</th> */}
//   {/* <td className="border border-pC">{}</td>
//             <td className="border border-pC">{}</td>
//             <td className="border border-pC">{} </td> */}
//   {/* <td className="border border-pC">{}</td> */}
//   {/* <td className="border border-pC">{}</td>
//             <td className="border border-pC">{}</td>
//             <td className="border border-pC">{}</td> */}
