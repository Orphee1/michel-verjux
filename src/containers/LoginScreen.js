import React, { useState } from "react";
import Axios from "axios";
import Cookie from "js-cookie";

import "../styles/styles.css";

export default function Login({ setModalLogin, setUser }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  //   console.log(email);
  //   console.log(password);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await Axios.post("http://localhost:4000/user/login", {
        email: email,
        password: password,
      });
      console.log(response.data);
      if (response.data.token) {
        Cookie.set("token", response.data.token);
        setUser(response.data);
        setModalLogin(false);
      } else {
        alert("no response from server");
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="login-modal">
      <div className="loader-container">
        {isLoading && (
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
      <div className="login-modal-content box-shadow-both-sides ">
        <span
          className="login-cross box-shadow-both-sides"
          onClick={() => {
            setModalLogin(false);
          }}
        >
          X
        </span>
        <form className="form fl-col" onSubmit={handleSubmit}>
          <div className="form-up fl-col">
            <div>
              <h6>Email : </h6>
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div>
              <h6>Mot de passe : </h6>
              <input
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-down fl-col">
            <input className="submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
