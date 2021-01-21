import React, { useEffect } from 'react';
import { parseCSS } from 'css-parser';
import { connect, ConnectedProps } from 'react-redux';

import classes from './Task.module.css';
import { compareAnswer, StyleSheet, convertCSSObjToStyleSheet } from '../../utils/utils';
import { RootState } from '../../store';
import { CHANGE_BOXES_STYLESHEET, CHANGE_INPUT_VALUE, SET_SUCCESS } from '../../store/task/types';

export interface ITask {
  description: string;
  answer: CSS.Object[];
}

type TaskProps = ITask & PropsFromRedux;

// TODO:
// - Saugot input value kiekvienam taskui/exercise reduxe

const Task = (props: TaskProps): JSX.Element => {
  const { tsk, description, answer } = props;
  const { inputValue, success, boxesStyleSheet } = tsk;

  const inputChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.changeInputValue(event.target.value);
  };

  useEffect(() => {
    props.setSuccess(compareAnswer(answer, parseCSS(inputValue)));
    props.changeBoxesStyleSheet(convertCSSObjToStyleSheet(parseCSS(inputValue)));
  }, [inputValue]);

  return (
    <div className={classes.task}>
      <p>{description}</p>
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

const mapState = (state: RootState) => ({
  tsk: state.task,
});

const mapDispatch = {
  changeInputValue: (newInputValue: string) => (
    {
      type: CHANGE_INPUT_VALUE,
      payload: newInputValue,
    }
  ),
  setSuccess: (isSuccess: boolean) => (
    {
      type: SET_SUCCESS,
      payload: isSuccess,
    }
  ),
  changeBoxesStyleSheet: (newStyleSheet: StyleSheet) => (
    {
      type: CHANGE_BOXES_STYLESHEET,
      payload: newStyleSheet,
    }
  ),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Task);
