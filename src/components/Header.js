import React from "react";
import { Link } from "react-router-dom";

import "../styles/styles.css";

export default function Header({ path, setPath }) {
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
            <h1 className="logo hover-h1">Michel Verjux</h1>
          </Link>
        </li>
        <li className="second-li">
          <span>Log in</span>
        </li>
        <li className="third-li">
          <select>
            <option value="theme1">Mode sombre</option>
            <option value="theme2">Mode clair</option>
          </select>
        </li>
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
