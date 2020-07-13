import React from 'react'

import './Title.css'

const Title = props => {

    console.log("Soy una función normal no muerdo hazme cosas")
    console.log("Este es el objeto de props:", props)

    return (
        <header>
            <h1>{props.titleText}</h1>
            <p>{props.subtitleText}</p>
        </header>
    )
}

export default Title