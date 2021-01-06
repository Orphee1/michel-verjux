import React from "react";
import styled from "styled-components";
import { Image } from "./index";

const GridView = ({ images }) => {
  return (
    <Wrapper>
      <div className="images-container">
        {images.map((image) => {
          return <Image key={image._id} {...image} />;
        })}
      </div>
    </Wrapper>
  );
};

export default GridView;

const Wrapper = styled.section`
  img {
    height: 275px;
  }

  .images-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .images-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .images-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
