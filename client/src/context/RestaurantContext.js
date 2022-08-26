import React, { useState, createContext } from "react";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = props => {

    // These state varibles in this RestaurantContext are global state vars => access throughout the tree without passing props to children components
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    
    const addRestaurants = (restaurant => {
        setRestaurants([...restaurants, restaurant]);
    })

    return (
        <RestaurantContext.Provider value={{restaurants, setRestaurants, addRestaurants, selectedRestaurant, setSelectedRestaurant }}>
            {props.children}
        </RestaurantContext.Provider>
    )
}