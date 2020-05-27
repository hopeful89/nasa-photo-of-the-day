import React from 'react';
import './Container.css'
import ButtonCreator from '../Buttons/ButtonCreator'

const Container = (props) => {
    return (
        <div className="main-container">
            <h1 className="main-heading">{props.obj.title}</h1>
            <div className="img-container">
                <ButtonCreator />
                <img className="main-img" src={props.obj.url} alt=""/>
                <ButtonCreator className="inverse-button" />
                <p className="main-description">{props.obj.explanation}
                    <h4 className="main-date">Date: {props.obj.date}</h4>
                </p>
            </div>
        </div>
    )
}

export default Container