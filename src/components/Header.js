import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnilne";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

// SPA - Single Page Application
// Routing - 1.Client Side Routing (Using this), 2.Server Side Routing

const Title = () => (
    <a href="/">
        <img data-testid="logo" className="h-20 rounded-full p-1" alt="Foody-Moody-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREb9ExSSBTUgiAGr_x2wsay3rapsB0YEzGWw&usqp=CAU" />
    </a>
);

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();

    const { user } = useContext(userContext);

    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <Title />
            <div className="nav-items">
                <ul className="flex py-6" >
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About</Link></li>
                    <li className="px-2"><Link to="/contact">Contact</Link></li>
                    <li className="px-2"><Link to="/instamart">Instamart</Link></li>
                    <Link to="/cart"><li data-testid="cart" className="px-2">Cart - {cartItems.length} Items</li></Link>
                </ul>
            </div>
            <h1 data-testid="online-status">{isOnline ? "✅" : "🔴"}</h1>
            <span className="p-10 font-bold">{user.name}</span>
            {isLoggedIn ? <button className="h-[50px] w-[65px] p-2 m-2 bg-purple-600 hover:bg-purple-900 text-white rounded-md" onClick={() => setIsLoggedIn(false)}>Logout</button> : <button className="h-[50px] w-[65px] p-2 m-2 bg-purple-600 hover:bg-purple-900 text-white rounded-md" onClick={() => setIsLoggedIn(true)}>Login</button>}
        </div>
    );
};

export default Header;