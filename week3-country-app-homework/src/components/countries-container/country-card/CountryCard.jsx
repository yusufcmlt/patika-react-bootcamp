import React, { useEffect, useState } from "react";

import "../Countries.style.scss";

/**
 * Country Card component
 * Renders a country card item using given data
 *
 */

export default function CountryCard({ cardData }) {
  const { name, languages, population, region, flag, capital } = cardData;
  const queryName = name.toLowerCase().split(" ").join("+");

  return (
    <div className={`card`}>
      <h3 className="card__heading">{name}</h3>
      <img src={flag} alt={`${name} flag`} className="card__flag" />
      <div className="card__content">
        <span className="card__content__info">
          Name:<i>{name}</i>
        </span>
        <span className="card__content__info">
          Capital:<i>{capital}</i>
        </span>
        <span className="card__content__info">
          Language:<i>{languages[0].name}</i>
        </span>
        <span className="card__content__info">
          Population:<i>{population}</i>
        </span>
        <span className="card__content__info">
          Region:<i>{region}</i>
        </span>
        <span className="card__content__info">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${queryName}`}
            target="_blank"
          >
            Check on Google Maps
          </a>
        </span>
      </div>
    </div>
  );
}
