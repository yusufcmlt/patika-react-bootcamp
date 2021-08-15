import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import { MAP_CONFIG_FIRST } from "../utils/mapConst";

const GameContext = createContext();

function useGame() {
  return useContext(GameContext);
}

function GameProvider({ children }) {
  const [saveData, setSaveData] = useLocalStorage("game", {
    charPos: {
      x: MAP_CONFIG_FIRST.startPoint.x,
      y: MAP_CONFIG_FIRST.startPoint.y,
    },
    map: "black",
  });

  const [mapData, setMapData] = useState(MAP_CONFIG_FIRST);
  const [charData, setCharData] = useState("owlet");

  const value = {
    mapData,
    setMapData,
    charData,
    setSaveData,
    saveData,
    setCharData,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export { useGame, GameProvider };
