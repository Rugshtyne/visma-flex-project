import React from 'react';
import { parseCSS } from 'css-parser';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../../store';
import { convertCSSObjToStyleSheet } from '../../../utils/utils';
import classes from './TaskViewbox.module.css';

export const TaskViewboxRaw = (props: PropsFromRedux): JSX.Element => {
  const { taskInput } = props;

  const styleSheet = convertCSSObjToStyleSheet(parseCSS(taskInput ?? ''));

  return (
    <div className={classes.TaskViewbox}>
      <div
        className="boxes"
        style={styleSheet.boxes ?? {}}
      >
        <div
          className={`${classes.box} box1`}
          style={styleSheet.box1 ?? {}}
        />
        <div
          className={`${classes.box} box2`}
          style={styleSheet.box2 ?? {}}
        />
        <div
          className={`${classes.box} box3`}
          style={styleSheet.box3 ?? {}}
        />
      </div>
    </div>
  );
};

const mapState = (state: RootState) => {
  const { currentNode, taskInputs } = state.app;
  const id = currentNode.nodeId;
  const taskInput = taskInputs[id];

  return {
    taskInput,
  };
};
const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

export const TaskViewbox = connector(TaskViewboxRaw);
