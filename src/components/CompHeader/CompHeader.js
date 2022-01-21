import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import GlobalStateConstext from "../../global/GlobalStateContext"



const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: auto;
    border-bottom: 1px solid var(--segundary);
    justify-content: space-between;
    position: fixed;
    top: 0;
    background-color: white;
    p{
        /* padding-right: 150px; */
        margin: 17px auto;
    }
    button{
        margin-left: 15px;
        display: flex;
        position: fixed;
        align-items: center;
        place-items: center;
        color: black;
        font-size: 2em;
        padding: 0;
        background: transparent;
        border: none;
        cursor: pointer;
    }
`

export const CompHeader = () => {
    const { states, setters } = useContext(GlobalStateConstext)
    const [url, set_url] = useState("")

    const history = useHistory()

    const changeUrl = (url) => {
        set_url(url)
    }

    useEffect(() =>{
        changeUrl(history.location.pathname)
    }, [url])



    return(
        <StyledHeader>
            {
                url === "/"
                    ?
                <></>
                    :
                <button> <ion-icon name="chevron-back-outline"/> </button>
            }
            
            <p>LABEFOOD</p>
        </StyledHeader>
    )
}