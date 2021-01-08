import React, { useState } from "react";
import Cookie from "js-cookie";
import "../main.css";
import styled from "styled-components";

import {
  Filters,
  Images,
  MainImageLoader,
  ModalImages,
  MultipleImagesLoader,
  PageHero,
  SEO,
  SearchMenu,
  SideSearchMenu,
  Sort,
} from "../components";

const ImageScreen = () => {
  const token = Cookie.get("token");

  const [period, setPeriod] = useState(0);
  const [backSort, setBackSort] = useState(false);

  return (
    <main>
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
  .filters {
    justify-self: flex-start;
    background: red;
  }
  @media (min-width: 768px) {
    .images {
      grid-template-columns: 200px 1fr;
    }
  }
`;
