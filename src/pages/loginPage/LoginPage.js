import React from "react"
import axios from "axios"
import { useForm } from "../../hooks/useForm"

const LoginPage = () => {

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
        })
        .catch((err) => {
            console.log(err.response)
        })
        clearInputs()
    }

    return (
        <div>
            <h1>Login</h1>
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
        </div>
    )
}
export default LoginPage