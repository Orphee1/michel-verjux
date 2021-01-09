import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListView = ({ images }) => {
  return (
    <Wrapper>
      {images.map((image) => {
        // console.log(image);
        const { picture, place, town, year, context, _id, title } = image;
        return (
          <Link to={`/selected-image/${_id}`} className="" key={_id}>
            <article>
              <img src={picture} alt={title} />
              <div>
                <h3>{title}</h3>
                <h4>
                  <span>{town}, </span>
                  <span>{year}.</span>
                </h4>
                <h4>{context && <span>{context}.</span>}</h4>
                <h4>{place && <span>{place}.</span>}</h4>
              </div>
            </article>
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default ListView;

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
  article {
    color: var(--clr-primary-1);
  }
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
