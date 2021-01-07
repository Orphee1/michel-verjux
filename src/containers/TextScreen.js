import React, { useState } from "react";
import Cookie from "js-cookie";
import "../main.css";
import styled from "styled-components";
import {
  Articles,
  Filters,
  ModalArticles,
  PageHero,
  SEO,
  SearchMenu,
  SideSearchMenu,
  SortArticles,
} from "../components";

import { useGlobalContext } from "../context/GlobalContext";

const TextScreen = () => {
  const token = Cookie.get("token");
  const {
    modalArticles,
    toggleModalArticles,
    toggleSideSearch,
  } = useGlobalContext();

  const [period, setPeriod] = useState(0);
  const [backSort, setBackSort] = useState(false);

  return (
    <main>
      <PageHero title="Choix de textes" />
      <Wrapper className="page">
        <div className="section-center articles">
          <Filters text />
          <div>
            <SortArticles />
            <Articles />
          </div>
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
  }
  .filters {
    justify-self: flex-start;
    background: red;
  }
  @media (min-width: 768px) {
    .articles {
      grid-template-columns: 200px 1fr;
    }
  }
`;
