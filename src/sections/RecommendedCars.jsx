import React from "react";
import { recommendedCars } from "../constants";
import CarsListing from "../components/CarsListing";
const RecommendedCars = () => {
  return (
    <section className="2xl:w-[1312px] max-w-[327px]  sm:max-w-[570px] md:max-w-[700px] lg:max-w-[976px] 2xl:max-w-[1312px]  mx-auto 2xl:mx-auto mb-16">
      <span className="text-base font-semibold leading-normal text-[#90A3BF] px-5 py-[10px]">
        Recomendation Car
      </span>
      <div className="custom-grid mt-5">
        {recommendedCars.map(recommendedCar => (
          <CarsListing
            key={recommendedCar.name}
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
    </section>
  );
};

export default RecommendedCars;
