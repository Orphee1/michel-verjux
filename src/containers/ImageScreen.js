import React from "react";

import "../styles/styles.css";

// Image import
// import image11 from "../images/image11.png";
// import image10 from "../images/image10.png";
// import image14 from "../images/image14.png";
// import image25 from "../images/image25.png";

export default function ImageScreen() {
  return (
    <div className="images-page">
      <div className="menu-image  orange"></div>
      <div className="images-page-landing-image-container yellow"></div>
      <div className="bloc-other-image blue">
        <div className="other-image"></div>
        <div className="other-image"></div>
        <div className="other-image"></div>
      </div>
    </div>
  );
}
