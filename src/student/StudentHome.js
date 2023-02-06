import { Link } from "react-router-dom";
import StudentNav from "../student/StudentNav";
import { useLocation } from "react-router-dom";
function StudentHome(state) {
  const location = useLocation();
  return (
    <div>
      <StudentNav />
      <p className="m-[200px]">helo {location.state.current_user}</p>
    </div>
  );
}

export default StudentHome;
