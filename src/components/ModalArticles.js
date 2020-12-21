import React, {useState} from 'react'
import Axios from "axios";
import Cookie from "js-cookie"
import ReactMarkdown from "react-markdown"
import "../main.css"
import styled from "styled-components"
import {Alert} from "./index"
import { FaTimes } from 'react-icons/fa';

const ModalArticles = ({toggleModal}) => {
        const token = Cookie.get("token")
        const [isLoading, setIsLoading] = useState(false)
        const [alert, setAlert] = useState({
                show: false, type: "", msg: ""
        })
        const [text, setText] = useState({
                    title: "",
    year: "",
    editor: "",
    author: "",
    traduct: "",
    place: "",
    article: "",
        })

const handleChange = (event) => {
        const name = event.target.name; 
        const value = event.target.value; 
        setText({...text, [name]:value})
}

const handleSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        if (text.title && text.article && text.year){
try {
        const formData = new FormData() 
         formData.append("title", text.title);
                formData.append("year", text.year);
        formData.append("author", text.author);
        formData.append("traduct", text.traduct);
        formData.append("editor", text.editor);
        formData.append("place", text.place);
        formData.append("article", text.article);

        const response = await Axios.post(process.env.REACT_APP_WEBADDRESS + "/text/publish",
          formData, {
                  headers: {
                          "Authorization": "Bearer " + token,
                          "Content-Type" : "multipart/form-data"
                  }
          }
        );
             setText({title: "", year: "", editor: "", author: "", traduct: "", place: "", article: ""});
             if (response.data) {
console.log(response.data);
setAlert({show: true, type: "success", msg: "Votre article a bien été publié"})
setIsLoading(false);

             } 

} catch (error) {
console.log(error);
 setAlert({show: true, type: "danger", msg:"Une erreur est survenue en postant l'article"})
 setIsLoading(false)
}
        } else {
                setAlert({show: true, type: "danger", msg: "Veuillez renseigner le titre, l'année et le contenu de l'article"})
                setIsLoading(false);
        
        }
}

        return (
                <Wrapper>
                        <div className="container fl-col">
                                   <button className="close-modal-btn"
        onClick={toggleModal}
        >
          <FaTimes />
        </button>
        <h3>Poster un texte</h3>
        <div className="alert-container">
        {alert.show && <Alert {...alert}  setAlert={setAlert}  />}
        </div>
        <form action="" className="form-articles" 
        onSubmit={handleSubmit}
        >
                <div className="input-container d-flex">
                <input type="text"  name="title"
                className="form-control"
                placeholder="nom"
                value={text.title}
                onChange={handleChange}
                />
                <input type="text"  name="author"  className="form-control"
                 placeholder="auteur"
                value={text.author}
                onChange={handleChange}
                />
                <input type="text"  name="editor"  className="form-control"
                  placeholder="éditeur"
                value={text.editor}
                onChange={handleChange}
                />
                </div>
                    <div className="input-container d-flex">
                <input type="text"  name="traduct" className="form-control"
                   placeholder="traducteur"
                value={text.traduct}
                onChange={handleChange}
                />
                <input type="text"  name="place"  className="form-control"
                 placeholder="ville"
                value={text.place}
                onChange={handleChange}
                />
                <input type="number"  name="year"  className="form-control"
                   placeholder="e.g. 2005"
                value={text.year}
                onChange={handleChange}
                />
                </div>
              
                <div className="editor-container">
                        <textarea name="article" rows="10" 
                        placeholder="Saisir l'article en markdown"
                        value={text.article}
                onChange={handleChange}
                        ></textarea>
                             <article>
              <ReactMarkdown>
                      {text.article}
              </ReactMarkdown>
            </article>
                </div>
           <button className="btn submit-btn">Envoyer</button>
              
        </form>
                        </div>
                </Wrapper>
        )
}

export default ModalArticles

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
  .container {
background: var(--clr-white);
  border-radius: var(--radius);
  width: 90vw;
  height: 90vh;
  max-width: var(--max-width);
  text-align: center;
  position: relative;
 }
.alert-container {
        height: 2rem; 
}
.form-articles {
   height: 75vh; 

}
.input-container {
        width: 50%; 
        input {
                margin : 0.5rem ; 
        }
}
.editor-container {
  width: 100%;
  height: 100%; 
  margin: 0.5rem; 
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5rem;
        textarea {
                grid-column: 1/2; 
border-color: transparent;
  border-radius: var(--radius);
  font-size: 1.2rem;
  line-height: 2;
      height: auto;
  overflow-y: scroll; 
  box-shadow: var(--dark-shadow);
    padding: 1rem 2rem;
}
article {
        grid-column: 2/3; 
  padding: 1rem 2rem;
    height: auto;
  overflow-y: scroll; 
  background: var(--clr-grey-9)

}
}

`
