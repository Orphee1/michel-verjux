import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Axios from "axios";
import Cookie from "js-cookie";

import "../main.css";
import styled from "styled-components";

import { SEO } from "../components";

export default function SelectedText() {
  const token = Cookie.get("token");
  const [text, setText] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const { id } = useParams();
  !isLoading && console.log(text);

  const fetchText = async () => {
    try {
      const response = await Axios.get(
        process.env.REACT_APP_WEBADDRESS + "/text?id=" + id
      );
      if (response.data) {
        // console.log(response.data);
        setText(response.data);
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
    fetchText();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteText = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("id", id);

      const response = await Axios.post(
        process.env.REACT_APP_WEBADDRESS + "/text/delete",
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
        history.push("/text");
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <Wrapper>
      {isLoading ? (
        <p>loading ...</p>
      ) : (
        <div className="container section-center">
          {/* <Link to="/text">
            <button className="btn">Articles</button>
          </Link> */}
          <article>
            <ReactMarkdown>{text.article}</ReactMarkdown>
          </article>
          <div className="info">
            <h4>
              <i>{text.title},</i>
            </h4>
            <h4>{text.author},</h4>
            <h4>{text.year}.</h4>
            {text.editor && <h4>{text.editor}.</h4>}
            {text.place && <h4>{text.place}.</h4>}
            {text.traduct && <h4>Traduction: {text.traduct}.</h4>}
          </div>

          {token && (
            <button className="btn" onClick={deleteText}>
              Supprimer
            </button>
          )}
        </div>
      )}
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
    text-align: center;
    p {
      color: var(--clr-primary-1);
      text-align: left;
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
