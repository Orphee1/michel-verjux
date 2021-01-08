import React from "react";
import "../main.css";
import { FaChevronLeft } from "react-icons/fa";
import { useToggleContext } from "../context/toggle_context";

const SideSearchMenus = ({ setBackSort, setPeriod }) => {
  const { sideSearch, toggleSideSearch } = useToggleContext();
  return (
    <aside
      className={`${
        sideSearch ? `sidesearch show-sidesearch` : `sidesearch `
      }   `}
    >
      <div className="close-btn-container ">
        {sideSearch && (
          <button className="close-search-btn " onClick={toggleSideSearch}>
            <FaChevronLeft />
          </button>
        )}
      </div>
      <button
        className="sidesearch-btn"
        onClick={() => {
          setBackSort(false);
          toggleSideSearch();
        }}
      >
        Fin
      </button>
      <button
        className="sidesearch-btn"
        onClick={() => {
          setBackSort(true);
          toggleSideSearch();
        }}
      >
        Début
      </button>{" "}
      <button
        className="sidesearch-btn"
        onClick={() => {
          setPeriod("1");
          toggleSideSearch();
        }}
      >
        Jeunesse
      </button>{" "}
      <button
        className="sidesearch-btn"
        onClick={() => {
          setPeriod("2");
          toggleSideSearch();
        }}
      >
        Maturité
      </button>{" "}
      <button
        className="sidesearch-btn"
        onClick={() => {
          setPeriod("3");
          toggleSideSearch();
        }}
      >
        Sagesse
      </button>
      <button
        className="sidesearch-btn"
        onClick={() => {
          setPeriod("0");
          toggleSideSearch();
        }}
      >
        Toutes les oeuvres
      </button>
    </aside>
  );
};

export default SideSearchMenus;
