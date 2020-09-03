import React from "react";

import "../styles/styles.css";

// Image import
import image9 from "../images/image9.png";
import image9s from "../images/image9s.jpg";
// import image21 from "../images/image21.png";

export default function HomeScreen() {
  return (
    <div className="home-page">
      <figure className="home-image-container yellow">
        <img
          className="home-image"
          src={image9s}
          srcSet={`${image9s} 10vw, ${image9} 34vw`}
          alt="Michel Verjux"
          //   sizes="(min-width: 40em) 80vw, 100vw"
        />
      </figure>
      <div className="carousel blue"></div>
    </div>
  );
}
