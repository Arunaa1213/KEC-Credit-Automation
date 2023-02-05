import { useState , useEffect } from "react";
import axios from "axios";

export default function OptCourse() {

const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
 
    function getUsers() {
        axios.get('http://localhost:81/credit_automation/optcourse.php').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    return (
        <div>
            <table className="table-fixed">
              <thead>
                <tr>
                  <th className="w-1/4 px-4 py-2">Course Code</th>
                  <th className="w-1/4 px-4 py-2">Course Name</th>
                  <th className="w-1/4 px-4 py-2">Weeks</th>
                  <th className="w-1/4 px-4 py-2">For</th>
                  <th className="w-1/4 px-4 py-2">Credits</th>
                </tr>
              </thead>
              <tbody>
              {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.course_code}</td>
                            <td>{user.course_name}</td>
                            <td>{user.course_duration}</td>
                            <td>{user.course_is_for} Year</td>
                            <td>{user.course_credit}</td>
                            <td className="" >
                                <button onClick={()=>{}} className="">Opt In</button>
                            </td>
                        </tr>
                    )}
              </tbody>
            </table>
        </div>
    );
}