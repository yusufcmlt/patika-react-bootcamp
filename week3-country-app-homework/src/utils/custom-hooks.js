import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import {
  getStatisticsProperty,
  processLanguages,
  sortAndGetFirstTen,
  statisticsConfig,
} from "./statistic-utils";

function useCountryList(apiURL) {
  const [resData, setResData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Ancient api gods are calling!");
    axios.get(apiURL).then(({ data }) => {
      console.log("Ancient api gods have sent their blessings...");
      setResData(data);
      setLoading(false);
    });
  }, []);

  return { resData, isLoading };
}

//Adding tab animations (-left -right)
function useFadeAnimation(fadeDirection) {
  const [fadeAnimation, setFadeAnimation] = useState("");

  useEffect(() => {
    setFadeAnimation(fadeDirection);
  }, []);

  return { fadeAnimation };
}

//Create stat data using config object,
function useStatisticData(propertyConfig, countryList) {
  return useMemo(() => {
    //Dont calculate stats if country list is empty
    if (countryList.length) {
      console.log("Getting stats...");
      let propertiesList = [];

      propertyConfig.forEach(({ statisticProperty, name, unit }) => {
        let propData = getStatisticsProperty(countryList, statisticProperty);

        if (statisticProperty === "languages") {
          propData = processLanguages(propData);
        }

        propData = sortAndGetFirstTen(propData, statisticProperty);

        propertiesList.push({
          title: name,
          property: statisticProperty,
          unit,
          data: [...propData],
        });
      });
      console.log("Stats ready...");
      return propertiesList;
    }
  }, [countryList]);
}

export { useCountryList, useFadeAnimation, useStatisticData };
