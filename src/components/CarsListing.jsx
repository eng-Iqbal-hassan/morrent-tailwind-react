import React from "react";
import Button from "./Button";

const CarsListing = ({
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
          <h3 className="text-base leading-6 md:text-xl font-semibold md:font-bold md:leading-[30px] text-[#1A202C] mb-1 -tracking-[0.03em]">
            {name}
          </h3>
          <span className="text-xs leading-[15.12px] md:text-sm font-medium md:font-bold md:leading-[21px] text-[#90A3BF] -tracking-[0.02em]">
            {type}
          </span>
        </div>
        <img
          src={rating}
          alt="rating"
          className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]"
        />
      </div>
      <div className="flex items-end justify-end mt-3 mb-[34px] md:mt-[50px] md:mb-6 gap-[50px] sm:flex-col sm:items-center sm:gap-5 md:gap-11">
        <div>
          <img
            src={imgURL}
            alt="car"
            className="w-[160px] h-[64px] md:w-[224px] md:h-[100px]"
          />
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-1 md:gap-5">
          <div className="flex items-center gap-[4px] text-xs md:text-sm font-medium leading-[15.12px] md:leading-[21px] -tracking-[0.02em] text-[#90A3BF]">
            <img
              src={fuel}
              alt="fuel icon"
              className="w-[14] h-[14px] md:w-[24px] md:h-[24px]"
            />
            {fuelCapacity}
          </div>
          <div className="flex items-center gap-[4px] text-xs md:text-sm font-medium leading-[15.12px] md:leading-[21px] -tracking-[0.02em] text-[#90A3BF]">
            <img
              src={engineURL}
              alt="engine logo"
              className="w-[14] h-[14px] md:w-[24px] md:h-[24px]"
            />
            {engineType}
          </div>
          <div className="flex items-center gap-[4px] text-xs md:text-sm font-medium leading-[15.12px] md:leading-[21px] -tracking-[0.02em] text-[#90A3BF]">
            <img
              src={sittingCapacityURL}
              alt="sitting capacity icon"
              className="w-[14] h-[14px] md:w-[24px] md:h-[24px]"
            />
            {sittingCapacity}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-end gap-1">
            <h3 className="text-base md:text-xl font-bold leading-[20.16px] md:leading-[25.2px] text-[#1A202C]">
              {price}
            </h3>
            <span className="text-xs md:text-sm font-bold leading-[15.12px] md:leading-[17.64px] text-[#90A3BF]">
              {time}
            </span>
          </div>
          <span className="mt-1 text-xs md:text-sm font-bold leading-[15.12px] md:leading-[17.64px] text-[#90A3BF] line-through">
            {oldPrice}
          </span>
        </div>
        <Button text="Rent Now" />
      </div>
    </div>
  );
};

export default CarsListing;
