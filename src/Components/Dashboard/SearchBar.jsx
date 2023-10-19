import React from "react";

const SearchBar = ({setSearchQuery,handleSearch }) => {
  return (
    <div className="mb-3 mt-3">
      <div className=" mb-4 flex w-full flex-wrap items-stretch w-4/5">
       
        <input
          type="search"
          className="block w-4/5 rounded-md border-0 outline-none bg-transparent py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-onSurface focus:ring-2 focus:ring-inset focus:text-onSurface sm:text-sm sm:leading-6"
          placeholder="Search" onChange={(e)=>{setSearchQuery(e.target.value)}}
        />

        <button className="bg-primary text-onPrimary p-3 rounded-xl min-w-[100px] text-sm w-1/5 border-l-0" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
