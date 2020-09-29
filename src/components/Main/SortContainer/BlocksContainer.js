import React from 'react';
import styled from 'styled-components';
import { NumberItem } from './NumberItem';

const StyledBlocksContainer = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    box-sizing: border-box;
`;

const BlocksContainer = props => {
    return (
        <StyledBlocksContainer>
            {props.numberArray.map(number => {
                return (
                    <NumberItem key={number.id} value={number.value} state={number.state} ms={props.ms}/>
                )
            })}
        </StyledBlocksContainer>
    )
};

export { BlocksContainer };