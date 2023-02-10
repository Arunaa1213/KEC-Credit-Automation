import { useLocation } from "react-router-dom";
import StaffNav from "./StaffNav";
import AboutStaff from "./AboutStaff";
import StaffDashBoard from "./StaffDashboard";

function StaffHome(state) {
  const location = useLocation();

  return (
    <div className="bg-pELC w-full h-full px-auto">
      <div className="mb-3">
        <StaffNav />
      </div>
      <div className="flex justify-around flex-wrap">
        <StaffDashBoard user_email={location.state.user_email} />
        <div>
          <AboutStaff
            user_name={location.state.user_name}
            user_email={location.state.user_email}
            user_batch={location.state.user_batch}
            user_dept={location.state.user_dept}
            user_section={location.state.user_section}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default StaffHome;
