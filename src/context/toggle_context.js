import React, { useState, useContext, createContext } from "react";

const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [modalArticles, setModalArticles] = useState(true);
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
    <ToggleContext.Provider
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
    </ToggleContext.Provider>
  );
};

export const useToggleContext = () => {
  return useContext(ToggleContext);
};
