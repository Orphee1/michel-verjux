import React from "react";

import "../styles/styles.css";

// Image import
import image9 from "../images/image9.png";
// import image21 from "../images/image21.png";

export default function HomeScreen() {
  return (
    <div className="home-page">
      <figure className="home-image-container yellow">
        <img className="home-image" src={image9} alt="Michel Verjux" />
      </figure>
      <div className="carousel blue"></div>
    </div>
  );
}
