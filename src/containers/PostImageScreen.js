import React, { useState } from "react";
import Axios from "axios";
import Cookie from "js-cookie";
import "../styles/styles.css";
import PostImageInfo from "../components/PostImageInfo";

// Component import
import SEO from "../components/SEO";

export default function PostImageScreen({ setPost }) {
  const [image, setImage] = useState({
    picture: null,
    title: "",
    year: "",
    medium: "",
    context: "",
    place: "",
    town: "",
    collect: "",
    credit: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  const token = Cookie.get("token");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setImage({ ...image, [name]: value });
  };
  const postFile = (event) => {
    setImage({ ...image, picture: event.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (image.picture !== null) {
      if (image.year) {
        setIsLoading(true);
        try {
          const formData = new FormData();
          formData.append("picture", image.picture);
          formData.append("title", image.title);
          formData.append("year", image.year);
          image.medium && formData.append("medium", image.medium);
          image.context && formData.append("context", image.context);
          image.place && formData.append("place", image.place);
          image.town && formData.append("town", image.town);
          image.collect && formData.append("collect", image.collect);
          image.credit && formData.append("credit", image.credit);

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
          setImage({
            picture: null,
            title: "",
            year: "",
            medium: "",
            context: "",
            place: "",
            town: "",
            collect: "",
            credit: "",
          });

          if (response.data) {
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
      <SEO title="Post Image Page" description="This is a page to post image" />
      <div className="loader-container">
        {isLoading && (
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        {/* {isPublished && <h6>Votre image a bien été publiée</h6>} */}
        {isPublished && <PostImageInfo />}
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
              <input type="file" onChange={postFile} />
            </div>
            <div>
              <h6>Titre:</h6>
              <input
                type="text"
                name="title"
                value={image.title}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <h6>Année:</h6>
              <input
                type="text"
                name="year"
                value={image.year}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <h6>Médium:</h6>
              <input
                type="text"
                name="medium"
                value={image.medium}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <h6>Réalisation:</h6>
              <input
                type="text"
                name="context"
                value={image.context}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <h6>Lieu:</h6>

              <input
                type="text"
                name="place"
                value={image.place}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <h6>Ville:</h6>
              <input
                type="text"
                name="town"
                value={image.town}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <h6>Collection:</h6>
              <input
                type="text"
                name="collect"
                value={image.collect}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <h6>Crédit photo:</h6>
              <input
                type="text"
                name="credit"
                value={image.credit}
                onChange={handleChange}
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
