import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "react-simple-image";

import "../styles/styles.css";

// Image import
import image27 from "../images/image27.png";
import image27s from "../images/image27s.jpg";

export default function LandingScreen({ path, setPath }) {
  useEffect(() => {
    setPath("/");
  });

  return (
    <div className="landing-page">
      <figure className="landing-image-container">
        {/* <img className="landing-image" src={image27} alt="Michel Verjux" /> */}
        <Image
          className="landing-image"
          alt="Michel Verjux"
          src={image27s}
          srcSet={{
            "360w": `${image27s}`,
            "1200w": `${image27}`,
          }}
          //   sizes={[
          //     { size: "100vw", mediaCondition: "(max-width: 1200px)" },
          //     { size: "100vw", mediaCondition: "(min-width: 1200px)" },
          //     { size: "calc(33vw - 100px)" },
          //   ]}
        />
      </figure>

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
