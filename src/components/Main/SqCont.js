import React from 'react';
import styled, { keyframes } from 'styled-components';

const SquaresCntainer = styled.div`
    background: #00b349;
    background: linear-gradient(to left, #00b349, #94ebd8);
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
`;

const animate = keyframes`
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100% {
        transform: translateY(-100vh) rotate(720deg);
        opacity: 0;
        border-radius: 25%;
    }
`;

const animateNum = keyframes`
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }

    100% {
        transform: translateY(-100vh) rotate(720deg);
        opacity: 0;
    }
`;

const Squares = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    & li {
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.2);
        animation: ${animate} 25s linear infinite;
        bottom: -150px;
    }
    
    & li:nth-child(1) {
        left: 25%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
        animation-duration: 25s;
    }
    
    
    & li:nth-child(2) {
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
    }
    
    & li:nth-child(3) {
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
        animation-duration: 25s;
    }
    
    & li:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
    }
    
    & li:nth-child(5) {
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
        animation-duration: 25s;
    }
    
    & li:nth-child(6) {
        left: 75%;
        width: 110px;
        height: 110px;
        animation-delay: 3s;
        animation-duration: 18s;
    }
    
    & li:nth-child(7) {
        left: 35%;
        width: 150px;
        height: 150px;
        animation-delay: 7s;
        animation-duration: 25s;
    }
    
    & li:nth-child(8) {
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
    }
    
    & li:nth-child(9) {
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
    }
    
    & li:nth-child(10) {
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
    }
    
    & li:nth-child(11) {
        left: 80%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 22s;
    }

    & li:nth-child(12) {
        left: 15%;
        width: 40px;
        height: 40px;
        animation-delay: 10s;
        animation-duration: 15s;
    }

    & li:nth-child(13) {
        left: 70%;
        width: 60px;
        height: 60px;
        animation-delay: 8s;
        animation-duration: 35s;
    }

    & li:nth-child(14) {
        left: 35%;
        width: 120px;
        height: 120px;
        animation-delay: 5s;
        animation-duration: 28s;
    }

    & li:nth-child(15) {
        left: 10%;
        width: 80px;
        height: 80px;
        animation-delay: 12s;
        animation-duration: 22s;
    }

    & li:nth-child(16) {
        left: 15%;
        width: 70px;
        height: 70px;
        animation-delay: 0s;
        animation-duration: 24s;
    }

    & li:nth-child(17) {
        left: 45%;
        width: 45px;
        height: 45px;
        animation-delay: 1s;
        animation-duration: 45s;
    }

    & li:nth-child(18) {
        left: 65%;
        width: 65px;
        height: 65px;
        animation-delay: 6s;
        animation-duration: 20s;
    }

    & li:nth-child(19) {
        left: 50%;
        width: 50px;
        height: 50px;
        animation-delay: 5s;
        animation-duration: 18s;
    }

    & li:nth-child(20) {
        left: 10%;
        width: 30px;
        height: 30px;
        animation-delay: 8s;
        animation-duration: 13s;
    }

    & p {
        position: absolute;
        display: block;
        animation: ${animateNum} 30s linear infinite;
        color: #FFFFFF99;
        bottom: -150px;
    }
    
    & p:nth-child(21) {
        left: 5%;
        font-size: 32px;
        font-weight: bold;
        animation-delay: 3s;
        animation-duration: 28s;
    }
    
    & p:nth-child(22) {
        left: 10%;
        font-size: 40px;
        font-weight: bold;
        animation-delay: 8s;
        animation-duration: 19s;
    }
    
    & p:nth-child(23) {
        left: 15%;
        font-size: 48px;
        font-weight: bold;
        animation-delay: 1s;
        animation-duration: 18s;
    }
    
    & p:nth-child(24) {
        left: 20%;
        font-size: 32px;
        font-weight: bold;
        animation-delay: 5s;
        animation-duration: 30s;
    }
    
    & p:nth-child(25) {
        left: 25%;
        font-size: 24px;
        font-weight: bold;
        animation-delay: 0s;
        animation-duration: 18s;
    }
    
    & p:nth-child(26) {
        left: 30%;
        font-size: 32px;
        font-weight: bold;
        animation-delay: 3s;
        animation-duration: 18s;
    }
    
    & p:nth-child(27) {
        left: 35%;
        font-size: 32px;
        font-weight: bold;
        animation-delay: 5s;
        animation-duration: 18s;
    }
    
    & p:nth-child(28) {
        left: 40%;
        font-size: 32px;
        font-weight: bold;
        animation-delay: 15s;
        animation-duration: 45s;
    }
    
    & p:nth-child(29) {
        left: 45%;
        font-size: 32px;
        font-weight: bold;
        animation-delay: 2s;
        animation-duration: 35s;
    }
    
    & p:nth-child(30) {
        left: 50%;
        font-size: 32px;
        font-weight: bold;
        animation-delay: 0s;
        animation-duration: 11s;
    }
    
    & p:nth-child(31) {
        left: 55%;
        font-size: 32px;
        font-weight: bold;
        animation-delay: 2s;
        animation-duration: 22s;
    }

    & p:nth-child(32) {
        left: 60%;
        font-size: 32px;
        font-weight: bold;
        animation-delay: 10s;
        animation-duration: 15s;
    }

    & p:nth-child(33) {
        left: 65%;
        font-size: 32px;
        font-weight: bold;
        animation-delay: 8s;
        animation-duration: 35s;
    }

    & p:nth-child(34) {
        left: 70%;
        font-size: 32px;
        font-weight: bold;
        animation-delay: 5s;
        animation-duration: 28s;
    }

    & p:nth-child(35) {
        left: 75%;
        font-size: 32px;
        font-weight: bold;
        animation-delay: 12s;
        animation-duration: 22s;
    }

    & p:nth-child(36) {
        left: 80%;
        font-size: 48px;
        font-weight: bold;
        animation-delay: 16s;
        animation-duration: 24s;
    }

    & p:nth-child(37) {
        left: 85%;
        font-size: 36px;
        font-weight: bold;
        animation-delay: 1s;
        animation-duration: 45s;
    }

    & p:nth-child(38) {
        left: 90%;
        font-size: 28px;
        font-weight: bold;
        animation-delay: 6s;
        animation-duration: 20s;
    }

    & p:nth-child(39) {
        left: 95%;
        font-size: 44px;
        font-weight: bold;
        animation-delay: 5s;
        animation-duration: 18s;
    }

    & p:nth-child(40) {
        left: 60%;
        font-size: 40px;
        font-weight: bold;
        animation-delay: 12s;
        animation-duration: 13s;
    }
`;

const SqContainer = React.memo(props => {
    return (
        <SquaresCntainer>
            <Squares>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <p>{Math.round(Math.random() * (1000 - -1000) + -1000)}</p>
                <p>{Math.round(Math.random() * (1000 - -1000) + -1000)}</p>
                <p>{Math.round(Math.random() * (1000 - -1000) + -1000)}</p>
                <p>{Math.round(Math.random() * (1000 - -1000) + -1000)}</p>
                <p>{Math.round(Math.random() * (1000 - -1000) + -1000)}</p>
                <p>{Math.round(Math.random() * (1000 - -1000) + -1000)}</p>
                <p>{Math.round(Math.random() * (1000 - -1000) + -1000)}</p>
                <p>{Math.round(Math.random() * (1000 - -1000) + -1000)}</p>
                <p>{Math.round(Math.random() * (1000 - -1000) + -1000)}</p>
                <p>{Math.round(Math.random() * (1000 - -1000) + -1000)}</p>
                <p>{Math.round(Math.random() * (1000 - -1000) + -1000)}</p>
                <p>{Math.round(Math.random() * (1000 - -1000) + -1000)}</p>
                <p>{Math.round(Math.random() * (1000 - -1000) + -1000)}</p>
                <p>{Math.round(Math.random() * (1000 - -1000) + -1000)}</p>
                <p>{Math.round(Math.random() * (1000 - -1000) + -1000)}</p>
                <p>{Math.round(Math.random() * (1000 - -1000) + -1000)}</p>
                <p>{Math.round(Math.random() * (1000 - -1000) + -1000)}</p>
                <p>{Math.round(Math.random() * (1000 - -1000) + -1000)}</p>
                <p>{Math.round(Math.random() * (1000 - -1000) + -1000)}</p>
                <p>{Math.round(Math.random() * (1000 - -1000) + -1000)}</p>
            </Squares>
        </SquaresCntainer>
    )
});

export { SqContainer };