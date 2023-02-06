import StudentNav from "../student/StudentNav";
import { useLocation } from "react-router-dom";
function StudentHome(state) {
  const location = useLocation();
  console.log("home", location.state.user_roll);
  return (
    <div className="bg-pELC h-screen">
      <StudentNav
        user_roll={location.state.user_roll}
        user_name={location.state.user_name}
      />
    </div>
  );
}

export default StudentHome;