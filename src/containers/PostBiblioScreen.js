import React, { useState } from "react";
import Axios from "axios";
import Cookie from "js-cookie";
import PostTextInfo from "../components/PostTextinfo";

// Component import
import SEO from "../components/SEO";

import "../styles/styles.css";
export default function PostBiblioScreen({ setPost }) {
  const [biblio, setBiblio] = useState({
    title: "",
    editor: "",
    collect: "",
    year: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  console.log(isPublished);

  const token = Cookie.get("token");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setBiblio({ ...biblio, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (biblio.title && biblio.editor && biblio.year) {
      setIsLoading(true);
      setIsPublished(false);
      try {
        const formData = new FormData();
        formData.append("title", biblio.title);
        formData.append("editor", biblio.editor);
        formData.append("collect", biblio.collect);
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
          title: "",
          editor: "",
          collect: "",
          year: "",
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
      alert("Vous devez renseigner le titre, l'éditeur et l'année.");
    }
  };

  return (
    <div className="post-modal">
      <SEO
        title="Post Biblio Page"
        description="This is a page to post other kind of text"
      />
      <div className="loader-container">
        {isLoading && (
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}

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
          <div className="postBiblio-form-up">
            <div>
              <h6>Titre:</h6>
              <input
                type="text"
                name="title"
                value={biblio.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <h6>Éditeur:</h6>
              <input
                type="text"
                name="editor"
                value={biblio.editor}
                onChange={handleChange}
              />
            </div>
            <div>
              <h6>Collection:</h6>
              <input
                type="text"
                name="collect"
                value={biblio.collect}
                onChange={handleChange}
              />
            </div>
            <div>
              <h6>Année:</h6>
              <input
                type="text"
                name="year"
                value={biblio.year}
                onChange={handleChange}
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
