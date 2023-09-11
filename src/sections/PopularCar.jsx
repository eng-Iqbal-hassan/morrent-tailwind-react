import React from "react";
import PopularCarsCard from "../components/PopularCarsCard";
import { popularCars } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const PopularCar = () => {
  return (
    <section className="2xl:w-[1312px] ml-6 2xl:mx-auto mb-8">
      <div className="flex items-center justify-between">
        <span className="text-base font-semibold leading-normal text-[#90A3BF] px-5 py-[10px]">
          Popular Car
        </span>
        <button className="bg-transparent border-none text-[#3563E9] text-base font-semibold px-5 py-[10px]">
          View All
        </button>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        className="mySwiper"
      >
        {popularCars.map(popularCars => (
          <SwiperSlide className="w-[240px]">
            <PopularCarsCard
              key={popularCars.name}
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
    </section>
  );
};

export default PopularCar;
