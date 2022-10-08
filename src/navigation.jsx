import React, {useState, useContext} from "react";
import "./styling/navigation.css";


function Navigation(){
    return(
        <div>
            <nav>
        <div class="Navigation">
            <ul class="nav-menu">
                <div class="Menu-links">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Contact">Contact</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><button>My Work</button></li>
                </div>
            </ul>
        </div>
    </nav>
        </div>
    )
}

export default Navigation;