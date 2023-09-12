import React from "react";
import ServicesCards from "../components/ServicesCards";
import { servicesData } from "../constants";
const Services = () => {
  return (
    <section className="flex mx-6 gap-6 2xl:max-container justify-between absolute top-[172px] z-10 full-width md:static">
      {servicesData.map(data => (
        <ServicesCards
          key={data.heading}
          heading={data.heading}
          text={data.text}
          imgURL={data.imgURL}
          bgURL={data.bgURL}
          btnBg={data.btnBg}
        />
      ))}
    </section>
  );
};

export default Services;
