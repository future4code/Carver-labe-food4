import styled from "styled-components"

export const FormContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    place-items: center;
    width: 360px;
    margin: auto;
    padding: 0 0 12px;

img{
    margin: auto;
    margin-top: 45px;
    margin-bottom: 45px;
}

p{
    margin: 15px auto;
    font-size: 16px;
}



form{
    display: inherit;
    flex-direction: inherit;
    /* margin: auto; */
    place-items: center;

    input{
        outline: none;
        width: 290px;
        height: 36px;
        margin: 8px;
        padding: 19px 48px 19px 16px;
        border-radius: 4px;
        border: solid 1px var(--segundary);
        font-size: 16px;
    }

    input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
    }

    input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;

    }

    button{
        background: var(--primary);
        width: 350px;
        height: 56px;
        margin: 8px;
        padding: 12px 16px;
        border-radius: 4px;
        border: solid 1px var(--segundary);
        font-size: 16px;
        cursor: pointer;
    }
}
`