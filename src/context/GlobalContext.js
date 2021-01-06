import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [modalArticles, setModalArticles] = useState(false);
  const [modalPictures, setModalPictures] = useState(false);
  const [modalBiblio, setModalBiblio] = useState(false);
  const [sideSearch, setSideSearch] = useState(false);

  const toggleSide = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  const toggleModalArticles = () => {
    setModalArticles(!modalArticles);
  };

  const toggleModalPictures = () => {
    setModalPictures(!modalPictures);
  };

  const toggleModalBiblio = () => {
    setModalBiblio(!modalBiblio);
  };

  const toggleSideSearch = () => {
    setSideSearch(!sideSearch);
  };

  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        toggleSide,
        modalArticles,
        toggleModalArticles,
        modalPictures,
        toggleModalPictures,
        sideSearch,
        toggleSideSearch,
        modalBiblio,
        toggleModalBiblio,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
