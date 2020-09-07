import React from "react";
import { Picture } from "react-responsive-picture";

import "../styles/styles.css";

// Images import
import portrait from "../images/MichelVerjux2.jpg";
import portraits from "../images/MichelVerjux2s.jpg";
import bachelard from "../images/Bachelard.jpg";
import marx from "../images/Marx.jpg";
import casto from "../images/Castoriadis.jpg";
import famille1 from "../images/image6.png";

export default function BioScreen() {
  return (
    <div className="bio-page">
      <div className="margin-left remove600"></div>
      <div className="margin-right remove600"></div>
      <div className="bloc-image-reference">
        <Picture
          alt=""
          className=""
          sources={[
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${bachelard} 2x`,
              media: "(max-width: 1200px)",
              //     type: "image/jpeg"
            },
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${bachelard} 2x`,
              media: "(min-width: 1201px)",
              //     type: "image/jpeg"
            },
          ]}
        />
        <Picture
          alt=""
          className=""
          sources={[
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${marx} 2x`,
              media: "(max-width: 1200px)",
              //     type: "image/jpeg"
            },
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${marx} 2x`,
              media: "(min-width: 1201px)",
              //     type: "image/jpeg"
            },
          ]}
        />
        <Picture
          alt=""
          className=""
          sources={[
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${casto} 2x`,
              media: "(max-width: 1200px)",
              //     type: "image/jpeg"
            },
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${casto} 2x`,
              media: "(min-width: 1201px)",
              //     type: "image/jpeg"
            },
          ]}
        />
        <Picture
          alt=""
          className=""
          sources={[
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${bachelard} 2x`,
              media: "(max-width: 1200px)",
              //     type: "image/jpeg"
            },
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${bachelard} 2x`,
              media: "(min-width: 1201px)",
              //     type: "image/jpeg"
            },
          ]}
        />
      </div>
      <div className="bloc-bio">
        <h4>Bio</h4>
        <p>
          Michel Verjux est un artiste visuo-spatial contemporain, poète et
          théoricien de l'art français, né en 1956, à Chalon-sur-Saône.{" "}
        </p>
        <h4>Contact</h4>
        <p>michel.verjux@gmail.com / 06 84 64 77 59.</p>
        <h4>Bibliographie</h4>
      </div>
      <div className="bloc-image-portrait">
        <Picture
          alt="Friends Michel Verjux"
          className=""
          sources={[
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${portraits} 2x`,
              media: "(max-width: 1200px)",
              //     type: "image/jpeg"
            },
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${portrait} 2x`,
              media: "(min-width: 1201px)",
              //     type: "image/jpeg"
            },
          ]}
        />
      </div>
      <div className="bloc-biblio">
        <p>Titre de l’ouvrage et de l’oeuvre, éditeur, collection, année.</p>
        <p>Titre de l’ouvrage et de l’oeuvre, éditeur, collection, année.</p>
        <p>Titre de l’ouvrage et de l’oeuvre, éditeur, collection, année.</p>
        <p>Titre de l’ouvrage et de l’oeuvre, éditeur, collection, année.</p>
        <p>Titre de l’ouvrage et de l’oeuvre, éditeur, collection, année.</p>
        <p>Titre de l’ouvrage et de l’oeuvre, éditeur, collection, année.</p>
        <p>Titre de l’ouvrage et de l’oeuvre, éditeur, collection, année.</p>
        <p>Titre de l’ouvrage et de l’oeuvre, éditeur, collection, année.</p>
        <p>Titre de l’ouvrage et de l’oeuvre, éditeur, collection, année.</p>
        <p>Titre de l’ouvrage et de l’oeuvre, éditeur, collection, année.</p>
        <p>Titre de l’ouvrage et de l’oeuvre, éditeur, collection, année.</p>
        <p>Titre de l’ouvrage et de l’oeuvre, éditeur, collection, année.</p>
        <p>Titre de l’ouvrage et de l’oeuvre, éditeur, collection, année.</p>
        <p>Titre de l’ouvrage et de l’oeuvre, éditeur, collection, année.</p>
        <p>Titre de l’ouvrage et de l’oeuvre, éditeur, collection, année.</p>
        <p>Titre de l’ouvrage et de l’oeuvre, éditeur, collection, année.</p>
        <p>Titre de l’ouvrage et de l’oeuvre, éditeur, collection, année.</p>
        <p>Titre de l’ouvrage et de l’oeuvre, éditeur, collection, année.</p>
        <p>Titre de l’ouvrage et de l’oeuvre, éditeur, collection, année.</p>
      </div>
      <div className="bloc-image-famille">
        <Picture
          alt="Friends Michel Verjux"
          className=""
          sources={[
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${famille1} 2x`,
              media: "(max-width: 1200px)",
              //     type: "image/jpeg"
            },
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${famille1} 2x`,
              media: "(min-width: 1201px)",
              //     type: "image/jpeg"
            },
          ]}
        />
        <Picture
          alt="Friends Michel Verjux"
          className=""
          sources={[
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${famille1} 2x`,
              media: "(max-width: 1200px)",
              //     type: "image/jpeg"
            },
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${famille1} 2x`,
              media: "(min-width: 1201px)",
              //     type: "image/jpeg"
            },
          ]}
        />
        <Picture
          alt="Friends Michel Verjux"
          className=""
          sources={[
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${famille1} 2x`,
              media: "(max-width: 1200px)",
              //     type: "image/jpeg"
            },
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${famille1} 2x`,
              media: "(min-width: 1201px)",
              //     type: "image/jpeg"
            },
          ]}
        />
        <Picture
          alt="Friends Michel Verjux"
          className=""
          sources={[
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${famille1} 2x`,
              media: "(max-width: 1200px)",
              //     type: "image/jpeg"
            },
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${famille1} 2x`,
              media: "(min-width: 1201px)",
              //     type: "image/jpeg"
            },
          ]}
        />
      </div>
    </div>
  );
}
