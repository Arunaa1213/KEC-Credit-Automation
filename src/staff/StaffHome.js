import { Routes, Route, Link } from "react-router-dom";
import AddCourse from "./course/AddCourse";
function StaffHome() {
  return (
    <div>
      <Link to="/addcourse">Add course</Link>
    </div>
  );
}

export default StaffHome;
