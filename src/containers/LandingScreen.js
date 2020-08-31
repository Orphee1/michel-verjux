import React from "react";
import { Link } from "react-router-dom";

import "../styles/styles.css";

// Image import
import image27 from "../images/image27.png";

export default function LandingScreen() {
  return (
    <div className="landing-page">
      <img className="landing-image" src={image27} alt="Michel Verjux" />
      <Link to="/home">
        <h1 className="landing-logo">Michel Verjux</h1>
      </Link>
    </div>
  );
}
