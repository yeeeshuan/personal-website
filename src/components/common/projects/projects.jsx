import React from "react";
import P1 from './P1.jpeg'; 
import P2 from './P2.jpg'; 
import './projects.css'

function Projects(){
    return(
        <div className = "All">
        <div className = "project">
            <div className="item-container">
                <img className = "P1" src = {P1}  alt = "Lighting Engines"/> 
                <h2> Lighting Engines </h2>
                <p className = "des"> Product Design </p>
            </div>
            <div className="item-container">
                <a href = "https://medium.com/@yixuanhu/animals-part-3-5d3e83581c80">
                    <img className = "P1" src = {P2}  alt = "Fruit Ninja"/> 
                <h2> Fruit Ninja </h2>
                <p className = "des"> Game Design, Python Programming</p>
                </a>
            </div>
        </div>
        <div className = "project">
            <div className="item-container">
                <img className = "P1" src = {P1}  alt = "Animal Project"/> 
                <h2> Animal Project </h2>
                <p className = "des"> Product Design </p>
            </div>
            <div className="item-container">
                <img className = "P1" src = {P1}  alt = "Lighting Engines"/> 
                <h2> Lighting Engines </h2>
                <p className = "des"> Product Design</p>
            </div>
        </div>
        </div>

        
    )
}

export default Projects; 