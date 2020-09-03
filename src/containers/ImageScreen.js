import React from "react";
// import Image from "react-simple-image";
import { Picture } from "react-responsive-picture";

import "../styles/styles.css";

// Image import
import image11s from "../images/image11s.jpg";
import image10s from "../images/image10s.jpg";
import image13s from "../images/image13s.jpg";
import image16s from "../images/image16s.jpg";
import image20s from "../images/image20s.jpg";
import image14s from "../images/image14s.jpg";
import image25s from "../images/image25s.jpg";
import image21 from "../images/image21.png";
import image21s from "../images/image21s.jpg";

export default function ImageScreen() {
  return (
    <div className="images-page">
      <div className="menu-image"></div>
      <div className="images-page-main-container yellow">
        <figure className="main-image-container">
          {/* <img className="" src={image21} alt="Michel Verjux" /> */}
          {/* <Image
          className=""
          alt="Michel Verjux"
          src={image21s}
          srcSet={{
            "360w": `${image21s}`,
            "1200w": `${image21}`,
          }}
          //   sizes={[
          //     { size: "28vw", mediaCondition: "(max-width: 1200px)" },
          //     { size: "50vw", mediaCondition: "(min-width: 1200px)" },
          //     { size: "calc(33vw - 100px)" },
          //   ]}
        /> */}
          <Picture
            alt="Michel Verjux"
            //   className="images-image"
            sources={[
              {
                // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
                srcSet: ` ${image21s} 2x`,
                media: "(max-width: 1200px)",
                //     type: "image/jpeg"
              },
              {
                // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
                srcSet: ` ${image21} 2x`,
                media: "(min-width: 1201px)",
                //     type: "image/jpeg"
              },
            ]}
          />
        </figure>
        <figcaption className="legend-main">
          <span>Sans-titre, Paris, 2019.</span>
          <span> Exposition collective à Chanteloup-les-Vignes</span>
        </figcaption>
      </div>
      {/* <span className="legend-main-image">Sans Titre, Paris, 2019.</span> */}
      <div className="bloc-other-image">
        <div className="other-container">
          <figure className="other-image-container">
            <img className="other-image" src={image16s} alt="Michel Verjux" />
          </figure>
          {/* <div className="legend-other">Sans Titre, Paris, 2019</div> */}
          <figcaption className="legend-other">
            Sans Titre, Paris, 2019.
          </figcaption>
        </div>
        <div className="other-container">
          <figure className="other-image-container">
            <img className="other-image" src={image10s} alt="Michel Verjux" />
          </figure>
          <div className="legend-other">Sans Titre, Paris, 2019.</div>
        </div>
        <div className="other-container">
          <figure className="other-image-container">
            <img className="other-image" src={image20s} alt="Michel Verjux" />
            <div className="legend-other">Sans Titre, Paris, 2019.</div>
          </figure>
        </div>
        <div className="other-container">
          <figure className="other-image-container">
            <img className="other-image" src={image13s} alt="Michel Verjux" />
          </figure>
          <div className="legend-other">Sans Titre, Paris, 2019.</div>
        </div>
        <div className="other-container">
          <figure className="other-image-container">
            <img className="other-image" src={image11s} alt="Michel Verjux" />
          </figure>
          <div className="legend-other">Sans Titre, Paris, 2019.</div>
        </div>
        <div className="other-container">
          <figure className="other-image-container">
            <img className="other-image" src={image14s} alt="Michel Verjux" />
          </figure>
          <div className="legend-other">Sans Titre, Paris, 2019.</div>
        </div>
        <div className="other-container">
          <figure className="other-image-container">
            <img className="other-image" src={image25s} alt="" />
          </figure>
          <div className="legend-other">Sans Titre, Paris, 2019.</div>
        </div>
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
