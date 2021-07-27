import "./App.scss";
import React, { useEffect, useState } from "react";
import CountriesContainer from "./components/countries-container/CountriesContainer";
import Header from "./components/header/Header";
import { useCountryList, useStatisticData } from "./utils/custom-hooks";
import StatisticsContainer from "./components/statistics-container/StatisticsContainer";
import Loading from "./components/loading/Loading";
import { statisticsConfig } from "./utils/statistic-utils";

function App() {
  const { resData, isLoading } = useCountryList(
    "https://restcountries.eu/rest/v2/all"
  );
  const statisticData = useStatisticData(statisticsConfig, resData);

  const [tab, setTab] = useState("countries");

  const handleTabs = (tabRoute) => {
    window.scrollTo(0, 500);
    setTab(tabRoute);
  };

  return (
    <div className="app">
      <h1 className="app__heading">
        All countries in one place.{" "}
        <a
          className="github-link"
          href="https://github.com/yusufcmlt"
          target="_blank"
        >
          {" "}
        </a>
      </h1>
      <Header handleTabs={handleTabs} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {tab === "countries" ? (
            <CountriesContainer countryList={resData} />
          ) : (
            <StatisticsContainer statisticData={statisticData} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
