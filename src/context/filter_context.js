import React, { createContext, useContext, useEffect, useReducer } from "react";

import reducer from "../reducers/filter_reducer";
import {
  LOAD_DATA,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_IMAGES,
  SORT_ARTICLES,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from "../actions";
import { useDataContext } from "./DataContext";

const FilterContext = createContext();

const initialState = {
  filtered_images: [],
  all_images: [],
  filtered_articles: [],
  all_articles: [],
  grid_view: true,
  sort: "date-desc",
  filters: {
    period: "Toutes périodes",
  },
};

export const FilterProvider = ({ children }) => {
  const { articles, images } = useDataContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.filters);

  useEffect(() => {
    dispatch({ type: LOAD_DATA, payload: { articles, images } });
  }, [articles, images]);

  useEffect(() => {
    dispatch({ type: SORT_IMAGES });
  }, [images, state.sort]);

  const updateSort = (event) => {
    const value = event.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilter = (event) => {
    console.log("fired");
    //     const name = event.target.name;
    //     const value = event.target.textContent;
    //     console.log(value);
    //     dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => dispatch({ type: SET_LISTVIEW });

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, updateFilter, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
