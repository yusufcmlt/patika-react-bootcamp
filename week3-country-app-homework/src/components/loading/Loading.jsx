import React from "react";

import "./Loading.style.scss";

export default function Loading() {
  return (
    <div className="loading">
      <div className="loading__icon loading__icon--pin" />
      <div className="loading__icon loading__icon--earth" />
      <p className="loading__text">Loading...</p>
    </div>
  );
}
