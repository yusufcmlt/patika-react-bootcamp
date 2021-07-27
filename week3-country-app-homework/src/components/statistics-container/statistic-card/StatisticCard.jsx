import { Pie, Bar } from "react-chartjs-2";
import React from "react";

/**
 * Statistic card component:
 * Calculates and renders statistics based on given property data
 */

export default function StatisticCard({ statData }) {
  const { title, data, property, unit } = statData;

  const chartData = {
    labels: data.map(({ name }) => name),
    datasets: [
      {
        label: title,
        data: data.map((item) => item[property]),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],

        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="statcard">
      <h2 className={`statcard__heading`}>{title}</h2>

      <div className="statcard__content">
        {
          <ul className="statcard__list">
            {data.map((stat, index) => (
              <li key={index} className="statcard__list__item">
                <span>{index + 1}-</span>
                <span>{stat.name}</span>
                <span>{stat[property]} </span>
                <span>{unit}</span>
              </li>
            ))}
          </ul>
        }
        <div className="statcard__chart">
          <Bar data={chartData} />
        </div>
      </div>
    </div>
  );
}
