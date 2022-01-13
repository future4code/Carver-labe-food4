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
    p{
        /* padding-right: 150px; */
        margin: 17px auto;
    }
    button{
        margin-left: 15px;
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
                <button onClick={() => history.goBack}> C </button>
            }
            
            <p>PAGINA</p>
        </StyledHeader>
    )
}