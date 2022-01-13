import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { goToCart, goToProfile, goToHome } from "../../routes/Coordinator";

const StyledFooter = styled.div`
    position: fixed;
    bottom: 0%;
    background-color: white;
    z-index: 999;
    width: 100%;
    height: 49px;
    border: 1px solid var(--segundary);
    display: flex;
    justify-content: center;
    align-items: center;

    .footer-item{
        padding: 0 35px;
        font-size: 1.75em;
        cursor: pointer;
        color: var(--segundary);
        padding-top: 5px;
    }
`

export const CompFooter = () => {
    const history = useHistory()


    return(
        <StyledFooter>
            <div className="footer-item">
                <ion-icon name="home-outline" onClick={() => goToHome(history)}/>
            </div>
            <div className="footer-item">
                <ion-icon name="cart-outline" onClick={() => goToCart(history)}/>
            </div>
            <div className="footer-item">
                <ion-icon name="person-outline" onClick={() => goToProfile(history)}/>
            </div>
        </StyledFooter>
    )

}