import React, { useEffect, useState } from 'react';
import { parseCSS } from 'css-parser';

import classes from './Task.module.css';
import compareAnswer, { StyleSheet, convertCSSObjToStyleSheet } from '../../utils/utils';

interface TaskProps {
  task: string;
  taskAnswer: CSS.Object[];
}

const Task = (props: TaskProps): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [success, setSuccess] = useState(false);
  const [boxesStyleSheet, setBoxesStyleSheet] = useState<StyleSheet>({});

  const { task, taskAnswer } = props;

  const inputChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    setSuccess(compareAnswer(taskAnswer, parseCSS(inputValue)));
    setBoxesStyleSheet(convertCSSObjToStyleSheet(parseCSS(inputValue)));
  }, [inputValue]);

  return (
    <div className={classes.task}>
      <p>{task}</p>
      <div className={classes.taskArea}>
        <textarea value={inputValue} onChange={inputChangeHandler} />
        <div className={classes.viewBox}>
          <div className="boxes" style={boxesStyleSheet.boxes ? boxesStyleSheet.boxes : undefined}>
            <div className={`${classes.box} box1`} style={boxesStyleSheet.box1 ? boxesStyleSheet.box1 : undefined} />
            <div className={`${classes.box} box2`} style={boxesStyleSheet.box2 ? boxesStyleSheet.box2 : undefined} />
            <div className={`${classes.box} box3`} style={boxesStyleSheet.box3 ? boxesStyleSheet.box3 : undefined} />
          </div>
        </div>
      </div>
      {success ? <h2>SUCCESS!</h2> : null}
    </div>
  );
};

export default Task;
