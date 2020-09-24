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
    const response = await Axios.get("http://localhost:4000/text?id=" + id);
    try {
      setText(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchText();
  }, []);

  const deleteText = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("id", id);

      const response = await Axios.post(
        "http://localhost:4000/text/delete",
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
      <div className="menu-text"></div>
      <div className="selected-text">
        {isLoading ? (
          <div> ... chargement en cours ...</div>
        ) : (
          <>
            <h4 className="texts-page-title">
              <span className="guill">"</span>
              {text.title}
            </h4>
            <div className="text-container">
              <p>{text.article}</p>
            </div>
            <p className="texts-page-legend">{text.context}</p>
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
