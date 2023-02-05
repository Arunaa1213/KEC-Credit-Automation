import { Routes, Route, Link } from "react-router-dom";
import StudentLogin from "./student/login/StudentLogin";
import StaffLogin from "./staff/login/StaffLogin";
function Home() {
  return (
    <div>
      <div>home</div>
      <Link to="studentLogin">Student Login</Link>
      <Link to="staffLogin">Staff Login</Link>
    </div>
  );
}

export default Home;
