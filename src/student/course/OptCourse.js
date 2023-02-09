import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function OptCourse() {
  const navigate = useNavigate();
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const [input, setInputs] = useState();
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
  function handleSubmit(e, value) {
    e.preventDefault();
    // console.log(value);
    setInputs(value);
    // console.log(input);
    var inputs = { student_id: location.state.user_roll, course_code: input };

    console.log(inputs);
    axios
      .post(
        "http://localhost:81/KEC-Credit-Automation-DB/optedcourses.php",
        inputs
      )
      .then(function(response) {
        console.log(response.data);
      });
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
        <div className="flex flex-col items-center text-3xl font-extrabold pt-8 mb-4">
          <h2>COLLEGE OFFERING COURSES</h2>
        </div>
        <form>
          <table className="table-fixed w-11/12 border-separate border-spacing-1 text-center">
            <thead className="bg-pMC text-pLC border border-pC">
              <tr>
                <th className="w-1/4 p-0 sm:px-4 py-2 border border-pLC break-words">
                  Course Code
                </th>
                <th className="w-1/4 p-0 sm:px-4 py-2 border border-pLC break-words">
                  Course Name
                </th>
                <th className="w-1/4 p-0 sm:px-4 py-2 border border-pLC break-words">
                  Weeks
                </th>
                <th className="w-1/4 p-0 sm:px-4 py-2 border border-pLC break-words">
                  For
                </th>
                <th className="w-1/4 p-0 sm:px-4 py-2 border border-pLC break-words">
                  Credits
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, key) => (
                <tr key={key} className="bg-pLC">
                  <td className="border border-pC" name="course_code">
                    {user.course_code}
                  </td>
                  <td className="border border-pC" name="course_name">
                    {user.course_name}
                  </td>
                  <td className="border border-pC" name="course_duration">
                    {user.course_duration}
                  </td>
                  <td className="border border-pC" name="course_year">
                    {user.course_is_for} Year
                  </td>
                  <td className="border border-pC" name="course_credit">
                    {user.course_credit}
                  </td>
                  <td className="border border-pC">
                    <button
                      className="bg-pLC hover:bg-pMC text-pC hover:text-pLC font-bold py-2 px-4 rounded-full whitespace-nowrap	"
                      onClick={(e) => handleSubmit(e, user.course_code)}
                    >
                      <p>Opt-In</p>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}
