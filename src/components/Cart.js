import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    return (
        <div>
            <h1 className="font-bold text-2xl">Cart Items - {cartItems.length}</h1>
            <button className="bg-green-200 p-1 m-1" onClick={() => handleClearCart()}>Clear Cart</button>
            <div className="flex">
            {cartItems.map((item) => <FoodItem key = {item.id} {...item}/>)}
            </div>
        </div>
    );
};

export default Cart;