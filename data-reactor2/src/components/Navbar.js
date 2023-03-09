import React from 'react';
import navbar from '../styles/navbar.css'
import logo from '../img/data-reactor.png'
import menu from '../img/menu.png'

function Navbar(){
    return (
        <nav className="nav-main">
            <img className="navbar-icon" alt="icon" src={logo}/>
            <div className='navbar-name'>
                <h2 className="name-1">Data</h2>
                <h2 className="name-2">Reactor</h2>
            </div>

            <div className='navbar-options'>
                <h2>home</h2>
                <h2>support</h2>
                <h2>my account</h2>
            </div>
    
            <img className="navbar-menu" alt="menu" src={menu}/>
    
        </nav>
    )
}

export default Navbar;