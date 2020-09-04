import React from "react";
import { Picture } from "react-responsive-picture";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../styles/styles.css";

// Images import
import image21 from "../images/image21.png";
import image21s from "../images/image21s.jpg";
// import image11s from "../images/image11s.jpg";
// import image10s from "../images/image10s.jpg";
// import image13s from "../images/image13s.jpg";
// import image16s from "../images/image16s.jpg";
// import image20s from "../images/image20s.jpg";
// import image14s from "../images/image14s.jpg";
// import image25s from "../images/image25s.jpg";

const MyCarousel = () => {
  return (
    <Carousel
    //     autoPlay
    //     infiniteLoop
    >
      <div className="carousel-text">
        <h4 className="title">
          Trois notes numérotées à mon nombre de jours de vie
        </h4>
        <p className="middle">
          « Non pas la lumière, mais l’éclairage. » « Éclairer, c’est toujours
          éclairer localement. (Le local n’est pas l’anecdotique, on raconte
          tout autant d’histoires dans le global..) »   <br />
          « Le minimum nécessaire et suffisant : de la lumière en acte dans une
          situation donnée (dans un espace et un temps donnés) donnant à voir
          aux yeux du spectateur cette situation d’exposition elle-même. »
        </p>
        <p className="bottom">
          Notes numérotées à mon nombre de jours de vie, notes n° 9 987, n° 10
          042 et n° 10 054, rééd. Michel Verjux, Morceaux réfléchis. Écrits
          1977-2011, op. cit., p. 172 et 753.{" "}
        </p>
      </div>
      <div className="carousel-image">
        <figure className="carousel-image-container orange">
          <Picture
            alt="Michel Verjux"
            // className="home-image"
            sources={[
              {
                // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
                srcSet: ` ${image21s} 2x`,
                media: "(max-width: 1200px)",
                //     type: "image/jpeg"
              },
              {
                // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
                srcSet: ` ${image21} 2x`,
                media: "(min-width: 1201px)",
                //     type: "image/jpeg"
              },
            ]}
          />
        </figure>
        <figcaption className="legend-carousel-image red">
          <span>Sans-titre, Paris, 2019.</span>
          <span> Exposition collective à Chanteloup-les-Vignes.</span>
        </figcaption>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
