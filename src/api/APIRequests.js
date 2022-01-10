import axios from "axios";
import URL_BASE from "../constants/URL_BASE";

export const getRestaurants = () => {
    const url = `${URL_BASE}/restaurants`
    const token = localStorage.getItem('token')

    const header = { headers: { auth: token } }

    axios.get(url, header)
        .then((resp) => {
            console.log(resp.data)
        })
        .catch((error) => {
            window.alert("erro")
        })
}