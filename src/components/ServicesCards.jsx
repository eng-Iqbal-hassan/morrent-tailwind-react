import React from "react";
import Button from "./Button";

const ServicesCards = ({ heading, text, imgURL, bgURL }) => {
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
      <Button className="2xl:w-[120px]" />
      <div className="flex justify-center mt-[26px]">
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
