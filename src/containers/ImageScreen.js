import React, {
  useState,
  useEffect,
  // useCallback,
  useContext,
} from "react";
import { Picture } from "react-responsive-picture";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import Axios from "axios";

import "../styles/styles.css";

// Components import
import MainImageLoader from "../components/MainImageLoader";
import MultipleImagesLoader from "../components/MultipleImagesLoader";

export default function ImageScreen() {
  console.log("render component");
  // Theme definition
  const [theme] = useContext(ThemeContext);
  const { themeSelected, themeOne, themeTwo } = theme;
  let option;
  let icon;
  switch (themeSelected) {
    case true:
      icon = "icon";
      option = themeOne;
      break;
    case false:
      icon = "icon2";
      option = themeTwo;
      break;
    default:
      console.log("default");
  }
  const [images, setImages] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [period, setPeriod] = useState(0);
  const [backSort, setBackSort] = useState(false);
  //   console.log(images);

  //   const fetchImages = useCallback(async () => {
  const fetchImages = async () => {
    console.log("fetch images");

    try {
      const response = await Axios.get(
        process.env.REACT_APP_WEBADDRESS +
          "/images?backSort=" +
          backSort +
          "&period=" +
          period
      );
      if (response.data.length !== 0) {
        setImages(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    //   }, [backSort, period]);
  };

  useEffect(() => {
    console.log("run useEffect");
    fetchImages();
    //   }, [backSort, period, fetchImages]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backSort, period]);

  return (
    <div className="images-page" style={{ background: option.bg }}>
      <div className="menu-custom">
        <div
          className={icon}
          onClick={() => {
            setBackSort(false);
          }}
        >
          Fin
        </div>
        <div
          className={icon}
          onClick={() => {
            setBackSort(true);
          }}
        >
          Début
        </div>
        <div
          className={icon}
          onClick={() => {
            setPeriod("1");
          }}
        >
          Jeunesse
        </div>
        <div
          className={icon}
          onClick={() => {
            setPeriod("2");
          }}
        >
          Maturité
        </div>
        <div
          className={icon}
          onClick={() => {
            setPeriod("3");
          }}
        >
          Sagesse
        </div>
        <div
          className={icon}
          style={{ height: "4rem" }}
          onClick={() => {
            setPeriod("0");
          }}
        >
          Toutes les oeuvres
        </div>
        <div
          className="label"
          style={{ background: option.syntax, color: option.bg }}
        >
          Menu
        </div>
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
            <figcaption
              className="legend-main"
              style={{ background: option.bg }}
            >
              <span style={{ color: option.syntax }}>{images[0].title}, </span>
              {images[0].town && (
                <span style={{ color: option.syntax }}>{images[0].town}, </span>
              )}
              <span style={{ color: option.syntax }}>{images[0].year}.</span>
            </figcaption>
          </Link>
        )}
      </div>

      <div className="bloc-other-image">
        {isLoading ? (
          <MultipleImagesLoader />
        ) : (
          images.slice(1).map((image, index) => {
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

                <figcaption
                  className="legend-other"
                  style={{ background: option.bg }}
                >
                  <div className="other-title" style={{ color: option.syntax }}>
                    {image.title}
                  </div>

                  <p style={{ color: option.syntax }}>{image.year}</p>
                </figcaption>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
