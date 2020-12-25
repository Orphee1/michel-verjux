import React from "react";
import { Link } from "react-router-dom";

import "../main.css";
import styled from "styled-components";

const ErrorScreen = () => {
  return (
    <Wrapper>
      <div className="section-center error-center">
        <h2>Oop's, la page demandée n'existe pas</h2>
        <Link to="/home" className="btn">
          <h5>Back Home</h5>
        </Link>
      </div>
    </Wrapper>
  );
};

export default ErrorScreen;

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-white);
  padding: 5rem 0;
  display: grid;
  place-items: center;

  .error-center {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
    }
  }
`;
