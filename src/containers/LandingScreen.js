import React from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

import "../styles/styles.css";

export default function LandingScreen() {
  return (
    <div className="landing-page">
      <SEO title="Landing Page" description="This is the landing page" />
      <Link to="/home">
        <div className="landing-page-container">
          <div className="logo-container">
            <h1 className="">Michel Verjux</h1>
          </div>
          <div className="legend-container">
            <p>
              Isabelle Lartault et Michel Verjux, Tout le reste est dans
              l’ombre, Nuit Blanche, Paris, 2010, photo : André Morin.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
