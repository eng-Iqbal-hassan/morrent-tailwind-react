import React from "react";
import { Heart, Logo, Notification, Setting } from "../assets/icons";
import { loggedInPerson } from "../assets/images";
import SearchBar from "../components/SearchBar";
const Navbar = () => {
  return (
    <div className="pt-10 pb-[148px] md:pb-10 px-6 relative z-10 2xl:max-container 2xl:px-0 2xl:mx-auto">
      <nav className="flex justify-between">
        <div className="flex flex-col gap-6 mt-[10px] 2lg:items-center 2lg:gap-16 2lg:flex-row 2lg:mt-0">
          <Logo />
          <SearchBar />
        </div>
        <div className="flex gap-5 absolute right-6 sm:right-8 2xl:static">
          <button className="hidden sm:flex justify-center items-center w-11 h-11 border border-[#c3d4e966] rounded-full cursor-pointer">
            <Heart />
          </button>
          <button className="hidden sm:flex justify-center items-center w-11 h-11 border border-[#c3d4e966] rounded-full cursor-pointer relative before:absolute before:content-[''] before:w-[11px] before:h-[11px] before:bg-[#FF4423] before:top-[2px] before:right-[2px] before:rounded-full">
            <Notification />
          </button>
          <button className="cursor-pointer hidden sm:flex justify-center items-center w-11 h-11 border border-[#c3d4e966] rounded-full">
            <Setting />
          </button>
          <button className="cursor-pointer w-11 h-11 rounded-full">
            <img
              src={loggedInPerson}
              alt="logged-in-person"
              className="w-full h-full"
            />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
