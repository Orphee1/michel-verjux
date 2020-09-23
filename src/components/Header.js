import React from "react";
import {
  Link,
  // ,useHistory
} from "react-router-dom";
import Cookie from "js-cookie";

import "../styles/styles.css";

export default function Header({ setPath, setModalLogin, setUser, setPost }) {
  const token = Cookie.get("token");

  return (
    <div className="nav">
      <ul className="logo-nav">
        <li className="">
          <Link
            to="/home"
            onClick={() => {
              setPath("/home");
            }}
          >
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
              {/* <Link
                to="/publish"
                onClick={() => {
                  setPath("/publish");
                }}
              >
                <span>Poster un article</span>
              </Link> */}
              <select
                className="post-selecter"
                onChange={(event) => {
                  setPost(event.target.value);
                }}
              >
                <option>Poster un article</option>
                <option value="text">Texte</option>
                <option value="image">Image</option>
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

        {/* <li className="third-li">
          <select>
            <option value="theme1">Mode sombre</option>
            <option value="theme2">Mode clair</option>
          </select>
        </li> */}
      </ul>
      <ul className="mini-nav">
        <li>
          <Link
            to="/image"
            onClick={() => {
              setPath("/image");
            }}
          >
            <span className="hover">Images</span>
          </Link>
        </li>
        <li>
          <Link
            to="/text"
            onClick={() => {
              setPath("/text");
            }}
          >
            <span className="hover">Textes</span>
          </Link>
        </li>
        <li>
          <Link
            to="/bio"
            onClick={() => {
              setPath("/bio");
            }}
          >
            <span className="hover">Bio/Biblio</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
