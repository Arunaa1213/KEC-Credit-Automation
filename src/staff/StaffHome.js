import StaffNav from "../staff/StaffNav";
import { Routes, Route, HashRouter, Link } from "react-router-dom";
import AddCourse from "./course/AddCourse";
import AddNPTELCourse from "../student/course/AddNPTELCourse";
function StaffHome() {
  return (
    <div>
      <Link to="/addcourse">Add course</Link>

      <Routes>
        <Route path="/addcourse" element={<AddCourse />} />
      </Routes>
    </div>
  );
}

export default StaffHome;
