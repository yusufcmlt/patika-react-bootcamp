import React from "react";
import NavButton from "../nav-button/NavButton";

import "./Header.style.scss";

export default function Header({ handleTabs }) {
  return (
    <header className="header">
      <NavButton handleTabs={handleTabs} route="countries" icon="world">
        Get All Countries
      </NavButton>
      <NavButton handleTabs={handleTabs} route="statisctics" icon="statistics">
        Check Statistics
      </NavButton>
    </header>
  );
}
