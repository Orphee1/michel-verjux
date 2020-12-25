import React, {useState} from 'react'
import Cookie from "js-cookie"

import "../main.css"
import styled from "styled-components"


const Biblio = ({biblios}) => {
        // console.log(biblios);
        const token = Cookie.get("token")
    

        return (
                <Wrapper>
                         <div className="title">
 <h3>
          <span>/</span>
          Bibliographie
        </h3>
        </div>                       
    
       
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
