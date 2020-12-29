import React, { useState } from 'react';
import styled from 'styled-components';

import classes from './Task.module.css';

const Viewbox = styled.div`
    width: 500px;
    margin-left: 20px;
    border: 2px solid #333333;
    border-radius: 16px;
    ${props => props.styling}
    transition-duration: 1s;
    div {
        display: inline-block;
        margin: 10px;
    }
`;

export default function Task(props) {
    const [inputValue, setInputValue] = useState('');
    const [success, setSuccess] = useState(0);

    const rectStyle = {
        height: '20px',
        width: '50px',
        backgroundColor: 'red'
    };

    // Ne iki galo gerai comparinasi stringai
    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);
        if (inputValue.indexOf(props.taskAnswerString) !== -1) {
            setSuccess(1);
        }
        else setSuccess(0);
    }

    return (
        <div className={classes.Task}>
            <p>{props.task}</p>
            <div className={classes.TaskArea}>
                <textarea value={inputValue} onChange={inputChangeHandler}/>
                <Viewbox styling={inputValue}>
                    <div style={rectStyle}></div>
                    <div style={rectStyle}></div>
                    <div style={rectStyle}></div>
                </Viewbox>
            </div>
            {success ? <h2>SUCCESS!</h2> : null}
            <p>Input value: {inputValue}</p>
            <p>Answer value: {props.taskAnswerString}</p>
        </div>
    );
}

