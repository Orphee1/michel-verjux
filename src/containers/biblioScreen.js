import React, {useState, useEffect,} from 'react'
import Axios from "axios";

import "../main.css"
import styled from "styled-components"

import {Biblio, BiblioLoader} from "../components";




const BiblioScreen = () => {

        const [isLoading, setIsLoading] = useState(true);
const [biblios, setBiblios] = useState();
!isLoading && console.log(biblios);

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
  }, [])
        return (
                <Wrapper>
                        {isLoading ? (
<BiblioLoader />
                        ) : (
                                <Biblio biblios={biblios}/>
                        )}
                </Wrapper>
        )
}

export default BiblioScreen

const Wrapper = styled.main`
min-height: 100vh; 
/* background: var(--clr-primary-1);  */

`
