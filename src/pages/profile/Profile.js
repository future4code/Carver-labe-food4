import React, { useContext, useEffect, useState } from "react"
import { getProfile } from "../../api/API_Requests"
import GlobalStateConstext from "../../global/GlobalStateContext"
import { StyledContainer, StyledHistoryArea } from "./StyledProfile"

const Profile = () => {
    const { states, setters } = useContext(GlobalStateConstext)
    const [profile, set_profile] = useState([])

    useEffect(() => {
        getProfile(set_profile)
    },[])
    return (
        <div>
            <StyledContainer>
            Meu Perfil
            </StyledContainer>

            {profile && profile.map((item) => {
                return <StyledContainer key={item.user.id}>
                    <div className="area-top">
                        <div className="area-top-perfil">
                            <p>{item.user.name}</p>
                            <p>{item.user.email}</p>
                            <p>{item.user.cpf}</p>
                        </div>
                        <div className="area-top-edit">
                            <button> E </button>
                        </div>
                    </div>

                    <div className="area-bottom">
                        <div className="area-bottom-address">
                            <p className="area-bottom-address-text1">Endereço Cadastrado</p>
                            <p className="area-bottom-address-text2">{item.user.address}</p>
                        </div>

                        <div className="area-bottom-edit">
                            <button> E </button>
                        </div>
                    </div>
                </StyledContainer>
            })}

            <StyledHistoryArea>Histórico de Pedidos</StyledHistoryArea>
        </div>
    )
}
export default Profile