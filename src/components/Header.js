import React from "react";
import {
  Link,
  // ,useHistory
} from "react-router-dom";
import Cookie from "js-cookie";

import "../styles/styles.css";

export default function Header({ setModalLogin, setUser, setPost }) {
  const token = Cookie.get("token");

  return (
    <div className="nav">
      <ul className="logo-nav">
        <li className="">
          <Link to="/home">
            <h2 className="logo hover-h2">Michel Verjux</h2>
          </Link>
        </li>
        {token ? (
          <>
            <li className="second-li">
              <span
                className="hover"
                style={{ cursor: "pointer" }}
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
              className="hover"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setModalLogin(true);
              }}
            >
              Se connecter
            </span>
          </li>
        )}
      </ul>
      <ul className="mini-nav">
        <li>
          <Link to="/image">
            <span className="hover">Images</span>
          </Link>
        </li>
        <li>
          <Link to="/text">
            <span className="hover">Textes</span>
          </Link>
        </li>
        <li>
          {/* <Link to="/bio"> */}
          <span className="hover">Bio/Biblio</span>
          {/* </Link> */}
        </li>
      </ul>
    </div>
  );
}
