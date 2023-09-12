import React from "react";
import { SearchIcon, Filter } from "../assets/icons";

const SearchBar = () => {
  return (
    <div className="flex justify-between gap-[10px] sm:py-[10px] sm:px-5 sm:gap-5 sm:border sm:border-[#c3d4e966] sm:rounded-[70px] sm:w-[492px]">
      <div className="flex items-center gap-2 sm:gap-5  py-3 px-6 border border-[#c3d4e966] rounded-[10px] sm:border-none sm:rounded-none sm:py-0 sm:px-0">
        <SearchIcon />
        <input
          type="search"
          placeholder="Search something here"
          className="font-Jakarta w-[183px] -tracking-[0.02em]"
        />
      </div>
      <div className="p-3 border border-[#c3d4e966] rounded-[10px] sm:p-0 sm:border-none sm:rounded-none">
        <Filter />
      </div>
    </div>
  );
};

export default SearchBar;
