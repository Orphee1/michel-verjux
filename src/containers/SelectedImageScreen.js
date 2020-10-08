import React, { useState, useEffect } from "react";
import { Picture } from "react-responsive-picture";
import { Link, useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import Cookie from "js-cookie";

import "../styles/styles.css";

// Components import
import SelectedImageLoader from "../components/SelectedImageLoader";
import LegendLoader from "../components/LegendLoader";

export default function SelectedImage() {
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
    <div className="selected-image-page">
      <div className="menu-image"></div>
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
            <h5 className="legend-title">{image.title}.</h5>
            <p className="legend-infos">
              {image.medium !== "" && <span>{image.medium}, </span>}
              {image.context !== "" && <span>{image.context}, </span>}
              {image.place !== "" && <span>{image.place}, </span>}
              {image.town !== "" && <span>{image.town}, </span>}

              <span>{image.year}. </span>
              {image.collect !== "" && <span>{image.collect}.</span>}
            </p>
            <p>
              {image.credit !== "" && (
                <span className="legend-credit">
                  Crédit photo: {image.credit}.
                </span>
              )}
            </p>
          </>
        )}
      </div>

      {token && (
        <button className="delete-button" onClick={deleteImage}>
          Supprimer
        </button>
      )}

      <div className="button-container">
        <Link to="/image">
          <button className="button">Retour</button>
        </Link>
      </div>
    </div>
  );
}
