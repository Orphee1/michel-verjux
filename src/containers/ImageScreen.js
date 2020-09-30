import React, { useState, useEffect } from "react";
import { Picture } from "react-responsive-picture";
import { Link } from "react-router-dom";
import Axios from "axios";

import "../styles/styles.css";

export default function ImageScreen() {
  const [images, setImages] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [period, setPeriod] = useState(0);
  const [backSort, setBackSort] = useState(false);
  //   const [sort, setSort] = useState(2);
  console.log(images);

  console.log(backSort);

  const fetchImages = async () => {
    try {
      const response = await Axios.get(
        // "http://localhost:4000/images?backSort=" + backSort + "&period=" + period
        "https://michelverjux-backend.herokuapp.com/images?backSort=" +
          backSort +
          "&period=" +
          period
      );
      if (response.data) {
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
      <div className="menu-image">
        <button
          className="sort-button"
          onClick={() => {
            setBackSort(!backSort);
          }}
        >
          {backSort === false ? <p>Débuts</p> : <p>Maintenant</p>}
        </button>
        {/* <select
          className="menu-selecter"
          onChange={(event) => {
            setSort(event.target.value);
          }}
        >
          <option value="0">Afficher</option>
          <option value="1">Depuis le début</option>
          <option value="2">Depuis maintenant</option>
        </select> */}
        <select
          className="menu-selecter"
          onChange={(event) => {
            setPeriod(event.target.value);
          }}
        >
          <option value="0">Afficher</option>
          <option value="1">Jeunesse</option>
          <option value="2">Maturité</option>
          <option value="3">Sagesse</option>
        </select>
      </div>

      <div className="images-page-main-container">
        {isLoading ? (
          <div> ... chargement en cours ...</div>
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
              {/* <span>Sans-titre, Paris, 2019.</span> */}
              <span>{images[0].title}</span>
              {", "}
              <span>{images[0].place}</span>
              {", "}
              <span>{images[0].year}.</span>

              {/* <span> Exposition collective à Chanteloup-les-Vignes.</span> */}
              <span>{images[0].context}.</span>
            </figcaption>
          </Link>
        )}
      </div>

      <div className="bloc-other-image">
        {isLoading ? (
          <div>... chargement en cours ...</div>
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
                  <span>{image.title}</span>
                  <span>{image.place}</span>
                  <span>{image.year}</span>
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
