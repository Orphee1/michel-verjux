import React, { useState } from "react";
import Axios from "axios";
import Cookie from "js-cookie";
import "../styles/styles.css";

export default function PostTextScreen({ setPost }) {
  const [title, setTitle] = useState(undefined);
  const [year, setYear] = useState(undefined);
  const [editor, setEditor] = useState("");
  const [author, setAuthor] = useState("");
  const [traduct, setTraduct] = useState("");
  const [place, setPlace] = useState("");
  const [article, setArticle] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  const token = Cookie.get("token");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (title !== undefined && year !== undefined && article !== undefined) {
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("year", year);
        formData.append("author", author);
        formData.append("traduct", traduct);
        formData.append("editor", editor);
        formData.append("place", place);
        formData.append("article", article);
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

        if (response.data) {
          console.log(response.data);
          setIsLoading(false);
          setIsPublished(true);
          // setPost("");
        }
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    } else {
      alert("Vous devez renseigner le titre, l'année et le champ article.");
    }
  };

  return (
    <div className="post-modal-text">
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
          <div className="postText-form-up">
            <div>
              <h6>Titre:</h6>
              <input
                type="text"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <h6>Année de publication:</h6>
              <input
                type="number"
                value={year}
                onChange={(event) => {
                  setYear(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <h6>Auteur:</h6>
              <input
                type="text"
                value={author}
                onChange={(event) => {
                  setAuthor(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <h6>Traducteur:</h6>
              <input
                type="text"
                value={traduct}
                onChange={(event) => {
                  setTraduct(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <h6>Éditeur:</h6>
              <input
                type="text"
                value={editor}
                onChange={(event) => {
                  setEditor(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <h6>Ville:</h6>
              <input
                type="text"
                value={place}
                onChange={(event) => {
                  setPlace(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <h6>Article:</h6>
              <textarea
                rows="8"
                cols="35"
                //     type="text"
                value={article}
                onChange={(event) => {
                  setArticle(event.target.value);
                }}
              ></textarea>
              {/* <input></input> */}
            </div>
          </div>
          <div className="postText-form-down">
            <input className="submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
