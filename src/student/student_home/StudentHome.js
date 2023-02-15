import { useLocation } from "react-router-dom";
import AboutStudent from "./AboutStudent";
import StudentDashBoard from "./StudentDashboard";
import StudentNav from "./StudentNav";

function StudentHome(state) {
  const location = useLocation();
  return (
    <div className="bg-pELC w-screen h-screen px-auto">
      <div className="mb-3">
        <StudentNav
          user_roll={location.state.user_roll}
          user_name={location.state.user_name}
          user_email={location.state.user_email}
          user_dept={location.state.user_dept}
          user_sec={location.state.user_sec}
          user_regulation={location.state.user_regulation}
          user_sem={location.state.user_sem}
        />
      </div>
      <div className="flex justify-around flex-wrap h-3/4">
        <StudentDashBoard user_roll={location.state.user_roll} />
        <div className="mt-40">
          {/* <div className="flex justify-evenly">
            <div className="mb-8">
              <div className=" h-28 w-28 mx-auto mt-12 mb-4 pt-4 pl-8 text-6xl font-extrabold font-mono rounded-full border-8 border-pC ">
                {location.state.user_entire_credit}
              </div>
              <p className="text-right">Credits Obtained</p>
            </div>
            <div className="mb-8">
              <div className=" h-28 w-28 mx-auto mt-12 mb-4 pt-4 pl-8 text-6xl font-extrabold font-mono rounded-full border-8 border-pC ">
                {location.state.user_balance_credit}
              </div>
              <p className="text-right">Credits Balance</p>
            </div>
          </div> */}
          <AboutStudent
            user_roll={location.state.user_roll}
            user_name={location.state.user_name}
            user_email={location.state.user_email}
            user_dept={location.state.user_dept}
            user_sec={location.state.user_sec}
            user_entire_credit={location.state.user_entire_credit}
            user_balance_credit={location.state.user_balance_credit}
          />
        </div>
      </div>
      <div />
    </div>
  );
}

export default StudentHome;
