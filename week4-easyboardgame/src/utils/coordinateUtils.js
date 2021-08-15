import { MAP_CELL_SIZE } from "./mapConst";

//Get coordinates of the character on the map
function getCoordinates(charPosX, charPosY, move = "next") {
  console.log(move, {
    x: charPosX / MAP_CELL_SIZE,
    y: charPosY / MAP_CELL_SIZE,
  });
  const x = Math.floor(charPosX / MAP_CELL_SIZE);
  const y = Math.floor(charPosY / MAP_CELL_SIZE);
  //console.log("CURRENT", { x, y });
  return { x, y };
}

//Check if next coordinate on the direction is movable.
function checkCoordinates(nextCharCoordinates, mapCoordinates) {
  let { x, y } = nextCharCoordinates;
  console.log("nextCoor", nextCharCoordinates);

  if (mapCoordinates[y] && mapCoordinates[y][x]) {
    return true;
  }
}

export { getCoordinates, checkCoordinates };
