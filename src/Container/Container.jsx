import React from 'react';
import './Container.css'

const Container = (props) => {
    console.log('from container', props)
    return (
        <div className="main-container">
            <h1 className="main-heading">{props.obj.title}</h1>
            <div className="img-container">
                <img className="main-img" src={props.obj.url} alt="photo of the day"/>
                <p className="main-description">{props.obj.explanation}
                    <p className="main-date">Date: {props.obj.date}</p>
                </p>
            </div>
        </div>
    )
}

export default Container