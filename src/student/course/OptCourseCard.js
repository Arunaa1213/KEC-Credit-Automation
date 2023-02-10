import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function OptCourseCard(state) {
  const navigate = useNavigate();
  const location = useLocation();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get("http://localhost:81/KEC-Credit-Automation-DB/optcourse.php")
      .then(function(response) {
        // console.log(response.data);
        setUsers(response.data);
      });
  }
  function handleSubmit(e, value, id) {
    e.preventDefault();
    // console.log(value);
    // setInputs(value);
    // console.log(input);
    var inputs = { student_id: location.state.student_id, course_code: value };

    console.log(inputs);
    axios
      .post(
        "http://localhost:81/KEC-Credit-Automation-DB/optedcourses.php",
        inputs
      )
      .then(function(response) {
        console.log(response);
        if (response.data.status === 0)
          alert("Only one course should be selected");
        // else {
        //   alert("Course has been registered successfully");
        // }
      })
      // .catch((error) => window.alert("OOPS!!!!"));
  }
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
      <form className=" w-1/2 flex flex-col items-center mt-4">
        <div className="border border-pMC w-1/2">
          <table className="w-full text-sm text-left text-pMC ">
            <tbody>
              <tr className="border-b border-pMC">
                <th
                  scope="row"
                  className=" px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
                >
                  Course Code
                </th>
                <td className="px-6 py-4 uppercase">
                  {location.state.course_code}
                </td>
              </tr>
              <tr className="border-b border-pMC">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
                >
                  Course Name
                </th>
                <td className="px-6 py-4 uppercase">
                  {location.state.course_name}
                </td>
              </tr>
              <tr className="border-b border-pMC">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
                >
                  Weeks
                </th>
                <td className="px-6 py-4">{location.state.course_duration}</td>
              </tr>
              <tr className="border-b border-pMC">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
                >
                  For
                </th>
                <td className="px-6 py-4 uppercase">
                  {location.state.course_is_for}
                </td>
              </tr>
              <tr className="border-b border-pMC">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-pLC dark:text-white dark:bg-gray-800"
                >
                  Credits
                </th>
                <td className="px-6 py-4">{location.state.course_credit}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center mt-4">
          <button
            type="submit"
            className="bg-pLC hover:bg-pMC text-pC hover:text-pLC font-bold py-2 px-4 border-b-4 border-pC rounded"
            onClick={(e) => handleSubmit(e, location.state.course_code)}
          >
            Opt In
          </button>
        </div>
      </form>
    </div>
  );
}

export default OptCourseCard;
