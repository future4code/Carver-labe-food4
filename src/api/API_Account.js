import axios from "axios";
import URL_BASE from "../constants/URL_BASE";

export const ApiLogin = (body) => {
    const url = `${URL_BASE}/login`

    axios.post(url, body)
        .then((resp) => {
            localStorage.setItem("token", resp.data.token)
            window.alert("logado com sucesso")
        })
        .catch((error) => {
            window.alert(error.reponse.message)
        })
    }


    export const ApiSignUp = (body, history) => {
        const url = `${URL_BASE}/signup`

        axios.post(url, body)
            .then((resp) => {
                localStorage.setItem("token", resp.data.token)
                window.alert("cadastrado com sucesso")
            })
            .catch((error) => {
                window.alert(error.response.message)
            })
    }


    export const ApiAddAdress = (body) => {
        const url = `${URL_BASE}/address`

        axios.post(url, body)
            .then((resp) => {
                localStorage.setItem("token", resp.data.token)
                window.alert("endereço cadastrado com sucesso")  
            })
            .catch((error) => {
                window.alert(error.response.message)
            })
    }


    export const ApiUpdateProfile = (body) => {
        const url = `${URL_BASE}/profile`
        const token = localStorage.getItem('token')
        const header = { headers: { auth: token } }

        axios.put(url, header)
            .then((resp) => {
                window.alert("perfil atualizado com sucesso")
            })
            .catch((error) => {
                window.alert(error.response.message)
            })
    }

    
    export const ApiPlaceOrder = (id, body) => {
        const url = `${URL_BASE}/restaurants/${id}/order`
        const token = localStorage.getItem('token')
        const header = { headers: { auth: token } }

        axios.put(url, header)
            .then((resp) => {
                window.alert("pedido feito com sucesso")
            })
            .catch((error) => {
                window.alert(error.response.message)
            })
    }