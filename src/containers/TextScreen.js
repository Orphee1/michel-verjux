import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import "../styles/styles.css";

// Components import
import MainTextLoader from "../components/MainTextLoader";
import MultipleTextsLoader from "../components/MultipleTextsLoader";

export default function TextScreen() {
  const [texts, setTexts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [period, setPeriod] = useState(0);
  const [backSort, setBackSort] = useState(false);
  console.log(texts);

  const fetchTexts = async () => {
    try {
      const response = await Axios.get(
        process.env.REACT_APP_WEBADDRESS +
          "/texts?-backSort=" +
          backSort +
          "&period=" +
          period
      );
      if (response.data) {
        console.log(response.data);
        setTexts(response.data);
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
    fetchTexts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backSort, period]);

  return (
    <div className="texts-page">
      <div className="menu-text">
        <button
          className="sort-button"
          onClick={() => {
            setBackSort(!backSort);
          }}
        >
          {backSort === false ? (
            <p>Depuis le début</p>
          ) : (
            <p>Depuis maintenant</p>
          )}
        </button>
        <select
          className="menu-selecter"
          onChange={(event) => {
            setPeriod(event.target.value);
          }}
        >
          <option value="0">Sélectionnez</option>
          <option value="1">Jeunesse</option>
          <option value="2">Maturité</option>
          <option value="3">Sagesse</option>
        </select>
      </div>

      <div className="bloc-text-container">
        {isLoading ? (
          <MainTextLoader />
        ) : (
          <Link to={"/selected-text/" + texts[0]._id}>
            <div className="bloc-text">
              <h4 className="texts-page-title">
                <span className="guill">"</span>
                {texts[0].title}
              </h4>

              <div className="text-container">
                <p>{texts[0].article}</p>
              </div>

              <p className="texts-page-legend">{texts[0].context}</p>
            </div>
          </Link>
        )}
      </div>
      <div className="bloc-other-text">
        {isLoading ? (
          <MultipleTextsLoader />
        ) : (
          texts.map((text, index) => {
            return (
              <div key={index} className="other-text">
                <Link to={"/selected-text/" + text._id}>
                  <h5 className="">
                    {" "}
                    <span style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
                      "
                    </span>
                    {text.title}
                  </h5>
                  <p>{text.article}</p>
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
