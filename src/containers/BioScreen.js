import React from "react";
import "../main.css";
import styled from "styled-components";
import { PageHero, SEO } from "../components";

const BioScreen = () => {
  return (
    <main>
      <PageHero title="Biographie" />
      <Wrapper className="page"></Wrapper>
    </main>
  );
};

export default BioScreen;

const Wrapper = styled.main`
  min-height: 100vh;
  /* background: var(--clr-primary-1);  */
`;
