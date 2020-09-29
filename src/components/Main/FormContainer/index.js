import React from 'react';
import styled from 'styled-components';

const StyledFormContainer = styled.form`
    display: block;
    width: 100%;
`;

const BlockSection = styled.section`
    display: block;
    margin: 0.5em;
`;

const H2 = styled.h2`
    font-size: 24px;
    margin: 0.5em 0;
`;

const FormTitle = styled(H2)`
    text-align: center;
`;

const Row = styled.div`
    display: block;
    margin: 0.5em;
    box-sizing: border-box;
    font-size: 0;
`;

const Cell = styled.div`
    display: inline-block;
    width: 50%;
    font-size: 0;
    height: 100%;
    vertical-align: middle;

    @media screen and (max-width: 480px) {
        display: block;
        width: 100%;
        text-align: center;
    }

    @media screen and (max-width: 320px) {
        display: block;
        width: 100%;
    }
`;

const Input = styled.input`
    display: block;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    padding: 3px 10px;
    width: 100%;
    margin: auto 0;

    &[disabled] {
        background-image: linear-gradient(45deg, #ffffff99 25%, #94ebd899 25%, #94ebd899 50%, #ffffff99 50%, #ffffff99 75%, #94ebd899 75%, #94ebd899 100%);
        background-size: 60px 60px;
        background-color: #94ebd8;
        cursor: not-allowed;
        opacity: 0.7;
    }
`;

const Label = styled.label`
    display: block;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    padding: 3px 10px;
    width: 100%;
    margin: auto 0;
`;

const LabelDuration = styled(Label)`
    text-align: center;
`;

const Select = styled.select`
    display: block;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    padding: 3px 10px;
    width: 100%;
    margin: auto 0;

    &[disabled] {
        background-image: linear-gradient(45deg, #ffffff99 25%, #94ebd899 25%, #94ebd899 50%, #ffffff99 50%, #ffffff99 75%, #94ebd899 75%, #94ebd899 100%);
        background-size: 60px 60px;
        background-color: #94ebd8;
        cursor: not-allowed;
        opacity: 0.7;
    }
`;

const ButtonSection = styled.section`
    display: flex;
    margin: 0.5em;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 480px) {
        display: block;
    }
`;

const Button = styled.button`
    padding: 10px 20px;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 16px;
    background-color: #94ebd8;
    border: 5px solid #FFFFFF;
    border-radius: 10px;
    transition: background-color 0.5s;

    &:hover {
        background-color: #00b349;
    }

    &[disabled] {
        background-image: linear-gradient(45deg, #ffffff99 25%, #94ebd899 25%, #94ebd899 50%, #ffffff99 50%, #ffffff99 75%, #94ebd899 75%, #94ebd899 100%);
        background-size: 60px 60px;
        background-color: #94ebd8;
        cursor: not-allowed;
        opacity: 0.7;
    }

    @media screen and (max-width: 640px) {
        display: block;
        width: 100%;
        margin-bottom: 0.5em;
    }
`;

const SlideContainer = styled.div`
    width: 100%;
    margin: 0.5em 0;
`;

const InputSlider = styled(Input)`
    -webkit-appearance: none;
    appearance: none;
    height: 10px;
    background: linear-gradient(to left, #94ebd8, #00b349);
    outline: none;
    opacity: 0.7;
    padding: 0;
    transition: opacity .2s;
    box-sizing: border-box;
    border: 2px solid #FFFFFF;
    transition: opacity 0.5s;

    &:hover {
        opacity: 1;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: 2px solid #FFFFFF;
        background: #4CAF50;
        cursor: pointer;
    }

    &[disabled]::-webkit-slider-thumb {
        cursor: not-allowed;
    }

    &[disabled] {
        background-image: linear-gradient(45deg, #ffffff99 25%, #94ebd899 25%, #94ebd899 50%, #ffffff99 50%, #ffffff99 75%, #94ebd899 75%, #94ebd899 100%);
        background-size: 60px 60px;
        background-color: #94ebd8;
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

const DescriptionSection = styled.p`
    font-size: 16px;
    text-align: justify;
`;

const CurrentDuration = styled(DescriptionSection)`
    text-align: center;
`;

const FormContainer = props => {
    return (
        <StyledFormContainer>
            <BlockSection>
                <FormTitle>Sorting algorithms form</FormTitle>
                <DescriptionSection>Please, select sorting type and add few numbers to check how diffierent sorting types work. You can let number input field empty and press 'Add number', default value will be added.</DescriptionSection>
            </BlockSection>
            <BlockSection>
                <Cell>
                    <Row>
                        <Cell>
                            <Label htmlFor='inputNum'>Enter number:</Label>
                        </Cell>
                        <Cell>
                            <Input 
                                required
                                id='inputNum' 
                                value={props.enteredNumber} 
                                type='input' 
                                placeholder={`E.g. ${props.defaultNumber}`} 
                                onChange={(e) => props.handleChangeInputValue(e.target.value)} 
                                disabled={props.btnDisabled === 2 ? true : false}
                                >
                            </Input>
                        </Cell>
                    </Row>
                </Cell>
                <Cell>
                    <Row>
                        <Cell>
                            <Label htmlFor='sortType'>Select sort type:</Label>
                        </Cell>
                        <Cell>
                            <Select 
                                required
                                id='sortType' 
                                value={props.selectedSortType} 
                                onChange={(e) => props.handleChangeSortType(e.target.value)}
                                disabled={props.btnDisabled === 2 ? true : false}
                            >
                                {props.sortTypes.map(type => {
                                    return (
                                        <option
                                            disabled={type.sortTypeValue === 'selectType'}
                                            key={type.sortTypeValue}
                                            value={type.sortTypeValue}
                                        >{type.sortTypeName}</option>
                                    )
                                })}
                            </Select>
                        </Cell>
                    </Row>
                </Cell>
            </BlockSection>
            <ButtonSection>
                <Button disabled={props.btnDisabled === 2 ? true : false} type='submit' onClick={e => props.handleAddNumber(e)}>Add number</Button>
                <Button disabled={props.btnDisabled === 2 ? true : false} type='button' onClick={e => props.handleAddRandomTen(e)}>Add 10 random numbers</Button>
                <Button disabled={props.btnDisabled === 2 ? true : false} type='button' onClick={e => props.handleSortBtnClick(e, 1)}>Sort numbers</Button>
                <Button disabled={props.btnDisabled === 2 ? true : false} type='reset' onClick={e => props.handleClearList(e)}>Clear list</Button>
            </ButtonSection>
            <BlockSection>
                <LabelDuration htmlFor='inputDuration'>Time per one action (comparison, changing, setting sorted etc.) (min 4ms):</LabelDuration>
                <SlideContainer>
                    <InputSlider 
                        id='inputDuration' 
                        value={props.ms} 
                        type='range' 
                        step='2'
                        min='4'
                        max='2000'
                        placeholder={`E.g. ${props.ms}`} 
                        onChange={e => props.handleMSChange(e)} 
                        disabled={props.btnDisabled === 2 ? true : false}
                        >
                    </InputSlider>
                </SlideContainer>

                <CurrentDuration>Current action time: {props.ms} ms.</CurrentDuration>
            </BlockSection>
            {props.selectedSortType !== 'selectType' ?
                <BlockSection>
                    <DescriptionSection>{props.sortTypes.find(type => props.selectedSortType === type.sortTypeValue).sortTypeDescription}</DescriptionSection>
                </BlockSection> :
                null
            }
        </StyledFormContainer>
    )
};

export { FormContainer };