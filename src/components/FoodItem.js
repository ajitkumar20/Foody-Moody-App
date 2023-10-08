import React from "react";
import { IMG_CDN_URL } from "../constants";


const FoodItem = ({ name, category, imageId, price }) => {
  return (
    <div className="card w-56 m-2 p-1 shadow-lg bg-pink-100">
      <img className="rounded-md" src={IMG_CDN_URL + imageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{category}</h3>
      <h4>Rupees: {price/100}</h4>
    </div>
  );
};

export default FoodItem; 