import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import { ThemeContext } from "../context/ThemeContext";

import "../styles/styles.css";
// Icon import
import { FaAdjust } from "react-icons/fa";

export default function Header({ setModalLogin, setUser, setPost }) {
  // Theme definition
  const [theme, toggleTheme] = useContext(ThemeContext);
  const { themeSelected, themeOne, themeTwo } = theme;
  let option;
  let hoverOption;
  let hoverHOption;
  switch (themeSelected) {
    case true:
      option = themeOne;
      hoverOption = "hover";
      hoverHOption = "hover-h2";
      break;
    case false:
      option = themeTwo;
      hoverOption = "hover2";
      hoverHOption = "hover-h22";
      break;
    default:
      console.log("default");
  }

  const token = Cookie.get("token");

  return (
    <div
      className="nav"
      style={{
        background: option.bg,
      }}
    >
      <ul className="logo-nav">
        <li className="">
          <Link to="/home">
            <h2
              //       className="hover-h2"
              className={hoverHOption}
              style={{
                color: option.syntax,
              }}
            >
              Michel Verjux
            </h2>
          </Link>
        </li>
        {token ? (
          <>
            <li className="second-li">
              <span
                // className="hover"
                className={hoverOption}
                style={{ cursor: "pointer", color: option.syntax }}
                onClick={() => {
                  setUser({});
                  Cookie.remove("token");
                }}
              >
                Se déconnecter
              </span>
            </li>
            <li>
              <select
                className="post-selecter"
                onChange={(event) => {
                  setPost(event.target.value);
                }}
              >
                <option>Poster un article</option>
                <option value="image">Image</option>
                <option value="text">Texte</option>
                <option value="biblio">Biblio</option>
              </select>
            </li>
          </>
        ) : (
          <li className="second-li">
            <span
              //       className="hover"
              className={hoverOption}
              style={{ cursor: "pointer", color: option.syntax }}
              onClick={() => {
                setModalLogin(true);
              }}
            >
              Se connecter
            </span>
          </li>
        )}
        <li>
          <div>
            <FaAdjust
              style={{ cursor: "pointer" }}
              //       color="#023254"
              color={option.syntax}
              size="2em"
              onClick={() => toggleTheme(!themeSelected)}
            />
          </div>
        </li>
      </ul>
      <ul className="mini-nav">
        <li>
          <Link to="/image">
            <span
              //     className="hover"
              className={hoverOption}
              style={{
                color: option.syntax,
              }}
            >
              Images
            </span>
          </Link>
        </li>
        <li>
          <Link to="/text">
            <span
              //     className="hover"
              className={hoverOption}
              style={{
                color: option.syntax,
              }}
            >
              Textes
            </span>
          </Link>
        </li>
        <li>
          {/* <Link to="/bio"> */}
          <span
            //   className="hover"
            className={hoverOption}
            style={{
              color: option.syntax,
            }}
          >
            Bio/Biblio
          </span>
          {/* </Link> */}
        </li>
      </ul>
    </div>
  );
}
