import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
const PostScreen = () => {
  return (
    <main>
      <PageHero title="Poster" />
      <Wrapper className="page"></Wrapper>
    </main>
  );
};

export default PostScreen;

const Wrapper = styled.main``;
