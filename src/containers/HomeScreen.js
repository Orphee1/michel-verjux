import React, {useState, useEffect} from "react";
import { Picture } from "react-responsive-picture";
import Axios from "axios"; 

import "../styles/styles.css";

// Components import
import MyCarousel from "../components/Carousel";
import CarouselLoader from "../components/CarouselLoader";

// Image import
import image9 from "../images/image9.png";
import image9s from "../images/image9s.jpg";


export default function HomeScreen() {
const [images, setImages] = useState(); 
const [texts, setTexts] = useState(); 
const [isLoading, setIsLoading] = useState(true); 

const fetchData =  async () => {
        try {
const response = await Axios.get(process.env.REACT_APP_WEBADDRESS + "/images"); 
if (response.data) {
        console.log(response.data); 
        setImages(response.data); 
}
const responseText =  await Axios.get(process.env.REACT_APP_WEBADDRESS + "/texts"); 
if (responseText.data) {
        console.log(responseText.data); 
        setTexts(responseText.data); 
        setIsLoading(false); 

}
        } catch (error) {
                console.log(error);
                alert(error.message); 
        }

};


useEffect(() => {
        fetchData(); 
}, []); 


  return (
    <div className="home-page">  
      <figure className="home-image-container">
        <Picture
          alt="Michel Verjux"
          className="home-image"
          sources={[
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${image9s} 2x`,
              media: "(max-width: 1200px)",
              //     type: "image/jpeg"
            },
            {
              // srcSet: "path-to-mobile-image.jpg, path-to-mobile-image@2x.jpg 2x",
              srcSet: ` ${image9} 2x`,
              media: "(min-width: 1201px)",
              //     type: "image/jpeg"
            },
          ]}
        />
      </figure>
      <h6 className="current">En cours</h6>
      <div className="bloc-carousel">
              {isLoading ? (
<CarouselLoader />
               ): (
                <MyCarousel className="carousel" 
                texts={texts[0]}
                images={images[0]}
                />
              )}
   
      </div>
    </div>
  );
}
