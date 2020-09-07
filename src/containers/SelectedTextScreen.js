import React from "react";
import { Link } from "react-router-dom";

import "../styles/styles.css";

export default function SelectedText() {
  return (
    <div className="selected-page">
      <div className="menu-text"></div>
      <div className="selected-text blue"></div>

      <div className="button-container">
        <Link to="/text">
          <button className="button">Retour</button>
        </Link>
      </div>
    </div>
  );
}
