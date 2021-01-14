import React from "react";
import "../main.css";
import styled from "styled-components";

import { Filters, Images, PageHero, SEO, Sort } from "../components";

const ImageScreen = () => {
  return (
    <main>
      <SEO title="Michel Verjux | Images" />
      <PageHero title="Choix d'images" />
      <Wrapper className="page">
        <div className="section-center images">
          <Filters />
          <div>
            <Sort />
            <Images />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

export default ImageScreen;

const Wrapper = styled.div`
  .images {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }

  @media (min-width: 768px) {
    .images {
      grid-template-columns: 200px 1fr;
    }
  }
`;
