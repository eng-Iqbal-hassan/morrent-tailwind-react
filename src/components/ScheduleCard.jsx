import React from "react";
import Dropdown from "./Dropdown";
const ScheduleCard = ({ text, source }) => {
  return (
    <div className="bg-[#FFFFFF] p-4 lg:px-12 lg:py-6 rounded-[10px] md:full-width">
      <div className="flex items-center gap-2 mb-6">
        <img src={`${source}`} alt="" />
        <h4 className="text-base font-semibold -tracking-[0.02em] text-[#1A202C]">
          {text}
        </h4>
      </div>
      <ul className="flex justify-between custom-line">
        <li>
          <Dropdown text="Locations" description="Semarang" />
        </li>
        <li>
          <Dropdown text="Date" description="20 July 2022" />
        </li>
        <li>
          <Dropdown text="Time" description="07.00" />
        </li>
      </ul>
    </div>
  );
};

export default ScheduleCard;
