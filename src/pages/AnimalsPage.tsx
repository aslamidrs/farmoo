import React, { useState } from "react";
import { animalIcons } from "../assets/animal-icons";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { getYearDifference } from "../helpers/getYearDifference";

const AnimalsPage = () => {
  const [search, setSearch] = useState("");
    const { animalData } = useAppContext();
    const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
  };

  const filteredList = animalData.filter(
    (item) =>
      item.name.toLowerCase().includes(search) ||
      item.breed.toLowerCase().includes(search) ||
      item.type.toLowerCase().includes(search) ||
      item.gender.toLowerCase().includes(search)
  );
  return (
    <div className="w-full bg-background px-4 py-4 h-screen flex flex-col">
      <div className="mt-8 w-full max-w-md mx-auto relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={handleSearch}
          className="pl-10 w-full rounded-lg border border-gray-300 focus:ring-0 focus:border-0 p-2.5"
        />
      </div>
      <div className="mt-8 w-full max-w-md mx-auto relative max-h-[500px] overflow-y-auto">
        {animalData.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {filteredList.map((item) => (
              <div
                key={item.dob + item.name}
                className="flex justify-between gap-2 items-center bg-white p-4 shadow-md"
              >
                <div className="h-16 w-16 overflow-hidden flex items-center justify-center">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt="profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <img
                      src={animalIcons[item.type as keyof typeof animalIcons]}
                      alt="profile"
                      className="object-cover h-12 w-12"
                    />
                  )}
                </div>
                <div className="flex flex-col text-right">
                  <h2 className="text-lg font-bold text-primary">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {item.breed} | {item.type}
                  </p>
                  <p className="text-sm text-gray-500">
                    {getYearDifference(item.dob)} | {item.gender}
                  </p>
                </div>
              </div>
            ))}
            <button
              onClick={() => navigate("/protected/add-animal")}
              className="bg-primary text-white px-4 py-2 rounded-md"
            >
              Add More Animal
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate("/protected/add-animal")}
            className="bg-primary text-white px-4 py-2 rounded-md w-full"
          >
            Add Animal
          </button>
        )}
      </div>
    </div>
  );
};

export default AnimalsPage;
