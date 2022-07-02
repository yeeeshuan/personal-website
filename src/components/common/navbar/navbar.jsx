import React from "react";
import './navbar.css'

function Navbar(props){
    return( 
        <nav className = "nav">
            <ul className = "nav__menu">
                <li> <a href = "#home"> Ethan Huang </a> </li>
                <li> <a href = "#work"> Work </a></li>
                <li> <a href = "play"> Play </a></li>
                <li> <a href = "about"> About </a></li>  
            </ul>
        </nav>
    )
}

export default Navbar; 