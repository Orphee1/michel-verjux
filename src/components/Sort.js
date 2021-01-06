import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";
const Sort = () => {
  const {
    grid_view,
    setGridView,
    setListView,
    updateSort,
  } = useFilterContext();
  return (
    <Wrapper className="">
      <div className="btn-container">
        <button
          type="button"
          className={`${grid_view ? "active" : null}    `}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type="button"
          className={`${!grid_view ? "active" : null}`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>
      <hr />
      <form className="">
        {/* <label htmlFor="sort">Montrer</label> */}
        <select
          name="sort"
          id="sort"
          className="sort-input"
          onChange={(event) => {
            updateSort(event);
          }}
        >
          <option value="date-desc">les plus récentes</option>
          <option value="date-asc">les plus anciennes</option>
        </select>
      </form>
    </Wrapper>
  );
};

export default Sort;
const Wrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  form {
    display: flex;
    color: var(--clr-grey-5);
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-primary-1);
      color: var(--clr-primary-1);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      outline: none;
      svg {
        font-size: 1.5rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;
