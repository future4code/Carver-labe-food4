import React, { useContext, useEffect, useState } from "react"
import { getProfile } from "../../api/API_Requests"
import GlobalStateConstext from "../../global/GlobalStateContext"
import { StyledContainer, StyledHistoryArea } from "./StyledProfile"
import { goToEditAddress, goToEditProfile } from "../../routes/Coordinator"
import { useHistory } from "react-router-dom"

const Profile = () => {
    const history = useHistory()
    const { states, setters } = useContext(GlobalStateConstext)

    useEffect(() => {
        getProfile(setters.set_profile)
    },[])
    return (
        <div>
            <StyledContainer>
            Meu Perfil
            </StyledContainer>

            {states.profile && states.profile.map((item) => {
                return <StyledContainer key={item.user.id}>
                    <div className="area-top">
                        <div className="area-top-perfil">
                            <p>{item.user.name}</p>
                            <p>{item.user.email}</p>
                            <p>{item.user.cpf}</p>
                        </div>
                        <div className="area-top-edit">
                            <button onClick={() => goToEditProfile(history)}> <ion-icon name="pencil-outline" /> </button>
                        </div>
                    </div>

                    <div className="area-bottom">
                        <div className="area-bottom-address">
                            <p className="area-bottom-address-text1">Endereço Cadastrado</p>
                            <p className="area-bottom-address-text2">{item.user.address}</p>
                        </div>

                        <div className="area-bottom-edit">
                            <button onClick={() => goToEditAddress(history)}> <ion-icon name="pencil-outline" /> </button>
                        </div>
                    </div>
                </StyledContainer>
            })}

            <StyledHistoryArea>Histórico de Pedidos</StyledHistoryArea>
        </div>
    )
}
export default Profile