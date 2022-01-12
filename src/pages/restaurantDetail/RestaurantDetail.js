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

    const details = restaurantDetails && restaurantDetails.map((item) => {
        return <p>{item.name}</p>
    })

    const products = restaurantDetails && restaurantDetails.map((item) => {
        return <h6>{item && item.products.map((i, index)=> {
            return index <= 2 && <p>{i.name}</p>
        })}</h6>
    })



    return (
        <div>
            <button onClick={() => console.log(restaurantDetails)}>INFO</button>
            
            {details}
            {products}
            {/* {restaurantDetails && restaurantDetails.map((item) => {
                return <p>{item.name}</p>
            })}

            <p>{restaurant.name}</p> */}

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