import React from "react"

const Filter = (props) => {

    return (
        <div>
            <h2>Busca</h2>
            <input placeholder="Restaurante" value={props.name} onChange={props.handleName}/>
        </div>
    )
}
export default Filter