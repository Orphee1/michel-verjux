import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const PageHero = ({ title }) => {
  return (
    <Wrapper>
      <div className="section-center left">
        <div className="d-flex">
          <h3 className="small-screen">
            <Link to="/home">
              <AiFillHome style={{ color: "#282c35" }} />
            </Link>
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
  height: 6rem;
  display: flex;
  align-items: flex-end;
  /* background-color: green; */

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
