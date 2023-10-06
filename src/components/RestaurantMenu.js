import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
    // How to read a dynamic URL params
    const { resId } = useParams();
    // const {id} = params; //destructuring

    const restaurant = useRestaurant(resId);

    return (!restaurant) ? <Shimmer /> : (
        <div className="menu">
            <div>
                <h1>Restaurant id: {resId}</h1>
                <h2>{restaurant.data?.cards[0]?.card?.card?.info?.name}</h2>
                <img src={IMG_CDN_URL + restaurant.data?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
                <h3>{restaurant.data?.cards[0]?.card?.card?.info?.areaName}</h3>
                <h3>{restaurant.data?.cards[0]?.card?.card?.info?.city}</h3>
                <h3>{restaurant.data?.cards[0]?.card?.card?.info?.avgRating} {"⭐"}</h3>
                <h3>{restaurant.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    <li>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[0]?.card?.info?.name}</li>
                    <li>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[1]?.card?.info?.name}</li>
                    <li>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[2]?.card?.info?.name}</li>
                    <li>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[3]?.card?.info?.name}</li>
                    <li>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[4]?.card?.info?.name}</li>
                    <li>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[5]?.card?.info?.name}</li>
                    <li>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[6]?.card?.info?.name}</li>
                    <li>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[7]?.card?.info?.name}</li>
                    <li>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[8]?.card?.info?.name}</li>
                    <li>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[9]?.card?.info?.name}</li>
                    <li>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[10]?.card?.info?.name}</li>
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;