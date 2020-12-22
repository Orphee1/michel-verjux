import React from "react";
import { Link } from "react-router-dom";

import "../main.css"; 
import styled from "styled-components"

const  ErrorScreen = () => {
  return (
    <Wrapper>
      <h2>Oop's, la page demandée n'existe pas</h2>

      <Link to="/home" className="btn" >
        <h5>Back to Home Page</h5>
      </Link>
    </Wrapper>
  );
}

export default ErrorScreen

const Wrapper = styled.main`
min-height: 100vh; 
background: var(--clr-white); 
padding : 5rem 0; 
display: grid; 
place-items: center; 

`
