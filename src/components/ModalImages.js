import React, {useState} from 'react'
import Axios from "axios";
import Cookie from "js-cookie"
import "../main.css"
import styled from "styled-components"
import {Alert} from "./index"
import { FaTimes } from 'react-icons/fa';


const ModalImages = ({toggleModal}) => {
          const token = Cookie.get("token")
        const [isLoading, setIsLoading] = useState(false)
        const [alert, setAlert] = useState({
                show: false, type: "", msg: ""
        })
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
        }) 
        

        const handleChange = (event) => {
                const name = event.target.name; 
                const value = event.target.value; 
                setImage({...image, [name]: value})
        }
   

const handleSubmit = async (event) => {
        event.preventDefault()
        if (image.picture) {
if(image.year) {
setIsLoading(true)
try {
const formData = new FormData();
formData.append("picture", image.picture);
          formData.append("title", image.title);
          formData.append("year", image.year);
          formData.append("medium", image.medium);
          formData.append("context", image.context);
          formData.append("place", image.place);
        formData.append("town", image.town);
        formData.append("collect", image.collect);
          formData.append("credit", image.credit); 

          const response = await Axios.post(process.env.REACT_APP_WEBADDRESS + "/image/publish",  
          formData, {
                  headers: {
                          "Authorization": "Bearer " + token,
                          "Content-Type" : "multipart/form-data"
                  }
          })
          setImage({picture: null, title:"", year: "", medium:"", context:"", place: "", town: "", collect: "", credit: ""})
          if (response.data) {
                  console.log(response.data);
                  setAlert({show: true, type:"success", msg:"Votre image a bien été publiée"})
          }

} catch (error) {
console.log(error);
setAlert({show:true, type: "danger", msg: "Une erreur est survenue en postant l'image"})
setIsLoading(false)
}
} else {
        setAlert({show: true, type: "danger", msg: "Vous devez renseigner l'année"})
}
        } else {
                setAlert({show:true, type: "danger", msg:"Vous devez charger un fichier"})
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
        <h3>Poster une image</h3>
        <div className="alert-container">
        {alert.show && <Alert {...alert}  setAlert={setAlert}  />}
        </div>
        <form action="" 
        className="form-images fl-col"
        onSubmit={handleSubmit}>
                <div className="form-images-group fl-col">
                <div className="input-container s-b">
                        <input type="text" name="title" className="form-control"
                        placeholder="titre"
                        value={image.title}
                        onChange={handleChange}
                        />
                             <input type="number" name="year" className="form-control"
                        placeholder="année"
                        value={image.year}
                        onChange={handleChange}
                        />
                </div>
           
                 <div className="input-container d-flex">
                        <input type="text" name="medium" className="form-control"
                        placeholder="medium"
                        value={image.medium}
                        onChange={handleChange}
                        />
                             <input type="text" name="context" className="form-control"
                        placeholder="exposition"
                        value={image.context}
                        onChange={handleChange}
                        />
                </div>
                      <div className="input-container d-flex">
                        <input type="text" name="place" className="form-control"
                        placeholder="Lieu"
                        value={image.place}
                        onChange={handleChange}
                        />
                             <input type="text" name="town" className="form-control"
                        placeholder="Ville"
                        value={image.town}
                        onChange={handleChange}
                        />
                </div>
                    <div className="input-container d-flex">
                        <input type="text" name="collect" className="form-control"
                        placeholder="Collection"
                        value={image.collect}
                        onChange={handleChange}
                        />
                             <input type="text" name="credit" className="form-control"
                        placeholder="Crédit"
                        value={image.credit}
                        onChange={handleChange}
                        />
                </div>
                <input type="file" name="picture" 
                className="form-control file"
             onChange={(event) => {
                     setImage({...image, picture: event.target.files[0]})
             }}
                />
                </div>
                <button className="btn submit-btn">Envoyer</button>
        </form>

                          </div>
                </Wrapper>
        )
}

export default ModalImages

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
  max-width: var(--fixed-width);
  position: relative;
  text-align: center;
 }
.alert-container {
        height: 2rem; 
}
.form-images {
        width: 80%;

}
.form-images-group {
        padding: 1rem; 
        width: 100%;
}
.input-container{
        width: 100%;
      
        input {
                margin: 0.5rem;
        }
}
.file {
        width: 60%; 
}
`