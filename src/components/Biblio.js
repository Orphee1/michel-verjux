import React from "react";
import Cookie from "js-cookie";
import "../main.css";
import styled from "styled-components";

const Biblio = ({ biblios, deleteBiblio }) => {
  // console.log(biblios);
  const token = Cookie.get("token");

  const books = biblios
    .filter((item) => item.category === "Livres")
    .sort((a, b) => b.year - a.year);
  const catalogues = biblios
    .filter((item) => item.category === "Catalogues monographiques")
    .sort((a, b) => b.year - a.year);
  const talks = biblios
    .filter((item) => item.category === "Entretiens")
    .sort((a, b) => b.year - a.year);
  const articles = biblios
    .filter((item) => item.category === "Articles")
    .sort((a, b) => b.year - a.year);

  return (
    <Wrapper>
      <ul className="category-container">
        <h3>Catalogues monographiques:</h3>
        {catalogues.map((item) => {
          //   console.log(item);
          const { _id, editor, title, year } = item;
          return (
            <li key={_id} className="reference-container">
              <span style={{ marginRight: "0.5rem" }}>*</span>
              <h4>
                <i>{title}</i>,
              </h4>
              <h4>{editor},</h4>
              <h4>{year}.</h4>
              {/* {token && (
                <button
                  className="btn"
                  onClick={() => {
                    deleteBiblio(_id);
                  }}
                >
                  Supr
                </button>
              )} */}
            </li>
          );
        })}
      </ul>
      <ul className="category-container">
        <h3>Livres:</h3>
        {books.map((item) => {
          //   console.log(item);
          const { _id, author, collect, editor, title, year } = item;
          return (
            <li key={_id} className="reference-container">
              <span style={{ marginRight: "0.5rem" }}>*</span>
              <h4>
                <i>{title}</i>,
              </h4>
              <h4>{author},</h4>
              <h4>{editor},</h4>
              {collect && <h4>{collect},</h4>}
              <h4>{year}.</h4>
              {/* {token && (
                <button
                  className="btn"
                  onClick={() => {
                    deleteBiblio(_id);
                  }}
                >
                  Supr
                </button>
              )} */}
            </li>
          );
        })}
      </ul>

      <ul className="category-container">
        <h3>Entretiens:</h3>
        {talks.map((item) => {
          //   console.log(item);
          const { collect, editor, title, year, _id } = item;
          return (
            <li key={_id} className="reference-container">
              <span style={{ marginRight: "0.5rem" }}>*</span>
              <h4>{title},</h4>
              {collect && <h4>{collect},</h4>}
              <h4>{editor},</h4>
              <h4>{year}.</h4>
              {/* {token && (
                <button
                  className="btn"
                  onClick={() => {
                    deleteBiblio(_id);
                  }}
                >
                  Supr
                </button>
              )} */}
            </li>
          );
        })}
      </ul>

      <ul className="category-container">
        <h3>Articles:</h3>
        {articles.map((item) => {
          //   console.log(item);
          const { author, collect, editor, title, year, _id } = item;
          return (
            <li key={_id} className="reference-container">
              <span style={{ marginRight: "0.5rem" }}>*</span>
              <h4>{author},</h4>
              <h4>{title},</h4>
              {collect && <h4>{collect},</h4>}
              <h4>{editor},</h4>
              <h4>{year}.</h4>
              {token && (
                <button
                  className="btn"
                  onClick={() => {
                    deleteBiblio(_id);
                  }}
                >
                  Supr
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Biblio;

const Wrapper = styled.section`
  background: var(--clr-white);
  height: auto;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 2rem 0;
  .category-container {
    width: 100%;
    margin: 1rem, auto;

    h3 {
      font-weight: bold;
      margin-bottom: 1rem;
    }
  }
  .reference-container {
    width: 100%;
    margin: 0.5rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    list-style: square;
    /* text-align: left; */
    h4 {
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
  }
`;
