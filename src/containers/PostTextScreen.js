import React, { useState } from "react";
import Axios from "axios";
import Cookie from "js-cookie";
import "../styles/styles.css";

export default function PostTextScreen({ setPost }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState();
  const [context, setContext] = useState("");
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const token = Cookie.get("token");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("year", year);
      formData.append("context", context);
      formData.append("article", article);
      const response = await Axios.post(
        // "http://localhost:4000/text/publish",
        "https://michelverjux-backend.herokuapp.com/text/publish",
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
        setPost("");
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
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
              <h6>Contexte:</h6>
              <input
                type="text"
                value={context}
                onChange={(event) => {
                  setContext(event.target.value);
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
