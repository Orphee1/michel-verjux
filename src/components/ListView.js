import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListView = ({ images }) => {
  return (
    <Wrapper>
      {images.map((image) => {
        // console.log(image);
        const { picture, town, year, context, _id, title } = image;
        return (
          <article key={_id}>
            <img src={picture} alt={title} />
            <div>
              <h4>{title}</h4>

              <Link to={`/selected-image/${_id}`} className="btn">
                voir
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

export default ListView;

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 275px;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;
