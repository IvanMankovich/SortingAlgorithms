import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css';
import * as serviceWorker from './serviceWorker';
import styled, { keyframes } from 'styled-components';
import { fadeOut, slideOutUp, slideOutDown } from 'react-animations';

const RootContainer = styled.div`
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    color: #003d34;
    overflow: hidden;
`;

const Panel = styled.div`
    height: 100%;
    width: 100%;
    z-index: 2;
    position: absolute;
    background: turquoise;
`;

const H1 = styled.h1`
    position: absolute;
    top: 30%;
    left: 50%;
    letter-spacing: 0.25em;
    transform: translate(-50%, 0);
    font-size: 48px;
    font-weight: bold;
    color: #FFFFFF;
    letter-spacing: 0.25em;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

const slideOutDownAnimation = keyframes`${slideOutDown}`;
const slideOutUpAnimation = keyframes`${slideOutUp}`;

const PanelTop = styled(Panel)`
    top: 0;
    background-color: #003d34;
    clip-path: polygon(0 0, 100% 0, 100% 40%, 0 60%);

`;

const PanelBottom = styled(Panel)`
    bottom: 0;
    background-color: #94ebd8;
    clip-path: polygon(0 60%, 100% 40%, 100% 100%, 0 100%);
`;

const PanelTopHide = styled(Panel)`
    background-color: #003d34;
    clip-path: polygon(0 0, 100% 0, 100% 40%, 0 60%);
    animation: 1 1s ${slideOutUpAnimation};
`;

const PanelBottomHide = styled(Panel)`
    background-color: #94ebd8;
    clip-path: polygon(0 60%, 100% 40%, 100% 100%, 0 100%);
    animation: 1 1s ${slideOutDownAnimation};
`;

const StartButton = styled.button`
    box-sizing: border-box;
    width: 200px;
    height: 80px;
    border: 5px solid #FFFFFF;
    background-color: #000000AA;
    font-weight: bold;
    color: #FFFFFF;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50%);
    z-index: 5;
    border-radius: 40px;
    font-size: 32px;
    transition: all 0.5s;

    &:hover {
        width: 220px;
        height: 100px;
        border: 5px solid #FFFFFF;
        font-size: 36px;
    }
`;

const fadeOutAnimation = keyframes`${fadeOut}`;

const StartButtonHide = styled(StartButton)`
    width: 220px;
    height: 100px;
    border: 5px solid #FFFFFF;
    font-size: 36px;
    animation: 1 1s ${fadeOutAnimation};
`;

const Root = () => {
    const [startPage, setStartPage] = useState(1);

    const handleClickStart = e => {
        e.preventDefault();
        setStartPage(2);
        setTimeout(() => setStartPage(3), 1000);
    }
    
    const toRender = () => {
        switch (true) {
            case (startPage === 1):
                return (
                    <React.Fragment>
                        <PanelTop>
                            <H1>Sorting algorithms</H1>
                        </PanelTop>
                        <PanelBottom/>
                        <StartButton type='button' onClick={e => handleClickStart(e)}>START</StartButton>
                    </React.Fragment>
                );
            case (startPage === 2):
                return (
                    <React.Fragment>
                        <PanelTopHide/>
                        <PanelBottomHide/>
                        <StartButtonHide type='button' onClick={e => {e.preventDefault()}}>START</StartButtonHide>
                    </React.Fragment>
                )
            default:
                return null;
        }
    }

    return (
        <RootContainer>
            {toRender()}
            <App />
        </RootContainer>
    )
}

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
