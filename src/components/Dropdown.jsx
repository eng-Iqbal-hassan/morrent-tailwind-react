import React from "react";
import { ArrowDown } from "../assets/icons";

const Dropdown = ({ text, description }) => {
  return (
    <>
      <h4 className="text-base font-bold -tracking-[0.02em] text-[#1A202C] mb-2">
        {text}
      </h4>
      <div className="flex items-center gap-1">
        <p className="text-xs font-medium leading-[15.12px] -tracking-[0.02em] text-[#90A3BF]">
          {description}
        </p>
        <ArrowDown />
      </div>
    </>
  );
};

export default Dropdown;
