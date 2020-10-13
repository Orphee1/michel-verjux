import React from "react";
import {Link} from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../styles/styles.css";




const MyCarousel = ({texts, images}) => {
  return (
    <Carousel
          autoPlay infiniteLoop
          stopOnHover={true}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      interval={5500}
      transitionTime={2000}
      className="carouselX"
    >
                        <Link        
                        to="/text"
                        >         
                  <div className="carousel-text">
                    <h5 className="title">
                      <span 
                      className="quotes"
                      style={{ fontWeight: "bold", fontSize: "5.5rem" }}>"</span>
                      {texts.title}
                    </h5>
                    <p className="middle">
                            {texts.article}  
                    </p> 
                    </div>
      </Link> 
       

      <Link
      to="/image"
      >
      <div className="carousel-image">
                        <img 
                        src={images.picture}
                        alt='MichelVerjux'
                        />
      </div>
     
      </Link>

    </Carousel>
  );
};

export default MyCarousel;
