import React from "react";
import './navbar.css'; 
import {Link} from "react-router-dom"; 

function Navbar(props){
    return( 
        <nav className = "nav">
            <ul className = "nav__menu">
                <div>              
                <li> <a href = "#home"> Ethan Huang </a> </li>
                </div>
                <li> <a href = "#work"> Work </a></li>
                <li> <a href = "play"> Play </a></li>
                <li> <a href = "about"> About </a></li>  
            </ul>
        </nav>
    )
}

export default Navbar; 