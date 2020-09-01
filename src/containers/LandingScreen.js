import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/styles.css";

// Image import
import image27 from "../images/image27.png";

export default function LandingScreen({ path, setPath }) {
  useEffect(() => {
    setPath("/");
  });

  return (
    <div className="landing-page">
      <div className="image-container">
        <img className="landing-image" src={image27} alt="Michel Verjux" />
      </div>

      <div className="logo-container">
        <Link
          to="/home"
          onClick={() => {
            setPath("/home");
          }}
        >
          <h1 className="">Michel Verjux</h1>
        </Link>
      </div>
    </div>
  );
}
