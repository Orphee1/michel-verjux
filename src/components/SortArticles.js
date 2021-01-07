import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";

const SortArticles = () => {
  const { updateSortArticles } = useFilterContext();
  return (
    <Wrapper>
      <form className="">
        <select
          name="sort"
          id="sort"
          className="sort-input"
          onChange={(event) => {
            updateSortArticles(event);
          }}
        >
          <option value="date-desc">les plus récents</option>
          <option value="date-asc">les plus anciens</option>
        </select>
      </form>
    </Wrapper>
  );
};

export default SortArticles;

const Wrapper = styled.section`
  /* width: 100%; */
  display: grid;
  grid-template-columns: auto;
  margin-bottom: 1rem;
  column-gap: 2rem;
  hr {
    border-bottom: 1px solid var(--clr-primary-1);
  }
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
  }
  form {
    display: flex;
    color: var(--clr-grey-5);
    select {
      color: var(--clr-grey-5);
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
`;
