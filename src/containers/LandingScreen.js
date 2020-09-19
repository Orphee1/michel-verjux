import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import Image from "react-simple-image";
import { Picture } from "react-responsive-picture";

import "../styles/styles.css";

// Image import
import image27 from "../images/image27.png";
import image27s from "../images/image27s.jpg";
import nuit from "../images/NuitBlanche.jpg";
import nuit2 from "../images/NuitBlancheCrop2.jpeg";

export default function LandingScreen({ path, setPath }) {
  useEffect(() => {
    setPath("/");
  });

  return (
    <div className="landing-page">
      <div className="landing-image-container">
        {/* <img className="landing-image" src={image27} alt="Michel Verjux" /> */}
        {/* <Image
          className="landing-image"
          alt="Michel Verjux"
          src={image27s}
          srcSet={{
            "360w": `${image27s}`,
            "1200w": `${image27}`,
          }}
          //   sizes={[
          //     { size: "100vw", mediaCondition: "(max-width: 1200px)" },
          //     { size: "100vw", mediaCondition: "(min-width: 1201px)" },
          //     { size: "calc(33vw - 100px)" },
          //   ]}
        /> */}

        <Picture
          alt="Michel Verjux"
          className="landing-image"
          sources={[
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              //       srcSet: ` ${image27s} 2x`,
              srcSet: ` ${nuit2} 2x`,
              media: "(max-width: 1200px)",
              //     type: "image/jpeg"
            },
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              //       srcSet: ` ${image27} 2x`,
              srcSet: ` ${nuit2} 2x`,
              media: "(min-width: 1201px)",
              //     type: "image/jpeg"
            },
          ]}
        />
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
      <div className="legend-container">
        <p>
          Isabelle Lartault et Michel Verjux, Tout le reste est dans l’ombre,
          Nuit Blanche, Paris, 2010, photo : André Morin.
        </p>
      </div>
    </div>
  );
}
