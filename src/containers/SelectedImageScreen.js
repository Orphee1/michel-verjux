import React from "react";
import { Link } from "react-router-dom";

import "../styles/styles.css";

export default function SelectedImage() {
  return (
    <div className="selected-page">
      <div className="menu-image"></div>
      <div className="selected-image blue"></div>
      <div className="bloc-legend blue"></div>
      <div className="button-container">
        <Link to="/image">
          <button className="button">Retour</button>
        </Link>
      </div>
    </div>
  );
}
