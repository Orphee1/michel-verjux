import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../main.css";
import styled from "styled-components"
import {Hero, HomeArticles, HomeImages,SEO} from "../components";


const HomeScreen = () => {

  const [images, setImages] = useState([]);
  const [texts, setTexts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
//   console.log(images);
  const pictures  = images.slice(0, 4)


  const fetchData = async () => {
    try {
      const response = await Axios.get(
        process.env.REACT_APP_WEBADDRESS + "/images"
      );
      if (response.data) {
        setImages(response.data);
      }
      const responseText = await Axios.get(
        process.env.REACT_APP_WEBADDRESS + "/texts"
      );
      if (responseText.data) {
        // console.log(responseText.data);
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
    <Wrapper>
   <Hero />  
   {isLoading ? (
<p>loading...</p>
   ) : (
<>
      <HomeImages 
      pictures={pictures}
      />
      <HomeArticles />
      </>
   )}
   
  
    </Wrapper>
  );
}

export default HomeScreen; 

const Wrapper = styled.main`
min-height: 100vh; 
background: var(--clr-white); 
`