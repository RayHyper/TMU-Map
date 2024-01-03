import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ()=>{
    return(
        <nav>
            <div className="home">
        
  
            <NavLink  to="/" className="title">The Square</NavLink >
                
               
            </div>
            <div className="links">
            <ul>
                <li>
                    <NavLink  to="/explore">Explore</NavLink >
                </li>
                <li>
                    <NavLink to="/courses">Courses</NavLink>
                </li>
                <li>
                
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            
               
             </ul>
            </div>
             
        </nav>
    )
}

export default Nav;

//  <img src="./src/assets/TMU.png" alt="Tmu Logo" className="logo"/> 