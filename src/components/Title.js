import React from 'react'
import "../main.css"
import styled from "styled-components"

const Title = ({title}) => {
        return (
                <div>
                        <h2>
                                <span>/</span>
                                {title}
                        </h2>
                </div>
        )
}

export default Title

const Wrapper = styled.div`
text-align: center; 
margin-bottom: 12rem; 
 h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    span {
      font-size: 0.85em;
      color: var(--clr-primary-1);
      margin-right: 1rem;
      font-weight: 700;
    }
  }
`