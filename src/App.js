import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import StaffLogin from "./staff/login/StaffLogin";
import StaffHome from "./staff/StaffHome";
import StudentLogin from "./student/login/StudentLogin";
import StudentHome from "./student/StudentHome";

function App() {
  return (
    <div >
      <HashRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <Home />
            </div>
          } />
          <Route path="/staffhome" element={
            <div>
              <StaffHome />
            </div>
          } />
          <Route path="/studenthome" element={
            <div>
              <StudentHome />
            </div>
          } />
          <Route path="/stafflogin" element={
            <div>
              <StaffLogin />
            </div>
          } />
          <Route path="/studentlogin" element={
            <div>
              <StudentLogin />
            </div>
          } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;