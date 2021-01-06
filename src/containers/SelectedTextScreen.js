import React, { useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Axios from "axios";
import Cookie from "js-cookie";
import { useDataContext } from "../context/DataContext";
import "../main.css";
import styled from "styled-components";

import { SEO } from "../components";

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
      <Wrapper>
        <h2>Chargement...</h2>
      </Wrapper>
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
    <Wrapper>
      <div className="container section-center">
        {/* <Link to="/single_article">
            <button className="btn">Articles</button>
          </Link> */}
        <article>
          <ReactMarkdown>{single_article.article}</ReactMarkdown>
        </article>
        <div className="info">
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
        </div>

        {token && (
          <button className="btn" onClick={deleteText}>
            Supprimer
          </button>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-white);
  display: grid;
  place-items: center;
  padding: 4rem 0;
  .container {
    width: 90%;
    max-width: var(--max-width);
    display: grid;
    place-items: center;
    margin: 0 auto;
  }

  article {
    width: 100%;
    /* margin-top: 1.5rem; */
    color: var(--clr-primary-1);
    single_article-align: center;
    p {
      color: var(--clr-primary-1);
      single_article-align: left;
    }
  }
  .info {
    width: 100%;
    margin: 1rem auto;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    h4 {
      margin-right: 0.5rem;
      flex-shrink: 0;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: var(--max-width);
    }
  }
`;
