import React, { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import Cookie from "js-cookie";
import { useDataContext } from "../context/DataContext";
import "../main.css";
import styled from "styled-components";
import { PageHero, SEO } from "../components";
import {
  ImageLoaderBigScreen,
  ImageLoaderSmallScreen,
} from "../components/loaders";

const url = process.env.REACT_APP_WEBADDRESS + "/image?id=";

export default function SelectedImage() {
  const {
    fetchSingleImage,
    image,
    imageError,
    imageLoading,
  } = useDataContext();

  const token = Cookie.get("token");
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    fetchSingleImage(`${url}${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (imageError) {
      setTimeout(() => {
        history.push("/image");
      }, 3000);
    }
  }, [imageError]);

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

  if (imageLoading) {
    return (
      <LoaderWrapper>
        <PageHero title="Image" />
        <article className="small_screen">
          <ImageLoaderSmallScreen />
        </article>
        <article className="big_screen">
          <ImageLoaderBigScreen />
        </article>
      </LoaderWrapper>
    );
  }

  if (imageError) {
    return (
      <Wrapper>
        <h2>Une erreur est survenue</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <SEO title="Michel Verjux | Image" />
      <PageHero title="Image" />
      <section className="layout">
        <article className="">
          <img src={image.picture} alt={image.title} className="img" />
          <div className="side-container">
            <div className="legend-container">
              <h3>{image.title}</h3>
              <h4>
                {image.town}, {image.year}.
              </h4>
              {image.medium && <h4>{image.medium}</h4>}
              {image.place && <h4>{image.place}</h4>}
              {image.context && <h4>{image.context}</h4>}
              {image.credit && <h4>&copy;Photo: {image.credit}.</h4>}
            </div>
            {token && (
              <button className="btn" onClick={deleteImage}>
                Supprimer
              </button>
            )}
          </div>
        </article>
      </section>

      <Link to="/image">
        <button className="btn back-btn">Retour</button>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-white);
  display: grid;
  place-items: center;
  padding: 1rem;
  .layout {
  }
  .img {
    transition: var(--transition);
    margin-bottom: 1rem;
  }
  .side-container {
    margin-left: 1rem;
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .legend-container {
    margin-bottom: 1rem;
  }
  article {
    position: relative;
    margin: 1rem auto;
  }

  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .side-container {
      flex-direction: column;
      align-items: flex-start;
    }
    article {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (min-width: 1200px) {
    .back-btn {
      display: none;
    }
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
