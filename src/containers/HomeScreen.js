import React from "react";
import "../main.css";
import styled from "styled-components";
import { Hero, HomeArticles, HomeImages, SEO } from "../components";

const HomeScreen = () => {
  return (
    <Wrapper>
      <SEO title="Michel Verjux | Home" description="This is the home page" />
      <Hero />
      <HomeImages />
      <HomeArticles />
    </Wrapper>
  );
};

export default HomeScreen;

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-white);
`;
