import React from "react"
import { useEffect } from "react"
import {getRestaurants} from "../../api/API_Requests"

const HomePage = () => {

useEffect (() => {
    getRestaurants()
},[])
    return (
        <div>
            HomePage
        </div>
    )
}
export default HomePage