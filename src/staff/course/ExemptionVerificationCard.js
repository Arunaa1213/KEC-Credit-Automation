import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
function ExcemptionVerificationCard() {
  const location = useLocation()
  const navigate = useNavigate()
  function updateStatus(inputs) {
    axios
      .post(
        'http://localhost:81/KEC-Credit-Automation-DB/updateApprove.php',
        inputs
      )
      .then(function (response) {
        console.log(response.data)
      })
  }
  function updatePrevious(inputs) {
    axios
      .post(
        'http://localhost:81/KEC-Credit-Automation-DB/updatePrevious.php',
        inputs
      )
      .then(function (response) {
        console.log(response.data)
      })
  }
  return (
    <div className="w-screen p-6 rounded-md shadow-md bg-pELC flex flex-col justify-center items-center">
      <button className="absolute left-12 top-6" onClick={() => navigate(-1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="h-4 inline m-2"
        >
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
      </button>
      <div className=' grid grid-cols-2 gap-10'>
        <h2 className="text-3xl font-extrabold pt-8 mb-4">
          Student Details
        </h2><h2 className="text-3xl font-extrabold pt-8 mb-4">
          Requested course to be Exepted
        </h2>
        <div className="border border-pMC w-fit sm:max-w-1/2 mb-10">
          <table className="w-full text-sm text-left text-pMC ">
            <tbody>
              <tr className="border-b border-pMC">
                <th
                  scope="row"
                  className=" px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
                >
                  Roll Number
                </th>
                <td className="px-6 py-4 uppercase">{location.state.roll}</td>
              </tr>
              <tr className="border-b border-pMC">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
                >
                  Name
                </th>
                <td className="px-6 py-4 uppercase">
                  {location.state.student_name}
                </td>
              </tr>

              <tr className="border-b border-pMC">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
                >
                  Email
                </th>
                <td className="px-6 py-4 ">{location.state.studentEmail}</td>
              </tr>
              <tr className="border-b border-pMC">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
                >
                  Batch
                </th>
                <td className="px-6 py-4 ">{location.state.studentBatch}</td>
              </tr>
              <tr className="border-b border-pMC">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
                >
                  Department
                </th>
                <td className="px-6 py-4 ">{location.state.department}</td>
              </tr>
              <tr className="border-b border-pMC">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
                >
                  Section
                </th>
                <td className="px-6 py-4 ">{location.state.section}</td>
              </tr>
              <tr className="border-b border-pMC">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
                >
                  Current Semester
                </th>
                <td className="px-6 py-4 ">{location.state.currentSemester}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" w-fit sm:max-w-1/2 mb-10">

          <table className=' max-h-3/4 border border-pMC'>
            <tbody>
              <tr className="border-b border-pMC">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
                >
                  Academic course name
                </th>
                <td className="px-6 py-4">
                  {location.state.academic_course_name}
                </td>
              </tr>
              <tr className="border-b border-pMC">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
                >
                  Type of course
                </th>
                <td className="px-6 py-4 uppercase">
                  {location.state.type_of_course}
                </td>
              </tr>
              <tr className="border-b border-pMC">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
                >
                  Academic course code
                </th>
                <td className="px-6 py-4">
                  {location.state.academic_course_code}
                </td>
              </tr>
              <tr className="border-b border-pMC">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
                >
                  Academic course credit
                </th>
                <td className="px-6 py-4 uppercase">
                  {location.state.academic_course_credit}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h2 className="text-3xl font-extrabold pt-8 mb-4">
        Courses used for Exemption
      </h2>
      <div className='flex flex-wrap justify-center'>

        <table className="border border-pMC w-fit sm:max-w-1/2 m-10">
          <tbody>
            {/* ------------ */}
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
              >
                Exemption course code 1
              </th>
              <td className="px-6 py-4 ">{location.state.course_code}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
              >
                Exemption course credit 1
              </th>
              <td className="px-6 py-4 ">{location.state.course_credit}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
              >
                Exemption course name 1
              </th>
              <td className="px-6 py-4 ">{location.state.course_name}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
              >
                Used credit 1
              </th>
              <td className="px-6 py-4 ">{location.state.used_credit1}</td>
            </tr>

          </tbody>
        </table>

        { location.state.course_code1 != '' ?   <table className="border border-pMC w-fit sm:max-w-1/2 m-10">
          <tbody>
            {/* ----- */}
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
              >
                Exemption course code 2
              </th>
              <td className="px-6 py-4 ">{location.state.course_code1}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
              >
                Exemption course credit 2
              </th>
              <td className="px-6 py-4 ">{location.state.course_credit1}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
              >
                Exemption course name 2
              </th>
              <td className="px-6 py-4 ">{location.state.course_name1}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
              >
                Used credit 2
              </th>
              <td className="px-6 py-4 ">{location.state.used_credit2}</td>
            </tr>
            {/* -------- */}

          </tbody>
        </table>: <div></div>}
        { location.state.course_code3 != '' ? <table className="border border-pMC w-fit sm:max-w-1/2 m-10">
          <tbody>
            {/* ------------ */}
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
              >
                Exemption course code 3
              </th>
              <td className="px-6 py-4 ">{location.state.course_code3}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
              >
                Exemption course credit 3
              </th>
              <td className="px-6 py-4 ">{location.state.course_credit3}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
              >
                Exemption course name 3
              </th>
              <td className="px-6 py-4 ">{location.state.course_name3}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC"
              >
                Used credit 3
              </th>
              <td className="px-6 py-4 ">{location.state.used_credit3}</td>
            </tr>

          </tbody>
        </table>: <div></div>}
      </div>
      <div className="flex flex-col items-center mt-4">
        <button
          onClick={async () => {
            updateStatus({ username: location.state.roll })
            if (
              location.state.used_credit1 + location.state.used_credit2 + location.state.used_credit3  ===
              location.state.academic_course_credit
            ) {
              updatePrevious({
                roll: location.state.roll,
                code: location.state.course_code,
                usedcredit: location.state.used_credit1
              })

              updatePrevious({
                roll: location.state.roll,
                code: location.state.course_code1,
                usedcredit: location.state.used_credit2
              })
            } else {
              alert('Credits sum not satisfied')
            }
          }}
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
