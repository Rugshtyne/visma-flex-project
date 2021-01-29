import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../../store';
import { changeTaskInputs } from '../../../store/actions/actions';
import classes from './TaskInput.module.css';

interface TaskInputProps extends PropsFromRedux {
  id: string;
}

export const TaskInputRaw = (props: TaskInputProps): JSX.Element => {
  const { id, taskInputs } = props;

  const inputChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const taskInputsTemp = { ...taskInputs };
    taskInputsTemp[id] = event.target.value;
    props.changeTaskInputs(taskInputsTemp);
  };

  return (
    <textarea className={classes.TaskInput} value={taskInputs[id] ?? ''} onChange={inputChangeHandler} />
  );
};

const mapState = (state: RootState) => ({
  taskInputs: state.app.taskInputs,
});

const mapDispatch = {
  changeTaskInputs,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export const TaskInput = connector(TaskInputRaw);
