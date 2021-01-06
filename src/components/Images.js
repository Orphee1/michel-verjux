import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../main.css";
import styled from "styled-components";
import { useDataContext } from "../context/DataContext";

const Images = () => {
  const { images, imagesError, imagesLoading } = useDataContext();
  const history = useHistory();
  React.useEffect(() => {
    if (imagesError) {
      setTimeout(() => {
        history.push("/home");
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesError]);

  if (imagesLoading) {
    return (
      <Wrapper>
        <h2>Chargement...</h2>
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
      <div className="layout">
        {images.map((item) => {
          const { _id, picture, title, town, year } = item;
          return (
            <article key={_id}>
              <Link
                key={_id}
                to={`/selected-image/${_id}`}
                style={{ overflow: "hidden" }}
              >
                <img src={picture} alt={title} className="img" />
                <div className="info">
                  <p>
                    {title}, {town}, {year}.
                  </p>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Images;

const Wrapper = styled.section`
  background: var(--clr-white);
  /* padding : 5rem 0;  */
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  .layout {
    margin-top: 2rem;
    display: grid;
    width: 90%;
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

  .search-menu {
    display: none;
  }
  .post-btn {
    display: none;
  }

  @media (min-width: 768px) {
    .layout {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .layout {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 250px 250px;
      grid-auto-rows: 250px;
    }
  }
  @media (min-width: 1200px) {
    margin: 0;
    .layout {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      /* grid-template-columns: 1fr 1fr;
      grid-template-rows: 400px 400px;
      grid-auto-rows: 400px; */
      article {
        flex: 0 0 550px;
        height: 380px;
        /* margin-left: 0;
        margin-top: 0;
        margin-right: 1rem;
        margin-bottom: 1rem; */
        transition: var(--transition);
      }
      article:hover {
        /* flex: 1 1 650px; */
        /* height: 580px; */
        flex-grow: 1;
        /* height: 400px; */
      }
    }
  }
`;
