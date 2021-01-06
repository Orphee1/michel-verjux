import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [articles, setArticles] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(false);
  const [imagesLoading, setImagesLoading] = useState(false);
  const [articlesError, setArticlesError] = useState(false);
  const [imagesError, setImagesError] = useState(false);

  //   console.log(isError);

  const fetchData = async () => {
    setArticlesLoading(true);
    setImagesLoading(true);
    try {
      const responseImages = await axios(
        process.env.REACT_APP_WEBADDRESS + "/images"
      );
      //       console.log(responseImages);
      if (responseImages.data) {
        setImages(responseImages.data);
        setImagesLoading(false);
      }
    } catch (error) {
      setImagesError(true);
      setImagesLoading(false);
      console.log(error);
    }
    try {
      const responseText = await axios(
        process.env.REACT_APP_WEBADDRESS + "/texts"
      );
      //       console.log(responseText);
      if (responseText.data) {
        setArticles(responseText.data);
        setArticlesLoading(false);
      }
    } catch (error) {
      setArticlesError(true);
      setArticlesLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        articles,
        articlesError,
        articlesLoading,
        images,
        imagesError,
        imagesLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
