import React from 'react'
import "../main.css"
import styled from "styled-components"


const SearchMenu = ({setBackSort, setPeriod}) => {
        return (
             <Wrapper>
        <div
          className="icon"
          onClick={() => {
            setBackSort(false);
          }}
        >
          Fin
        </div>
        <div
          className="icon"
          onClick={() => {
            setBackSort(true);
          }}
        >
          Début
        </div>
        <div
          className="icon"
          onClick={() => {
            setPeriod("1");
          }}
        >
          Jeunesse
        </div>
        <div
          className="icon"
          onClick={() => {
            setPeriod("2");
          }}
        >
          Maturité
        </div>
        <div
          className="icon"
          onClick={() => {
            setPeriod("3");
          }}
        >
          Sagesse
        </div>
        <div
          className="icon"
        
          onClick={() => {
            setPeriod("0");
          }}
        >
          Toutes les oeuvres
        </div>
        <div
          className="label"
        
        >
          Rechercher
        </div>
      </Wrapper>
        )
}

export default SearchMenu

const Wrapper = styled.button`
 position: relative;
    height: auto; // ??
    background: transparent; 
   border: 2px solid transparent;
   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
  text-transform: uppercase;
    padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  font-weight: 400;
  outline: none;
  /* transition: var(--transition); */
  font-size: 0.875rem;
    cursor: default;
        &:hover .label {
      opacity: 0;
      transition: opacity 0.5s 0.125s ease-out;
    }
    &:hover .icon {
      margin: 1rem auto;
    }
    .label {
      color: var(--clr-white);
      background-color: var(--clr-primary-1);
      color: white;
      position: absolute;
     height: 100%; // ??
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Roboto", sans-serif;
      border-radius: var(--radius);
      font-size: 0.875rem;
      font-weight: medium;
      top: 0;
      left: 0;
      right: 0;
      opacity: 1;
      pointer-events: none;
      transition: opacity 0.5s 0.75s ease-out;
    }
    .icon {
      border-radius: var(--radius);
    display: flex; 
    justify-content: center; 
    align-items: center; 
      cursor: pointer;
      background-color: var(--clr-primary-1);
      color: var(--clr-white);
      font-family: "Roboto", sans-serif;
      font-size: 0.875rem;
      height: 2rem;
      width: 100%;
      transition: background-color 0.5s ease-out,
        border-radius 0.5s 0.25s ease-out, margin 0.5s 0.25s ease-out;
      &:hover {
       background: var(--clr-primary-7);
  color: var(--clr-white);
      }
    }
 
`