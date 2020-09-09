import React from "react";
import { Picture } from "react-responsive-picture";
import { Link } from "react-router-dom";

import "../styles/styles.css";

import image21 from "../images/image21.png";
import image21s from "../images/image21s.jpg";

export default function SelectedImage({ imageSelected }) {
  //   console.log("image on selected page: " + imageSelected.date);
  return (
    <div className="selected-image-page">
      <div className="menu-image"></div>
      <div className="selected-image-container">
        <div className="sub-container">
          <Picture
            alt="Michel Verjux"
            //   alt={images[0].alt}
            className="selected-image"
            sources={[
              {
                // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",

                srcSet: ` ${image21s} 2x`,
                //       srcSet: ` ${images[0].smallpic} 2x`,
                //   srcSet: {images[0].smallpic},
                media: "(max-width: 1200px)",
                //     type: "image/jpeg"
              },
              {
                // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",

                srcSet: ` ${image21} 2x`,
                //       srcSet: ` ${images[0].largepic} 2x`,
                media: "(min-width: 1201px)",
                //     type: "image/jpeg"
              },
            ]}
          />
        </div>
        {/* <div className="relative"></div> */}
      </div>
      <div className="bloc-legend">
        <h5>Sans titre, Paris, 2019.</h5>
        <p>Exposition collective à Chanteloup-les-Vignes.</p>
        <p className="other-context">
          Autres éléments de contextes. Autres éléments de contextes. Autres
          éléments de contextes.
        </p>
      </div>

      <div className="button-container">
        <Link to="/image">
          <button className="button">Retour</button>
        </Link>
      </div>
    </div>
  );
}
