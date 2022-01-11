import { useState, useEffect } from "react";
import GlobalStateConstext from "./GlobalStateContext";
import React from "react";
import { getRestaurants, getRestaurantDetails } from "../api/API_Requests";

export const GlobalState = (props) => {
    const [data, set_data] = useState([])

    const [fullAdress, set_fullAdress] = useState([])
    const [profile, set_profile] = useState([])
    const [restaurants, set_restaurants] = useState([])
    const [restaurantsDetails, set_restaurantsDetails] = useState([])

    const [activeOrders, set_activeOrders] = useState([])
    const [historyOrders, set_historyOrders] = useState([])

    useEffect (() => {
        getRestaurants(set_restaurants)
    },[])

    const states = { data, fullAdress, profile, restaurants, restaurantsDetails, activeOrders, historyOrders }
    const setters = { set_data, set_fullAdress, set_profile, set_restaurants, set_restaurantsDetails, set_activeOrders, set_historyOrders }

    return(
        <GlobalStateConstext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateConstext.Provider>
    )

}