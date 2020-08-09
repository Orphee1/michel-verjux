import React from "react"
import { Link } from "react-router-dom";

import "../../App.css";
import "./style.css";

export default function Header() {
    return (
        <div
        className="header"
        >
<div
className="nav"
>
    <ul>
        <li>
            <Link
            to="/"
            >

           
<span
className="logo"
>Michel Verjux</span>
</Link>
        </li>
    </ul>
<ul
className="d-flex mini-nav"
>
    <li>
        <Link
        to="/image"
        >
        <span>
            Images
        </span>
        </Link>
    </li>
    <li>
        <Link
        to="/text"
        >
        <span>Textes</span>
        </Link>
    </li>
    <li>
        <Link
        to="/bio"
        >
        <span>Bio</span>
        </Link>
   
    </li>
</ul>
</div>
        </div>
    )
}