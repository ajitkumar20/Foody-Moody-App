import React, { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import userContext from "../utils/userContext";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  const {user} = useContext(userContext)
  return (
    <div className="card w-56 m-2 p-1 shadow-lg bg-pink-100">
      <img className="rounded-md" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} {"⭐"}</h4>
      <h4 className="">{user.name}</h4>
    </div>
  );
};

export default RestaurantCard;