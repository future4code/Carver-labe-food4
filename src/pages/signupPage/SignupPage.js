import React from "react"
import { FormContainer } from "./StyledSignup"
import logo from "../../assets/logo.png"
import { useForm } from "../../hooks/useForm"
import { ApiSignUp } from "../../api/API_Account"
import { useHistory } from "react-router-dom"


const SignupPage = () => {
    const { form, onChange, clearInputs } = useForm({ name: "", email: "", cpf: "", password: "" })
    const history = useHistory()



    const trySubmit = (event) => {
        event.preventDefault()
        ApiSignUp(form, history)
        clearInputs()
    }

    return (
        <FormContainer>
            <img src={logo} />
            <p> Cadastrar </p>
            <form onSubmit={trySubmit}>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    placeholder="Nome e sobrenome"
                    onChange={onChange}
                    required
                ></input>

                <input
                    type="email"
                    name="email"
                    value={form.email}
                    placeholder="email@email.com"
                    onChange={onChange}
                    required
                ></input>

                <input
                    type="text"
                    name="cpf"
                    value={form.cpf}
                    placeholder="000.000.000-00"
                    onChange={onChange}
                    required
                ></input>

                <input
                    type="password"
                    name="password"
                    value={form.password}
                    placeholder="Mínimo de 6 caracteres"
                    onChange={onChange}
                    required
                ></input>

                {/* <input
            type="password"
            name="nome"
            value={""}
            placeholder="confirmar senha"
        ></input> */}

                <button type="submit">Criar</button>
            </form>
        </FormContainer>
    )
}
export default SignupPage