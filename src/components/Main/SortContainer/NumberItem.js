import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';

const bounceInAnimation = keyframes`${bounceIn}`;

const TextContainer = styled.p`
    display: block;
    position: relative;
    width: 100%;
    word-wrap: break-word;
    margin: 0;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    font-weight: bold;
    color: #FFFFFF;
`;

const moveToLeft = keyframes`
    from {
        left: 0;
    }

    to {
        left: -120px;
    }
`;

const moveToRight = keyframes`
    from {
        left: 0;
    }

    to {
        left: 120px;
    }
`;

const StyledNumberItem = styled.section`
    height: 100px;
    width: 100px;
    margin: 10px;
    padding: 3px;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
`;

const StyledNumberItemInitial = styled(StyledNumberItem)`
    background-color: #00b349; 
    border: 5px solid #003d34;
    animation: 1 1s ${bounceInAnimation};
`;

const StyledNumberItemChecked = styled(StyledNumberItem)`
    background-color: #00b349; 
    border: 5px solid #003d34;
`;

const StyledNumberItemSelected = styled(StyledNumberItem)`
    background-color: #94ebd8; 
    border: 5px solid #003d34;
`;

const StyledNumberItemChangeToLeft = styled(StyledNumberItem)`
    background-color: #00787a; 
    border: 5px solid #003d34;
    animation: ${moveToLeft} ${props => props.ms}ms ease 0s 1 forwards;
`;

const StyledNumberItemChangeToRight = styled(StyledNumberItem)`
    background-color: #00787a; 
    border: 5px solid #003d34;
    animation: ${moveToRight} ${props => props.ms}ms ease 0s 1 forwards;
`;

const StyledNumberItemSorted = styled(StyledNumberItem)`
    background-color: #003d34; 
    border: 5px solid #003d34;
`;


const NumberItem = props => {
    switch (true) {
        case props.state === 'initial':
            return (
                <StyledNumberItemInitial state={props.state} >
                    <TextContainer>{props.value}</TextContainer>
                </StyledNumberItemInitial>
            );
        case props.state === 'checked':
            return (
                <StyledNumberItemChecked state={props.state} >
                    <TextContainer>{props.value}</TextContainer>
                </StyledNumberItemChecked>
            );
        case props.state === 'selected':
            return (
                <StyledNumberItemSelected state={props.state} >
                    <TextContainer>{props.value}</TextContainer>
                </StyledNumberItemSelected>
            );
        case props.state === 'changeToLeft':
            return (
                <StyledNumberItemChangeToLeft state={props.state} ms={props.ms}>
                    <TextContainer>{props.value}</TextContainer>
                </StyledNumberItemChangeToLeft>
            );
        case props.state === 'changeToRight':
            return (
                <StyledNumberItemChangeToRight state={props.state} ms={props.ms}>
                    <TextContainer>{props.value}</TextContainer>
                </StyledNumberItemChangeToRight>
            );
        case props.state === 'sorted':
            return (
                <StyledNumberItemSorted state={props.state} >
                    <TextContainer>{props.value}</TextContainer>
                </StyledNumberItemSorted>
            );
        default:
            return null;
    }
};

export { NumberItem };