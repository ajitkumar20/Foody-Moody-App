import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
    // How to read a dynamic URL params
    const { resId } = useParams();
    // const {id} = params; //destructuring

    const restaurant = useRestaurant(resId);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    };

    return (!restaurant) ? <Shimmer /> : (
        <div className="menu flex">
            <div className="m-2 p-2">
                <h2 className="text-3xl font-bold font-serif text-gray-900">{restaurant.data?.cards[0]?.card?.card?.info?.name}</h2>
                <h1 className="text-xl font-medium">Restaurant id: {resId}</h1>
                <img className="w-96" src={IMG_CDN_URL + restaurant.data?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
                <h3>{restaurant.data?.cards[0]?.card?.card?.info?.areaName}</h3>
                <h3>{restaurant.data?.cards[0]?.card?.card?.info?.city}</h3>
                <h3>{restaurant.data?.cards[0]?.card?.card?.info?.avgRating} {"⭐"}</h3>
                <h3>{restaurant.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
            </div>
            <div className="m-2 p-2">
                <h1 className="text-xl font-bold">Menu</h1>
                <ul className="list-disc list-inside">

                    <li>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[0]?.card?.info?.name}<button className="p-1 m-1 bg-green-200" onClick={() => addFoodItem(restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[0]?.card?.info)}>Add</button></li>

                    <li>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[1]?.card?.info?.name}<button className="p-1 m-1 bg-green-200" onClick={() => addFoodItem(restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[1]?.card?.info)}>Add</button></li>

                    <li>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[2]?.card?.info?.name}<button className="p-1 m-1 bg-green-200" onClick={() => addFoodItem(restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[2]?.card?.info)}>Add</button></li>

                    <li>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[3]?.card?.info?.name}<button className="p-1 m-1 bg-green-200" onClick={() => addFoodItem(restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[3]?.card?.info)}>Add</button></li>

                    <li>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[4]?.card?.info?.name}<button className="p-1 m-1 bg-green-200" onClick={() => addFoodItem(restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[4]?.card?.info)}>Add</button></li>

                    <li>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[5]?.card?.info?.name}<button className="p-1 m-1 bg-green-200" onClick={() => addFoodItem(restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[5]?.card?.info)}>Add</button></li>

                    <li>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[6]?.card?.info?.name}<button className="p-1 m-1 bg-green-200" onClick={() => addFoodItem(restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[6]?.card?.info)}>Add</button></li>

                    <li>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[7]?.card?.info?.name}<button className="p-1 m-1 bg-green-200" onClick={() => addFoodItem(restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[7]?.card?.info)}>Add</button></li>

                    <li>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[8]?.card?.info?.name}<button className="p-1 m-1 bg-green-200" onClick={() => addFoodItem(restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[8]?.card?.info)}>Add</button></li>

                    <li>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[9]?.card?.info?.name}<button className="p-1 m-1 bg-green-200" onClick={() => addFoodItem(restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[9]?.card?.info)}>Add</button></li>

                    <li>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[10]?.card?.info?.name}<button className="p-1 m-1 bg-green-200" onClick={() => addFoodItem(restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[10]?.card?.info)}>Add</button></li>

                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;