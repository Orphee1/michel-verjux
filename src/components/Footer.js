import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import "../styles/styles.css";

const Footer = () => {
  // Theme definition
  const [theme] = useContext(ThemeContext);
  const { themeSelected, themeOne, themeTwo } = theme;
  let option;
  switch (themeSelected) {
    case true:
      option = themeOne;
      break;
    case false:
      option = themeTwo;
      break;
    default:
      console.log("default");
  }
  return (
    <div
      className="footer-container"
      style={{
        background: option.bg,
      }}
    >
      <h4 style={{ color: option.syntax }}>Michel Verjux</h4>
    </div>
  );
};

export default Footer;
