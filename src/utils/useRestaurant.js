import { useState, useEffect } from "react";
import { FETCH_RES_MENU_URL } from "../constants";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);

    //Get the Data fom API
    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        const data = await fetch(FETCH_RES_MENU_URL+resId);
        const json = await data.json();
        console.log(json);
        setRestaurant(json);
    }

    //Return restaurant data
    return restaurant;
}
export default useRestaurant;