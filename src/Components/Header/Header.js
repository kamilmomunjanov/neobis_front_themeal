import React from 'react';
import {Link} from "react-router-dom"
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <Link className="header__nav-title" to="/"><h1>MEAL DB</h1></Link>
                    <Link className="header__nav-title" to="/categories"><h1>CATEGORIES</h1></Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;