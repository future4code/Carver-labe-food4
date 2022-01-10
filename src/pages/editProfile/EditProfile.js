import React from "react"

const EditProfile = () => {
    const [form, onChange, clear] = useForm({username:'', email: '', password: ''})

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form)
        requestSignup()
    }

    return (
        <div>
            <form onSubmit={onSubmitSignUp}>
                        <input 
                            required 
                            value={form.name} 
                            name={'name'} 
                            onChange={onChangeInput} 
                            placeholder='Nome e sobrenome'
                            margin={'normal'}
                            fullWidth
                        />
                        <input
                            required 
                            type='email' 
                            value={form.email} 
                            name={'email'} 
                            onChange={onChangeInput} 
                            placeholder='email@email.com'
                            margin={'normal'}
                            fullWidth
                        />
                        <input label="CPF"
                            required 
                            value={form.cpf} 
                            name={'cpf'} 
                            onChange={onChangeInput} 
                            placeholder='000.000.000-0'
                            margin={'normal'}
                            fullWidth
                        />
                        <button
                            type={'submit'}
                            fullWidth
                            margin={'normal'}
                        >
                        Salvar
                        </button>
                    </form>
        </div>
    )
}
export default EditProfile