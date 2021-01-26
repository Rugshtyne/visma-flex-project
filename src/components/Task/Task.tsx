import React, { useEffect } from 'react';
import { parseCSS } from 'css-parser';
import { connect, ConnectedProps } from 'react-redux';

import classes from './Task.module.css';
import { compareAnswer, convertCSSObjToStyleSheet } from '../../utils/utils';
import { RootState } from '../../store';
import { CHANGE_TASK_INPUTS, CHANGE_TASKS_COMPLETED } from '../../store/actions/actions';

export interface ITask {
  description: string;
  answer: CSS.Object[];
}

interface TaskProps extends ITask, PropsFromRedux {
  index: number;
}

// type TaskProps = ITask & PropsFromRedux;

// TODO:
// - Saugot input value kiekvienam taskui/exercise reduxe

const Task = (props: TaskProps): JSX.Element => {
  const {
    app,
    index,
    description,
    answer,
  } = props;
  const { taskInputs, tasksCompleted } = app;

  const inputChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const taskInputsTemp = [...taskInputs];
    taskInputsTemp[index] = event.target.value;
    props.changeTaskInputs(taskInputsTemp);
  };

  const updateAnswers = () => {
    const tasksCompletedTemp = [...tasksCompleted];
    const completedFlag = compareAnswer(answer, parseCSS(taskInputs[index]));
    tasksCompletedTemp[index] = completedFlag;
    props.changeTasksCompleted(tasksCompletedTemp);
  };

  useEffect(() => {
    updateAnswers();
    // props.changeBoxesStyleSheet(convertCSSObjToStyleSheet(parseCSS(inputValue)));
  }, [taskInputs[index], answer]);

  return (
    <div className={classes.task}>
      <p>{description}</p>
      <div className={classes.taskArea}>
        <textarea value={taskInputs[index]} onChange={inputChangeHandler} />
        <div className={classes.viewBox}>
          <div
            className="boxes"
            style={convertCSSObjToStyleSheet(parseCSS(taskInputs[index])).boxes
              ? convertCSSObjToStyleSheet(parseCSS(taskInputs[index])).boxes : undefined}
          >
            <div
              className={`${classes.box} box1`}
              style={convertCSSObjToStyleSheet(parseCSS(taskInputs[index])).box1
                ? convertCSSObjToStyleSheet(parseCSS(taskInputs[index])).box1 : undefined}
            />
            <div
              className={`${classes.box} box2`}
              style={convertCSSObjToStyleSheet(parseCSS(taskInputs[index])).box2
                ? convertCSSObjToStyleSheet(parseCSS(taskInputs[index])).box2 : undefined}
            />
            <div
              className={`${classes.box} box3`}
              style={convertCSSObjToStyleSheet(parseCSS(taskInputs[index])).box3
                ? convertCSSObjToStyleSheet(parseCSS(taskInputs[index])).box3 : undefined}
            />
          </div>
        </div>
      </div>
      {tasksCompleted[index] ? <h2>SUCCESS!</h2> : null}
    </div>
  );
};

const mapState = (state: RootState) => ({
  app: state.app,
});

const mapDispatch = {
  changeTaskInputs: (newTaskInputs: string[]) => (
    {
      type: CHANGE_TASK_INPUTS,
      payload: newTaskInputs,
    }
  ),
  changeTasksCompleted: (newTasksCompleted: boolean[]) => (
    {
      type: CHANGE_TASKS_COMPLETED,
      payload: newTasksCompleted,
    }
  ),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Task);
