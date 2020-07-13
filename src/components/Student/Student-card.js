import React from 'react'

import './Student-card.css'

const StundertCard = props => {

    const areas = props.areas ? <small>{props.areas}</small> : <small>SPA, React, Express</small> // JSX + Logic! :3

    return (
        <article className="stundent-card">
            <h3>{props.name || 'Nombre desconocido'}</h3>
            <p>Edad: {props.age}</p>
            <small>{props.areas || 'Fronted, Backend, SPA'}</small>
        </article>
    )
}

export default StundertCard