import React, { useEffect, useState } from "react"
import { useContext } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getRestaurantDetails, getRestaurants } from "../../api/API_Requests"
import GlobalStateConstext from "../../global/GlobalStateContext"
import { StyledDetails, StyledDetailsCard, StyledProducts, StyledProductsCard, StyledFoodArea } from "./StyledRestaurantDetail"

const RestaurantDetail = () => {
    const [restaurantDetails, set_restaurantDetails] = useState([])
    const { addToCart } = useContext(GlobalStateConstext);

    const styleButtonText = true
    const numterButton = 3

    const history = useHistory()
    const params = useParams()

    useEffect(() => {
        getRestaurantDetails(params.id, set_restaurantDetails)
    },[])

    const details = restaurantDetails && restaurantDetails.map((item) => {
        return( <StyledDetailsCard>
                <img src={item.logoUrl} alt={item.name} />
                <p className="card-restaurant-title">{item.name.toUpperCase()}</p>
                <p>{item.category}</p>
                <div className="card-restaurant-money">
                <p>{item.deliveryTime} - {item.deliveryTime + 10} min</p>
                <p>Frete: R$ {item.shipping.toFixed(2)}</p>
                </div>
                <p>{item.address}</p>
            </StyledDetailsCard>)
    })

    const products = restaurantDetails && restaurantDetails.map((item) => {
        return (<>
            {item && item.products.map((i, index)=> {
            return index <= 10 && 
            (<StyledProductsCard>
                <div>
                    <img src={i.photoUrl} alt={i.name} />
                </div>

                <div className="card-content">
                    <div className="card-content-top">
                        <div className="card-content-texts">
                            <p className="card-content-texts-title">{i.name}</p>
                            <p className="card-content-texts-description">{i.description}</p>
                        </div>

                        <div className="card-content-marker">
                                {
                            numterButton
                                ?
                            <button>{numterButton}</button>
                                :
                            <div/>
                                }

                        </div>
                    </div>

                    <div className="card-content-bottom">
                        <div>
                            <p>R${i.price.toFixed(2)}</p>
                        </div>

                        <div className="card-content-cart">
                            {/* TERNARIO DE ADICIONAR E REMOVER DO CARRINHO */}
                                {
                            styleButtonText 
                                ? 
                            <button className="card-button-add" onClick={() => {addToCart(i)}}> adicionar </button> 
                                : 
                            <button className="card-button-remove"> remover </button>
                                }
                        </div>
                    </div>
                </div>

            </StyledProductsCard>)
        })}</>) 

    })



    return (
        <div>
            <button onClick={() => console.log(restaurantDetails)}>INFO</button>
            <StyledDetails>
            {details}
            </StyledDetails>

                <StyledFoodArea>Comidas</StyledFoodArea>

            <StyledProducts>
            {products}
            </StyledProducts>
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