import React, { useContext, useEffect, useState } from "react"
import { getProfile } from "../../api/API_Requests"
import GlobalStateConstext from "../../global/GlobalStateContext"

const Profile = () => {
    const { states, setters } = useContext(GlobalStateConstext)
    const [profile, set_profile] = useState([])

    useEffect(() => {
        getProfile(set_profile)
    },[])
    return (
        <div>
            {profile && profile.map((item) => {
                return <div key={item.user.id}>
                    <p>Nome: {item.user.name}</p>
                    <p>CPF: {item.user.cpf}</p>
                    <p>Email: {item.user.email}</p>
                    <p>Endereço: {item.user.address}</p>
                </div>
            })}
            Profile
        </div>
    )
}
export default Profile