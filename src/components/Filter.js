import React from "react"
import styled from "styled-components"

const StyledInput = styled.div`
        width: 328px;
        height: 36px;
        display: flex;
        align-items: center;
        margin: 10px auto;
        justify-content: center;
        color: var(--segundary);

        .seach-area{
            display: flex;
            margin: auto;
            margin-left: 20px;

            .search-icon{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 100%;
            padding: 11px 0;
            border-left: solid 1px var(--segundary);
            border-top: solid 1px var(--segundary);
            border-bottom: solid 1px var(--segundary);
            font-size: 24px;
            }

        input{
            outline: none;
            width: 100%;
            height: 7px;
            padding: 20px 16px 19px 16px;
            border-right: solid 1px var(--segundary);
            border-top: solid 1px var(--segundary);
            border-bottom: solid 1px var(--segundary);
            border-left: none;
            font-size: 16px;
            color: var(--segundary)
        }

        }


`


const Filter = (props) => {

    return (
        <StyledInput>
            <div className="seach-area">

                <div className="search-icon">
                <ion-icon name="search-outline"/>
                </div>

                <div className="search-bar">
                <input 
                placeholder="Restaurante"
                value={props.name} 
                onChange={props.handleName}/>
                </div>

            </div>
        </StyledInput>
    )
}
export default Filter