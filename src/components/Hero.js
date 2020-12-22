import React from 'react'
import "../main.css"
import styled from "styled-components"
import img from "../images/hero.png"; 

const Hero = () => {
        return (
                <Wrapper>
                             <div className="section-center hero-center">
<h1>Michel Verjux</h1>
                        </div>
                  
                </Wrapper>
        )
}

export default Hero

const Wrapper = styled.section`
height: 90vh; 
 display: grid;
  place-items: center;
background-image: url(${img}); 
background-size: cover; 
background-position: center;

.hero-center {
height: 85%; 
display: grid; 
grid-template-rows: 50% 50%; 
h1 {
  grid-row: 2/3; 
  color: var(--clr-white); 
  align-self: end ; 
  justify-self: start; 
  /* font-weight: bold;  */
  
}
}
@media screen and (min-width: 800px) {
        .hero-center {
                height: 90%;
   grid-template-columns: 50% 50%; 
   h1 {
  grid-column: 1/3; 
  grid-row: 2/3; 
  align-self: end; 
}
        }
}

`
