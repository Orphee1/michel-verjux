import React from 'react'
import {Link} from "react-router-dom"; 
import "../main.css"
import styled from "styled-components"

const HomeArticles = () => {
        return (
                <Wrapper>
                                        <div className="title">
 <h2>
          <span>/</span>
          Choix de textes
        </h2>
        </div>

            <Link to="/text/" className="btn" >Plus de textes</Link>
                </Wrapper>
        )
}

export default HomeArticles

const Wrapper = styled.section`
background: var(--clr-primary-1); 
padding : 5rem 0; 
display: flex; 
flex-direction: column; 
align-items: center; 
.title {
         text-align: center;
  margin-bottom: 2rem;
  color: var(--clr-white); 
}
`
