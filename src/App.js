import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import AddCourse from './staff/course/AddCourse'
import StaffLogin from './staff/login/StaffLogin'
import AddNPTELCourse from './student/course/AddNPTELCourse'
import OptCourse from './student/course/OptCourse'
import StudentLogin from './student/login/StudentLogin'
import Exemption from './student/course/Exemption'
import SemCourses from '../src/student/course/SemCourses'
import AdminHome from './admin/AdminHome'
import ExemptionVerification from './staff/course/ExemptionVerification'
import ExcemptionVerificationCard from './staff/course/ExemptionVerificationCard'
import OptCourseCard from './student/course/OptCourseCard'
import StaffHome from './staff/StaffHome'
import StudentHome from './student/student_home/StudentHome'
function App () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/semcourses" element={<SemCourses />} />
          <Route path="/staffhome" element={<StaffHome />} />
          <Route path="/studenthome" element={<StudentHome />} />
          <Route path="/stafflogin" element={<StaffLogin />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/optcourse" element={<OptCourse />} />
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/exemption" element={<Exemption />} />
          <Route path="/addnptelcourse" element={<AddNPTELCourse />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route
            path="/exemptionverification"
            element={<ExemptionVerification />}
          />
          <Route
            path="/exemptionverificationcard"
            element={<ExcemptionVerificationCard />}
          />
          <Route path="/optcoursecard" element={<OptCourseCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
