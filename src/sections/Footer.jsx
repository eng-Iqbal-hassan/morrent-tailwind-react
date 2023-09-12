import React from "react";
import { Logo } from "../assets/icons";
import { footerLinks, policy } from "../constants";
const Footer = () => {
  return (
    <footer className="px-6 max-container pt-12 pb-6 sm:px-[60px] sm:pt-20 sm:pb-[60px]">
      <div className="flex flex-col gap-5 pb-9 border-b-[1px] border-[#0d0d0d21] 2lg:flex-row 2lg:items-start 2lg:justify-between">
        <div>
          <Logo />
          <p className="font-base font-medium leading-6 -tracking-[0.02em] text-[#90A3BF] mt-4 max-w-[292px] 2xl:text-[#13131399]">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="flex justify-between gap-6 2lg:gap-[60px] flex-wrap">
          {footerLinks.map(section => (
            <div key={section.title} className="w-[142px] 2lg:w-[152px]">
              <h4 className="text-xl leading-[30px] font-semibold text-[#1A202C] -tracking-[0.02em] mb-8">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-6">
                {section.links.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.link}
                      className="font-base font-medium leading-6 -tracking-[0.02em] text-[#90A3BF] 2xl:text-[#13131399] "
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-6 flex flex-col-reverse gap-8 md:gap-0 md:flex-row md:justify-between md:items-center">
        <p className="text-xs md:text-base font-semibold leading-[15.12px] md:leading-6 -tracking-[0.02em] text-[#1A202C]">
          ©2022 MORENT. All rights reserved
        </p>
        <div className="flex justify-between md:justify-start md:gap-[60px]">
          {policy.map(policy => (
            <a
              key={policy.name}
              href={policy.link}
              className="text-xs md:text-base font-semibold leading-[15.12px] md:leading-6 -tracking-[0.02em] text-[#1A202C]"
            >
              {policy.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
