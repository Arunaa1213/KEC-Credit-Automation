import { Routes, Route, Link } from "react-router-dom";
import AddCourse from "./course/AddCourse";
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
