import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import React from "react";
import kec1 from "./assets/kec1.png";
import kec2 from "./assets/kec2.png";
import kec3 from "./assets/kec3.png";
import kec4 from "./assets/kec4.png";

function Home() {

  return (
    <div className="bg-pELC h-screen w-screen">
      <div className="flex flex-wrap h-42 relative mb-8 text-lg">
        <div className="text-pC flex justify-around items-center h-24 w-full mx-12  font-bold">
          <ul className="flex">
            <li className="p-4">
              <Link to="/studentLogin">Student Login</Link>
            </li>
            <li className="p-4">
              <Link to="/staffLogin">Staff Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col h-5/6 md:h-auto justify-evenly md:flex-row items-center">
        <div className="flex flex-col justify-center">
          <p className="text-5xl md:text-7xl font-bold">KEC</p>
          <p className="text-5xl md:text-7xl font-bold">Credit</p>
          <p className="text-5xl md:text-7xl font-bold">Automation</p>
          <p className="px-2 my-1"> Keep It Simple , Make Things Easier. </p>
        </div>
        <div
          className=" h-auto w-4/6 md:h-2/3 md:w-1/3 m-0 md:-ml-32">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
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
    </div>
  );
}

export default Home;
