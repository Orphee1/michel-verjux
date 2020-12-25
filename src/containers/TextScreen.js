import React, { useState, useEffect } from "react";
import Axios from "axios";
import Cookie from "js-cookie";
import "../main.css";
import styled from "styled-components";
import {
  Articles,
  ModalArticles,
  SEO,
  SearchMenu,
  SideSearchMenu,
} from "../components";
import { useGlobalContext } from "../context/GlobalContext";

const TextScreen = () => {
  const token = Cookie.get("token");
  const {
    modalArticles,
    toggleModalArticles,
    toggleSideSearch,
  } = useGlobalContext();
  const [texts, setTexts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [period, setPeriod] = useState(0);
  const [backSort, setBackSort] = useState(false);
  //   !isLoading && console.log(texts);

  const fetchTexts = async () => {
    try {
      const response = await Axios.get(
        process.env.REACT_APP_WEBADDRESS +
          "/texts?-backSort=" +
          backSort +
          "&period=" +
          period
      );
      if (response.data) {
        //       console.log(response.data);
        setTexts(response.data);
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
    fetchTexts();
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
            Choix de textes
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
        <div className="article-container red">
          <Articles articles={texts} className="article" />
        </div>
      )}
      {token && (
        <button className="btn post-btn" onClick={toggleModalArticles}>
          Poster un texte
        </button>
      )}
      {modalArticles && (
        <ModalArticles toggleModalArticles={toggleModalArticles} />
      )}
    </Wrapper>
  );
};

export default TextScreen;

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
  .title {
    text-align: center;
    color: var(--clr-primary-1);
  }
  .search-menu {
    display: none;
  }
  .post-btn {
    display: none;
  }
  .article-container {
    width: 90%;
  }
  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
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
      justify-self: flex-start;
      margin-left: 0;
    }
    .search-menu {
      display: inline-block;
      grid-column: 1/2;
      grid-row: 2/3;
      align-self: flex-start;
      justify-self: flex-end;
    }
    .article-container {
      grid-column: 2/3;
      grid-row: 2/3;
    }
    .post-btn {
      display: block;
      grid-row: 1/2;
      grid-column: 2/3;
      justify-self: flex-end;
      /* width: 20%;
      grid-column: 2/3;
      grid-row: 3/4;
      justify-self: center; */
    }
  }
`;
