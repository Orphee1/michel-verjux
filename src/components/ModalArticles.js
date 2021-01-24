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

  const [editorState, setEditorState] = useState({
    editorContent: '<h4 style="text-align: center;">Saisissez votre texte</h4>',
  });

  console.log(editorState.editorContent);

  const handleEditorChange = (editorContent) => {
    save({ editorContent });
  };

  const save = (newPartialState) => {
    setEditorState({ ...newPartialState });
  };

  const [infos, setInfos] = useState({
    title: "",
    year: "",
    editor: "",
    author: "",
    traduct: "",
    place: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInfos({ ...infos, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (infos.title && infos.year) {
      try {
        const formData = new FormData();
        formData.append("title", infos.title);
        formData.append("year", infos.year);
        formData.append("author", infos.author);
        formData.append("traduct", infos.traduct);
        formData.append("editor", infos.editor);
        formData.append("place", infos.place);
        formData.append("article", editorState.editorContent);

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

        setInfos({
          title: "",
          year: "",
          editor: "",
          author: "",
          traduct: "",
          place: "",
        });

        setEditorState({
          editorContent:
            '<h4 style="text-align: center;">Saisissez votre texte</h4>',
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
          <h3>Poster un texte</h3>
        </header>
        <button className="close-modal-btn" onClick={toggleModalArticles}>
          <FaTimes />
        </button>

        <form className="slider" onSubmit={handleSubmit}>
          <section
            className={
              isEditorOpen
                ? "editor__container show-editor"
                : "editor__container"
            }
          >
            <TextEditor
              editorState={editorState}
              handleEditorChange={handleEditorChange}
            />
          </section>
          <section
            className={
              isEditorOpen ? "form__validation hide-form" : "form__validation"
            }
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
            <section className="form-articles">
              <div className="inputs-container d-flex">
                <div className="input-container">
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="nom"
                    value={infos.title}
                    onChange={handleChange}
                    required
                  />
                  <span></span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="author"
                    className="form-control"
                    placeholder="auteur"
                    value={infos.author}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="inputs-container d-flex">
                <div className="input-container">
                  <input
                    type="text"
                    name="editor"
                    className="form-control"
                    placeholder="éditeur"
                    value={infos.editor}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="traduct"
                    className="form-control"
                    placeholder="traducteur"
                    value={infos.traduct}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="inputs-container d-flex">
                <div className="input-container">
                  <input
                    type="text"
                    name="place"
                    className="form-control"
                    placeholder="ville"
                    value={infos.place}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-container">
                  <input
                    type="number"
                    name="year"
                    className="form-control"
                    placeholder="e.g. 2005"
                    value={infos.year}
                    onChange={handleChange}
                    required
                  />
                  <span></span>
                </div>
              </div>

              <span>* Ces champs sont requis.</span>
              <button className="btn submit-btn" style={{ marginTop: "1rem" }}>
                Envoyer
              </button>
            </section>
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
      top: 0;
      left: 50%;
      /* z-index: 9000; */
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .hide-form {
    opacity: 0;
    transform: translateX(-100%);
  }
  .alert-container {
    height: 2rem;
  }
  .form-articles {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 60%;
    max-width: var(--fixed-width);
  }

  .inputs-container {
    width: 100%;
    .input-container {
      margin: 0 0.5rem;
      width: 100%;
      position: relative;
      input {
        &:required {
          & + span::after {
            content: "*";
            position: absolute;
            bottom: 0;
            right: -0.5rem;
          }
        }
      }
    }
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
