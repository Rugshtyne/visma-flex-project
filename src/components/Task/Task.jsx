import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import classes from './Task.module.css';

const Viewbox = styled.div`
  width: 500px;
  margin-left: 20px;
  border: 2px solid #333333;
  border-radius: 16px;
  ${(props) => props.styling}
  transition-duration: 1s;
  div {
    display: inline-block;
    margin: 10px;
  }
`;

const Task = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [success, setSuccess] = useState(0);

  // temp
  const rectStyle = {
    height: '20px',
    width: '50px',
    backgroundColor: 'red',
  };

  const { task, taskAnswer } = props;

  const compareAnswer = () => {
    const regex = new RegExp(taskAnswer);
    return inputValue.search(regex);
  };

  // blogai comparinasi stringai
  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
    if (compareAnswer()) {
      setSuccess(1);
    } else setSuccess(0);
  };

  return (
    <div className={classes.Task}>
      <p>{task}</p>
      <div className={classes.TaskArea}>
        <textarea value={inputValue} onChange={inputChangeHandler} />
        <Viewbox styling={inputValue}>
          <div style={rectStyle} />
          <div style={rectStyle} />
          <div style={rectStyle} />
        </Viewbox>
      </div>
      {success ? <h2>SUCCESS!</h2> : null}
      <p>
        {`Input value: ${inputValue}`}
      </p>
      <p>
        {`Answer value: ${taskAnswer}`}
      </p>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.string.isRequired,
  taskAnswer: PropTypes.string.isRequired,
};

export default Task;
