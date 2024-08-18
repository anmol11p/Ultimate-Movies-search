import React, { useState } from "react";
import Data from "../api/Seriesdata.json";

export const Nav = ({setFilteredData}) => {
  const [searchValue, setSearchvalue] = useState("");
  const searchOnchange = (value) => {
    setSearchvalue(value);
  };
  const handleformsubmit = (e) => {
    e.preventDefault();
    const searchData = Data.filter((currElem) => {
      const searchlower = searchValue.toLowerCase(); //user value from user Input
      const namelower = currElem.name.toLocaleLowerCase(); //from data json
      const castlower = currElem.cast.map((c) => {
        return c.toLowerCase();
      });
   
      return (
        namelower.includes(searchlower) ||
        castlower.some((currElem) => {
          return currElem.includes(searchlower);
        })
      );
    });

    console.log(searchData);
    setFilteredData(searchData);
  };

  return (
    <nav>
      <ul className="flex gap-3 p-5 bg-gray-800 text-white flex-wrap fixed w-full top-0 z-50">
        <li>
          <a href="/" className="font-bold ">
            Home
          </a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li className="absolute right-20">
          <form className="flex gap-2" onSubmit={handleformsubmit}>
            <input
              type="text"
              className="w-40 text-black pl-4 rounded-s-md"
              value={searchValue}
              onChange={(e) => searchOnchange(e.target.value)}
            />
            <button className="bg-green-500 pl-2 pr-2 rounded-md text-sm hover:shadow-md hover:shadow-green-100">
              Search
            </button>
          </form>
        </li>
      </ul>
    </nav>
  );
};
