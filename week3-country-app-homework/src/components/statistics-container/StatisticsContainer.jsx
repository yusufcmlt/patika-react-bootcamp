import React from "react";
import { useFadeAnimation } from "../../utils/custom-hooks";
import StatisticCard from "./statistic-card/StatisticCard";

import "./Statistics.style.scss";

/**
 * Statistics container component
 * Renders statistic cards based on given config data
 * Config has card heading,unit and sort property datas.
 */

export default function StatisticsContainer({ statisticData }) {
  const { fadeAnimation } = useFadeAnimation(" statistics--enter-left");

  return (
    <div className={`statistics${fadeAnimation}`}>
      <h2 className="statistics__heading">Statistics</h2>
      <div className="statistics__container">
        {statisticData.map((stat, index) => (
          <StatisticCard key={index} statData={stat} />
        ))}
      </div>
    </div>
  );
}
