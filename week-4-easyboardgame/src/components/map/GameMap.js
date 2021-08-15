import React from "react";
import { MAP_SIZE } from "../../utils/mapConst";

import Character from "../character/Character";

import "./GameMap.style.scss";

export default function GameMap() {
  return (
    <div
      className="game-map__container"
      style={{ width: MAP_SIZE.width, height: MAP_SIZE.height }}
    >
      <Character />
    </div>
  );
}
