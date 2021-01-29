import React from 'react';
import { parseCSS } from 'css-parser';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../../store';
import { convertCSSObjToStyleSheet } from '../../../utils/utils';
import classes from './TaskViewbox.module.css';

interface TaskViewboxProps extends PropsFromRedux {
  id: string;
}

export const TaskViewboxRaw = (props: TaskViewboxProps): JSX.Element => {
  const { id, taskInputs } = props;

  const styleSheet = convertCSSObjToStyleSheet(parseCSS(taskInputs[id] ?? ''));

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

const mapState = (state: RootState) => ({
  taskInputs: state.app.taskInputs,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

export const TaskViewbox = connector(TaskViewboxRaw);
