import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getRestaurantDetails, getRestaurants } from "../../api/API_Requests"

const RestaurantDetail = () => {
    const [restaurantDetails, set_restaurantDetails] = useState([])

    const history = useHistory()
    const params = useParams()

    useEffect(() => {
        getRestaurantDetails(params.id, set_restaurantDetails)
    },[])



    return (
        <div>
            <button onClick={() => console.log(restaurantDetails)}>INFO</button>
            
            {restaurantDetails && restaurantDetails.map((item) => {
                return <p>{item.name}</p>
            })}

            {/* <p>{restaurant.name}</p> */}

        </div>
    )
}
export default RestaurantDetail

// const produtos = this.state.produtos.filter(item => {
//     return item.name.toLowerCase().includes(this.state.query.toLowerCase())
//   }).map(item => {
//     return <Card key={item.id} item={item} adicionarCarrinho={this.adicionarCarrinho}
//     />
//   })