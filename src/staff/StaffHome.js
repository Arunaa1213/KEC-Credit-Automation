import StaffNav from "./StaffNav";
import { useLocation } from "react-router-dom";
function StaffHome(state) {
  const location = useLocation();

  return (
    <div className="bg-pELC h-screen">
      <StaffNav
        user_email={location.state.user_email}
        user_name={location.state.user_name}
      />
    </div>
  );
}

export default StaffHome;
