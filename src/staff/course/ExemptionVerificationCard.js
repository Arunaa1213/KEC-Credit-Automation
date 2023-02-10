import { useLocation } from "react-router-dom";
import axios from "axios";
function ExcemptionVerificationCard() {
  const location = useLocation();
  function updateStatus(inputs) {
    axios
      .post(
        "http://localhost:81/KEC-Credit-Automation-DB/updateApprove.php",
        inputs
      )
      .then(function (response) {
        console.log(response.data);
        // navigate("/studenthome");
      });
  }
  return (
    <div className="w-screen p-6 rounded-md shadow-md bg-pELC flex flex-col justify-center items-center">
      <div className="border border-pMC w-fit sm:max-w-1/2">
        <table className="w-full text-sm text-left text-pMC ">
          <tbody>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className=" px-6 py-4 font-medium text-pC whitespace-nowrap bg-pC dark:text-white dark:bg-gray-800"
              >
                Roll Number
              </th>
              <td className="px-6 py-4 uppercase">{location.state.roll}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
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
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
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
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
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
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
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
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
              >
                Academic course credit
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
                Exemption course code
              </th>
              <td className="px-6 py-4 ">{location.state.course_code}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
              >
                Exemption course credit
              </th>
              <td className="px-6 py-4 ">{location.state.course_credit}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
              >
                Exemption course name
              </th>
              <td className="px-6 py-4 ">{location.state.course_name}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
              >
                Email
              </th>
              <td className="px-6 py-4 ">{location.state.studentEmail}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
              >
                Batch
              </th>
              <td className="px-6 py-4 ">{location.state.studentBatch}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
              >
                Department
              </th>
              <td className="px-6 py-4 ">{location.state.department}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
              >
                Section
              </th>
              <td className="px-6 py-4 ">{location.state.section}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
              >
                Current Semester
              </th>
              <td className="px-6 py-4 ">{location.state.currentSemester}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center mt-4">
        <button
          onClick={async () => {
            const inputs = { username: location.state.roll };
            updateStatus(inputs);
          }}
          type="submit"
          className="bg-pLC hover:bg-pMC text-pC hover:text-pLC font-bold py-2 px-4 border-b-4 border-pC rounded"
        >
          Approve
        </button>
      </div>
    </div>
  );
}

export default ExcemptionVerificationCard;
