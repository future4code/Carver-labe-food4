import React from "react"
import { getRestaurants } from "../../api/API_Requests"

const RestaurantDetail = () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IktwU3FHbVJBQWxLd3kzNnRTaXJ2IiwibmFtZSI6IlRlc3RlIiwiZW1haWwiOiJ0ZXN0ZUBlbWFpbC5jb20iLCJjcGYiOiIxMjMuMTIzLjEyMy01NCIsImhhc0FkZHJlc3MiOmZhbHNlLCJpYXQiOjE2NDE4NDA5MjB9.1mchq6qTp4inUiaYvEi4Kfx-XNFuoPa7Nb6GnQRYR78"




    return (
        <div>
            <img src="https://www.baressp.com.br/bares/fotos3/mc_donalds_5-min_090420191434.jpg" alt="logo" />
            <button onClick={() => getRestaurants (token)}>INFO</button>
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