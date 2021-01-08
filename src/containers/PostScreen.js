import React from "react";
import styled from "styled-components";
import { useToggleContext } from "../context/toggle_context";
import { PageHero } from "../components";
import { ModalArticles, ModalBiblio, ModalImages } from "../components";

const PostScreen = () => {
  const {
    modalArticles,
    modalBiblio,
    modalPictures,
    toggleModalArticles,
    toggleModalBiblio,
    toggleModalPictures,
  } = useToggleContext();
  console.log(modalArticles);
  return (
    <main>
      <PageHero title="Poster" />
      <Wrapper className="page">
        <div className="section section-center">
          <button
            className="btn"
            onClick={() => {
              toggleModalPictures();
            }}
          >
            Une image
          </button>
          <button
            className="btn"
            onClick={() => {
              toggleModalArticles();
            }}
          >
            Un texte
          </button>
          <button
            className="btn"
            onClick={() => {
              toggleModalBiblio();
            }}
          >
            Une référence bibliographique
          </button>
        </div>
        {modalArticles && <ModalArticles />}
        {modalPictures && <ModalImages />}
        {modalBiblio && <ModalBiblio />}
      </Wrapper>
    </main>
  );
};

export default PostScreen;

const Wrapper = styled.main`
  button {
    display: block;
    margin: 0.5rem 0;
  }
`;
