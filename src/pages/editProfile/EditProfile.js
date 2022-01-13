import React from "react"
import {useForm} from '../../hooks/useForm'
import axios from "axios"
import { goToHome } from "../../routes/Coordinator"
import { useHistory } from "react-router-dom"
import { FormContainer } from "./StyledEditProfile"

const EditProfile = () => {
    const history = useHistory()
    const {form, onChange, clearInputs} = useForm({name:'', email: '', cpf: ''})

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form)
        requestUpDate()
        console.log(event)
    }

    const requestUpDate = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/rappi4B/profile"
        const headers = {
            headers:{
                contentType: 'application/json',
                auth: localStorage.getItem('token')
            }
        }
        axios.put(url, form, headers)
        .then((res) => {
            console.log(res)
            alert('Cadastro atualizado!')
            goToHome(history)
        })
        .catch((err) => {
            console.log(err.response)
        })
        clearInputs()
    }

    return (
        <FormContainer>
            <p> Editar Perfil </p>
            <form onSubmit={onSubmitForm} >
                <input
                    required 
                    value={form.name} 
                    name={'name'} 
                    onChange={onChange} 
                    placeholder='Nome e sobrenome'
                    margin={'normal'}
                    
                />
                <input
                    required 
                    type='email' 
                    value={form.email} 
                    name={'email'} 
                    onChange={onChange} 
                    placeholder='email@email.com'
                    margin={'normal'}
                    
                />
                <input label="CPF"
                    required 
                    value={form.cpf} 
                    name={'cpf'} 
                    onChange={onChange} 
                    placeholder='000.000.000-0'
                    margin={'normal'}
                    
                />
                <button
                    type={'submit'}
                    margin={'normal'}
                >
                Salvar
                </button>
            </form>
        </FormContainer>
    )
}
export default EditProfile