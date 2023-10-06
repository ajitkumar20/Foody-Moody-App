import React from "react";

const Shimmer = () => {
    return (
        <div className="restaurant-list flex flex-wrap">
            {Array(20).fill("").map( (e, index) => <div key = {index} className="shimmer-card h-60 w-56 m-5 bg-gray-200"></div>)}
        </div>
    );
};

export default Shimmer;