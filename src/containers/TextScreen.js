import React from "react";
import "../main.css";
import styled from "styled-components";
import {
  Articles,
  Filters,
  PageHero,
  SEO,
  // SortArticles
} from "../components";

const TextScreen = () => {
  return (
    <main>
      <SEO title="Michel Verjux | Texts" />
      <PageHero title="Choix de textes" />
      <Wrapper className="page">
        <div className="section-center articles">
          <Filters text />
          {/* <SortArticles /> */}

          <Articles />
        </div>
      </Wrapper>
    </main>
  );
};

export default TextScreen;

const Wrapper = styled.div`
  .articles {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
    height: auto;
  }

  @media (min-width: 768px) {
    .articles {
      grid-template-columns: 200px 1fr;
    }
  }
`;
