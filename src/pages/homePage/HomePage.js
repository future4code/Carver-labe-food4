import React, { useEffect, useContext, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import GlobalStateConstext from "../../global/GlobalStateContext"
import { StyledHome } from "./StyledHome"
import { goToDetail } from "../../routes/Coordinator"
import Filter from "../../components/Filter"
import useProtectedPage from "../../hooks/useProtectedPage"


const HomePage = () => {
    useProtectedPage()
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
                <div className="card-upper">
                    <p className="card-title">{local.name}</p>
                    <p>{local.deliveryTime}min</p> 
                </div>
    
                <div className="card-bottom">
                    <p>Frete: R$ {local.shipping.toFixed(2)}</p>
                </div>
            </div>
        </div> 
        )
    })

    return (
        <StyledHome>
            <Filter name={name} handleName={handleName} />
            {filteredList}
        </StyledHome>
    )
}
export default HomePage