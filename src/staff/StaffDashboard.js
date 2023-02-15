import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function StaffDashBoard() {
  const location = useLocation();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getCourses();
  }, []);

  function getCourses() {
    var inputs = [];
    inputs = { email: location.state.user_email };

    axios
      .post(
        "http://localhost:81/KEC-Credit-Automation-DB/coursedetails.php",
        inputs
      )
      .then(function(response) {
        setUsers(response.data);
      });
  }
  return (
    <div className="text-pC">
        <h1 className="text-xl font-semibold sm:text-2xl md:text-2xl ml-8 mb-8 md:-ml-12">
          My Courses
        </h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-pMC m-4 md:m-0 max-w-1/2 min-w-3/5">
            <thead className="text-xs text-pLC uppercase bg-pC ">
              <tr>
                <th scope="col" className="md:px-6 md:py-3 ">
                  Course code
                </th>
                <th scope="col" className="md:px-6 md:py-3">
                  Course name
                </th>
                <th scope="col" className="md:px-6 md:py-3">
                  Course duration
                </th>
                <th scope="col" className="md:px-6 md:py-3">
                  Course Credit
                </th>
              </tr>
            </thead>
            <tbody>
              {console.log(users)}
              {users.map((user) => 
                 <tr className="bg-pLC border-b dark:border-pC">
                  <th
                    scope="row"
                    className="md:px-6 py-4 font-medium text-pC whitespace-nowrap"
                  >
                    {user.course_code}
                  </th>
                  <td className="md:px-6 py-4 text-pC  ">{user.course_name}</td>
                  <td className="md:px-6 py-4 text-pC  ">{user.course_duration}</td>
                  <td className="md:px-6 py-4 text-pC  ">{user.course_credit}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default StaffDashBoard;
