import React, { useState, useEffect } from "react";
import { Picture } from "react-responsive-picture";
import { Link } from "react-router-dom";
import Axios from "axios";

import "../styles/styles.css";

// Components import
import MainImageLoader from "../components/MainImageLoader";
import MultipleImagesLoader from "../components/MultipleImagesLoader";

export default function ImageScreen() {
  const [images, setImages] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [period, setPeriod] = useState(0);
  const [backSort, setBackSort] = useState(false);
  console.log(images);

  console.log(backSort);
  console.log(period);

  const fetchImages = async () => {
    try {
      const response = await Axios.get(
        process.env.REACT_APP_WEBADDRESS +
          "/images?backSort=" +
          backSort +
          "&period=" +
          period
      );
      if (response.data.length !== 0) {
        console.log(response.data);
        setImages(response.data);
        setIsLoading(false);
      } else {
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backSort, period]);

  return (
    <div className="images-page">
      <div className="menu-custom">
        <div
          className="icon"
          onClick={() => {
            setBackSort(true);
          }}
        >
          Fin
        </div>
        <div
          className="icon"
          onClick={() => {
            setBackSort(false);
          }}
        >
          Début
        </div>
        <div
          className="icon"
          onClick={() => {
            setPeriod("1");
          }}
        >
          Jeunesse
        </div>
        <div
          className="icon"
          onClick={() => {
            setPeriod("2");
          }}
        >
          Maturité
        </div>
        <div
          className="icon"
          onClick={() => {
            setPeriod("3");
          }}
        >
          Sagesse
        </div>
        <div
          className="icon last"
          onClick={() => {
            setPeriod("0");
          }}
        >
          Toutes les oeuvres
        </div>
        <div className="label">Menu</div>
      </div>

      <div className="images-page-main-container">
        {isLoading ? (
          <MainImageLoader />
        ) : (
          <Link to={"/selected-image/" + images[0]._id}>
            <figure className="main-image-container">
              <Picture
                alt="Michel Verjux"
                //   className="images-image"
                sources={[
                  {
                    srcSet: ` ${images[0].picture} 2x`,
                    media: "(max-width: 1200px)",
                  },
                  {
                    srcSet: ` ${images[0].picture} 2x`,
                    media: "(min-width: 1201px)",
                  },
                ]}
              />
            </figure>
            <figcaption className="legend-main">
              <span>{images[0].title}, </span>
              {images[0].town !== "" && <span>{images[0].town}, </span>}
              <span>{images[0].year}.</span>
            </figcaption>
          </Link>
        )}
      </div>

      <div className="bloc-other-image">
        {isLoading ? (
          <MultipleImagesLoader />
        ) : (
          images.map((image, index) => {
            return (
              <div key={index} className="other-container">
                <figure className="other-image-container">
                  <Link to={"/selected-image/" + image._id}>
                    <img
                      className="other-image"
                      src={image.picture}
                      alt="Michel Verjux"
                    />
                  </Link>
                </figure>

                <figcaption className="legend-other">
                  <span>{image.title}, </span>
                  {image.town !== "" && <span>{image.town}, </span>}
                  <span>{image.year}.</span>
                </figcaption>
              </div>
            );
          })
        )}
        {/* <div className="other-container">
          <figure className="other-image-container">
            <img className="other-image" src={image10s} alt="Michel Verjux" />
          </figure>
          <div className="legend-other">Sans Titre, Paris, 2019.</div>
        </div> */}

        {/* <div className="other-container">
          <figure className="other-image-container">
            <img className="other-image" src={image20s} alt="Michel Verjux" />
            <div className="legend-other">Sans Titre, Paris, 2019.</div>
          </figure>
        </div> */}

        {/* <div className="other-container">
          <figure className="other-image-container">
            <img className="other-image" src={image13s} alt="Michel Verjux" />
          </figure>
          <div className="legend-other">Sans Titre, Paris, 2019.</div>
        </div> */}

        {/* <div className="other-container">
          <figure className="other-image-container">
            <img className="other-image" src={image11s} alt="Michel Verjux" />
          </figure>
          <div className="legend-other">Sans Titre, Paris, 2019.</div>
        </div> */}

        {/* <div className="other-container">
          <figure className="other-image-container">
            <img className="other-image" src={image14s} alt="Michel Verjux" />
          </figure>
          <div className="legend-other">Sans Titre, Paris, 2019.</div>
        </div> */}

        {/* <div className="other-container">
          <figure className="other-image-container">
            <img className="other-image" src={image25s} alt="" />
          </figure>
          <div className="legend-other">Sans Titre, Paris, 2019.</div>
        </div> */}
      </div>
    </div>
  );
}
