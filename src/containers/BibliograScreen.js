import React, { useState, useEffect } from "react";
import Axios from "axios";
import Cookie from "js-cookie";

import "../main.css";
import styled from "styled-components";
import { useGlobalContext } from "../context/GlobalContext";
import { Biblio, BiblioLoader, ModalBiblio } from "../components";

const BiblioScreen = () => {
  const token = Cookie.get("token");
  const { modalBiblio, toggleModalBiblio } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(true);
  const [biblios, setBiblios] = useState([]);
  //   !isLoading && console.log(biblios);

  const fetchBiblios = async () => {
    try {
      const response = await Axios.get(
        process.env.REACT_APP_WEBADDRESS + "/biblio"
      );
      //       console.log(response.data);
      setBiblios(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchBiblios();
  }, []);

  const deleteBiblio = async (id) => {
    try {
      const formData = new FormData();
      formData.append("id", id);
      const response = await Axios.post(
        process.env.REACT_APP_WEBADDRESS + "/biblio/delete",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data) {
        console.log(response.data);
        const newBiblios = biblios.filter((item) => item.id !== id);
        setBiblios(newBiblios);
      }
    } catch (error) {
      console.log(error);
      alert("Erreur: cette référence n'a pas été supprimée");
    }
  };

  return (
    <Wrapper>
      <div className="section-center">
        <div className="title">
          <h2>
            <span>/</span>
            Bibliographie
          </h2>
        </div>
        {isLoading ? (
          <BiblioLoader />
        ) : (
          <Biblio biblios={biblios} deleteBiblio={deleteBiblio} />
        )}
        {token && (
          <button className="btn post-btn" onClick={toggleModalBiblio}>
            Poster une référence
          </button>
        )}
        {modalBiblio && <ModalBiblio toggleModalBiblio={toggleModalBiblio} />}
      </div>
    </Wrapper>
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
