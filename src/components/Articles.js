import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDataContext } from "../context/DataContext";
import { useFilterContext } from "../context/filter_context";
import "../main.css";
import styled from "styled-components";
import { ArticlesLoader } from "./loaders";

const Articles = () => {
  const history = useHistory();
  const { articlesError, articlesLoading } = useDataContext();
  const { filtered_articles: articles } = useFilterContext();

  React.useEffect(() => {
    if (articlesError) {
      setTimeout(() => {
        history.push("/home");
      }, 3000);
    }
  }, [articlesError]);

  if (articlesLoading) {
    return (
      <Wrapper>
        <ArticlesLoader />
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
      <div className="layout red">
        {articles.map((item) => {
          //   console.log(item);
          const {
            _id,
            article,
            author,
            editor,
            place,
            title,
            traduct,
            year,
          } = item;
          return (
            <article key={_id}>
              <div className="text"></div>
              <div className="info">
                <h4>
                  <i>{title},</i>
                </h4>
                <h4>{author},</h4>
                <h4>{year}.</h4>
              </div>
              <Link key={_id} to={`/selected-text/${_id}`}>
                <button className="btn">Lire</button>
              </Link>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Articles;

const Wrapper = styled.section`
  background: var(--clr-white);
  display: grid;
  place-items: center;
  .layout {
    display: grid;
    max-width: var(--max-width);
    margin: 0 auto;
    gap: 1rem;
    /* safari workaround */
    grid-gap: 1rem;
    grid-template-rows: auto auto;
    grid-auto-rows: auto;
    article {
      color: var(--clr-primary-1);
      margin: 0 auto 2rem auto;
      display: grid;
      place-items: center;
      .text {
        text-align: center;
        position: relative;
      }
      p {
        color: var(--clr-primary-1);
        text-align: left;
      }
      button {
        margin: 1rem auto;
        width: 100px;
      }
      span {
        position: absolute;
        bottom: 10px;
        font-weight: bold;
        font-size: 1.5rem;
        right: 5px;
      }
      .info {
        width: 100%;
        margin: 0.5rem auto;
        display: flex;
        justify-content: center;
        h4 {
          margin-right: 0.5rem;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .info {
      justify-content: flex-start;
    }
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
  }
`;
