import { Routes, Route, HashRouter, Link } from "react-router-dom";
import StudentNav from "../student/StudentNav";
import AddNPTELCourse from "./course/AddNPTELCourse";
import OptCourse from "./course/OptCouse";
import Exemption from "./Exemption";
function StudentHome() {
  return (
    <div>
      <StudentNav />
      <Link to="/addnptelcourse">Add NPTEL Course</Link>
      <Link to="/optcourse">Opt course</Link>
      <Link to="/exemption">Exemption</Link>
      <Routes>
        <Route path="/addnptelcourse" element={<addNPTELCourse />} />
        <Route path="/optcourse" element={<OptCourse />} />
        <Route path="/exemption" element={<Exemption />} />
      </Routes>
    </div>
  );
}

export default StudentHome;
