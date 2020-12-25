import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import Cookie from "js-cookie";

import "../main.css";
import styled from "styled-components";

// Components import
import { LegendLoader, SelectedImageLoader, SEO } from "../components";

export default function SelectedImage() {
  const token = Cookie.get("token");
  const [image, setImage] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const { id } = useParams();
  !isLoading && console.log(image);

  const fetchImage = async () => {
    try {
      const response = await Axios.get(
        process.env.REACT_APP_WEBADDRESS + "/image?id=" + id
      );
      if (response.data) {
        setImage(response.data);
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
      {isLoading ? (
        <p>loading...</p>
      ) : (
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
      )}
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
