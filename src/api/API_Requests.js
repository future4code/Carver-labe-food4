import axios from "axios";
import URL_BASE from "../constants/URL_BASE";

export const getRestaurants = (set_data) => {
    const url = `${URL_BASE}/restaurants`
    const token = localStorage.getItem('token')
    const header = { headers: { auth: token } }

    axios.get(url, header)
        .then((resp) => {
            // console.log("getRestaurants", resp.data)
            set_data(resp.data)
        })
        .catch((error) => {
            window.alert("getRestaurants erro")
        })
}

export const getRestaurantDetails = (id, set_data) => {
    // console.log("params", id)
    const url = `${URL_BASE}/restaurants/${id}`
    const token = localStorage.getItem('token')
    const header = { headers: { auth: token } }
    const array = []


    axios.get(url, header)
        .then((resp) => {
            console.log("getRestaurantDetails ok", resp.data)
            array.push(resp.data.restaurant)
            set_data(array)
            console.log("array:", array)
        })
        .catch((error) =>{
            // window.alert("getRestaurantDetails erro")
            console.log("getRestaurantDetails erro", error.response)
        })
}

export const getProfile = (set_data) => {
    const url = `${URL_BASE}/profile`
    const token = localStorage.getItem('token')
    const header = { headers: { auth: token } }
    const array = []

    axios.get(url, header)
        .then((resp) => {
            console.log("getRestaurantDetails", resp.data)
            array.push(resp.data)
            set_data(array)
        })
        .catch((error) => {
            window.alert("getRestaurantDetails erro")
        })
}



export const getFullAdress = () => {
    const url = `${URL_BASE}/profile/address`
    const token = localStorage.getItem('token')
    const header = { headers: { auth: token } }

    axios.get(url, header)
        .then((resp) => {
            console.log("getFullAdress", resp.data)
        })
        .catch((error) => {
            window.alert("getFullAdress erro")
        })
}

export const getActiveOrder = () => {
    const url = `${URL_BASE}/active-order`
    const token = localStorage.getItem('token')
    const header = { headers: { auth: token } }

    axios.get(url, header)
        .then((resp) => {
            console.log("getActiveOrder", resp.data)
        })
        .catch((error) => {
            window.alert("getActiveOrder erro")
        })
}

export const getOrdersHistory = () => {
    const url = `${URL_BASE}/orders/history`
    const token = localStorage.getItem('token')
    const header = { headers: { auth: token } }

    axios.get(url, header)
        .then((resp) => {
            console.log("getOrdersHistory", resp.data)
        })
        .catch((error) => {
            window.alert("getOrdersHistory erro")
        })
}