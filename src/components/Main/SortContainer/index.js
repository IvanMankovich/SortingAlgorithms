import React from 'react';
import styled from 'styled-components';
import { BlocksContainer } from './BlocksContainer';

const StyledSortContainer = styled.section`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: #003d34;
    text-align: center;
    overflow: hidden;
`;

const H3 = styled.h3`
    font-size: 18px;
`;

const FormTitle = styled(H3)`
    text-align: center;
    padding: 1em 0;
`;

const SortContainer = props => {
    return (
        <StyledSortContainer>
            <FormTitle>Container</FormTitle>
            <BlocksContainer numberArray={props.numberArray} ms={props.ms}/>
        </StyledSortContainer>
    )
};

export { SortContainer };