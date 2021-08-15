import { useState } from "react";
import { checkCoordinates, getCoordinates } from "../utils/coordinateUtils";
import {
  CHARACTER_SIZE,
  CHARACTER_SPEED_FAST,
  CHARACTER_SPEED_NORMAL,
} from "../utils/mapConst";
import useMultiKeyPress from "./useMultiKeyPress";

export default function useCharacterMove(savedData, mapData, mapSize) {
  const gameKeysPressed = useMultiKeyPress();
  const [moveSpeed, setMoveSpeed] = useState(CHARACTER_SPEED_NORMAL);
  const [charX, setCharX] = useState(savedData.charPos.x);
  const [charY, setCharY] = useState(savedData.charPos.y);
  const [spritePos, setSpritePos] = useState(0);
  const [spriteDirection, setSpriteDirection] = useState(1);

  const moveControl = () => {
    getCoordinates(charX, charY, "normal");
    gameKeysPressed.forEach((keyCode) => {
      switch (keyCode) {
        case "KeyW":
        case "ArrowUp":
          moveY(moveSpeed, -1);
          break;
        case "KeyS":
        case "ArrowDown":
          moveY(moveSpeed, 1);
          break;
        case "KeyA":
        case "ArrowLeft":
          moveX(moveSpeed, -1);
          break;
        case "KeyD":
        case "ArrowRight":
          moveX(moveSpeed, 1);
          break;
        default:
          break;
      }
    });
    moveSpeedControl();
  };

  const checkOutsideBorders = (direction, charPosition, speed, border) => {
    if (
      (direction < 0 && charPosition > 0) ||
      (direction > 0 && charPosition < border - CHARACTER_SIZE.width)
    ) {
      return true;
    }
  };

  const moveX = (speed, direction) => {
    const nextCoordinates = getCoordinates(charX + speed * direction, charY);

    setSpriteDirection(direction);
    setSpritePos(spritePos + 32);
    if (
      !checkCoordinates(nextCoordinates, mapData.mapBorders) &&
      checkOutsideBorders(direction, charX, speed, mapSize.width)
    ) {
      setCharX(charX + speed * direction);
    }
  };

  const moveY = (speed, direction) => {
    setSpritePos(spritePos + 32);
    const nextCoordinates = getCoordinates(charX, charY + speed * direction);

    if (
      !checkCoordinates(nextCoordinates, mapData.mapBorders) &&
      checkOutsideBorders(direction, charY, speed, mapSize.height)
    ) {
      setCharY(charY + speed * direction);
    }
  };

  const moveSpeedControl = () => {
    if (gameKeysPressed.has("Space")) {
      setMoveSpeed(CHARACTER_SPEED_FAST);
    } else {
      setMoveSpeed(CHARACTER_SPEED_NORMAL);
    }
  };

  return {
    moveControl,
    charX,
    charY,
    gameKeysPressed,
    spritePos,
    spriteDirection,
  };
}
