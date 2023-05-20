import React from 'react';
import {Link} from "react-router-dom"
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
               <Link className="header__nav-title" to="/"><h1>MEAL DB</h1></Link>
            </nav>
        </header>
    );
};

export default Header;