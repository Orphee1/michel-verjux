import React from "react";
// import Cookie from "js-cookie";
import { Link } from "react-router-dom";
import { links } from "../constants/links";
import { GoThreeBars } from "react-icons/go";
import { useToggleContext } from "../context/toggle_context";
import { useUserContext } from "../context/user_context";

import "../main.css";
import styled from "styled-components";

const Header = ({
  toggleModalLogin,
  // setUser
}) => {
  //   const token = Cookie.get("token");
  const { isSideBarOpen, toggleSide } = useToggleContext();
  const { myUser, loginWithRedirect, logout } = useUserContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <h3>Michel Verjux</h3>

        {!isSideBarOpen && (
          <button className="toggle-btn" onClick={toggleSide}>
            <GoThreeBars />
          </button>
        )}
        <ul className="nav-links">
          <li>
            {/* {token ? ( */}
            {myUser ? (
              <button
                className="btn connect-btn"
                onClick={() => {
                  //   logout({ returnTo: window.location.origin });
                  logout({ returnTo: "https://michel-verjux.com/home" });
                }}
                // onClick={() => {
                //   setUser({});
                //   Cookie.remove("token");
                // }}
              >
                me déconnecter
              </button>
            ) : (
              <button
                className="btn connect-btn"
                onClick={loginWithRedirect}
                //       onClick={toggleModalLogin}
              >
                me connecter
              </button>
            )}
          </li>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}> {text} </Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="/post">Poster</Link>
            </li>
          )}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.nav`
  position: relative;
  z-index: 1;
  /* background: transparent;  */
  background: var(--clr-primary-1);
  height: 5rem;
  display: flex;
  align-items: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: flex;
    justify-content: space-between;
    h3 {
      color: var(--clr-white);
    }
  }
  .connect-btn {
    /* font-size: 1rem; */
    display: none;
    border: transparent;
  }
  .toggle-btn {
    /* width: 3.5rem; */
    height: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    border-radius: 1.5rem;
    border: transparent;
    color: var(--clr-white);
    background: var(--clr-primary-1);
    outline: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      background: var(--clr-red-dark);
    }
  }
  .nav-links {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .toggle-btn {
      display: none;
    }
    .nav-links {
      display: flex;
      justify-content: flex-end;
    }
    .nav-links li {
      margin-left: 2rem;
    }
    .nav-links a {
      text-transform: capitalize;
      color: var(--clr-white);
      /* color: red; */
      font-weight: bold;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      padding: 0.5rem 0;
    }
  }
  @media screen and (min-width: 1200px) {
    .connect-btn {
      display: inline-block;
    }
  }
`;
