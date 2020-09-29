import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1em 0;
    background-color: #00b349;
    color: #003d34;
    text-align: center;
`;

const H3 = styled.h3`
    font-size: 12px;
    transition: all 1s;
    &:hover {
        font-size: 18px;
    }
`;

const Link = styled.a`
    color: #003d34;
`;

const Footer = props => {
    return (
        <FooterContainer>
            <H3>This project uses <Link href='https://reactjs.org/'>React</Link>, <Link href='https://styled-components.com/'>styled-components</Link> and <Link href='http://react-animations.herokuapp.com/'>react-animations</Link>.<br />This project was created with educational purposes. <Link href='#'>GitHub</Link></H3>
        </FooterContainer>
    )
};

export { Footer };