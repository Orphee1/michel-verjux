import React, {useState} from 'react'
import Cookie from "js-cookie"

import "../main.css"
import styled from "styled-components"
import {ModalBiblio} from "./index"

const Biblio = ({biblios}) => {
        // console.log(biblios);
        const token = Cookie.get("token")
         const [modal, setModal] = useState(false); 
          const toggleModal = () => {
                setModal(!modal)
        }

        return (
                <Wrapper>
                         <div className="title">
 <h3>
          <span>/</span>
          Bibliographie
        </h3>
        </div>                       
        {token && (
         <button className="btn post-btn"  
         onClick={toggleModal}
         >Poster une référence</button>
        )}
        {modal && (
                <ModalBiblio toggleModal={toggleModal}  />
        )}
                </Wrapper>
        )
}

export default Biblio

const Wrapper = styled.section`
background: var(--clr-white); 
padding : 5rem 0; 
display: flex; 
flex-direction: column; 
align-items: center; 
@media (min-width: 768px) { }

@media (min-width: 992px) {}

 @media (min-width: 1200px) {}

` 
