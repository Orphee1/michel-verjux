import React, { useState } from "react";
import Axios from "axios";
import Cookie from "js-cookie";
import { FaTimes } from 'react-icons/fa';

import "../main.css";
import styled from "styled-components"


const  ModalLogin = ({ toggleModalLogin, setUser }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await Axios.post(
        process.env.REACT_APP_WEBADDRESS + "/user/login",
        {
          email: email,
          password: password,
        }
      );
//       console.log(response.data);
      if (response.data.token) {
        Cookie.set("token", response.data.token);
        setUser(response.data);
       toggleModalLogin()
      } else {
        alert("No response from the server");
      }
    } catch (error) {
      console.log(error);
      alert("Error connecting user");
    }
  };

  return (
    <Wrapper>
 <div className="container">
   <button className="close-modal-btn"
        onClick={toggleModalLogin}
        >
          <FaTimes />
        </button>
        <form action=""
        onSubmit={handleSubmit}
        >
<input type="email" className="form-control"
placeholder="email"
value={email}
onChange={(event) => {
        setEmail(event.target.value); 
}}
/>
<input type="password" className="form-control"
placeholder="mot de passe"
value={password}
onChange={(event) => {
        setPassword(event.target.value); 
}}
/>
<button className="btn" >Envoyer</button>
        </form>
 </div>
    </Wrapper>
  );
}

export default ModalLogin

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
  height: 60vh;
  max-width: var(--fixed-width);
  text-align: center;
  display: grid;
  place-items: center;
  position: relative;
 }
 form {
       width: 60%;   
 }
`