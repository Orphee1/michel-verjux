import React, { useState } from "react";
import Axios from "axios";
import Cookie from "js-cookie";

import "../styles/styles.css";
export default function PostBiblioScreen({ setPost }) {
  const [title, setTitle] = useState(undefined);
  const [editor, setEditor] = useState(undefined);
  const [collect, setCollect] = useState();
  const [year, setYear] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  const token = Cookie.get("token");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (title !== undefined && editor !== undefined && year !== undefined) {
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("editor", editor);
        formData.append("collect", collect);
        formData.append("year", year);
        const response = await Axios.post(
          "http://localhost:4000/biblio/publish",
          //   "https://michelverjux-backend.herokuapp.com/biblio/publish",
          formData,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.data) {
          console.log(response.data);
          setIsLoading(false);
          setIsPublished(true);
          //   setPost("");
        }
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    } else {
      alert("Vous devez renseigner le titre, l'éditeur et l'année.");
    }
  };

  return (
    <div className="post-modal">
      <div className="loader-container">
        {isLoading && (
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        {isPublished && <h6>Votre article a bien été publié</h6>}
      </div>
      <div className="post-modal-content box-shadow-both-sides">
        <span
          className="post-cross box-shadow-both-sides"
          onClick={() => {
            setPost("");
          }}
        >
          X
        </span>
        <form className="form" onSubmit={handleSubmit}>
          <div className="postBiblio-form-up">
            <div>
              <h6>Titre:</h6>
              <input
                type="text"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div>
              <h6>Éditeur:</h6>
              <input
                type="text"
                value={editor}
                onChange={(event) => {
                  setEditor(event.target.value);
                }}
              />
            </div>
            <div>
              <h6>Collection:</h6>
              <input
                type="text"
                value={collect}
                onChange={(event) => {
                  setCollect(event.target.value);
                }}
              />
            </div>
            <div>
              <h6>Année:</h6>
              <input
                type="number"
                value={year}
                onChange={(event) => {
                  setYear(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="postBiblio-form-down">
            <input className="submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
