import React, {useState} from 'react'
import Axios from "axios";
import Cookie from "js-cookie"
import "../main.css"
import styled from "styled-components"
import {Alert} from "./index"
import { FaTimes } from 'react-icons/fa';

const ModalBiblio = ({toggleModalBiblio}) => {

        const token = Cookie.get("token")
         const [isLoading, setIsLoading] = useState(false)
        const [alert, setAlert] = useState({
                show: false, type: "", msg: ""
        })
          const [biblio, setBiblio] = useState({
    title: "",
    editor: "",
    collect: "",
    year: "",
  });

    const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setBiblio({ ...biblio, [name]: value });
  };

  const handleSubmit = async (event) => {
          event.preventDefault()
if (biblio.title && biblio.editor && biblio.year) {
setIsLoading(true)
try {
const formData = new FormData(); 
        formData.append("title", biblio.title);
        formData.append("editor", biblio.editor);
        formData.append("collect", biblio.collect);
        formData.append("year", biblio.year);

        const response = await Axios.post( process.env.REACT_APP_WEBADDRESS + "/biblio/publish", 
        formData, { headers: {
                "Authorization": "Bearer " + token, 
                "Content-Type" : "multipart/form-data"
        }}
        )
        setBiblio({title: "", editor: "", collect: "", year:""}); 
        if (response.data) {
                console.log(response.data);
                setAlert({show: true, type: "success", msg: "Votre référence a bien été publiée"})
                setIsLoading(false); 
        }

} catch(error) {
console.log(error)
setAlert({show: true, type: "danger", msg:"Une erreur est survenue en postant"})
                setIsLoading(false); 

}
} else {
        setAlert({show:true, type:"danger", msg:"Vous devez renseigner le titre, l'éditeur et l'année"})
}
  }
        return (
                <Wrapper>
                          <div className="container fl-col">
                                   <button className="close-modal-btn"
        onClick={toggleModalBiblio}
        >
          <FaTimes />
        </button>
        <h3>Poster une référence bibliographique</h3>
        <div className="alert-container">
        {alert.show && <Alert 
        {...alert}  setAlert={setAlert}  />}
        <form action=""
        className="form-biblio fl-col"
        onSubmit={handleSubmit}
        >
                <div className="form-biblio-group fl-col">
                        <input type="text" name="title" className="form-control"
                        placeholder="Titre"
                        value={biblio.title}
onChange={handleChange}

                        />
                           <input type="text" name="editor" className="form-control"
                        placeholder="Éditeur"
                        value={biblio.editor}
onChange={handleChange}

                        />
                           <input type="text" name="collect" className="form-control"
                        placeholder="Collection"
                        value={biblio.collect}
onChange={handleChange}

                        />
                           <input type="number" name="year" className="form-control"
                        placeholder="Année"
                        value={biblio.year}
onChange={handleChange}
                        />
                </div>
                  <button className="btn submit-btn">Envoyer</button>
        </form>
        </div>
                          </div>
                        
                </Wrapper>
        )
}

export default ModalBiblio

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
  height: 70vh;
  max-width: var(--max-width);
  position: relative;
text-align: center; 
padding: 1rem; 
  justify-content: flex-start;
  .alert-container {
        height: 2rem; 
}
.form-biblio {
        width: 50vw; 
       
     
}
  .form-biblio-group {
           padding: 1rem; 
        width: 100%;
  }
  }
  `
