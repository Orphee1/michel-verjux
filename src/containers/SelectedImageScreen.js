import React, { useState, useEffect, useContext } from "react";

import { Picture } from "react-responsive-picture";
import { Link, useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import Cookie from "js-cookie";

import "../main.css";
import styled from "styled-components"; 

// Components import
import SEO from "../components/SEO";
import SelectedImageLoader from "../components/SelectedImageLoader";
import LegendLoader from "../components/LegendLoader";

export default function SelectedImage() {
  
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const { id } = useParams();
  const token = Cookie.get("token");

  const fetchImage = async () => {
    try {
      const response = await Axios.get(
        process.env.REACT_APP_WEBADDRESS + "/image?id=" + id
      );
      if (response.data) {
        // console.log(response.data);
        setImage(response.data);
        setIsLoading(false);
      } else {
        // console.log(response);
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
                  
          </Wrapper>

  );
}

const Wrapper = styled.main`
min-height: 100vh; 
background: var(--clr-primary-1); 
margin-top: -5rem; 
`