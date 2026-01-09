import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

// Importing the JSON file containing restaurant data
import restaurantsData from "../restaurants.json";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Simulating an API call with static data
    setRestaurants(restaurantsData);
  }, []);

  return (
    <div className="restaurants">
      <div className="container">
        <p className="restaurants__count">{restaurants.length} Restaurants</p>
        <div className="restaurants__list">
          {/* Map through the restaurants array to render each restaurant */}
          {restaurants.map((restaurant, index) => (
            <RestaurantCard
              key={index}
              name={restaurant.name}
              imageUrl={restaurant.imageUrl}
              price={restaurant.price}
              tags={restaurant.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
