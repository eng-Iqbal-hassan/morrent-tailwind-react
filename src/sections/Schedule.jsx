import React from "react";
import { DoubleArrow } from "../assets/icons";
import ScheduleCard from "../components/ScheduleCard";

const Schedule = () => {
  return (
    <div className="flex flex-col gap-8 mx-6 mb-8 2xl:max-container  mt-[148px] md:flex-row md:mt-8 md:mb-9">
      <ScheduleCard text="Pick - Up" source="../src/assets/icons/PickUp.svg" />
      <button className=" absolute bottom-[137px] flex items-center justify-center self-center bg-[#3563E9] px-[18px] h-[60px] rounded-[10px] md:static">
        <DoubleArrow />
      </button>
      <ScheduleCard
        text="Drop - Off "
        source="../src/assets/icons/DropOff.svg"
      />
    </div>
  );
};

export default Schedule;
