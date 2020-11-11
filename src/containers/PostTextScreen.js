import React, { useState } from "react";
import Axios from "axios";
import Cookie from "js-cookie";
import "../styles/styles.css";
import PostTextInfo from "../components/PostTextinfo";

export default function PostTextScreen({ setPost }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [text, setText] = useState({
    title: "",
    year: "",
    editor: "",
    author: "",
    traduct: "",
    place: "",
    article: "",
  });

  const token = Cookie.get("token");

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
          console.log(response.data);
          setIsLoading(false);
          setIsPublished(true);
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
    <section className="post-modal-text">
      <div className="loader-container">
        {isLoading && (
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        {/* {isPublished && <h6>Votre article a bien été publié</h6>} */}
        {isPublished && <PostTextInfo />}
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
                id="title"
                name="title"
                value={text.title}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <h6>Année de publication:</h6>
              <input
                type="text"
                id="year"
                name="year"
                value={text.year}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <h6>Auteur:</h6>
              <input
                type="text"
                id="author"
                name="author"
                value={text.author}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <h6>Traducteur:</h6>
              <input
                type="text"
                id="traduct"
                name="traduct"
                value={text.traduct}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <h6>Éditeur:</h6>
              <input
                type="text"
                id="editor"
                name="editor"
                value={text.editor}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <h6>Ville:</h6>
              <input
                type="text"
                id="place"
                name="place"
                value={text.place}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <h6>Article:</h6>
              <textarea
                rows="8"
                cols="35"
                //     type="text"
                id="article"
                name="article"
                value={text.article}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="postText-form-down">
            <input className="submit" type="submit" />
          </div>
        </form>
      </div>
    </section>
  );
}
