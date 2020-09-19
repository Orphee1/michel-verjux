import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";

import "../styles/styles.css";

export default function SelectedText() {
  const [text, setText] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  console.log(id);
  console.log(text);

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
  });

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

      <div className="button-container">
        <Link to="/text">
          <button className="button">Retour</button>
        </Link>
      </div>
    </div>
  );
}
