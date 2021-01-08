import React, { useState } from "react";
import Axios from "axios";
import Cookie from "js-cookie";
import "../main.css";
import styled from "styled-components";
import { useToggleContext } from "../context/toggle_context";
import { Alert } from "./index";
import options from "../constants/selectOptions";
import { FaTimes } from "react-icons/fa";

const ModalBiblio = () => {
  const { toggleModalBiblio } = useToggleContext();
  const token = Cookie.get("token");
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    msg: "",
  });
  const [biblio, setBiblio] = useState({
    category: "",
    title: "",
    editor: "",
    collect: "",
    author: "",
    year: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setBiblio({ ...biblio, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (biblio.category && biblio.title && biblio.editor && biblio.year) {
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("category", biblio.category);
        formData.append("title", biblio.title);
        formData.append("editor", biblio.editor);
        formData.append("collect", biblio.collect);
        formData.append("author", biblio.author);
        formData.append("year", biblio.year);

        const response = await Axios.post(
          process.env.REACT_APP_WEBADDRESS + "/biblio/publish",
          formData,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setBiblio({
          category: "",
          title: "",
          editor: "",
          collect: "",
          year: "",
          author: "",
        });
        if (response.data) {
          //   console.log(response.data);
          setAlert({
            show: true,
            type: "success",
            msg: "Votre référence a bien été publiée",
          });
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setAlert({
          show: true,
          type: "danger",
          msg: "Une erreur est survenue en postant",
        });
        setIsLoading(false);
      }
    } else {
      setAlert({
        show: true,
        type: "danger",
        msg: "Veuillez préciser la catégorie, le titre, l'éditeur et l'année",
      });
    }
  };
  return (
    <Wrapper>
      <div className="container fl-col">
        <button className="close-modal-btn" onClick={toggleModalBiblio}>
          <FaTimes />
        </button>
        <h3>Poster une référence bibliographique</h3>
        <div className="alert-container">
          {alert.show && <Alert {...alert} setAlert={setAlert} />}
          <form
            action=""
            className="form-biblio fl-col"
            onSubmit={handleSubmit}
          >
            <div className="form-biblio-group fl-col">
              <div className="input-container">
                <select
                  name="category"
                  id="category"
                  className="form-control"
                  onChange={handleChange}
                >
                  {options}
                </select>
                <span className="required">*</span>
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Titre"
                  value={biblio.title}
                  onChange={handleChange}
                />
                <span className="required">*</span>
              </div>
              <div className="double-container d-flex">
                <div
                  className="input-container"
                  style={{ marginRight: "0.5rem" }}
                >
                  <input
                    type="text"
                    name="editor"
                    className="form-control"
                    placeholder="Éditeur"
                    value={biblio.editor}
                    onChange={handleChange}
                  />
                  <span className="required">*</span>
                </div>
                <div
                  className="input-container"
                  style={{ marginLeft: "0.5rem" }}
                >
                  <input
                    type="text"
                    name="collect"
                    className="form-control"
                    placeholder="Collection"
                    value={biblio.collect}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="double-container d-flex">
                <div
                  className="input-container"
                  style={{ marginRight: "0.5rem" }}
                >
                  <input
                    type="text"
                    name="author"
                    className="form-control"
                    placeholder="Auteur"
                    value={biblio.author}
                    onChange={handleChange}
                  />
                </div>
                <div
                  className="input-container"
                  style={{ marginLeft: "0.5rem" }}
                >
                  <input
                    type="number"
                    name="year"
                    className="form-control"
                    placeholder="Année"
                    value={biblio.year}
                    onChange={handleChange}
                  />
                  <span className="required">*</span>
                </div>
              </div>
            </div>
            <span>* Ces champs sont requis.</span>
            <button className="btn submit-btn" style={{ marginTop: "0.5rem" }}>
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default ModalBiblio;

const Wrapper = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: grid;
  place-items: center;
  transition: var(--transition);
  z-index: 10;
  select {
    font-family: var(--ff-primary);
    color: var(--clr-primary-2);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  .container {
    background: var(--clr-white);
    border-radius: var(--radius);
    width: 90vw;
    height: 70vh;
    max-width: var(--max-width);
    position: relative;
    text-align: center;
    padding: 1rem;
    justify-content: flex-start;
  }
  .form-biblio {
    width: 50vw;
  }
  .form-biblio-group {
    padding: 1rem;
    width: 100%;
  }
  .alert-container {
    height: 2rem;
  }
  .double-container {
    width: 100%;
  }
  .input-container {
    width: 100%;
    position: relative;
  }
  .required {
    position: absolute;
    bottom: 0;
    left: -10px;
  }
`;
