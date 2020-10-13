import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import "../styles/styles.css";

// Components import
import MainTextLoader from "../components/MainTextLoader";


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
      if (response.data.length !== 0) {
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
      <div className="menu-custom-text">
        <div
          className="icon"
          onClick={() => {
            setBackSort(true);
          }}
        >
          Début
        </div>
        <div
          className="icon"
          onClick={() => {
            setBackSort(false);
          }}
        >
          Fin
        </div>
        <div
          className="icon"
          onClick={() => {
            setPeriod("1");
          }}
        >
          Jeunesse
        </div>
        <div
          className="icon"
          onClick={() => {
            setPeriod("2");
          }}
        >
          Maturité
        </div>
        <div
          className="icon"
          onClick={() => {
            setPeriod("3");
          }}
        >
          Sagesse
        </div>
        <div
          className="icon last"
          onClick={() => {
            setPeriod("0");
          }}
        >
          Tous les textes
        </div>
        <div className="label">Menu</div>
      </div>

      <div className="bloc-text-container">
        {isLoading ? (
          <MainTextLoader />
        ) : (
                texts.map((text, index) => {
return (
          <Link 
          key={index}
          to={"/selected-text/" + text._id}>
            <div className="bloc-text">
              {/* {text.author !== "" && (
                <h6 className="text-page-author">{text.author}</h6>
              )} */}

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
                  <span className="texts-page-legend">
                    , {text.traduct}
                  </span>
                )}
                .
              </p>
            </div>
            
          </Link>
          );
        })
        )}
      </div>

    </div>
  );
}
