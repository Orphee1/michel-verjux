import React from 'react'
import "../main.css"
import { FaTimesCircle } from "react-icons/fa"


const SideSearchMenus = ({setBackSort, setPeriod, sideSearch, toggleSideSearch}) => {
        return (
                <aside className={`${sideSearch ? `sidesearch show-sidesearch` 
                : `sidesearch ` }   `} >
                          
                                    <div className="close-btn-container " >
                              {sideSearch && (
                        <button className="close-search-btn "
                        onClick={toggleSideSearch}
                        >
                               <FaTimesCircle /> 
                        </button>)}
                                    </div>
                                    <button className="sidesearch-btn"
                                    onClick={()=> {
                                            setBackSort(false)
                                            toggleSideSearch()
                                    }}
                                    >
                                            Fin
                                    </button>
                                       <button className="sidesearch-btn" 
                                            onClick={()=> {
                                            setBackSort(true)
                                            toggleSideSearch()

                                    }}
                                       >
                                            Début
                                    </button>   <button className="sidesearch-btn"
                                     onClick={() => {
            setPeriod("1");
                                            toggleSideSearch()

          }}
                                    >
                                            Jeunesse
                                    </button>   <button className="sidesearch-btn"
                                        onClick={() => {
            setPeriod("2");
                                            toggleSideSearch()

          }}
                                    >
                                            Maturité
                                    </button>   <button className="sidesearch-btn" 
                                       onClick={() => {
            setPeriod("3");
                                            toggleSideSearch()

          }}
                                    >
                                            Sagesse
                                    </button>
                                    <button className="sidesearch-btn" 
                                         onClick={() => {
            setPeriod("0");
                                            toggleSideSearch()

          }}
                                    >
                                            Toutes les oeuvres
                                    </button>
                        
                        
                </aside>
        )
}

export default SideSearchMenus


