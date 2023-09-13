import React from "react";
import { recommendedCars } from "../constants";
import CarsListing from "../components/CarsListing";
const RecommendedCars = () => {
  return (
    <div className="2xl:w-[1312px] max-w-[327px]  sm:max-w-[570px] md:max-w-[700px] lg:max-w-[976px] 2xl:max-w-[1312px]  mx-auto 2xl:mx-auto mb-16">
      <span className="text-sm md:text-base font-semibold leading-[21px] md:leading-6 text-[#90A3BF] md:px-5 md:py-[10px]">
        Recomendation Car
      </span>
      <div className="custom-grid mt-5 mb-12 md:mb-16">
        {recommendedCars.map((recommendedCar, index) => (
          <CarsListing
            key={index}
            name={recommendedCar.name}
            type={recommendedCar.type}
            rating={recommendedCar.rating}
            imgURL={recommendedCar.imgURL}
            fuel={recommendedCar.fuel}
            fuelCapacity={recommendedCar.fuelCapacity}
            engineURL={recommendedCar.engineURL}
            engineType={recommendedCar.engineType}
            sittingCapacityURL={recommendedCar.sittingCapacityURL}
            sittingCapacity={recommendedCar.sittingCapacity}
            price={recommendedCar.price}
            time={recommendedCar.time}
            oldPrice={recommendedCar.oldPrice}
          />
        ))}
      </div>
      <div className="relative flex items-center justify-center">
        <button className="text-xs leading-[15.12px] font-semibold -tracking-[0.02em] text-[#FFFFFF] bg-[#3563E9] w-[120px] h-[36px] flex justify-center items-center rounded-lg md:w-[156px] md:h-[44px] md:text-base md:leading-6 ">
          Show More Car
        </button>
        <span className="absolute right-0 text-sm leading-[17.64px] font-bold text-[#90A3BF]">
          120 Car
        </span>
      </div>
    </div>
  );
};

export default RecommendedCars;
