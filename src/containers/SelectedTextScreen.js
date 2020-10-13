import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import Axios from "axios";
import Cookie from "js-cookie";

import "../styles/styles.css";

export default function SelectedText() {
  const [text, setText] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const { id } = useParams();
  const token = Cookie.get("token");

  const fetchText = async () => {
    try {
      const response = await Axios.get(
        process.env.REACT_APP_WEBADDRESS + "/text?id=" + id
      );
      if (response.data) {
        console.log(response.data);
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
    <div className="selected-text-page">
      <div className="info-text">
              {!isLoading && (
                      <h6>{text.year}</h6>
              )}
      </div>
      <div className="selected-text">
        {isLoading ? (
          <div> ... chargement en cours ...</div>
        ) : (
          <>
            {text.author !== "" && <h6>Auteur: {text.author}</h6>}
            <h4 className="texts-page-title">
              <span className="guill">"</span>
              {text.title}
            </h4>
            <div className="text-container">
              <p>{text.article}</p>
            </div>
            <p className="texts-page-legend">
              {text.place !== "" && (
                <span className="texts-page-legend">{text.place}, </span>
              )}
              {text.editor !== "" && (
                <span className="texts-page-legend">{text.editor}, </span>
              )}
              <span className="texts-page-legend">{text.year}</span>
              {text.traduct !== "" && (
                <span className="texts-page-legend">, {text.traduct}</span>
              )}
              .
            </p>
          </>
        )}
      </div>
      {token && (
        <button className="delete-button" onClick={deleteText}>
          Supprimer
        </button>
      )}

      <div className="button-container">
        <Link to="/text">
          <button className="button">Retour</button>
        </Link>
      </div>
    </div>
  );
}
