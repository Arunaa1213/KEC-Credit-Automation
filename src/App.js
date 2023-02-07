import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Home";
import AddCourse from "./staff/course/AddCourse";
import StaffLogin from "./staff/login/StaffLogin";
import StaffHome from "./staff/StaffHome";
import AddNPTELCourse from "./student/course/AddNPTELCourse";
import OptCourse from "./student/course/OptCouse";
import StudentLogin from "./student/login/StudentLogin";
import StudentHome from "./student/StudentHome";
import Exemption from "./student/course/Exemption";
import AdminHome from "./admin/AdminHome";
import ExemptionVerification from "./staff/course/ExemptionVerification";
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staffhome" element={<StaffHome />} />
          <Route path="/studenthome" element={<StudentHome />} />
          <Route path="/stafflogin" element={<StaffLogin />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/optcourse" element={<OptCourse />} />
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/exemption" element={<Exemption />} />
          <Route path="/addnptelcourse" element={<AddNPTELCourse />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/exemptionverification" element={<ExemptionVerification/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
