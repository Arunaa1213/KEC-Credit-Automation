import StudentNav from "../student/StudentNav";
import { useLocation } from "react-router-dom";
import AboutStudent from "./AboutStudent";
import StudentDashBoard from "./StudentDashboard";

function StudentHome(state) {
  const location = useLocation();
  return (
    <div className="bg-pELC w-full h-full px-auto">
      <div className="mb-3">
        <StudentNav
          user_roll={location.state.user_roll}
          user_name={location.state.user_name}
        />
      </div>
      <div className="flex justify-around flex-wrap">
        <StudentDashBoard />
        <div>
          <div className="mb-8">
            <div className=" h-28 w-28 mx-auto mt-12 mb-4 pt-4 pl-8 text-6xl font-extrabold font-mono rounded-full border-8 border-pC ">
              7
            </div>
            <p className="text-right">Credits Obtained</p>
          </div>
          <AboutStudent
            user_roll={location.state.user_roll}
            user_name={location.state.user_name}
            user_email={location.state.user_email}
            user_batch={location.state.user_batch}
            user_dept={location.state.user_dept}
            user_sec={location.state.user_sec}
            user_sem={location.state.user_sem}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default StudentHome;
