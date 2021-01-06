import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../main.css";
import styled from "styled-components";
import { useDataContext } from "../context/DataContext";
import { useFilterContext } from "../context/filter_context";
import { GridView, ListView } from "./index";
const Images = () => {
  const { imagesError, imagesLoading } = useDataContext();
  const { grid_view, filtered_images: images } = useFilterContext();
  //   console.log(images);

  const history = useHistory();
  React.useEffect(() => {
    if (imagesError) {
      setTimeout(() => {
        history.push("/home");
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesError]);

  if (imagesLoading) {
    return (
      <div className="section section-center">
        <h2>Chargement...</h2>
      </div>
    );
  }

  if (imagesError) {
    return (
      <div className="section section-center">
        <h2>Une erreur est survenue</h2>
      </div>
    );
  }
  if (grid_view) {
    return <GridView images={images} />;
  } else {
    return <ListView images={images} />;
  }
};

export default Images;

const Wrapper = styled.section``;
