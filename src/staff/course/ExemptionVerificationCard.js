import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ExcemptionVerificationCard(state) {
  const location = useLocation();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const inputs = { username: location.state.roll };

  axios
    .post(
      "http://localhost:81/KEC-Credit-Automation-DB/getByRollNo.php",
      inputs
    )
    .then(function(response) {
      setUsers(response.data);
      console.log(
        "file: ExemptionVerificationCard.js:7 ~ ExcemptionVerificationCard ~ users",
        users
      );
    });

  return (
    <div className="w-screen h-screen p-6 rounded-md shadow-md bg-pELC flex flex-col justify-center items-center">
      <button className="absolute left-12 top-6" onClick={() => navigate(-1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="h-4 inline m-2"
        >
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
      </button>
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
  );
}

export default ExcemptionVerificationCard;
