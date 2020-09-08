import React from "react";
import { Picture } from "react-responsive-picture";
import { Link } from "react-router-dom";

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

const images = [
  {
    largepic: image21,
    //     smallpic: "../images/image21s.jpg",
    smallpic: image21s,
    alt: "Michel Verjux",
    describe: {
      name: "Sans titre",
      place: "Paris",
      date: "2019",
    },
    context: "Exposition collective à Chanteloup-les-Vignes",
  },
  {
    largepic: image16,
    // largepic: "../images/image16.png",
    smallpic: image16s,
    // smallpic: "../images/image16s.jpg",
    alt: "Michel Verjux",
    describe: {
      name: "Sans titre",
      place: "Paris",
      date: "2019",
    },

    context: "",
  },
  {
    largepic: image10,
    // largepic: "../images/image10.png",
    smallpic: image10s,
    // smallpic: "../images/image10s.jpg",
    alt: "Michel Verjux",
    describe: {
      name: "Sans titre",
      place: "Paris",
      date: "2019",
    },
    context: "",
  },
  {
    largepic: image11,
    // largepic: "../images/image11.png",
    smallpic: image11s,
    // smallpic: "../images/image11s.jpg",
    alt: "Michel Verjux",
    describe: {
      name: "Sans titre",
      place: "Paris",
      date: "2019",
    },
    context: "",
  },
  {
    largepic: image13,
    // largepic: "../images/image13.png",
    smallpic: image13s,
    // smallpic: "../images/image13s.jpg",
    alt: "Michel Verjux",
    describe: {
      name: "Sans titre",
      place: "Paris",
      date: "1989",
    },
    context: "",
  },
  {
    largepic: image20,
    // largepic: "../images/image20.png",
    smallpic: image20s,
    // smallpic: "../images/image20s.jpg",
    alt: "Michel Verjux",
    describe: {
      name: "Sans titre",
      place: "Paris",
      date: "2019",
    },
    context: "",
  },
  {
    largepic: image14,
    // largepic: "../images/image14.png",
    smallpic: image14s,
    // smallpic: "../images/image14s.jpg",
    alt: "Michel Verjux",
    describe: {
      name: "Sans titre",
      place: "Paris",
      date: "2019",
    },
    context: "",
  },
  {
    largepic: image25,
    // largepic: "../images/image25.png",
    smallpic: image25s,
    // smallpic: "../images/image25s.jpg",
    alt: "Michel Verjux",
    describe: {
      name: "Sans titre",
      place: "Paris",
      date: "2019",
    },
    context: "",
  },
];

// console.log(images);

const id = 456789689;

export default function ImageScreen({ setImageSelected }) {
  return (
    <div className="images-page">
      <div className="menu-image"></div>

      <div className="images-page-main-container">
        <Link to={"/selected-image/" + id}>
          <figure className="main-image-container">
            {/* <img alt="" src={images[0].smallpic} /> */}
            <Picture
              //       alt="Michel Verjux"
              alt={images[0].alt}
              //   className="images-image"
              sources={[
                {
                  // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
                  //   srcSet: ` ${image21s} 2x`,
                  srcSet: ` ${images[0].smallpic} 2x`,
                  //   srcSet: {images[0].smallpic},
                  media: "(max-width: 1200px)",
                  //     type: "image/jpeg"
                },
                {
                  // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
                  //   srcSet: ` ${image21} 2x`,
                  srcSet: ` ${images[0].largepic} 2x`,
                  media: "(min-width: 1201px)",
                  //     type: "image/jpeg"
                },
              ]}
            />
          </figure>
          <figcaption className="legend-main">
            {/* <span>Sans-titre, Paris, 2019.</span> */}
            <span>
              {images[0].describe.name}, {images[0].describe.place},{" "}
              {images[0].describe.date}.{" "}
            </span>
            {/* <span> Exposition collective à Chanteloup-les-Vignes.</span> */}
            <span>{images[0].context}.</span>
          </figcaption>
        </Link>
      </div>

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
