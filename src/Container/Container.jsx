import React, { useState } from 'react';
import './Container.css'
import styled from 'styled-components'

const MainContainer = styled.div`
    color: white;
    height: 85%;
`;

const MainHeader = styled.h1`
    font-size: 2.5rem;
`;

const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: space-around;
`;

const MainImg = styled.img`
    margin: 0 auto;
    justify-content: center;
    height: 100%;
    width: 95%;
    border-radius: 1rem;
`;

const MainDescription = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    background: rgba(255, 125, 0, .12);
    border-radius: 1rem;
    padding: 1rem;
    font-size: 2rem;
    margin: 1% auto;
    width: 94%;
    height: 40%;
`;

const MainDate = styled.h4`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    color: powderblue;
`;

const Container = (props) => {
    return (
        <MainContainer>
            <MainHeader className="main-heading">{props.obj.title}</MainHeader>
            <ImgContainer className="img-container">
                <MainImg src={props.obj.url} alt=""/>
            </ImgContainer>
            <MainDescription className="main-description">{props.obj.explanation}
                <MainDate className="main-date">Date: {props.obj.date}</MainDate>
            </MainDescription>
        </MainContainer>
    )
}

export default Container