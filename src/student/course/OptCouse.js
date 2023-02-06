import { useState , useEffect } from "react";
import axios from "axios";

export default function OptCourse() {

const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
 
    function getUsers() {
        axios.get('http://localhost:81/KEC-Credit-Automation-DB/optcourse.php').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    return (
        <div>
            <div className="flex flex-col items-center mt-4">
                <h2>COLLEGE OFFERING COURSES</h2>
            </div>
            <table className="table-fixed w-11/12 border-separate border-spacing-1 text-center">
              <thead className="bg-pMC text-pLC border border-pC">
                <tr>
                  <th className="w-1/4 p-0 sm:px-4 py-2 border border-pLC break-words">Course Code</th>
                  <th className="w-1/4 p-0 sm:px-4 py-2 border border-pLC break-words">Course Name</th>
                  <th className="w-1/4 p-0 sm:px-4 py-2 border border-pLC break-words">Weeks</th>
                  <th className="w-1/4 p-0 sm:px-4 py-2 border border-pLC break-words">For</th>
                  <th className="w-1/4 p-0 sm:px-4 py-2 border border-pLC break-words">Credits</th>
                </tr>
              </thead>
              <tbody>
              {users.map((user, key) =>
                        <tr key={key} className="bg-pLC">
                            <td className="border border-pC">{user.course_code}</td>
                            <td className="border border-pC">{user.course_name}</td>
                            <td className="border border-pC">{user.course_duration}</td>
                            <td className="border border-pC">{user.course_is_for} Year</td>
                            <td className="border border-pC">{user.course_credit}</td>
                            <td className="border border-pC" >
                                <button onClick={()=>{}} className="bg-pLC hover:bg-pMC text-pC hover:text-pLC font-bold py-2 px-4 rounded-full whitespace-nowrap	"><p>Opt-In</p></button>
                            </td>
                        </tr>
                    )}
              </tbody>
            </table>
        </div>
    );
}