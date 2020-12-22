import React, {useState} from 'react'
import Cookie from "js-cookie"
import {Link} from "react-router-dom"
import "../main.css"
import styled from "styled-components"
import {ModalImages, SearchMenu, SideSearchMenu} from "../components"

const Images = ({pictures, setBackSort, setPeriod}) => {
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
        <button className="btn search-btn" onClick={toggleSideSearch} >
                rechercher
        </button>
                           <div className="title">
 <h3>
          <span>/</span>
          Choix d'images
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
{pictures.map((item) => {
const {_id, picture, title, town, year } = item; 
return (
        <article key={_id}  >
<Link key={_id} to={`/selected-image/${_id}`} 
style={{overflow: "hidden"}}

>  
                <img src={picture} alt={title} className="img" />
                <div className="info">
          <p>{title}, {town}, {year}.</p>
</div>
 </Link>
        </article>
            
) 
})}
        </div>
        {token && (
        <button className="btn post-btn"
        onClick={toggleModal}
        >Poster une image</button>
        )}
        {modal && (
                <ModalImages 
                toggleModal={toggleModal}
                />
        )}
                </Wrapper>
        )
}

export default Images

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
.layout {
              margin-top: 2rem;
    display: grid;
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    gap: 1rem;
    /* safari workaround */
    grid-gap: 1rem;
    grid-template-rows: 300px 300px;
    grid-auto-rows: 300px;
}
 .img {
    height: 100%;
    width: 100%; 
    display: block;
  object-fit: cover;
     transition: var(--transition);
  }
article {
        position: relative; 
        overflow: hidden; 
            background: var(--clr-black);
              &:hover .img {
      opacity: 0.2;
    }
    .info {
         position: absolute;
      left: 45%;
      transform: translate(-50%, -50%);
      width: 100%;
      opacity: 0;
      transition: var(--l-transition);
      color: var(--clr-white);
      text-align: center;
         p {
        margin-bottom: 1.5rem;
        color: var(--clr-white);
        font-size: 0.8rem; 
       
      }
}
 &:hover .info {
      opacity: 1;
    }
}

.search-menu {
        display: none; 
}
.post-btn {
        display: none; 
}

@media (min-width: 768px) {
            .layout {
      grid-template-columns: 1fr 1fr;
    }
    .first-container {
            margin: 1rem auto; 
    }
 }
@media (min-width: 992px) {
                   .layout {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 250px 250px;
      grid-auto-rows: 250px;
    }
        .first-container {
            margin: 2rem auto; 
    }
}
 @media (min-width: 1200px) {
         display: grid; 
          grid-template-columns: 20vw 80vw ;
          grid-template-rows: auto auto auto; 
           grid-gap: 1rem;
              .first-container {
                      grid-column: 2/3; 
                      grid-row: 1/2;
           
    }
    .search-menu {
        display: inline-block; 
        grid-column: 1/2; 
                      grid-row: 2/3;
                      align-self: flex-start;
                      justify-self: flex-end;  
}
    .post-btn {
        display: block; 
        grid-column: 2/3; 
                      grid-row: 3/4;
                      place-self: center; 
}
          .search-btn {
                  display: none; 
          }
                    .layout {
      grid-column: 2/3;
      grid-row: 2/3;
        grid-template-columns: 1fr 1fr;
      grid-template-rows: 400px 400px;
      grid-auto-rows: 400px;
    }
 }
`
