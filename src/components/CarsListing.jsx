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
    <div className="relative z-10 p-4 rounded-[10px] bg-white">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold leading-[30px] text-[#1A202C] mb-1 -tracking-[0.03em]">
            {name}
          </h3>
          <span className="text-sm font-bold leading-[21px] text-[#90A3BF] -tracking-[0.02em]">
            {type}
          </span>
        </div>
        <img src={rating} alt="rating" width={24} height={24} />
      </div>
      <div className="flex items-center justify-end mt-3 mb-8 gap-[50px] sm:flex-col sm:gap-5">
        <div>
          <img src={imgURL} alt="car" className="w-[142px] h-[64px]" />
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-1 md:gap-5">
          <div className="flex items-center gap-[4px] text-sm font-medium leading-[21px] -tracking-[0.02em] text-[#90A3BF]">
            <img src={fuel} alt="fuel icon" width={24} height={24} />
            {fuelCapacity}
          </div>
          <div className="flex items-center gap-[4px] text-sm font-medium leading-[21px] -tracking-[0.02em] text-[#90A3BF]">
            <img src={engineURL} alt="engine logo" width={24} height={24} />
            {engineType}
          </div>
          <div className="flex items-center gap-[4px] text-sm font-medium leading-[21px] -tracking-[0.02em] text-[#90A3BF]">
            <img
              src={sittingCapacityURL}
              alt="sitting capacity icon"
              width={24}
              height={24}
            />
            {sittingCapacity}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-end gap-1">
            <h3 className="text-xl font-bold leading-[25.2px] text-[#1A202C]">
              {price}
            </h3>
            <span className="text-sm font-bold leading-[17.64px] text-[#90A3BF]">
              {time}
            </span>
          </div>
          <span className="mt-1 text-sm font-bold leading-[17.64px] text-[#90A3BF] line-through">
            {oldPrice}
          </span>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default CarsListing;
