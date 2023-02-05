import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const StudentNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center flex-wrap h-42 relative">
      <div className="bg-pC text-white flex justify-between items-center h-24 w-full  ">
        <Link to="/studentHome">
          <h1 className="w-full text-3xl font-bold text-pLC"> Student Home </h1>
        </Link>

        <ul className="hidden md:flex">
          <li className="p-4">
            <Link to="/addnptelcourse">Add NPTEL Course</Link>
          </li>
          <li className="p-4">
            <Link to="/optcourse">Opt course</Link>
          </li>
          <li className="p-4">
            <Link to="/exemption">Exemption</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "z-10 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-pC ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-pLC m-4">
            {" "}
            Student Home{" "}
          </h1>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600">
              <Link to="/addnptelcourse">Add NPTEL Course</Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              <Link to="/optcourse">Opt course</Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              <Link to="/exemption">Exemption</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentNav;
