import React, { useState } from "react";
import Axios from "axios";
import Cookie from "js-cookie";
import "../main.css";
import styled from "styled-components";
import { useToggleContext } from "../context/toggle_context";
import { Alert, TextEditor } from "./index";
import { FaTimes } from "react-icons/fa";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const ModalArticles = () => {
  const { toggleModalArticles } = useToggleContext();
  const token = Cookie.get("token");
  const [isEditorOpen, setIsEditorOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    msg: "",
  });
  const [text, setText] = useState({
    title: "",
    year: "",
    editor: "",
    author: "",
    traduct: "",
    place: "",
    article: "",
  });
  console.log(text);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setText({ ...text, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (text.title && text.article && text.year) {
      try {
        const formData = new FormData();
        formData.append("title", text.title);
        formData.append("year", text.year);
        formData.append("author", text.author);
        formData.append("traduct", text.traduct);
        formData.append("editor", text.editor);
        formData.append("place", text.place);
        formData.append("article", text.article);

        const response = await Axios.post(
          process.env.REACT_APP_WEBADDRESS + "/text/publish",
          formData,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setText({
          title: "",
          year: "",
          editor: "",
          author: "",
          traduct: "",
          place: "",
          article: "",
        });
        if (response.data) {
          // console.log(response.data);
          setAlert({
            show: true,
            type: "success",
            msg: "Votre article a bien été publié",
          });
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setAlert({
          show: true,
          type: "danger",
          msg: "Une erreur est survenue en postant l'article",
        });
        setIsLoading(false);
      }
    } else {
      setAlert({
        show: true,
        type: "danger",
        msg: "Veuillez renseigner le titre, l'année et le contenu de l'article",
      });
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <div className="container">
        {!isEditorOpen && (
          <button
            className="left-chevron-container"
            onClick={() => {
              setIsEditorOpen(!isEditorOpen);
            }}
          >
            <BsChevronCompactLeft fontSize="5rem" />
          </button>
        )}
        {isEditorOpen && (
          <button
            className="right-chevron-container"
            onClick={() => {
              setIsEditorOpen(!isEditorOpen);
            }}
          >
            <BsChevronCompactRight fontSize="5rem" />
          </button>
        )}

        <header className="">
          <button className="close-modal-btn" onClick={toggleModalArticles}>
            <FaTimes />
          </button>
          <h3>Poster un texte</h3>
        </header>

        <form className="slider" onSubmit={handleSubmit}>
          <section
            className={
              isEditorOpen
                ? "editor__container show-editor"
                : "editor__container"
            }
          >
            <TextEditor />
          </section>
          <section
            className={
              isEditorOpen ? "form__validation hide-form" : "form__validation"
            }
            //   className="form__validation red"
          >
            {isLoading ? (
              <div className="loader lds-facebook">
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              <div className="alert-container">
                {alert.show && <Alert {...alert} setAlert={setAlert} />}
              </div>
            )}
            <form action="" className="form-articles" onSubmit={handleSubmit}>
              <div className="multiple-container d-flex">
                <div className="input-container">
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="nom"
                    value={text.title}
                    onChange={handleChange}
                  />
                  <span className="required">*</span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="author"
                    className="form-control"
                    placeholder="auteur"
                    value={text.author}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="editor"
                    className="form-control"
                    placeholder="éditeur"
                    value={text.editor}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="multiple-container d-flex">
                <div className="input-container">
                  <input
                    type="text"
                    name="traduct"
                    className="form-control"
                    placeholder="traducteur"
                    value={text.traduct}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="place"
                    className="form-control"
                    placeholder="ville"
                    value={text.place}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-container">
                  <input
                    type="number"
                    name="year"
                    className="form-control"
                    placeholder="e.g. 2005"
                    value={text.year}
                    onChange={handleChange}
                  />
                  <span className="required">*</span>
                </div>
              </div>
              <span>* Ces champs sont requis.</span>
              <button
                className="btn submit-btn"
                style={{ marginTop: "0.5rem" }}
              >
                Envoyer
              </button>
            </form>
          </section>
        </form>
      </div>
    </Wrapper>
  );
};

export default ModalArticles;

const Wrapper = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: grid;
  place-items: center;
  z-index: 10;
  .container {
    position: relative;
    background: var(--clr-white);
    border-radius: var(--radius);
    width: 95vw;
    height: 96vh;
    max-width: var(--max-width);
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    header {
      height: 7vh;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .left-chevron-container {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 100;
    transform: translateY(-50%);
  }
  .right-chevron-container {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 100;
    transform: translateY(-50%);
  }
  .left-chevron-container,
  .right-chevron-container {
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
  }
  .slider {
    flex: 1;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .editor__container {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.6s ease-out;
    opacity: 0;
    transform: translateX(100%);
    /* transform: translateX(0); */
  }
  .show-editor {
    transform: translateX(0);
    opacity: 1;
  }
  .form__validation {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.6s ease-out;

    opacity: 1;
    transform: translateX(0%);
  }
  .hide-form {
    opacity: 0;
    transform: translateX(-100%);
  }
  .alert-container {
    height: 2rem;
  }
  .form-articles {
    height: 80vh;
  }
  .multiple-container {
    width: 50%;
  }
  .input-container {
    margin: 0 0.5rem;
    width: 100%;
    position: relative;
  }
  .required {
    position: absolute;
    bottom: 0;
    left: -10px;
  }
  .editor-container {
    width: 100%;
    height: 45vh;
    margin: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    textarea {
      border-color: transparent;
      border-radius: var(--radius);
      font-size: 1.2rem;
      line-height: 2;
      box-shadow: var(--dark-shadow);
      padding: 1rem 2rem;
    }
    article {
      padding: 1rem 2rem;
      height: auto;
      overflow: scroll;
      background: var(--clr-grey-9);
    }
  }
`;
