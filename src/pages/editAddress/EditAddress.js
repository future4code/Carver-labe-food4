import React from "react"
import {InputsContainer} from './StyledEditAddress'
import { useForm } from "../../hooks/useForm"
import axios from 'axios'

const EditAddress = () => {

    const {form, onChange, clearInputs} = useForm({street:'', number: '', complement: '', neighbourhood:'', city: '', state: ''})

    const onSubmitAddress = (event) => {
        event.preventDefault()
        console.log(form)
        requestAddress()
    }

    const requestAddress = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/rappi4B/address"
        const headers = {
            headers:{
                contentType: 'application/json',
                auth: localStorage.getItem('token')
            }
        }
        axios.put(url, form, headers)
        .then((res) => {
            console.log(res)
            clearInputs()
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    return (
        <div>
            <h1> Cadastre ou Atualize seu Endereço</h1>
            
            <form onSubmit = {onSubmitAddress}>
                <InputsContainer>
                    <input
                        required 
                        value={form.street} 
                        name={'street'} 
                        onChange={onChange} 
                        placeholder='Rua / Av.'
                        margin={'normal'}
                        
                    />
                    <input
                        required 
                        value={form.number} 
                        name={'number'} 
                        onChange={onChange} 
                        placeholder='Número'
                        margin={'normal'}
                        
                    />
                    <input
                        required 
                        value={form.complement} 
                        name={'complement'} 
                        onChange={onChange} 
                        placeholder='Apto. /Bloco'
                        margin={'normal'}
                        
                    />
                    <input
                        required 
                        value={form.neighbourhood} 
                        name={'neighbourhood'} 
                        onChange={onChange} 
                        placeholder='Bairro'
                        margin={'normal'}
                        
                    />
                    <input
                        required 
                        value={form.city} 
                        name={'city'} 
                        onChange={onChange} 
                        placeholder='Cidade'
                        margin={'normal'}
                        
                    />
                    <input
                        required 
                        value={form.state} 
                        name={'state'} 
                        onChange={onChange} 
                        placeholder='Estado'
                        margin={'normal'}
                        
                    />
                    <button
                        type={'submit'}
                        margin={'normal'}
                    >
                    Salvar
                    </button>
                </InputsContainer>
            </form>
            
           
        </div>
    )
}
export default EditAddress