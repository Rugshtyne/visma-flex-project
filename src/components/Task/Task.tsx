import React, { useEffect } from 'react';
import { parseCSS } from 'css-parser';
import { connect, ConnectedProps } from 'react-redux';

import classes from './Task.module.css';
import { compareAnswer } from '../../utils/utils';
import { RootState } from '../../store';
import { changeTasksCompleted } from '../../store/actions/actions';
import { TaskInput } from './TaskInput/TaskInput';
import { TaskViewbox } from './TaskViewbox/TaskViewbox';

// pabaigt redux ir apacioj svarbus note
interface TaskProps extends PropsFromRedux {
  id: string;
  description: string;
  answer: CSS.Object[];
}

const TaskRaw = (props: TaskProps): JSX.Element => {
  const {
    id,
    description,
    answer,
    taskInput,
    tasksCompleted,
  } = props;

  const updateAnswers = () => {
    const tasksCompletedTemp = { ...tasksCompleted };
    const completedFlag = compareAnswer(answer, parseCSS(taskInput ?? ''));
    tasksCompletedTemp[id] = completedFlag;
    props.changeTasksCompleted(tasksCompletedTemp);
  };

  useEffect(() => {
    updateAnswers();
  }, [taskInput, answer]);

  return (
    <div className={classes.Task}>
      <p>{description}</p>
      <div className={classes.taskArea}>
        <TaskInput id={id} />
        <TaskViewbox id={id} />
      </div>
      {tasksCompleted[id] ? <h2>SUCCESS!</h2> : null}
    </div>
  );
};

// palikau tasksCompleted, bet perrasyt actiona, kur siunciu viena input ir reduceris
// pats jau update'ina sukures nauja objekta ir tik zino, kur replace'int pagal ID
const mapState = (state: RootState) => {
  const { currentNode, taskInputs, tasksCompleted } = state.app;
  const id = currentNode.nodeId;
  const taskInput = taskInputs[id];

  return {
    taskInput, tasksCompleted,
  };
};

const mapDispatch = {
  changeTasksCompleted,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export const Task = connector(TaskRaw);
