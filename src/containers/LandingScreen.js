import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components";
import img from "../images/landing-large.png";
import { landingBase64, preloadImageWithPromise } from "../constants/base64";
import "../main.css";
import styled from "styled-components";

const LandingScreen = () => {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    preloadImageWithPromise(img)
      .then(() => {
        setLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  const src = loaded ? img : landingBase64;

  return (
    <Wrapper style={{ backgroundImage: `url(${src})` }}>
      <SEO
        title="Michel Verjux | Landing"
        description="This is a landing page"
      />
      <Link to="/home">
        <section className="landing-container">
          <div className="section-center landing-center">
            <h1>Michel Verjux</h1>
            <p>
              Isabelle Lartault et Michel Verjux,{" "}
              <i>Tout le reste est dans l'ombre</i>, Nuit Blanche, Paris, 2010.
              &copy; André Morin.
            </p>
          </div>
        </section>
      </Link>
    </Wrapper>
  );
};

export default LandingScreen;

const Wrapper = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  /* background-image: url(${img}); */
  background-size: cover;
  background-position: center;
  .landing-container {
    height: 100vh;
    width: 100vw;
  }
  .landing-center {
    margin-top: 5rem;
    height: 85%;
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 50% 50%;
    p {
      grid-row: 2/3;
      color: var(--clr-white);
      place-self: end end;
      width: 100px;
      font-size: 0.8rem;
      text-align: right;
    }
    h1 {
      grid-row: 2/3;
      color: var(--clr-white);
      align-self: start;
      justify-self: start;
    }
  }
  @media screen and (min-width: 768px) {
    .landing-center {
      height: 90%;
      grid-template-rows: 50% 50%;
      h1 {
        grid-column: 1/3;
        align-self: center;
      }
      p {
        grid-column: 2/3;
        grid-row: 2/3;
        width: 400px;
        align-self: end;
      }
    }
  }
`;
