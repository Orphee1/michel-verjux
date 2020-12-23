import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import ReactMarkdown from "react-markdown" 
import Axios from "axios";
import Cookie from "js-cookie";

import "../main.css";
import styled from "styled-components"

import {SEO} from "../components";

export default function SelectedText() {
        
        const token = Cookie.get("token");
  const [text, setText] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const { id } = useParams();
!isLoading && console.log(text);

  const fetchText = async () => {
    try {
      const response = await Axios.get(
        process.env.REACT_APP_WEBADDRESS + "/text?id=" + id
      );
      if (response.data) {
        // console.log(response.data);
        setText(response.data);
        setIsLoading(false);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchText();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteText = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("id", id);

      const response = await Axios.post(
        process.env.REACT_APP_WEBADDRESS + "/text/delete",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data) {
        console.log(response.data);
        history.push("/text");
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
<Wrapper>
        {isLoading ? (
                <p>loading ...</p>
        ): (
                <div className="container">
<article  >
<ReactMarkdown>
        {text.article}
</ReactMarkdown>
</article>
<div className="side-container">
        <div className="legend-container">
       <h3>{text.title}</h3> 
        <h4>{text.author}, {text.year}.</h4>
        {text.editor &&  <h4>{text.editor}</h4> }
        {text.place &&  <h4>{text.place}</h4> }
        {text.traduct &&  <h4>{text.traduct}</h4> }
        </div>
        {token && (
                <button className="btn" onClick={deleteText}          
                >Supprimer</button>
                )}
</div>
                </div>
        )}
</Wrapper>
  );
}


const Wrapper = styled.main`
min-height: 100vh; 
background: var(--clr-white); 
display: grid; 
place-items: center; 
padding: 5rem 0; 
.container {
        width: 90%; 
        max-width: var(--max-width); 
}
.side-container {
        margin-top: 2rem; 
        display: flex; 
        justify-content: space-between; 
        align-items: center; 
}
.legend-container {
        padding: 1rem; 
          background: var(--clr-primary-1); 
          /* margin-bottom: 1rem;  */
       h3, h4{
               color: var(--clr-white); 
       }
}
article{
        width: 100%;
        color: var(--clr-primary-1); 
        p{
        color: var(--clr-primary-1); 

        }
}
@media (min-width: 992px) { 
.container { 
display: flex; 
align-items: center;
}
.legend-container{
 margin-bottom: 1rem; 
}
.side-container {
        margin-top: 0;
        margin-left: 2rem; 
        display: flex; 
        flex-direction: column; 
        align-items: flex-start; 
        
}
}

`