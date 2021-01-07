import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
const Filters = () => {
  const {
    filters_images: { period },
    updateFilterImages,
  } = useFilterContext();

  return (
    <Wrapper>
      <div className="content">
        <form className="">
          <div className="filters-form-control">
            <button
              type="button"
              name="period"
              className={`${period === "Toutes périodes" ? "active" : null}`}
              onClick={(event) => {
                updateFilterImages(event);
              }}
            >
              Toutes périodes
            </button>
            <button
              type="button"
              name="period"
              className={`${period === "Depuis 2000" ? "active" : null}`}
              onClick={(event) => {
                updateFilterImages(event);
              }}
            >
              Depuis 2000
            </button>

            <button
              type="button"
              name="period"
              className={`${period === "1980 - 1999" ? "active" : null}`}
              onClick={(event) => {
                updateFilterImages(event);
              }}
            >
              1980 - 1999
            </button>
            <button
              type="button"
              name="period"
              className={`${period === "Avant 1979" ? "active" : null}`}
              onClick={(event) => {
                updateFilterImages(event);
              }}
            >
              Avant 1980
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Filters;

const Wrapper = styled.section`
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
    outline: none;
  }
  .active {
    border-color: var(--clr-primary-1);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;
