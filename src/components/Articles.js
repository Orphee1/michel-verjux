import React from 'react'
import {Link} from "react-router-dom";
import ReactMarkdown from "react-markdown" 
import "../main.css"
import styled from "styled-components"



const Articles = ({articles}) => {
// console.log(articles);
 
        return (
                <Wrapper>
 
        <div className="layout">
{articles.map((item) => {
        const {_id, article} = item; 
return <Link key={_id}  to={`/selected-text/${_id}`}>
        <article>
<ReactMarkdown>
        {article.substring(0, 600)} 
</ReactMarkdown> <span>...</span>
</article>
</Link>
})}
        </div>
 
                </Wrapper>
        )
}

export default Articles

const Wrapper = styled.section`
background: var(--clr-white); 
display: grid; 
place-items: center; 
/* width: 90%;  */
.layout {
display: grid;
    max-width: var(--max-width);
    margin: 0 auto;
    gap: 1rem;
    /* safari workaround */
    grid-gap: 1rem;
    grid-template-rows: auto auto;
    article {
            color: var(--clr-primary-1); 
            margin-top: 2rem; 
            p{color : var(--clr-primary-1); 
        }
    }
    
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

