import { Routes, Route, Link } from "react-router-dom";
import StudentNav from "../student/StudentNav";
import OptCourse from "./course/OptCouse";
import Exemption from "./Exemption";
function StudentHome() {
  return (
    <div>
      <StudentNav />
    </div>
  );
}

export default StudentHome;
