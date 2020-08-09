import React from "react";

import "../../App.css";
import "./style.css";

// Image import
import image11 from "../../images/image11.png";
import image10 from "../../images/image10.png";
import image14 from "../../images/image14.png";
import image25 from "../../images/image25.png";

export default function ImageScreen() {
  return (
    <div className="page">
      <div className="container">
        <div className="bloc-container">
          <div className="responsive-container">
            <div className="bloc-lead">
              <div className="bloc-title-lead">
                <h2>Lead Image</h2>
              </div>
              <div className="lead-image-container">
                <img
                  className="lead-img"
                  src={image10}
                  alt="expo Michel Verjux"
                />
              </div>
            </div>
          </div>
          <div className="responsive-container">
            <div className="bloc-multiple red">
              <div className="bloc-image">
                <div className="bloc-title">
                  <h3>Image4</h3>
                </div>
                <div className="image-container">
                  <img className="img" src={image14} alt="expo Michel Verjux" />
                </div>
              </div>
              <div className="bloc-image">
                <div className="bloc-title">
                  <h3>Image3</h3>
                </div>
                <div className="image-container">
                  <img className="img" src={image25} alt="expo Michel Verjux" />
                </div>
              </div>
              <div className="bloc-image">
                <div className="bloc-title">
                  <h3>Image2</h3>
                </div>
                <div className="image-container">
                  <img className="img" src={image11} alt="expo Michel Verjux" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
