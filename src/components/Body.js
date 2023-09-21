import React from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchInput, restaurants) {
    return restaurants.filter((restaurant) => restaurant.info.name.includes(searchInput));
}

//Props - Properties
const Body = () => {

    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchInput, setSearchInput] = useState("");//const searchText = "KFC";

    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="search" value={searchInput} onChange={(e) => {
                    setSearchInput(e.target.value)
                }}>
                </input>
                <button className="search-btn" onClick={() => {
                    //need to filter teh data
                    const data = filterData(searchInput, restaurants);
                    //update the state - restaurants
                    setRestaurants(data);
                }}>search</button>
                
            </div>
            <div className="restaurant-list">
                {
                    restaurants.map((restaurant) => {
                        return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
                    })
                }
            </div>
        </>
    );
};

export default Body;