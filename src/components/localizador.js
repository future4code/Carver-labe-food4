import { useHistory } from "react-router-dom"
import React from "react"

import { goToHome, goToCart, goToLogin, goToProfile, goToEditProfile, goToEditAddress, goToDetail } from "../routes/Coordinator"

export default function CompAndaAnda() {
    const history = useHistory()

    return(
        <div>
            {/* <button onClick={()=> goToHome(history)}> HOME </button> */}
            <button onClick={()=> goToLogin(history)}> Login </button>
            <button onClick={()=> goToEditAddress(history)}> Endereço </button>
            {/* <button onClick={()=> goToCart(history)}> Carrinho </button> */}
            <button onClick={()=> goToEditProfile(history)}> Editar Perfil </button>
            {/* <button onClick={()=> goToProfile(history)}> Ver Perfil </button> */}
            {/* <button onClick={()=> goToDetail(history)}> Restaurante Detalhes </button> */}
        </div>
    )
}