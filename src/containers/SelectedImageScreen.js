import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Picture } from "react-responsive-picture";
import { Link, useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import Cookie from "js-cookie";

import "../styles/styles.css";

// Components import
import SEO from "../components/SEO";
import SelectedImageLoader from "../components/SelectedImageLoader";
import LegendLoader from "../components/LegendLoader";

export default function SelectedImage() {
  // Theme definition
  const [theme] = useContext(ThemeContext);
  const { themeSelected, themeOne, themeTwo } = theme;
  let option;
  switch (themeSelected) {
    case true:
      option = themeOne;
      break;
    case false:
      option = themeTwo;
      break;
    default:
      console.log("default");
  }

  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const { id } = useParams();
  const token = Cookie.get("token");

  const fetchImage = async () => {
    try {
      const response = await Axios.get(
        process.env.REACT_APP_WEBADDRESS + "/image?id=" + id
      );
      if (response.data) {
        console.log(response.data);
        setImage(response.data);
        setIsLoading(false);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteImage = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("id", id);

      const response = await Axios.post(
        process.env.REACT_APP_WEBADDRESS + "/image/delete",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data) {
        console.log(response.data);
        history.push("/image");
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="selected-image-page" style={{ background: option.bg }}>
      <SEO
        title="Image Page"
        description={
          isLoading
            ? "Shows single Michel Verjux'art work"
            : `Michel Verjux, ${image.title}`
        }
      />
      <div className="info-image" style={{ background: option.syntax }}>
        {!isLoading && <h6 style={{ color: option.bg }}>{image.year}</h6>}
      </div>
      <div className="selected-image-container">
        {isLoading ? (
          <SelectedImageLoader />
        ) : (
          <div className="sub-container">
            <Picture
              alt="Michel Verjux"
              className="selected-image"
              sources={[
                {
                  // srcSet: ` ${image21s} 2x`,
                  srcSet: ` ${image.picture} 2x`,

                  media: "(max-width: 1200px)",
                  //     type: "image/jpeg"
                },
                {
                  // srcSet: ` ${image21} 2x`,
                  srcSet: ` ${image.picture} 2x`,

                  media: "(min-width: 1201px)",
                  //     type: "image/jpeg"
                },
              ]}
            />
          </div>
        )}
      </div>
      <div className="bloc-legend">
        {isLoading ? (
          <LegendLoader />
        ) : (
          <>
            <h5 className="legend-title" style={{ color: option.syntax }}>
              {image.title}.
            </h5>
            <p className="legend-infos">
              {image.medium && (
                <span className="medium" style={{ color: option.syntax }}>
                  {image.medium},{" "}
                </span>
              )}
              {image.context && (
                <span style={{ color: option.syntax }}>{image.context}, </span>
              )}
              {image.place && (
                <span style={{ color: option.syntax }}>{image.place}, </span>
              )}
              {image.town && (
                <span style={{ color: option.syntax }}>{image.town}, </span>
              )}

              <span style={{ color: option.syntax }}>{image.year}. </span>
              {image.collect && (
                <span className="collect" style={{ color: option.syntax }}>
                  {image.collect}.
                </span>
              )}
            </p>
            <p>
              {image.credit && (
                <span
                  className="legend-credit"
                  style={{ color: option.syntax }}
                >
                  Crédit photo: {image.credit}.
                </span>
              )}
            </p>
          </>
        )}
      </div>

      {token && (
        <button
          className="delete-button"
          style={{ background: option.syntax, color: option.bg }}
          onClick={deleteImage}
        >
          Supprimer
        </button>
      )}

      <div className="button-container">
        <Link to="/image">
          <button
            className="button"
            style={{ background: option.syntax, color: option.bg }}
          >
            Retour
          </button>
        </Link>
      </div>
    </div>
  );
}
