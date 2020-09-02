import React from "react";

import "../styles/styles.css";

// Image import
import image11 from "../images/image11.png";
import image10 from "../images/image10.png";
import image13 from "../images/image13.png";
import image16 from "../images/image16.png";
import image20 from "../images/image20.png";
import image14 from "../images/image14.png";
import image25 from "../images/image25.png";
import image21 from "../images/image21.png";

export default function ImageScreen() {
  return (
    <div className="images-page">
      <div className="menu-image"></div>
      <figure className="images-page-landing-image-container yellow">
        <img className="" src={image21} alt="Michel Verjux" />
      </figure>
      <div className="bloc-other-image">
        <figure className="other-image-container red">
          <img className="other-image" src={image16} alt="Michel Verjux" />
        </figure>
        <figure className="other-image-container red">
          <img className="other-image" src={image10} alt="Michel Verjux" />
        </figure>
        <figure className="other-image-container red">
          <img className="other-image" src={image20} alt="Michel Verjux" />
        </figure>
        <figure className="other-image-container red">
          <img className="other-image" src={image13} alt="Michel Verjux" />
        </figure>
        <figure className="other-image-container red">
          <img className="other-image" src={image11} alt="Michel Verjux" />
        </figure>
        <figure className="other-image-container red">
          <img className="other-image" src={image14} alt="Michel Verjux" />
        </figure>
        <figure className="other-image-container red">
          <img className="other-image" src={image25} alt="" />
        </figure>
        {/* <figure className="other-image-container red">
        <img className="other-image" src={} alt="" />

        </figure>
        <figure className="other-image-container red">
        <img className="other-image" src={} alt="" />

        </figure>
        <figure className="other-image-container red">
        <img className="other-image" src={} alt="" />

        </figure> */}
      </div>
    </div>
  );
}
