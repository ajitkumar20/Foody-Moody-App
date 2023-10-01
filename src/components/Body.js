import React from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchInput, restaurants) {
    return restaurants.filter((restaurant) => restaurant?.info?.name?.toLowerCase()?.includes(searchInput?.toLowerCase()));
}

//Props - Properties
const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState("");//const searchText = "KFC";

    useEffect(() => {
        //API call
        getRestaurant();
    }, [])

    async function getRestaurant() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6368743&lng=85.0547624&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // not render components (Early return)
    if (!allRestaurants) return null;

    //Conditional Rendering
    //If restaurants is empty => show shimmer UI
    //If restaurants has data => show actual data UI
    return (allRestaurants?.length === 0) ? <Shimmer /> : (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="search" value={searchInput} onChange={(e) => {
                    setSearchInput(e.target.value)
                }}>
                </input>
                <button className="search-btn" onClick={() => {
                    //need to filter teh data
                    const data = filterData(searchInput, allRestaurants);
                    //update the state - restaurants
                    setFilteredRestaurants(data);
                }}>search</button>

            </div>
            <div className="restaurant-list">
                {
                    filteredRestaurants.map((restaurant) => {
                        return <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}><RestaurantCard {...restaurant.info} /></Link>
                    })
                }
            </div>
        </>
    );
};

export default Body;