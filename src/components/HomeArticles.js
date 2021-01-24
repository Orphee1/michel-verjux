import React from "react";
import { Link } from "react-router-dom";
import "../main.css";
import styled from "styled-components";
import { useDataContext } from "../context/DataContext";
import { HomeArticlesLoader } from "./loaders";
import parse from "html-react-parser";

const HomeArticles = () => {
  const { articles, articlesLoading, articlesError } = useDataContext();
  if (articlesLoading) {
    return (
      <Wrapper>
        <div className="title">
          <h2>
            <span>/</span>
            Choix de textes
          </h2>
        </div>
        <div className="layout">
          <HomeArticlesLoader />
        </div>
      </Wrapper>
    );
  }
  if (articlesError) {
    return (
      <Wrapper>
        <h2>Une erreur est survenue</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="title">
        <h2>
          <span>/</span>
          Choix de textes
        </h2>
        <div className="layout">
          {articles.map((item) => {
            console.log(item);
            const { _id, article } = item;
            //     console.log(editorContent);
            return (
              <article key={_id}>
                {/* <div className="text">{parse(`${article}`)}</div> */}
              </article>
            );
          })}
        </div>
      </div>

      <Link to="/text/" className="btn">
        Plus de textes
      </Link>
    </Wrapper>
  );
};

export default HomeArticles;

const Wrapper = styled.section`
  background: var(--clr-primary-1);
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: var(--clr-white);
  }
  .title {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--clr-white);
  }
  .layout {
    display: grid;
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    gap: 1rem;
    /* safari workaround */
    grid-gap: 1rem;
    grid-template-rows: auto auto;
    article {
      margin-top: 2rem;
      .text {
        text-align: center;
        position: relative;
        span {
          position: absolute;
          bottom: 0;
          font-weight: bold;
          font-size: 1.5rem;
          right: 5px;
        }
      }
      p {
        color: var(--clr-white);
        text-align: left;
      }
    }
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1200px) {
  }
`;
