import React, { useEffect, useState } from "react";

import CountryCard from "./country-card/CountryCard";
import CountryFilter from "./country-settings/CountryFilter";
import CountryPageNumbers from "./country-settings/CountryPageNumbers";
import { useFadeAnimation } from "../../utils/custom-hooks";

import "./Countries.style.scss";

/**
 * Countries Container Component
 * Renders countries tab with filter, paging and country card components
 * Uses countries data
 *
 */
export default function CountriesContainer({ countryList }) {
  const { fadeAnimation } = useFadeAnimation(" countries--enter-right");
  const [filteredCountries, setFilteredCountries] = useState(countryList);
  const [enterAnimation, setAnimation] = useState("");

  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterHeading, setFilterHeading] = useState("All");

  //Getting page numbers on filteredCountryList change
  useEffect(() => {
    getPageNumbers(filteredCountries.length);
  }, [filteredCountries]);

  //Adding animation on page or filter change
  useEffect(() => {
    setAnimation("");
    const animationTimeout = setTimeout(() => {
      setAnimation(" countries__container--enter-animation");
    }, 500);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [currentPage, filteredCountries]);

  //Filter List using entered search term
  const filterByName = (searchTerm) => {
    if (searchTerm) {
      setFilterHeading(`Search:"${searchTerm}"`);
      setCurrentPage(1);
      setFilteredCountries(
        countryList.filter(({ name }) =>
          name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilterHeading("All");
      setFilteredCountries(countryList);
    }
  };
  //Filter List using given region buttons
  const filterByRegion = (regionName) => {
    setCurrentPage(1);

    if (regionName.toLowerCase() !== "all") {
      setFilterHeading(`Region:"${regionName}"`);
      setFilteredCountries(
        countryList.filter(({ region }) =>
          region.toLowerCase().includes(regionName.toLowerCase())
        )
      );
    } else {
      setFilterHeading(`All`);
      setFilteredCountries(countryList);
    }
  };

  //Calculating pages using max item quantity(25 item default)
  //Example: Page 1 ---> 0-24   Page 3 ---> 50-75
  const filterByPage = () => {
    const startItem = (currentPage - 1) * 25;
    const endItem = currentPage * 25;
    return [startItem, endItem];
  };

  //Getting page number count using filtered (or base) country list
  const getPageNumbers = (listLength, maxItem = 25) => {
    const calculatedPageCount =
      Math.floor(listLength / maxItem) + (listLength % maxItem > 0 ? 1 : 0);
    setPageCount(calculatedPageCount);
  };

  return (
    <div className={`countries${fadeAnimation}`}>
      <h2 className="countries__heading">
        Country List{" "}
        <span className="countries__heading__filter">{filterHeading}</span>
      </h2>
      <CountryFilter
        filterByName={filterByName}
        filterByRegion={filterByRegion}
      />
      <CountryPageNumbers
        pageCount={pageCount}
        setCurrentPage={setCurrentPage}
      />
      <div className={`countries__container${enterAnimation}`}>
        {filteredCountries.length ? (
          filteredCountries.slice(...filterByPage()).map((country, index) => {
            return <CountryCard key={index} cardData={country} />;
          })
        ) : (
          <div className="countries__container__error">
            <span>ಠ╭╮ಠ</span>
            <span>No Results Found...</span>
          </div>
        )}
      </div>
      <CountryPageNumbers
        pageCount={pageCount}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
