import React, { useState, useEffect } from "react";


import { Link, useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import Cookie from "js-cookie";

import "../main.css";
import styled from "styled-components"; 

// Components import
import { LegendLoader, SelectedImageLoader, SEO}   from "../components";


export default function SelectedImage() {
  
  const [image, setImage] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const { id } = useParams();
  const token = Cookie.get("token");
  !isLoading && console.log(image);
  

  const fetchImage = async () => {
    try {
      const response = await Axios.get(
        process.env.REACT_APP_WEBADDRESS + "/image?id=" + id
      );
      if (response.data) {
        setImage(response.data);
        setIsLoading(false);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteImage = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("id", id);

      const response = await Axios.post(
        process.env.REACT_APP_WEBADDRESS + "/image/delete",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data) {
        console.log(response.data);
        history.push("/image");
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
          <Wrapper>
                  {isLoading ? (
<p>loading...</p>
                  ) : (
                          <section className="layout">
<article className="" >
<img src={image.picture} alt={image.title} className="img"/>
</article>
<div className="legend-container">
        <h4>{image.title}, {image.town}, {image.year}.</h4>
        {image.medium &&  <h4>{image.medium}</h4> }
        {image.place &&  <h4>{image.place}</h4> }
        {image.context &&  <h4>{image.context}</h4> }
        {image.credit && <h4>{image.credit}</h4>}
</div>
                          </section>
                  )}
                  <Link to="/image" >
                  <button className="btn">Retour</button>
                  </Link>
          </Wrapper>
  );
}

const Wrapper = styled.main`
min-height: 100vh; 
background: var(--clr-white); 
display: grid; 
place-items: center; 
.layout {
        
}
 .img {
     transition: var(--transition);
  }
article {
        position: relative; 
         background: var(--clr-black);
              &:hover .img {
      opacity: 0.1;
    }
}


@media (min-width: 768px) {}
@media (min-width: 992px) {
   .layout {
 display: flex; 
 align-items: flex-end;        
}
.legend-container {
        margin-left: 4rem; 
}
}

 @media (min-width: 1200px) {


 }
`