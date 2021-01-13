import React, { useEffect } from "react";
// import Axios from "axios";
// import Cookie from "js-cookie";
import { useHistory } from "react-router-dom";
import "../main.css";
import styled from "styled-components";
// import { useGlobalContext } from "../context/GlobalContext";
import { useDataContext } from "../context/DataContext";
import { Biblio, PageHero, SEO } from "../components";
import {
  ArticleLoaderBigScreen,
  ArticleLoaderSmallScreen,
} from "../components/loaders";

const BiblioScreen = () => {
  const { biblios, bibliosError, bibliosLoading } = useDataContext();
  //   const token = Cookie.get("token");
  const history = useHistory();

  //   const { modalBiblio, toggleModalBiblio } = useGlobalContext();

  //   const [biblios, setBiblios] = useState([]);

  //   const deleteBiblio = async (id) => {
  //     try {
  //       const formData = new FormData();
  //       formData.append("id", id);
  //       const response = await Axios.post(
  //         process.env.REACT_APP_WEBADDRESS + "/biblio/delete",
  //         formData,
  //         {
  //           headers: {
  //             Authorization: "Bearer " + token,
  //             "Content-Type": "multipart/form-data",
  //           },
  //         }
  //       );
  //       if (response.data) {
  //         console.log(response.data);
  //         const newBiblios = biblios.filter((item) => item.id !== id);
  //         setBiblios(newBiblios);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       alert("Erreur: cette référence n'a pas été supprimée");
  //     }
  //   };

  useEffect(() => {
    if (bibliosError) {
      setTimeout(() => {
        history.push("/home");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [bibliosError]);

  if (bibliosLoading) {
    return (
      <LoaderWrapper>
        <PageHero title="Bibliographie" />
        <article className="small_screen">
          <ArticleLoaderSmallScreen />
        </article>
        <article className="big_screen">
          <ArticleLoaderBigScreen />
        </article>
      </LoaderWrapper>
    );
  }

  if (bibliosError) {
    return (
      <Wrapper>
        <h2>Une erreur est survenue</h2>
      </Wrapper>
    );
  }

  return (
    <main>
      <SEO
        title="Michel Verjux | Biblio"
        description="Page dedicated to bibliography"
      />
      <PageHero title="Bibliographie" />
      <Wrapper className="page">
        <div className="section-center">
          <Biblio
            biblios={biblios}
            // deleteBiblio={deleteBiblio}
          />
        </div>
      </Wrapper>
    </main>
  );
};

export default BiblioScreen;

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-white);
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoaderWrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-white);
  display: grid;
  place-items: center;
  padding: 1rem;
  .small_screen {
    width: 80vw;
    height: 80vh;
    margin: 1rem auto;
  }
  .big_screen {
    display: none;
  }
  @media (min-width: 768px) {
    .small_screen {
      display: none;
    }
    .big_screen {
      display: block;
      width: 60vw;
      height: 60vh;
      margin: 1rem auto;
    }
  }
`;
