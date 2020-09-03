import React from "react";
import Image from "react-simple-image";

import "../styles/styles.css";

// Image import
import image11 from "../images/image11.png";
import image11s from "../images/image11s.jpg";
import image10 from "../images/image10.png";
import image10s from "../images/image10s.jpg";
import image13 from "../images/image13.png";
import image13s from "../images/image13s.jpg";
import image16 from "../images/image16.png";
import image16s from "../images/image16s.jpg";
import image20 from "../images/image20.png";
import image20s from "../images/image20s.jpg";
import image14 from "../images/image14.png";
import image14s from "../images/image14s.jpg";
import image25 from "../images/image25.png";
import image25s from "../images/image25s.jpg";
import image21 from "../images/image21.png";
import image21s from "../images/image21s.jpg";

export default function ImageScreen() {
  return (
    <div className="images-page">
      <div className="menu-image"></div>
      <figure className="images-page-landing-image-container yellow">
        {/* <img className="" src={image21} alt="Michel Verjux" /> */}
        <Image
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
        />
      </figure>
      {/* <span className="legend-main-image">Sans Titre, Paris, 2019.</span> */}
      <div className="bloc-other-image">
        <figure className="other-image-container">
          {/* <img className="other-image" src={image16} alt="Michel Verjux" /> */}
          <Image
            className="other-image"
            alt="Michel Verjux"
            src={image16s}
            srcSet={{
              "360w": `${image16s}`,
              "1200w": `${image16}`,
            }}
            //   sizes={[
            //     { size: "28vw", mediaCondition: "(max-width: 1200px)" },
            //     { size: "50vw", mediaCondition: "(min-width: 1200px)" },
            //     { size: "calc(33vw - 100px)" },
            //   ]}
          />
        </figure>
        <figure className="other-image-container red">
          {/* <img className="other-image" src={image10} alt="Michel Verjux" /> */}
          <Image
            className="other-image"
            alt="Michel Verjux"
            src={image10s}
            srcSet={{
              "360w": `${image10s}`,
              "1200w": `${image10}`,
            }}
            //   sizes={[
            //     { size: "28vw", mediaCondition: "(max-width: 1200px)" },
            //     { size: "50vw", mediaCondition: "(min-width: 1200px)" },
            //     { size: "calc(33vw - 100px)" },
            //   ]}
          />
        </figure>
        <figure className="other-image-container red">
          {/* <img className="other-image" src={image20} alt="Michel Verjux" /> */}
          <Image
            className="other-image"
            alt="Michel Verjux"
            src={image20s}
            srcSet={{
              "360w": `${image20s}`,
              "1200w": `${image20}`,
            }}
            //   sizes={[
            //     { size: "28vw", mediaCondition: "(max-width: 1200px)" },
            //     { size: "50vw", mediaCondition: "(min-width: 1200px)" },
            //     { size: "calc(33vw - 100px)" },
            //   ]}
          />
        </figure>
        <figure className="other-image-container red">
          {/* <img className="other-image" src={image13} alt="Michel Verjux" /> */}
          <Image
            className="other-image"
            alt="Michel Verjux"
            src={image13s}
            srcSet={{
              "360w": `${image13s}`,
              "1200w": `${image13}`,
            }}
            //   sizes={[
            //     { size: "28vw", mediaCondition: "(max-width: 1200px)" },
            //     { size: "50vw", mediaCondition: "(min-width: 1200px)" },
            //     { size: "calc(33vw - 100px)" },
            //   ]}
          />
        </figure>
        <figure className="other-image-container red">
          {/* <img className="other-image" src={image11} alt="Michel Verjux" /> */}
          <Image
            className="other-image"
            alt="Michel Verjux"
            src={image11s}
            srcSet={{
              "360w": `${image11s}`,
              "1200w": `${image11}`,
            }}
            //   sizes={[
            //     { size: "28vw", mediaCondition: "(max-width: 1200px)" },
            //     { size: "50vw", mediaCondition: "(min-width: 1200px)" },
            //     { size: "calc(33vw - 100px)" },
            //   ]}
          />
        </figure>
        <figure className="other-image-container red">
          {/* <img className="other-image" src={image14} alt="Michel Verjux" /> */}
          <Image
            className="other-image"
            alt="Michel Verjux"
            src={image14s}
            srcSet={{
              "360w": `${image14s}`,
              "1200w": `${image14}`,
            }}
            //   sizes={[
            //     { size: "28vw", mediaCondition: "(max-width: 1200px)" },
            //     { size: "50vw", mediaCondition: "(min-width: 1200px)" },
            //     { size: "calc(33vw - 100px)" },
            //   ]}
          />
        </figure>
        <figure className="other-image-container red">
          {/* <img className="other-image" src={image25} alt="" /> */}
          <Image
            className="other-image"
            alt="Michel Verjux"
            src={image25s}
            srcSet={{
              "360w": `${image25s}`,
              "1200w": `${image25}`,
            }}
            //   sizes={[
            //     { size: "28vw", mediaCondition: "(max-width: 1200px)" },
            //     { size: "50vw", mediaCondition: "(min-width: 1200px)" },
            //     { size: "calc(33vw - 100px)" },
            //   ]}
          />
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
