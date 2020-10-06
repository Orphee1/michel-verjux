import React from "react";
import { Picture } from "react-responsive-picture";

import "../styles/styles.css";

// Components import
import MyCarousel from "../components/Carousel";

// Image import
import image9 from "../images/image9.png";
import image9s from "../images/image9s.jpg";

export default function HomeScreen() {
  return (
    <div className="home-page">
      {/* <div className="circle"></div> */}
      <figure className="home-image-container">
        <Picture
          alt="Michel Verjux"
          className="home-image"
          sources={[
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${image9s} 2x`,
              media: "(max-width: 1200px)",
              //     type: "image/jpeg"
            },
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${image9} 2x`,
              media: "(min-width: 1201px)",
              //     type: "image/jpeg"
            },
          ]}
        />
      </figure>
      <h6 className="current">En cours</h6>
      <div className="bloc-carousel">
        <MyCarousel className="carousel" />
      </div>
    </div>
  );
}
