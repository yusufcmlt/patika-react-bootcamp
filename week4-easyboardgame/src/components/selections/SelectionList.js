import React, { useState } from "react";
import { useGame } from "../../context/GameContext";

export default function SelectionList() {
  const { setCharData } = useGame();
  const handleCharChange = (event) => {
    setCharData(event.target.value);
  };

  return (
    <select className="app__select" onChange={handleCharChange}>
      <option value="owlet">Owlet</option>
      <option value="pink">Pink</option>
      <option value="dude">Dude</option>
    </select>
  );
}
