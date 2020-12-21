import React, {
  useState,
  useEffect,
} from "react";

import Axios from "axios";

import "../main.css";
import styled from "styled-components"

import { Images, MainImageLoader, MultipleImagesLoader , SEO} from "../components";


const  ImageScreen = () => {

  const [images, setImages] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [period, setPeriod] = useState(0);
  const [backSort, setBackSort] = useState(false);
//     !isLoading && console.log(images);


  const fetchImages = async () => {


    try {
      const response = await Axios.get(
        process.env.REACT_APP_WEBADDRESS +
          "/images?backSort=" +
          backSort +
          "&period=" +
          period
      );
      if (response.data.length !== 0) {
        setImages(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backSort, period]);

  return (
    <Wrapper>
{isLoading ? (
<p>loading ...</p>
) : (
<Images 
pictures={images}
setBackSort={setBackSort}
setPeriod={setPeriod}
/>
)}
    </Wrapper>
  );
}

export default ImageScreen

const Wrapper = styled.main`
min-height: 100vh; 
/* background: var(--clr-primary-1);  */

`
