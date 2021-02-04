import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import classes from './Task.module.css';
import { compareAnswer } from '../../utils/utils';
import { RootState } from '../../store';
import { changeTaskCompleted } from '../../store/actions/actions';
import { TaskInput } from './TaskInput/TaskInput';
import { TaskViewbox } from './TaskViewbox/TaskViewbox';

// pabaigt redux ir apacioj svarbus note
interface TaskProps extends PropsFromRedux {
  description: string;
  answer: CSS.Object[];
}

const TaskRaw = (props: TaskProps): JSX.Element => {
  const {
    id,
    description,
    answer,
    taskInput,
    taskCompleted,
  } = props;

  const updateAnswers = () => {
    const completedFlag = compareAnswer(answer, taskInput);
    props.changeTaskCompleted({ id, completed: completedFlag });
  };

  useEffect(() => {
    updateAnswers();
  }, [taskInput, answer]);

  return (
    <div className={classes.Task}>
      <p>{description}</p>
      <div className={classes.taskArea}>
        <TaskInput />
        <TaskViewbox />
      </div>
      {taskCompleted ? <h2>SUCCESS!</h2> : null}
    </div>
  );
};

const mapState = (state: RootState) => {
  const { currentNode, taskInputs, tasksCompleted } = state.app;
  const id = currentNode.nodeId;
  const taskInput = taskInputs[id];
  const taskCompleted = tasksCompleted[id];

  return {
    id, taskInput, taskCompleted,
  };
};

const mapDispatch = {
  changeTaskCompleted,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export const Task = connector(TaskRaw);
