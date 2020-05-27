import React from 'react'
import './ButtonCreator.css'

const ButtonCreator = (props) => {
    
    return (
        <button className={`buttons ${props.className}`}>{props.name}</button>
    )
}

export default ButtonCreator