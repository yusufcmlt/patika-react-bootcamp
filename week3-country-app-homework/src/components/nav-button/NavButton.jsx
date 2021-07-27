import React from "react";
import { useTabs } from "../../utils/custom-hooks";

import "./NavButton.style.scss";

export default function NavButton({ children, icon, route, handleTabs }) {
  return (
    <button
      type="button"
      className={`nav__button nav__button--${icon}`}
      onClick={() => {
        handleTabs(route);
      }}
    >
      <span className={`nav__icon nav__icon--${icon}`} />
      <p className="nav__text">{children}</p>
    </button>
  );
}
