import React from "react"
import { FormContainer } from "./StyledSignup"
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
            <form onSubmit={trySubmit}>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    placeholder="digite o name"
                    onChange={onChange}
                    required
                ></input>

                <input
                    type="email"
                    name="email"
                    value={form.email}
                    placeholder="digite o email"
                    onChange={onChange}
                    required
                ></input>

                <input
                    type="text"
                    name="cpf"
                    value={form.cpf}
                    placeholder="digite o CPF"
                    onChange={onChange}
                    required
                ></input>

                <input
                    type="password"
                    name="password"
                    value={form.password}
                    placeholder="digite o senha"
                    onChange={onChange}
                    required
                ></input>

                {/* <input
            type="password"
            name="nome"
            value={""}
            placeholder="confirmar senha"
        ></input> */}

                <button type="submit">Cadastrar</button>
            </form>
        </FormContainer>
    )
}
export default SignupPage