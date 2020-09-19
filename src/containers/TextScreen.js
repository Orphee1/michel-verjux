import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import "../styles/styles.css";

export default function TextScreen() {
  const [texts, setTexts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  console.log(texts);

  const fetchTexts = async () => {
    const response = await Axios.get("http://localhost:4000/texts");
    try {
      setTexts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchTexts();
  }, []);

  return (
    <div className="texts-page">
      <div className="menu-text"></div>
      <div className="bloc-text-container">
        {isLoading ? (
          <div> ... chargement en cours ...</div>
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
          <div> ... chargement en cours ...</div>
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
