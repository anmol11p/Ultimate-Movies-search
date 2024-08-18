import React from "react";
import Data from "../api/Seriesdata.json";
import { Nav } from "./../components/Nav";
import { useState } from "react";
const Tailwind = () => {
  const [filteredData, setFilteredData] = useState([]);
  const dataToDisplay = filteredData.length > 0 ? filteredData : Data;

  return (
    <>
      <Nav filteredData={filteredData} setFilteredData={setFilteredData} />
      {/* nav  */}

      <div className="container mx-auto px-4 mt-28">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataToDisplay.map((card, index) => {
              const buttonDynamic = `${
                card.rating >= 8.3
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-yellow-500 hover:bg-yellow-600"
              } text-white py-2 px-4 `;

              return (
                <div className="card shadow-md bg-white max-w-xs" key={index}>
                  <img
                    src={
                      card.img
                        ? card.img
                        : "https://i.pinimg.com/564x/9d/05/12/9d0512bf898240d48056f467c1f01e66.jpg"
                    }
                    className="card-img h-40 w-full object-cover"
                    alt={card.name}
                  />
                  <div className="card-body p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <h5 className="title font-bold text-lg">{card.name}</h5>
                      <span className="text-sm text-gray-600">Rating:</span>
                      <span
                        className={`${buttonDynamic} rounded-full font-semibold p-2`}
                      >
                        {card.rating}
                      </span>
                    </div>
                    <p className="card-text my-2 mx-1">
                      {card.description.split(" ").slice(0, 18).join(" ")}...
                      Cast:{" "}
                      <span
                        className={
                          card.rating >= 8.3
                            ? `bg-green-500 my-2`
                            : "bg-yellow-300 my-2"
                        }
                      >
                        {card.cast
                          .join(", ")
                          .replace(/([a-z])([A-Z])/g, "$1 $2")}
                      </span>
                    </p>

                    <button className={`${buttonDynamic} ml-0 mt-1. w-20`}>
                      <a
                        href={card.watchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Watch
                      </a>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tailwind;
