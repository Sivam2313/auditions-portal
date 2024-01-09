import React from "react";
import lodash from "lodash";

const SearchBar = ({query,setSearchQuery,handleSearch }) => {

  const debouncedApiCall = React.useCallback(
    lodash.debounce(handleSearch, 250),
    []
  );
  
  const searchQuery = (e) => {
    setSearchQuery(e.target.value)
    console.log("searching.......");
    debouncedApiCall()
  }

  return (
    <div className="mb-3 mt-3 w-full md:w-3/4">
      <div className=" mb-4 flex w-full justify-center flex-wrap items-stretch w-4/5">
        <input
          type="search"
          className="block w-[55%] md:w-4/5 rounded-l-md border-0 outline-none bg-transparent py-1.5 pl-7 pr-20 text-onSurface ring-1 ring-inset ring-gray-300 placeholder:text-onSurface focus:ring-2 focus:ring-inset focus:text-onSurface sm:text-sm sm:leading-6"
          placeholder="Search" value={query} onChange={searchQuery}
        />

        <button className="bg-primary text-onPrimary p-3 rounded-r-md min-w-[100px] text-sm w-1/5 border-l-0" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
