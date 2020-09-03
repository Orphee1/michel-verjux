import React from "react";
// import Image from "react-simple-image";
import { Picture } from "react-responsive-picture";

import "../styles/styles.css";

// Image import
import image9 from "../images/image9.png";
import image9s from "../images/image9s.jpg";
// import image21 from "../images/image21.png";

export default function HomeScreen() {
  return (
    <div className="home-page">
      <figure className="home-image-container yellow">
        {/* <img
          className="home-image"
          src={image9}
          srcSet={`${image9s} 70vw, ${image9} 50vw`}
          alt="Michel Verjux"
          //   sizes="(min-width: 40em) 80vw, 100vw"
        /> */}
        {/* <Image
          alt="Michel Verjux"
          src={image9s}
          srcSet={{
            "360w": `${image9s}`,
            "1200w": `${image9}`,
          }}
          sizes={[
            { size: "70vw", mediaCondition: "(max-width: 1200px)" },
            { size: "50vw", mediaCondition: "(min-width: 1200px)" },
            { size: "calc(33vw - 100px)" },
          ]}
        /> */}
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
      <div className="carousel blue"></div>
    </div>
  );
}
