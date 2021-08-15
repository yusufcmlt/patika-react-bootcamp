import { useEffect, useRef } from "react";
import "./App.scss";
import GameMap from "./components/map/GameMap";
import SelectionList from "./components/selections/SelectionList";

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    appRef.current.classList.add("app--opened");
  }, []);

  return (
    <div ref={appRef} className="app">
      <div className="app__header">
        <h1 className="app__heading-1">Game Test</h1>
        <SelectionList />
      </div>
      <GameMap mapHeight="512" mapWidth="640" />
    </div>
  );
}

export default App;
