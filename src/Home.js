import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import kec1 from "./assets/kec1.png";
import kec2 from "./assets/kec2.png";
import kec3 from "./assets/kec3.png";
import kec4 from "./assets/kec4.png";

function Home() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="h-screen bg-pELC w-screen">
      <div className="flex flex-wrap h-42 relative mb-8">
        <div className="text-pC flex justify-around items-center h-24 w-full mx-12  font-bold">
          <ul className="hidden md:flex">
            <li className="p-4">
              <Link to="/studentLogin">Student Login</Link>
            </li>
            <li className="p-4">
              <Link to="/staffLogin">Staff Login</Link>
            </li>
          </ul>
          <div
            onClick={handleNav}
            className="block sm:hidden mr-4 align-middle"
          >
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
            <ul className="hidden md:flex">
              <li className="p-4">
                <Link to="/studentLogin">Student Login</Link>
              </li>
              <li className="p-4">
                <Link to="/staffLogin">Staff Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" flex justify-around flex-wrap">
        <div className="flex flex-col justify-center">
          <p className="text-7xl font-bold">KEC</p>
          <p className="text-7xl font-bold">Credit</p>
          <p className="text-7xl font-bold">Automation</p>
          <p className="px-2 my-1"> Keep It Simple , Make Things Easier. </p>
        </div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="h-2/3 w-1/3 m-0 -ml-32"
        >
          <SwiperSlide>
            <img className="h-full w-full" src={kec1} alt="kec" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-full w-full" src={kec2} alt="kec" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-full w-full" src={kec3} alt="kec" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-full w-full" src={kec4} alt="kec" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
