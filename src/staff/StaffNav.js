import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const StaffNav = (state) => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center flex-wrap h-42 relative">
      <div className="text-pC flex justify-between items-center h-24 w-full mx-12  font-bold">
        <Link to="/staffHome">
          <h1 className="text-3xl ml-4 align-middle	"> Staff Home </h1>
        </Link>

        <ul className="hidden md:flex">
          <li className="p-4">
            <Link
              to="/addcourse"
              state={{
                user_email: location.state.user_email,
                user_name:  location.state.user_name,
              }}
            >
              Add course
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="/addcourse"
              state={{
                user_email: location.state.user_email,
                user_name:  location.state.user_name,
              }}
            >
              Exemption Verification
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block sm:hidden mr-4 align-middle">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "z-10 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500 bg-pC text-pLC sm:hidden"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-xl sm:text-3xl font-bold m-4">
            {" "}
            Staff Home{" "}
          </h1>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-pLC">
              <Link to="/addcourse">Add course</Link>
            </li>
            <li className="p-4 border-b border-pLC">
              <Link to="/exemption">Exemption Verification</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr class="w-96 h-1 mx-auto bg-pC border-0 rounded" />
    </div>
  );
};

export default StaffNav;
