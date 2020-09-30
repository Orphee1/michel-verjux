import React, { useState, useEffect } from "react";
import { Picture } from "react-responsive-picture";
import Axios from "axios";

import "../styles/styles.css";

// Images import
import portrait from "../images/MichelVerjux2.jpg";
import portraits from "../images/MichelVerjux2s.jpg";
import bachelard from "../images/Bachelard.jpg";
import marx from "../images/Marx.jpg";
import casto from "../images/Castoriadis.jpg";
import famille1 from "../images/image6.png";

export default function BioScreen() {
  const [biblios, setBiblios] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchBiblios = async () => {
    try {
      // const response = await Axios.get("http://localhost:4000/biblio");
      const response = await Axios.get(
        "https://https://michelverjux-backend.herokuapp.com/biblio"
      );
      console.log(response.data);
      setBiblios(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchBiblios();
  }, []);

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
        {isLoading ? (
          <div>... chargement en cours ...</div>
        ) : (
          biblios.map((biblio, index) => {
            return (
              <p key={index}>
                <span>{biblio.title}</span>, <span>{biblio.editor}</span>,{" "}
                <span>{biblio.collect}</span>, <span>{biblio.year}</span>.
              </p>
            );
          })
        )}
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
