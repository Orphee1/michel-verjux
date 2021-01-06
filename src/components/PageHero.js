import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageHero = ({ title }) => {
  return (
    <Wrapper>
      <div className="section-center left">
        <div className="d-flex">
          <h3 className="small-screen">
            <Link to="/home">Retour</Link>
          </h3>
          <h2>/ {title}</h2>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-white);
  width: 100%;
  min-height: 15vh;
  display: flex;
  align-items: flex-end;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-1);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
  @media (min-width: 800px) {
    .small-screen {
      display: none;
    }
  }
`;

export default PageHero;
