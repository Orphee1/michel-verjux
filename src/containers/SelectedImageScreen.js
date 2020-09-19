import React, { useState, useEffect } from "react";
import { Picture } from "react-responsive-picture";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";

import "../styles/styles.css";

export default function SelectedImage() {
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  console.log(id);

  const fetchImage = async () => {
    const response = await Axios.get("http://localhost:4000/image?id=" + id);
    try {
      console.log(response.data);
      setImage(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchImage();
  });

  return (
    <div className="selected-image-page">
      <div className="menu-image"></div>
      <div className="selected-image-container">
        {isLoading ? (
          <div> ... chargement en cours ...</div>
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
      {isLoading ? (
        <div>... chargement en cours</div>
      ) : (
        <div className="bloc-legend">
          {/* <h5>Sans titre, Paris, 2019.</h5> */}
          <h5>
            <span>{image.title}</span>
            {", "}
            <span>{image.place}</span>
            {", "}
            <span>{image.year}.</span>
          </h5>
          {/* <p>Exposition collective à Chanteloup-les-Vignes.</p> */}
          <p>{image.context}</p>
          <p className="other-context">{image.context}</p>
        </div>
      )}

      <div className="button-container">
        <Link to="/image">
          <button className="button">Retour</button>
        </Link>
      </div>
    </div>
  );
}
