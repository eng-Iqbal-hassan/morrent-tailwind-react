import React from "react";
import PopularCarsCard from "../components/PopularCarsCard";
import { popularCars } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const PopularCar = () => {
  return (
    <div className="2xl:w-[1312px] ml-6 2xl:mx-auto mb-8">
      <div className="flex items-center justify-between mr-6 mb-5 2xl:mr-0">
        <span className="text-sm md:text-base font-semibold leading-[21px] md:leading-6 text-[#90A3BF] md:px-5 md:py-[10px]">
          Popular Car
        </span>
        <button className="bg-transparent border-none text-[#3563E9] text-xs leading-[15.12px] md:text-base font-semibold md:px-5 md:py-[10px] cursor-pointer">
          View All
        </button>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        className="mySwiper"
      >
        {popularCars.map((popularCars, index) => (
          <SwiperSlide key={index} className="w-[240px] md:w-[304px]">
            <PopularCarsCard
              name={popularCars.name}
              type={popularCars.type}
              rating={popularCars.rating}
              imgURL={popularCars.imgURL}
              fuel={popularCars.fuel}
              fuelCapacity={popularCars.fuelCapacity}
              engineURL={popularCars.engineURL}
              engineType={popularCars.engineType}
              sittingCapacityURL={popularCars.sittingCapacityURL}
              sittingCapacity={popularCars.sittingCapacity}
              price={popularCars.price}
              time={popularCars.time}
              oldPrice={popularCars.oldPrice}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularCar;
