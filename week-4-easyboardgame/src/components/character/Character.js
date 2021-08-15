import React, { useEffect, useRef, useState } from "react";
import { useGame } from "../../context/GameContext";
import useCharacterMove from "../../hooks/useCharacterMove";

import { CHARACTER_SIZE, MAP_SIZE } from "../../utils/mapConst";

import "./Character.style.scss";

export default function Character() {
  const { charData, mapData, setSaveData, saveData } = useGame();
  const {
    moveControl,
    charX,
    charY,
    gameKeysPressed,
    spritePos,
    spriteDirection,
  } = useCharacterMove(saveData, mapData, MAP_SIZE);

  useEffect(() => {
    moveControl();
    setSaveData({ ...saveData, charPos: { x: charX, y: charY } });
  }, [gameKeysPressed]);

  return (
    <div
      className={`character__box character--${charData}`}
      style={{
        top: charY,
        left: charX,
        width: CHARACTER_SIZE.width,
        height: CHARACTER_SIZE.height,
        backgroundPosition: `-${spritePos}px 32px`,
        transform: `scaleX(${spriteDirection})`,
      }}
    />
  );
}
