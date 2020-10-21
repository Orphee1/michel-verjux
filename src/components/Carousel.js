import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { ThemeContext } from "../context/ThemeContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../styles/styles.css";

const MyCarousel = ({ texts, images }) => {
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
  return (
    <Carousel
      autoPlay
      infiniteLoop
      //   dynamicHeight
      stopOnHover={true}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      interval={5500}
      transitionTime={2000}
      className="carouselX"
    >
      <Link to="/text">
        <div
          className="carousel-text"
          style={{ background: option.bg, color: option.syntax }}
        >
          <h5 className="title" style={{ background: option.bg }}>
            <span
              className="quotes"
              style={{
                fontWeight: "bold",
                fontSize: "5.5rem",
                color: option.syntax,
              }}
            >
              "
            </span>
            {texts.title}
          </h5>
          <p className="middle" style={{ color: option.syntax }}>
            {texts.article}
          </p>
        </div>
      </Link>

      <Link to="/image">
        <div className="carousel-image">
          <img src={images.picture} alt="MichelVerjux" />
        </div>
      </Link>
    </Carousel>
  );
};

export default MyCarousel;
