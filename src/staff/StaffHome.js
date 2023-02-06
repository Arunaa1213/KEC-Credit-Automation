import StaffNav from "./StaffNav";
import { useLocation } from "react-router-dom";
function StaffHome(state) {
  const location = useLocation();
  return (
    <div>
      <StaffNav />
      <p className="m-[200px]">helo {location.state.current_user}</p>
    </div>
  );
}

export default StaffHome;
