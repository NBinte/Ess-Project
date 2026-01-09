import React from "react";
import RestaurantCard from "./RestaurantCard";
const RestaurantList = () => <div className="restaurants">
    <div className="container">
      <p className="restaurants__count">6 Restaurants</p>
      <div className="restaurants__list">
        <RestaurantCard name="Burrito Kitchen" imageUrl="https://f.roocdn.com/images/menus/25785/header-image.jpg?width=360&height=200&auto=webp&format=jpg&fit=crop&v=1477308353" price={2} tags={["Mexican", "Burritos", "Halal"]} />
        <RestaurantCard name="Pure" imageUrl="https://f.roocdn.com/images/menus/52101/header-image.jpg?width=360&height=200&auto=webp&format=jpg&fit=crop&v=1515776356" price={2} tags={["Salads", "Gluten Free", "Smoothies"]} />
        <RestaurantCard name="Street Kitchen Shop" imageUrl="https://f.roocdn.com/images/menus/3512/header-image.jpg?width=360&height=200&auto=webp&format=jpg&fit=crop&v=1473408780" price={1} tags={["British", "Sandwiches", "Dessert", "Pastry"]} />
        <RestaurantCard name="Byron" imageUrl="https://f.roocdn.com/images/menus/20365/header-image.jpg?width=360&height=200&auto=webp&format=jpg&fit=crop&v=1498819504" price={2} tags={["American", "British", "Burgers"]} />
        <RestaurantCard name="The Indian Butler" imageUrl="https://f.roocdn.com/images/menus/48866/header-image.jpg?width=360&height=200&auto=webp&format=jpg&fit=crop&v=1510744707" price={1} tags={["Indian", "Tandoori ", "Salads"]} />
        <RestaurantCard name="Meal Express" imageUrl="https://f.roocdn.com/images/menu_tags/11/menu-tag-image.jpg?width=360&height=200&auto=webp&format=jpg&fit=crop&v=" price={1} tags={["American", "Chinese", "Japanese", "Burgers"]} />
      </div>
    </div>
  </div>;
export default RestaurantList;