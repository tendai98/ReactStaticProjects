import React from "react";

function Navbar(props){
    return (
        <nav className="nav-main">
            <img alt="logo" src={props.img} className="nav-icon"/>
            <h1 className="nav-header">My Travel Journal</h1>
        </nav>
    )
}

export default Navbar;