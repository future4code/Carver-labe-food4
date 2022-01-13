import React, { useEffect, useContext, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import GlobalStateConstext from "../../global/GlobalStateContext"
import { StyledHome } from "./StyledHome"
import { goToDetail } from "../../routes/Coordinator"
import Filter from "../../components/Filter"


const HomePage = () => {
    const { states, setters } = useContext(GlobalStateConstext)
    const [restaurants, set_restaurants] = useState([])
    const [name, setName] = useState('')

    const history = useHistory()
    const params = useParams()


    const handleName = (event) => {
        setName(event.target.value)
    }
    
    const rest = states.restaurants.restaurants
    console.log('aqui é o rest:', rest)

    const list = rest && rest.filter((x) => {
        return x.name.toLowerCase().includes(name.toLowerCase())
        

    })



    const filteredList = list && list.map((local) => {
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
    })

    return (
        <StyledHome>
            HomePage
            <Filter name={name} handleName={handleName} />
            {filteredList}
        </StyledHome>
    )
}
export default HomePage