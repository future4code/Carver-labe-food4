import React from "react"
import {InputsContainer} from './StyledEditAddress'
import { useForm } from "../../hooks/useForm"
import { ApiAddAdress } from "../../api/API_Account"
import { useHistory } from "react-router-dom"
import { FormContainer } from "./StyledEditAddress"

const EditAddress = () => {
    const history = useHistory()

    const {form, onChange, clearInputs} = useForm({street:'', number: '', complement: '', neighbourhood:'', city: '', state: ''})

    const onSubmitAddress = (event) => {
        event.preventDefault()
        console.log(form)
        ApiAddAdress(form, history)
        clearInputs()
    }


    return (
        <FormContainer>
            <p> Meu Endereço </p>
            
            <form onSubmit = {onSubmitAddress}>
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
                        type={'number'}
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
            </form>
            
           
        </FormContainer>
    )
}
export default EditAddress