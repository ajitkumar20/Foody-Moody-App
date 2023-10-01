import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

// SPA - Single Page Application
// Routing - 1.Client Side Routing (Using this), 2.Server Side Routing

const Title = () => (
    <a href="/">
        <img className="logo" alt="Foody-Moody-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREb9ExSSBTUgiAGr_x2wsay3rapsB0YEzGWw&usqp=CAU" />
    </a>
);

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
            {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
        </div>
    );
};

export default Header;