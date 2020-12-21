import React, {useState} from 'react'
import Cookie from "js-cookie"
import "../main.css"
import styled from "styled-components"
import {ModalArticles, SearchMenu, SideSearchMenu} from "./index"




const Articles = ({setBackSort, setPeriod}) => {
        const token = Cookie.get("token");
      const [modal, setModal] = useState(false); 
        const [sideSearch, setSideSearch] = useState(false)
        const toggleSideSearch = () => {
                setSideSearch(!sideSearch)
        }
        const toggleModal = () => {
                setModal(!modal)
        }


        return (
                <Wrapper>
                               <div className="first-container section-center s-b">
        <button className="btn search-btn" 
        onClick={toggleSideSearch} 
        >
                rechercher
        </button>
                           <div className="title">
 <h3>
          <span>/</span>
          Choix de textes
        </h3>
        </div>
        </div>
             <SideSearchMenu  
        setBackSort={setBackSort}
        setPeriod={setPeriod}
        sideSearch={sideSearch}
        toggleSideSearch={toggleSideSearch}
        />
                              <div className="search-menu">
<SearchMenu 
setPeriod={setPeriod}
setBackSort={setBackSort}
/>
        </div>  
        <div className="layout">

        </div>
        {token && (
        <button className="btn post-btn"  onClick={toggleModal}>Poster un article</button>
        )}
        {modal && (
<ModalArticles 
toggleModal={toggleModal}
/>
        )}
                </Wrapper>
        )
}

export default Articles

const Wrapper = styled.section`
background: var(--clr-white); 
padding : 5rem 0; 
display: flex; 
flex-direction: column; 
align-items: center; 
.first-container {
        align-items: baseline; 
} 

.title {
         text-align: center;
         color: var(--clr-primary-1); 
  
}
.search-menu {
        display: none; 
}
.post-btn {
        display: none; 
}
@media (min-width: 768px) { }

@media (min-width: 992px) {}

 @media (min-width: 1200px) {
.search-btn {
        display: none; 
}
.search-menu {
        display: inline-block; 
        /* grid-column: 1/2; 
                      grid-row: 2/3;
                      align-self: flex-start;  */
                      
}
.post-btn {
        display: inline-block; 
}

 }


`

