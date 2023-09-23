import React from "react";
import { useState } from "react";

const loggedInUser = () => {
    //API call to check authentication of User
    return false;
}

// Functional Component
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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
        </div>
    );
};

export default Header;