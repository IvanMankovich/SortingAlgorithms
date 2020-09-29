import React, { useState } from 'react';
import styled from 'styled-components';
import { FormContainer } from './FormContainer';
import { SortContainer } from './SortContainer';
import { SqContainer } from './SqCont';

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    flex: 1 1 auto;
    align-items: stretch;
    position: relative;
`;

const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 960px;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    flex: 1 1 auto;
    align-items: stretch;
    height: 100%;
    z-index: 1;
`;

const getRandomNumber = () => {
    return Math.round(Math.random()*10) > 5 ? Math.round(Math.random() * (1000 - -1000) + -1000) : Math.random() * (1000 - -1000) + -1000;
}

const generateRandomIndex = () => {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz$_^'.split('');
    
    let str = '';
    for (let i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * (chars.length))];
    }
    return str;
}

const Main = props => {
    const [numberArray, setNumberArray] = useState([]),
          [enteredNumber, setEnteredNumber] = useState(''),
          [defaultNumber, setDefaultNumber] = useState(getRandomNumber()),
          [ms, setMs] = useState(1000),
          [selectedSortType, setSelectedSortType] = useState('selectType'),
          [btnDisabled, setBtnDisabled] = useState(1);

    const sortTypes = [
        {sortTypeValue: 'selectType',
         sortTypeName: 'Select type'},
        {sortTypeValue: 'bubbleSort',
         sortTypeName: 'Bubble Sort',
         sortTypeDescription: 'Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2) where n is the number of items.'},
        {sortTypeValue: 'shakerSort',
         sortTypeName: 'Shaker Sort',
         sortTypeDescription: 'Cocktail Sort is a variation of Bubble sort. The Bubble sort algorithm always traverses elements from left and moves the largest element to its correct position in first iteration and second largest in second iteration and so on. Cocktail Sort traverses through a given array in both directions alternatively.'}
    ];

    const handleAddNumber = e => {
        e.preventDefault();
        let regexp = /^[\-]{0,1}[0-9]{1,}(([\.\,]{0,1}[0-9]{1,})|([0-9]{0,}))$/;
        if (enteredNumber !== '' && regexp.test(enteredNumber)) {
            let newArr = numberArray.map(number => {
                return {
                    ...number,
                    state: 'checked',
                }
            })
            newArr = [...newArr, {
                id: generateRandomIndex(),
                value: Number(enteredNumber),
                state: 'initial',
            }]
            setNumberArray(newArr);
            setEnteredNumber('');
            setDefaultNumber(getRandomNumber());
        } else if (enteredNumber !== '' && !regexp.test(enteredNumber)) {
            props.handleShowModal('Please, enter correct number value (it can be positive decimal floating negative/non-negative number).');
        } else {
            let newArr = numberArray.map(number => {
                return {
                    ...number,
                    state: 'checked',
                }
            })
            newArr = [...newArr, {
                id: generateRandomIndex(),
                value: Number(defaultNumber),
                state: 'initial',
            }];
            setNumberArray(newArr);
            setEnteredNumber('');
            setDefaultNumber(getRandomNumber());
        }
    }

    const handleChangeInputValue = value => {
        setEnteredNumber(value);
    }

    const handleChangeSortType = value => {
        setSelectedSortType(value);
    }

    const handleAddRandomTen = e => {
        e.preventDefault();
        let generatedArray = [];
        for (let i = 0; i < 10; i++) {
            generatedArray.push({
                id: generateRandomIndex(),
                value: Number(getRandomNumber()),
                state: 'initial',
            })
        }
        let newArr = numberArray.map(number => {
            return {
                ...number,
                state: 'checked',
            }
        })
        newArr = [...newArr, ...generatedArray];
        setNumberArray(newArr);
    }

    const handleClearList = e => {
        e.preventDefault();
        setNumberArray([]);
    }

    const startSort = () => {
        let newArr = numberArray.map(number => {
            return {
                ...number,
                state: 'checked',
            }
        });
        setNumberArray(newArr);
        switch (true) {
            case selectedSortType === 'shakerSort':
                shakerSort(newArr);
                break;
            case selectedSortType === 'bubbleSort':
                bubbleSort(newArr);
                break;
            default:
                break;
        }
    }

    const handleSortBtnClick = (e, type) => {
        e.preventDefault();
        switch (true) {
            case (selectedSortType === 'bubbleSort' && numberArray.length >= 2):
                handleDisableBtn(type);
                startSort();
                break;
            case (selectedSortType === 'shakerSort' && numberArray.length >= 2):
                handleDisableBtn(type);
                startSort();
                break;
            case ((selectedSortType === 'bubbleSort' || selectedSortType === 'shakerSort') && numberArray.length < 2):
                props.handleShowModal('Please, add at least two numbers to sorting container.');
                break;
            case (selectedSortType === 'selectType' && numberArray.length < 2):
                props.handleShowModal('Please, add at least two numbers to sorting container and select sort type.');
                break;
            case (selectedSortType === 'selectType' && numberArray.length >= 2):
                props.handleShowModal('Please, select sort type.');
                break;
            default:
                break;
        }
    }

    const handleDisableBtn = (type = 1) => {
        if (type === 1) {
            setBtnDisabled(2);
        } else {
            setBtnDisabled(1);
        }
    }

    const handleMSChange = e => {
        e.preventDefault();
        setMs(Number(e.target.value));
    }

    const bubbleSort = arr => {
        function outerLoop(currentIteration, iterationsAmount) {
            if (currentIteration <= iterationsAmount) {
                setTimeout(innerLoop, ms, 0, newArr.length - 1 - currentIteration, currentIteration, iterationsAmount);
            } else {
                setNumberArray(newArr.map(number => {return {...number, state: 'sorted'}}));
                handleDisableBtn(2);
                return;
            }
        }

        function innerLoop(currentInnerIteration, innerIterationsAmount, currentOuterIteration, outerIterationsAmount) {
            if (currentInnerIteration < innerIterationsAmount) {
                setSelected(currentInnerIteration);
                if (newArr[currentInnerIteration].value > newArr[currentInnerIteration + 1].value) {
                    setTimeout(setChanging, ms, currentInnerIteration, currentOuterIteration, outerIterationsAmount, innerIterationsAmount);
                } else {
                    if (currentInnerIteration === innerIterationsAmount - 1) {
                        setTimeout(setSorted, ms, currentInnerIteration, currentOuterIteration, outerIterationsAmount);
                    } else {
                        setTimeout(innerLoop, ms, currentInnerIteration + 1, newArr.length - 1 - currentOuterIteration, currentOuterIteration, outerIterationsAmount);
                    }
                }
            } else {
                setTimeout(outerLoop, 0, currentOuterIteration + 1, outerIterationsAmount);
            }
        }

        function setSelected(currentIndex) {
            newArr = newArr.map((number, index) => {
                if (index === currentIndex || index === (currentIndex + 1)) {
                    return {
                        ...number,
                        state: 'selected',
                    }
                } else {
                    if (number.state === 'sorted') {
                        return {
                            ...number,
                            state: 'sorted'
                        }
                    } else {
                        return {
                            ...number,
                            state: 'checked'
                        }
                    }
                }
            })
            setNumberArray(newArr);
        }

        function setChanging(currentIndex, currentOuterIteration, outerIterationsAmount, innerIterationsAmount) {
            newArr = newArr.map((number, index) => {
                switch (true) {
                    case (index === currentIndex):
                        return {
                            ...number,
                            state: 'changeToRight'
                        }
                    case (index === currentIndex + 1):
                        return {
                            ...number,
                            state: 'changeToLeft'
                        }
                    default:
                        if (number.state === 'sorted') {
                            return {
                                ...number,
                                state: 'sorted'
                            }
                        } else {
                            return {
                                ...number,
                                state: 'checked'
                            }
                        }
                }
            })
            setNumberArray(newArr);
            [newArr[currentIndex], newArr[currentIndex + 1]] = [newArr[currentIndex + 1], newArr[currentIndex]];
            if (currentIndex === innerIterationsAmount - 1) {
                setTimeout(setSorted, ms, currentIndex, currentOuterIteration, outerIterationsAmount);
            } else {
                setTimeout(innerLoop, ms, currentIndex + 1, newArr.length - 1 - currentOuterIteration, currentOuterIteration, outerIterationsAmount);
            }
        }

        function setSorted(currentIndex, currentOuterIteration, outerIterationsAmount) {
            newArr = newArr.map((number, index) => {
                if (index === currentIndex + 1) {
                    return {
                        ...number,
                        state: 'sorted',
                    }
                } else {
                    if (number.state === 'sorted') {
                        return {
                            ...number,
                            state: 'sorted'
                        }
                    } else {
                        return {
                            ...number,
                            state: 'checked'
                        }
                    }
                }
            })
            setNumberArray(newArr);
            setTimeout(outerLoop, 0, currentOuterIteration + 1, outerIterationsAmount);
        }

        let newArr = arr.slice();

        outerLoop(0, newArr.length - 1);
    };

    const shakerSort = arr => {
        function forwardLoop(startInd, currentInd, lastInd) {
            if (currentInd < lastInd) {
                setSelected(newArr, currentInd, 'forward');
                if (newArr[currentInd].value > newArr[currentInd + 1].value) {
                    setTimeout(setChanging, ms, newArr, currentInd, 'forward', startInd, lastInd);
                } else {
                    setTimeout(forwardLoop, ms, startInd, currentInd + 1, lastInd);
                }
            } else if (currentInd === lastInd && currentInd - startInd === 1) {
                setSorted(newArr, startInd, currentInd, lastInd);
                handleDisableBtn(2);
                return;
            } else {
                setSorted(newArr, startInd, currentInd, lastInd, 'reverse');
            }
        }

        function reverseLoop(startInd, currentInd, lastInd) {
            if (startInd < currentInd) {
                setSelected(newArr, currentInd, 'reverse');
                if (newArr[currentInd].value < newArr[currentInd - 1].value) {
                    setTimeout(setChanging, ms, newArr, currentInd, 'reverse', startInd, lastInd);
                } else {
                    setTimeout(reverseLoop, ms, startInd, currentInd - 1, lastInd);
                }
            } else if (startInd === currentInd && lastInd - currentInd === 1) {
                setSorted(newArr, startInd, currentInd, lastInd);
                handleDisableBtn(2);
                return;
            } else {
                setSorted(newArr, startInd, currentInd, lastInd, 'forward');
            }
        }

        function setSelected(array, currentIndex, type) {
            setNumberArray(array.map((number, index) => {
                if (index === currentIndex || index === (type === 'forward' ? currentIndex + 1 : currentIndex - 1)) {
                    return {
                        ...number,
                        state: 'selected',
                    }
                } else {
                    if (number.state === 'sorted') {
                        return {
                            ...number,
                            state: 'sorted'
                        }
                    } else {
                        return {
                            ...number,
                            state: 'checked'
                        }
                    }
                }
            }));
        }

        function setChanging(array, currentIndex, type, startIndex, lastIndex) {
            if (type === 'forward') {
                setNumberArray(array.map((number, index) => {
                    switch (true) {
                        case (index === currentIndex):
                            return {
                                ...number,
                                state: 'changeToRight'
                            }
                        case (index === currentIndex + 1):
                            return {
                                ...number,
                                state: 'changeToLeft'
                            }
                        default:
                            if (number.state === 'sorted') {
                                return {
                                    ...number,
                                    state: 'sorted'
                                }
                            } else {
                                return {
                                    ...number,
                                    state: 'checked'
                                }
                            }
                    }
                }));
                [array[currentIndex], array[currentIndex + 1]] = [array[currentIndex + 1], array[currentIndex]];
                setTimeout(forwardLoop, ms, startIndex, currentIndex + 1, lastIndex);
            } else {
                setNumberArray(array.map((number, index) => {
                    switch (true) {
                        case (index === currentIndex):
                            return {
                                ...number,
                                state: 'changeToLeft'
                            }
                        case (index === currentIndex - 1):
                            return {
                                ...number,
                                state: 'changeToRight'
                            }
                        default:
                            if (number.state === 'sorted') {
                                return {
                                    ...number,
                                    state: 'sorted'
                                }
                            } else {
                                return {
                                    ...number,
                                    state: 'checked'
                                }
                            }
                    }
                }));
                [array[currentIndex], array[currentIndex - 1]] = [array[currentIndex - 1], array[currentIndex]];
                setTimeout(reverseLoop, ms, startIndex, currentIndex - 1, lastIndex);
            }
        }

        function setSorted(array, startIndex, currentIndex, lastIndex, type) {
            if (type) {
                newArr = array.map((number, index) => {
                    if (index === currentIndex) {
                        return {
                            ...number,
                            state: 'sorted',
                        }
                    } else {
                        if (number.state === 'sorted') {
                            return {
                                ...number,
                                state: 'sorted'
                            }
                        } else {
                            return {
                                ...number,
                                state: 'checked'
                            }
                        }
                    }
                });
                setNumberArray(newArr);
                if (type === 'forward') {
                    setTimeout(forwardLoop, ms, startIndex + 1, currentIndex + 1, lastIndex);
                } else {
                    setTimeout(reverseLoop, ms, startIndex, lastIndex - 1, lastIndex - 1);
                }
            } else {
                newArr = array.map(number => {
                    return {
                        ...number,
                        state: 'sorted',
                    };
                });
                setNumberArray(newArr);
            }
        }

        let newArr = arr.slice();

        forwardLoop(0, 0, newArr.length - 1);
    }

    return (
        <MainContainer>
            <SqContainer/>
            <MainSection>
                <FormContainer 
                    defaultNumber={defaultNumber} 
                    enteredNumber={enteredNumber} 
                    handleAddNumber={handleAddNumber} 
                    handleChangeInputValue={handleChangeInputValue} 
                    sortTypes={sortTypes} 
                    selectedSortType={selectedSortType} 
                    handleChangeSortType={handleChangeSortType} 
                    handleAddRandomTen={handleAddRandomTen} 
                    handleClearList={handleClearList} 
                    handleSortBtnClick={handleSortBtnClick} 
                    ms={ms} 
                    handleMSChange={handleMSChange} 
                    btnDisabled={btnDisabled} 
                    handleDisableBtn={handleDisableBtn}
                    />
                <SortContainer numberArray={numberArray} ms={ms}/>
            </MainSection>
        </MainContainer>
    )
};

export { Main };