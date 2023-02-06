import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const StudentNav = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };
  console.log("nav", location.state.user_roll);
  return (
    <div className="flex justify-around items-center flex-wrap h-42 relative">
      <div className="text-pC flex justify-between items-center h-24 w-full mx-12  font-bold">
        <Link to="/studentHome">
          <h1 className="text-3xl ml-4 align-middle	"> Student Home </h1>
        </Link>

        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link
              to="/addnptelcourse"
              state={{
                user_roll: location.state.user_roll,
                user_name: location.state.user_name,
              }}
            >
              Add NPTEL Course
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="/optcourse"
              state={{
                user_roll: location.state.user_roll,
                user_name: location.state.user_name,
              }}
            >
              Opt course
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="/exemption"
              state={{
                user_email: location.state.user_roll,
                user_name: location.state.user_name,
              }}
            >
              Exemption
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block sm:hidden mr-4 align-middle	">
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
            Student Home{" "}
          </h1>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-pLC">
              <Link to="/addnptelcourse">Add NPTEL Course</Link>
            </li>
            <li className="p-4 border-b border-pLC">
              <Link to="/optcourse">Opt course</Link>
            </li>
            <li className="p-4 border-b border-pLC">
              <Link to="/exemption">Exemption</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentNav;
