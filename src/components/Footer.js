import React from "react";
import "../main.css";
import styled from "styled-components"
import {socialLinks} from "../constants/socialLinks"

const Footer = () => {
 
  return (
    <Wrapper>
<div className="section-center s-b">
        <h3>Michel Verjux</h3>
        <ul>
                {socialLinks.map(item => {
                        const {id, url, icon} = item;
                        return <li key={id} >
<a href={url} className="social-link" >
        {icon}
</a>
                        </li>
                }) }
        </ul>
</div>
<div className="section-center d-flex">
        <h4>&copy; {new Date().getFullYear()} <span>HL</span> built with React.</h4>
</div>
    </Wrapper>
         
  );
};

export default Footer;

const Wrapper = styled.footer`
height: 8rem; 
display: grid; 
place-items: center; 
background: var(--clr-primary-1); 
color: var(--clr-white); 
div {
  margin: 1rem auto;
}
span {
  color: var(--clr-red-dark); 
}
`
