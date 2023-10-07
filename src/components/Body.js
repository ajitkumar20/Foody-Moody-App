import React from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnilne";
import userContext from "../utils/userContext";

//Props - Properties
const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState("");//const searchText = "KFC";
    const {user, setUser} = useContext(userContext);

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

    const isOnile = useOnline();
    if(!isOnile){
        return <h1>Looks like you are offline🔴! Please check your internet connection!!!</h1>
    }

    // not render components (Early return)
    if (!allRestaurants) return null;

    //Conditional Rendering
    //If restaurants is empty => show shimmer UI
    //If restaurants has data => show actual data UI
    return (allRestaurants?.length === 0) ? <Shimmer /> : (
        <>
            <div className="search-container p-2 bg-pink-100 my-5">

                <input type="text" className="p-2 m-2 rounded-md focus:bg-gray-100" placeholder="search" value={searchInput} onChange={(e) => {
                    setSearchInput(e.target.value)
                }}></input>

                <button className="p-2 m-2 bg-purple-600 hover:bg-purple-900 text-white rounded-md" onClick={() => {
                    //need to filter teh data
                    const data = filterData(searchInput, allRestaurants);
                    //update the state - restaurants
                    setFilteredRestaurants(data);
                }}>search</button>

                <input value={user.name} onChange={e => setUser({
                    name: e.target.value,
                    email: "new@gmail.com",
                })}></input>

            </div>
            <div className="restaurant-list flex flex-wrap justify-between rounded-md">
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