import React, { useEffect, useContext, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import GlobalStateConstext from "../../global/GlobalStateContext"

import { StyledHome } from "./StyledHome"
import { goToDetail } from "../../routes/Coordinator"


const HomePage = () => {
    const { states, setters } = useContext(GlobalStateConstext)
    const [restaurants, set_restaurants] = useState([])

    const history = useHistory()
    const params = useParams()


    useEffect(() => {
        set_restaurants(states.restaurants.restaurants)
    },[])

    return (
        <StyledHome>
            HomePage
            {/* <button onClick={() => console.log(states.restaurants.restaurants)}>INFO</button> */}
            {states.restaurants.restaurants && states.restaurants.restaurants.map((local) => {
                return(
                    <div key={local.id} className="card" onClick={() => {goToDetail(history, local.id)}}>
                        <img src={local.logoUrl} />
                    
                        <div className="card-content">
                            <p className="card-upper">{local.name}</p>
                            <div className="card-bottom">
                                <p>{local.deliveryTime}min</p> 
                                <p>Frete: R$ {local.shipping.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </StyledHome>
    )
}
export default HomePage