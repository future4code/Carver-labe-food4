import styled from "styled-components";

export const StyledHome = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
p{
    margin: 0;
}

img{
    width: 328px;
    height: 120px;
    margin: 0 0 12px;
    object-fit: center;
    border-radius: 8px;
}

.card{
    width: 328px;
    height: 188px;
    padding: 0 0 16px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    margin: 10px;
    cursor: pointer;
    color: gray;
    
    .card-content{
        display: flex;
        margin: auto;
        margin-left: 16px;
        justify-content: space-between;
    }

    .card-title{
        color: var(--primary);
        font-size: 16px;
    }

    .card-upper{
        height: 68px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p{
            margin-bottom: 15px;

        }
    }

    .card-bottom{
        display: flex;
        margin-top: 35px;
        margin-right: 10px;

    }
}
`