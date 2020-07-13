import React, { Component } from 'react'

import './Skill-card.css'


class SkillCard extends Component {

    // El método render() se ejecta cada vez que React renderiza el componente en el DOM
    render() {

        console.log('Este es el opbjeto de props de una clase;', this.props)

        return (
            <article className="skill-card" style={{
                backgroundColor: this.props.essential ? '#ff000054' : 'white'
            }}>
                <h3>{this.props.name}</h3>      {/* Los componentes de clase reciben las props en this.props */}
                <p>Peso de la materia: {this.props.weight}</p>
                <small>{this.props.essential ? 'Asignatura esencial' : 'Asignatura ordinaria'}</small>
            </article>
        )
    }
}

export default SkillCard