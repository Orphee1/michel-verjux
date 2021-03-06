import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Axios from "axios";
import Cookie from "js-cookie";
import { useDataContext } from "../context/DataContext";
import "../main.css";
import styled from "styled-components";
import { PageHero, SEO } from "../components";
import {
  ArticleLoaderBigScreen,
  ArticleLoaderSmallScreen,
} from "../components/loaders";
import parse from "html-react-parser";

export default function SelectedText() {
  const {
    fetchSingleArticle,
    single_article,
    single_articleLoading,
    single_articleError,
  } = useDataContext();
  const token = Cookie.get("token");
  const history = useHistory();
  const { id } = useParams();
  const url = process.env.REACT_APP_WEBADDRESS + "/text?id=";
  console.log(single_article.article);
  useEffect(() => {
    fetchSingleArticle(`${url}${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (single_articleError) {
      setTimeout(() => {
        history.push("/text");
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [single_articleError]);

  const deleteText = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("id", id);

      const response = await Axios.post(
        process.env.REACT_APP_WEBADDRESS + "/single_article/delete",
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
        history.push("/single_article");
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  if (single_articleLoading) {
    return (
      <LoaderWrapper>
        <article className="small_screen">
          <ArticleLoaderSmallScreen />
        </article>
        <article className="big_screen">
          <ArticleLoaderBigScreen />
        </article>
      </LoaderWrapper>
    );
  }
  if (single_articleError) {
    return (
      <Wrapper>
        <h2>Une erreur est survenue</h2>
      </Wrapper>
    );
  }

  return (
    <main>
      <SEO title="Michel Verjux | Text" />
      <PageHero title="Texte" />
      <Wrapper className="page">
        <section className="section-center articles">
          <article>{parse(`${single_article.article}`)}</article>
          {/* <div className="info">
            <h4>
              <i>{single_article.title},</i>
            </h4>
            <h4>{single_article.author},</h4>
            <h4>{single_article.year}.</h4>
            {single_article.editor && <h4>{single_article.editor}.</h4>}
            {single_article.place && <h4>{single_article.place}.</h4>}
            {single_article.traduct && (
              <h4>Traduction: {single_article.traduct}.</h4>
            )}
          </div> */}
        </section>
      </Wrapper>

      {/* {token && (
          <button className="btn" onClick={deleteText}>
            Supprimer
          </button>
        )} */}
      {/* </div> */}
    </main>
  );
}
const Wrapper = styled.div`
  .articles {
    display: grid;
    max-width: var(--max-width);
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    /* .articles {
      grid-template-columns: 200px 1fr;
    } */
  }
`;

const LoaderWrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-white);
  display: grid;
  place-items: center;
  padding: 1rem;
  .small_screen {
    width: 80vw;
    height: 80vh;
    margin: 1rem auto;
  }
  .big_screen {
    display: none;
  }
  @media (min-width: 768px) {
    .small_screen {
      display: none;
    }
    .big_screen {
      display: block;
      width: 60vw;
      height: 60vh;
      margin: 1rem auto;
    }
  }
`;
