import React from "react";
import { Link } from "react-router-dom";
import "../main.css";
import styled from "styled-components";
import { useDataContext } from "../context/DataContext";

const HomeImages = () => {
  const { images, imagesLoading, imagesError } = useDataContext();

  if (imagesLoading) {
    return (
      <Wrapper>
        <h2>chargement...</h2>
      </Wrapper>
    );
  }
  if (imagesError) {
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
          Choix d'images
        </h2>
      </div>
      <div className="tile-layout">
        {images.slice(0, 4).map((item, index) => {
          const { picture, title, town, year, _id } = item;
          return (
            <article key={_id} className={` div-${index} `}>
              <img src={picture} alt={title} className="img" />
              <div className="info">
                <p>
                  {title}, {town}, {year}.
                </p>
              </div>
            </article>
          );
        })}
      </div>
      <Link to="/image" className="btn">
        Plus d'images
      </Link>
    </Wrapper>
  );
};

export default HomeImages;

const Wrapper = styled.section`
  background: var(--clr-white);
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .tile-layout {
    margin-top: 2rem;
    display: grid;
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    gap: 1rem;
    /* safari workaround */
    grid-gap: 1rem;
    grid-template-rows: 300px 300px;
    grid-auto-rows: 300px;
  }

  .img {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
    transition: var(--transition);
  }
  article {
    position: relative;
    overflow: hidden;
    background: var(--clr-black);
    &:hover .img {
      opacity: 0.2;
    }
    .info {
      position: absolute;
      left: 45%;
      transform: translate(-50%, -50%);
      width: 100%;
      opacity: 0;
      transition: var(--l-transition);
      color: var(--clr-white);
      text-align: center;
      p {
        margin-bottom: 1.5rem;
        color: var(--clr-white);
        font-size: 0.8rem;
      }
    }
    &:hover .info {
      opacity: 1;
    }
  }

  a {
    display: block;
    width: 12rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
  @media (min-width: 768px) {
    .tile-layout {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .tile-layout {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 250px 250px;
      grid-auto-rows: 250px;
    }
  }
  @media (min-width: 1200px) {
    .tile-layout {
      display: grid;
      grid-template-areas:
        "a b b"
        "a c d";
      .div-0 {
        grid-area: a;
      }
      .div-1 {
        grid-area: b;
      }
      .div-2 {
        grid-area: c;
      }
      .div-3 {
        grid-area: d;
      }
    }
  }
`;
