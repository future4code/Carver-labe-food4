import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    margin: auto;
    text-align: center;
    font-size: 16px;

    .area-top{
        display: flex;
        justify-content: space-between;
        width: 328px;
        margin: auto;
        text-align: start;
        
        button{
            width: 30px;
            height: 30px;
            margin-top: 10px;
            display: flex;
            align-items: center;
            place-items: center;
            color: black;
            font-size: 2em;
            padding: 0;
            background: transparent;
            border: none;
            cursor: pointer;
        }

        p{
            margin: 6px;
        }
    }

    .area-bottom{
        background: var(--segundary);
        display: flex;
        justify-content: space-between;
        text-align: start;
        margin: auto;
        margin-top: 10px;
        padding: 0 23px;
        max-width: 328px;


        button{
            width: 30px;
            height: 30px;
            margin-top: 10px;
            display: flex;
            align-items: center;
            place-items: center;
            color: black;
            font-size: 2em;
            padding: 0;
            background: transparent;
            border: none;
            cursor: pointer;
        }

        p{
            margin: 6px;
            
        }

        .area-bottom-address-text1{
            color: gray;
            padding-top: 8px;
        }
        .area-bottom-address-text2{
            padding-bottom: 8px;
        }
    }

`

export const StyledHistoryArea = styled.div`
    width: 328px;
    display: flex;
    flex-direction: column;
    margin: auto;
    font-weight: bold;
    border-bottom: 2px solid black;
    margin-top: 16px;
`