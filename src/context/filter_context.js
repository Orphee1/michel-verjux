import React, { createContext, useContext, useEffect, useReducer } from "react";

import reducer from "../reducers/filter_reducer";
import {
  FILTER_IMAGES,
  LOAD_DATA,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_IMAGES,
  SORT_ARTICLES,
  UPDATE_FILTERS_ARTICLES,
  UPDATE_FILTERS_IMAGES,
  UPDATE_SORT,
  UPDATE_SORT_ARTICLES,
  FILTER_ARTICLES,
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
  sort_articles: "date-desc",
  filters_articles: {
    period: "Toutes périodes",
  },
  filters_images: {
    period: "Toutes périodes",
  },
};

export const FilterProvider = ({ children }) => {
  const { articles, images } = useDataContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_DATA, payload: { articles, images } });
  }, [articles, images]);

  useEffect(() => {
    dispatch({ type: FILTER_IMAGES });
    dispatch({ type: SORT_IMAGES });
  }, [images, state.sort, state.filters_images]);

  useEffect(() => {
    dispatch({ type: FILTER_ARTICLES });
    dispatch({ type: SORT_ARTICLES });
  }, [articles, state.sort_articles, state.filters_articles]);

  const updateSort = (event) => {
    const value = event.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  const updateSortArticles = (event) => {
    const value = event.target.value;
    dispatch({ type: UPDATE_SORT_ARTICLES, payload: value });
  };

  const updateFilter = (event, ref = "image") => {
    const name = event.target.name;
    const value = event.target.textContent;

    if (ref === "text") {
      dispatch({ type: UPDATE_FILTERS_ARTICLES, payload: { name, value } });
    } else {
      dispatch({ type: UPDATE_FILTERS_IMAGES, payload: { name, value } });
    }
  };

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => dispatch({ type: SET_LISTVIEW });

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateFilter,
        updateSort,
        updateSortArticles,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
