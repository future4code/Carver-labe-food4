import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getRestaurantDetails, getRestaurants } from "../../api/API_Requests"

const RestaurantDetail = () => {
    const [restaurantDetail, set_restaurantsDetails] = useState()

    const history = useHistory()
    const params = useParams()

    useEffect(() => {
        getRestaurantDetails(params.id, set_restaurantsDetails)
    },[])



    return (
        <div>
            <button onClick={() => console.log(params.id)}>INFO</button>
            <img src="https://www.baressp.com.br/bares/fotos3/mc_donalds_5-min_090420191434.jpg" alt="logo" />
            <p> Mock_nome </p>
            <p> Mock_tipo </p>
            <p><spam> Mock_TempoDeEspera</spam> <spam>Mock_preçoFrete</spam></p>
            <p>Mock_Rua das Lágrimas </p>

            <h4>Principais</h4>

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