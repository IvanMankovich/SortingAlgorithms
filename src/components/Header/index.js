import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1em 0;
    background-color: #94ebd8;
    color: #003d34;
    text-align: center;
`;

const H1 = styled.h1`
    font-size: 32px;
    font-weight: bold;
    color: #003d34;
    letter-spacing: 0.25em;
    @supports (-webkit-text-stroke: 1px black) {
        -webkit-text-stroke: 1px black;
        -webkit-text-fill-color: #94ebd8;
    }
`;

const Header = props => {
    return (
        <HeaderContainer>
            <H1>Sorting algorithms</H1>
        </HeaderContainer>
    )
};

export { Header };