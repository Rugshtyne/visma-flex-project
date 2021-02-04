import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../../store';
import { changeTaskInput } from '../../../store/actions/actions';
import classes from './TaskInput.module.css';

export const TaskInputRaw = (props: PropsFromRedux): JSX.Element => {
  const { id, taskInput } = props;

  const inputChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.changeTaskInput({ id, input: event.target.value });
  };

  return (
    <textarea className={classes.TaskInput} value={taskInput ?? ''} onChange={inputChangeHandler} />
  );
};

const mapState = (state: RootState) => {
  const { currentNode, taskInputs } = state.app;
  const id = currentNode.nodeId;
  const taskInput = taskInputs[id];

  return {
    taskInput,
    id,
  };
};

const mapDispatch = {
  changeTaskInput,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export const TaskInput = connector(TaskInputRaw);
