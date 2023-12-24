import React from "react";

const Nav = ()=>{
    return(
        <nav>
            <div className="home">
            <img src="./src/assets/TMU.png" alt="Tmu Logo" className="logo"/>
            <a href="/" className="title">Explore </a>
                
               
            </div>
            <div className="links">
            <ul>
                <li>
                    <a href="/explore">Explore</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            
               
             </ul>
            </div>
             
        </nav>
    )
}

export default Nav;