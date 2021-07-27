import React, { useState } from "react";
import { DebounceInput } from "react-debounce-input";

export default function CountryFilter({ filterByName, filterByRegion }) {
  const regionFilters = [
    "All",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const [searchInput, setSearchInput] = useState("");

  const handleRegionClick = (event) => {
    const clickedRegion = event.target.textContent;
    filterByRegion(clickedRegion);
    setSearchInput("");
  };

  const handleSearchCountry = (event) => {
    const searchTerm = event.target.value.trim();
    setSearchInput(searchTerm);
    filterByName(searchTerm);
  };

  return (
    <div className="countries__filter">
      <DebounceInput
        debounceTimeout={650}
        placeholder="Search..."
        value={searchInput}
        onChange={handleSearchCountry}
        className="countries__filter__input"
      />
      <>
        <div className="countries__filter__buttons">
          <h2>Region:</h2>
          {regionFilters.map((region, index) => (
            <button
              key={index + region}
              onClick={handleRegionClick}
              type="button"
              className="countries__filter__button"
            >
              {region}
            </button>
          ))}
        </div>
      </>
    </div>
  );
}
