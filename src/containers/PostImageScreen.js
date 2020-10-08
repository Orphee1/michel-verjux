import React, { useState } from "react";
import Axios from "axios";
import Cookie from "js-cookie";
import "../styles/styles.css";

export default function PostImageScreen({ setPost }) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("Sans titre");
  const [year, setYear] = useState(undefined);
  const [context, setContext] = useState(undefined);
  const [place, setPlace] = useState(undefined);
  const [town, setTown] = useState(undefined);
  const [collect, setCollect] = useState(undefined);
  const [credit, setCredit] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  const token = Cookie.get("token");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (file !== null) {
      if (year !== undefined) {
        setIsLoading(true);
        try {
          const formData = new FormData();
          formData.append("picture", file);
          formData.append("title", title);
          formData.append("year", year);
          context !== undefined && formData.append("context", context);
          place !== undefined && formData.append("place", place);
          town !== undefined && formData.append("town", town);
          collect !== undefined && formData.append("collect", collect);
          credit !== undefined && formData.append("credit", credit);

          const response = await Axios.post(
            process.env.REACT_APP_WEBADDRESS + "/image/publish",
            formData,
            {
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log(response.data);
          if (response.data) {
            //     setPost("");
            setIsLoading(false);
            setIsPublished(true);
          }
        } catch (error) {
          console.log(error);
          alert(error.message);
        }
      } else {
        alert("Vous devez renseigner l'année");
      }
    } else {
      alert("Vous devez charger un fichier");
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
        {isPublished && <h6>Votre image a bien été publiée</h6>}
      </div>

      <div className="post-image-modal-content box-shadow-both-sides">
        <span
          className="post-cross box-shadow-both-sides"
          onClick={() => {
            setPost("");
          }}
        >
          X
        </span>
        <form onSubmit={handleSubmit} className="form ">
          <div className="postImage-form-up">
            <div>
              <h6>Photo:</h6>
              <input
                type="file"
                onChange={(event) => {
                  setFile(event.target.files[0]);
                }}
              />
            </div>
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
              <h6>Année:</h6>
              <input
                type="number"
                value={year}
                onChange={(event) => {
                  setYear(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <h6>Réalisation:</h6>

              <input
                type="text"
                value={context}
                onChange={(event) => {
                  setContext(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <h6>Lieu:</h6>

              <input
                type="text"
                value={place}
                onChange={(event) => {
                  setPlace(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <h6>Ville:</h6>

              <input
                type="text"
                value={town}
                onChange={(event) => {
                  setTown(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <h6>Collection:</h6>

              <input
                type="text"
                value={collect}
                onChange={(event) => {
                  setCollect(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <h6>Crédit photo:</h6>
              <input
                type="text"
                value={credit}
                onChange={(event) => {
                  setCredit(event.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="postImage-form-down">
            <input type="submit" className="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
