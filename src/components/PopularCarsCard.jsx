import React from "react";
import Button from "./Button";

const PopularCarsCard = ({
  name,
  type,
  rating,
  imgURL,
  fuel,
  fuelCapacity,
  engineURL,
  engineType,
  sittingCapacityURL,
  sittingCapacity,
  price,
  time,
  oldPrice,
}) => {
  return (
    <div className="relative z-10 p-4 rounded-[10px] bg-white md:p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-base font-bold leading-[24px] text-[#1A202C] mb-1 -tracking-[0.03em] md:text-xl md:leading-[30px]">
            {name}
          </h3>
          <span className="text-xs font-bold leading-[15.12px] text-[#90A3BF] -tracking-[0.02em] md:text-sm md:leading-[21px]">
            {type}
          </span>
        </div>
        <img src={rating} alt="rating" width={24} height={24} />
      </div>
      <div className="mt-[32px] mb-[44px] flex justify-center items-center md:my-16">
        <img
          src={imgURL}
          alt="car"
          className="w-[180px] h-[56px] md:w-[220px] md:h-[68px]"
        />
      </div>
      <div className="flex justify-between items-center mb-7 md:mb-6">
        <div className="flex items-center gap-1 text-xs font-medium leading-[15.12px] -tracking-[0.02em] text-[#90A3BF] md:text-sm md:leading-[17.64px]">
          <img
            src={fuel}
            alt="fuel icon"
            className="w-[14px] h-[14px] md:w-[24px] md:h-[24px]"
          />
          {fuelCapacity}
        </div>
        <div className="flex items-center gap-1 text-xs font-medium leading-[15.12px] -tracking-[0.02em] text-[#90A3BF] md:text-sm md:leading-[17.64px]">
          <img
            src={engineURL}
            alt="engine logo"
            className="w-[14px] h-[14px] md:w-[24px] md:h-[24px]"
          />
          {engineType}
        </div>
        <div className="flex items-center gap-1 text-xs font-medium leading-[15.12px] -tracking-[0.02em] text-[#90A3BF] md:text-sm md:leading-[17.64px]">
          <img
            src={sittingCapacityURL}
            alt="sitting capacity icon"
            className="w-[14px] h-[14px] md:w-[24px] md:h-[24px]"
          />
          {sittingCapacity}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-end gap-1">
            <h3 className="text-base font-bold leading-[20.16px] text-[#1A202C] md:text-xl md:leading-[25.2px]">
              {price}
            </h3>
            <span className="text-xs font-bold leading-[15.12px] text-[#90A3BF] md:text-sm md:leading-[17.64px]">
              {time}
            </span>
          </div>
          <span className="mt-1 text-xs font-bold leading-[17.64px] text-[#90A3BF] line-through md:text-sm md:leading-[17.64px]">
            {oldPrice}
          </span>
        </div>
        <Button text="Rent Now" />
      </div>
    </div>
  );
};

export default PopularCarsCard;
