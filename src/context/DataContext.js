import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/data_reducer";

import {
  GET_ARTICLES_BEGIN,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_ERROR,
  GET_IMAGES_BEGIN,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_ERROR,
  GET_SINGLE_IMAGE_BEGIN,
  GET_SINGLE_IMAGE_SUCCESS,
  GET_SINGLE_IMAGE_ERROR,
  GET_SINGLE_ARTICLE_BEGIN,
  GET_SINGLE_ARTICLE_SUCCESS,
  GET_SINGLE_ARTICLE_ERROR,
  GET_BIBLIO_BEGIN,
  GET_BIBLIO_SUCCESS,
  GET_BIBLIO_ERROR,
} from "../actions";

const initialState = {
  articles: [],
  articlesLoading: false,
  articlesError: false,
  images: [],
  imagesLoading: false,
  imagesError: false,
  single_article: {},
  single_articleLoading: false,
  single_articleError: false,
  image: {},
  imageLoading: false,
  imageError: false,
  biblios: [],
  bibliosLoading: false,
  bibliosError: false,
};

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.biblio);

  const fetchData = async () => {
    dispatch({ type: GET_ARTICLES_BEGIN });
    dispatch({ type: GET_IMAGES_BEGIN });
    dispatch({ type: GET_BIBLIO_BEGIN });
    try {
      const responseImages = await axios(
        process.env.REACT_APP_WEBADDRESS + "/images"
      );
      //       console.log(responseImages);
      if (responseImages.data) {
        const images = responseImages.data;
        dispatch({ type: GET_IMAGES_SUCCESS, payload: images });
      }
    } catch (error) {
      dispatch({ type: GET_IMAGES_ERROR });
      console.log(error.message);
    }
    try {
      const responseText = await axios(
        process.env.REACT_APP_WEBADDRESS + "/texts"
      );
      //       console.log(responseText);
      if (responseText.data) {
        const articles = responseText.data;
        dispatch({ type: GET_ARTICLES_SUCCESS, payload: articles });
      }
    } catch (error) {
      dispatch({ type: GET_ARTICLES_ERROR });
      console.log(error.message);
    }
    try {
      const responseBiblio = await axios(
        process.env.REACT_APP_WEBADDRESS + "/biblio"
      );
      //       console.log(responseBiblio);
      if (responseBiblio.data) {
        const biblio = responseBiblio.data;
        dispatch({ type: GET_BIBLIO_SUCCESS, payload: biblio });
      }
    } catch (error) {
      dispatch({ type: GET_BIBLIO_ERROR });
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchSingleImage = async (url) => {
    dispatch({ type: GET_SINGLE_IMAGE_BEGIN });
    try {
      const response = await axios(url);
      //       console.log(response);
      if (response.data) {
        const image = response.data;
        dispatch({ type: GET_SINGLE_IMAGE_SUCCESS, payload: image });
      }
    } catch (error) {
      dispatch({ type: GET_SINGLE_IMAGE_ERROR });
      console.log(error.message);
    }
  };

  const fetchSingleArticle = async (url) => {
    dispatch({ type: GET_SINGLE_ARTICLE_BEGIN });
    try {
      const response = await axios(url);
      //       console.log(response);
      if (response.data) {
        const article = response.data;
        dispatch({ type: GET_SINGLE_ARTICLE_SUCCESS, payload: article });
      }
    } catch (error) {
      dispatch({ type: GET_SINGLE_ARTICLE_ERROR });
      console.log(error.message);
    }
  };

  return (
    <DataContext.Provider
      value={{
        ...state,
        fetchSingleArticle,
        fetchSingleImage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
