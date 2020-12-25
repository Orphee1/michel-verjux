import React, { useState, useEffect } from "react";
import Axios from "axios";
import Cookie from "js-cookie";
import "../main.css";
import styled from "styled-components";
import { useGlobalContext } from "../context/GlobalContext";
import {
  Images,
  MainImageLoader,
  ModalImages,
  MultipleImagesLoader,
  SEO,
  SearchMenu,
  SideSearchMenu,
} from "../components";

const ImageScreen = () => {
  const token = Cookie.get("token");
  const {
    modalPictures,
    toggleSideSearch,
    toggleModalPictures,
  } = useGlobalContext();
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
      <div className="first-container section-center s-b">
        <button className="btn search-btn" onClick={toggleSideSearch}>
          rechercher
        </button>
        <div className="title">
          <h3>
            <span>/</span>
            Choix d'images
          </h3>
        </div>
      </div>
      <SideSearchMenu setBackSort={setBackSort} setPeriod={setPeriod} />
      <div className="search-menu">
        <SearchMenu setPeriod={setPeriod} setBackSort={setBackSort} />
      </div>
      {isLoading ? (
        <p>loading ...</p>
      ) : (
        <div className="images-container">
          <Images
            pictures={images}
            setBackSort={setBackSort}
            setPeriod={setPeriod}
          />
        </div>
      )}
      {token && (
        <button className="btn post-btn" onClick={toggleModalPictures}>
          Poster une image
        </button>
      )}
      {modalPictures && (
        <ModalImages toggleModalPictures={toggleModalPictures} />
      )}
    </Wrapper>
  );
};

export default ImageScreen;

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-white);
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .first-container {
    align-items: baseline;
  }
  .search-menu {
    display: none;
  }
  .images-container {
    /* width: 90%;  */
  }
  .post-btn {
    display: none;
  }
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 10vw 80vw 10vw;
    grid-template-rows: auto auto auto;
    grid-gap: 1rem;
    .search-btn {
      display: none;
    }
    .first-container {
      grid-row: 1/2;
      grid-column: 2/3;
    }
    .search-menu {
      display: inline-block;
      grid-column: 1/2;
      grid-row: 2/3;
      align-self: flex-start;
      justify-self: flex-end;
    }
    .images-container {
      grid-column: 2/3;
      grid-row: 2/3;
      justify-self: center;
    }
    .post-btn {
      display: block;
      grid-row: 1/2;
      grid-column: 2/3;
      justify-self: end;
    }
  }
`;
