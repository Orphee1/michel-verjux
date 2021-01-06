import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Image = ({ picture, title, town, year, _id }) => {
  return (
    <Wrapper>
      <Link to={`/selected-image/${_id}`}>
        <div className="container">
          <img src={picture} alt={title} />
          <div className="info">
            <p>
              {title}, {town}, {year}.
            </p>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
};

export default Image;

const Wrapper = styled.article`
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    transition: var(--transition);
  }
  .container {
    position: relative;
    background: var(--clr-black);
    cursor: pointer;
    /* &:hover .img {
      opacity: 0.2;
    } */

    .info {
      position: absolute;
      left: 45%;
      transform: translate(-50%, -50%);
      width: 100%;
      opacity: 0;
      transition: var(--l-transition);
      color: var(--clr-white);
      text-align: center;
    }
  }
`;
