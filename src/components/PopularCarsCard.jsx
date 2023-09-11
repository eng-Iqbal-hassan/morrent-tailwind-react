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
    <div className="relative z-10 p-4 rounded-[10px] bg-white">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-base font-bold leading-[24px] text-[#1A202C] mb-1 -tracking-[0.03em]">
            {name}
          </h3>
          <span className="text-xs font-bold leading-[15.12px] text-[#90A3BF] -tracking-[0.02em]">
            {type}
          </span>
        </div>
        <img src={rating} alt="rating" width={24} height={24} />
      </div>
      <div className="mt-[32px] mb-[44px] flex justify-center items-center">
        <img src={imgURL} alt="car" className="w-[180px] h-[56px]" />
      </div>
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-1 text-xs font-medium leading-[15.12px] -tracking-[0.02em] text-[#90A3BF]">
          <img src={fuel} alt="fuel icon" width={24} height={24} />
          {fuelCapacity}
        </div>
        <div className="flex items-center gap-1 text-xs font-medium leading-[15.12px] -tracking-[0.02em] text-[#90A3BF]">
          <img src={engineURL} alt="engine logo" width={24} height={24} />
          {engineType}
        </div>
        <div className="flex items-center gap-1 text-xs font-medium leading-[15.12px] -tracking-[0.02em] text-[#90A3BF]">
          <img
            src={sittingCapacityURL}
            alt="sitting capacity icon"
            width={24}
            height={24}
          />
          {sittingCapacity}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-end gap-1">
            <h3 className="text-base font-bold leading-[20.16px] text-[#1A202C]">
              {price}
            </h3>
            <span className="text-xs font-bold leading-[15.12px] text-[#90A3BF]">
              {time}
            </span>
          </div>
          <span className="mt-1 text-sm font-bold leading-[17.64px] text-[#90A3BF] line-through">
            {oldPrice}
          </span>
        </div>
        <Button btnWidth="100px" />
      </div>
    </div>
  );
};

export default PopularCarsCard;
