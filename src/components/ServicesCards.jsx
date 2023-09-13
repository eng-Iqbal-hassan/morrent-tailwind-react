import React from "react";
// import Button from "./Button";

const ServicesCards = ({ heading, text, imgURL, btnBg, bgURL }) => {
  return (
    <div
      className={`last:hidden px-4 pt-4 pb-[4px] ${bgURL} rounded-[10px] full-width md:last:block`}
    >
      <h2 className="text-base font-bold -tracking-[0.02em] text-[#FFFFFF] mb-4 2xl:text-[32px] 2xl:leading-[48px] 2xl:-tracking[0.03em] 2xl:max-w-[272px]">
        {heading}
      </h2>
      <p className="text-xs font-medium leading-[19.2px] -tracking-[0.02em] text-[#FFFFFF] max-w-[216px] mb-4 2xl:text-base 2xl:leading-6 2xl:mb-5 2xl:max-w-[284px]">
        {text}
      </p>
      {/* <Button text="Rental Car" className={`${btnBg}`} /> */}
      <button
        className={`${btnBg} w-[128px] h-[44px] text-[#FFFFFF] flex items-center justify-center rounded  text-xs font-semibold leading-[15.12px] -tracking-[0.02em] 2xl:text-base 2xl:leading-6 2xl:w-[120px]`}
      >
        Rental Car
      </button>
      <div className="flex justify-center mt-[26px] 2xl:mt-[0] 2xl:relative 2xl:bottom-3 2xl:justify-end 2xl:right-[73px]">
        <img
          src={imgURL}
          alt="icon"
          className="w-[196px] h-[56px] 2xl:w-[406px] 2xl:h-[116px]"
        />
      </div>
    </div>
  );
};

export default ServicesCards;
