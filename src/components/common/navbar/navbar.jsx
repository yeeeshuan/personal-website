import React from "react";
import './navbar.css'

function Navbar(props){
    return( 
        <nav className = "nav">
            <a href="" className="brand"> Ethan Huang</a>
            <ul className = "nav__menu">
                <li className="nav__item"> Work</li>
                <li className="nav__item"> Play</li>
                <li className="nav__item"> About</li>  
            </ul>
            <div className="nav__toggler">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default Navbar; 