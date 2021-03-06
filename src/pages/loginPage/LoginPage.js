import React from "react"
import axios from "axios"
import { FormContainer } from "./StyledLogin"
import logo from "../../assets/logo.png"
import { useForm } from "../../hooks/useForm"
import { useHistory } from "react-router-dom"
import { goToHome, goToSignup } from "../../routes/Coordinator"

const LoginPage = () => {
    const history = useHistory()

    const {form, onChange, clearInputs} = useForm({email: '', password: ''})

    const onSubmitLogin = (event) => {
        event.preventDefault()
        console.log(form)
        requestLogin()
    }

    const requestLogin = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/rappi4B/login"
        const headers = {
            headers:{
                contentType: 'application/json',
            }
        }
        axios.post(url, form, headers)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            alert('Login Feito com Sucesso')
            goToHome(history)
        })
        .catch((err) => {
            console.log(err.response)
        })
        clearInputs()
    }

    return (
        <FormContainer>
            <img src={logo} />
            <p> Fazer Login </p>
            <form onSubmit={onSubmitLogin} >
                    <input
                        type= 'email'
                        name='email'
                        value={form.email}
                        placeholder='email@email.com'
                        onChange={onChange}
                    
                    />
                    <input
                        name='password'
                        value={form.password}
                        placeholder='Mínimo 6 caracteres'
                        type = 'password'
                        onChange={onChange}
                    />
                    
                    <button
                        type={'submit'}
                        margin={'normal'}
                    >
                    Entrar
                    </button>
                </form>

                <button onClick={() => goToSignup(history)}> Não tem conta? cadastre-se </button>
        </FormContainer>
    )
}
export default LoginPage

