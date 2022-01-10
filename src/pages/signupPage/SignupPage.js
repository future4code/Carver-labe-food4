import React from "react"
import { InputsContainer, Texto } from "./StyledSignup"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
const SignupPage = () => {
    return (
        <div>
            <Texto>
            <h1>Cadastrar</h1>
            </Texto>
            <form>
                <InputsContainer>
                <TextField
                name={"nome"}
                value={"receber nome"}
                onChange={null}
                label={"nome*"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                />
                <TextField
                name={"E-mail"}
                value={"receber E-mailL"}
                onChange={null}
                label={"E-mail*"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                />
                <TextField
                name={"CPF"}
                value={"receber CPF"}
                onChange={null}
                label={"CPF*"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                />
                <TextField
                name={"SENHA"}
                value={"receber senha"}
                onChange={null}
                label={"Senha*"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                />
                <TextField
                name={"SENHA"}
                value={"receber senha"}
                onChange={null}
                label={"Confirmar*"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                />

                <Button
                fullWidth
                variant="red"
                
                >Criar</Button>
               
                </InputsContainer>
            </form>
        </div>
    )
}
export default SignupPage