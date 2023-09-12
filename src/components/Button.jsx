import React from "react";

const Button = ({ text }) => {
  return (
    <button
      className={`w-[100px] h-[36px] text-xs leading-[15.12px] md:w-[116px] md:h-11 md:text-base md:leading-6 flex items-center justify-center font-semibold -tracking-[0.02em] text-white bg-[#3563E9] border-none rounded md:rounded-lg`}
    >
      {text}
    </button>
  );
};

export default Button;
