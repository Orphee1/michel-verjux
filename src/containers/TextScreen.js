import React, { useState, useEffect} from "react";
import Axios from "axios";
import "../main.css";
import styled from "styled-components"
import {Articles, MainTextLoader, SEO} from "../components";


const TextScreen = () => {

  const [texts, setTexts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [period, setPeriod] = useState(0);
  const [backSort, setBackSort] = useState(false);
  !isLoading && console.log(texts);
 

  const fetchTexts = async () => {
    try {
      const response = await Axios.get(
        process.env.REACT_APP_WEBADDRESS +
          "/texts?-backSort=" +
          backSort +
          "&period=" +
          period
      );
      if (response.data) {
        //       console.log(response.data);
        setTexts(response.data);
        setIsLoading(false);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchTexts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backSort, period]);

  return (
    <Wrapper>
{isLoading ? (
<p>loading ...</p>
) : (
<Articles 
setBackSort={setBackSort}
setPeriod={setPeriod}
/>
)}
    </Wrapper>
  );
}

export default TextScreen

const Wrapper = styled.main`
min-height: 100vh; 
/* background: var(--clr-primary-1);  */

`