import React, { useEffect } from 'react';
import { parseCSS } from 'css-parser';
import { connect, ConnectedProps } from 'react-redux';

import classes from './Task.module.css';
import { compareAnswer, convertCSSObjToStyleSheet } from '../../utils/utils';
import { RootState } from '../../store';
import { changeTaskInputs, changeTasksCompleted } from '../../store/actions/actions';

interface TaskProps extends PropsFromRedux {
  id: string;
  description: string;
  answer: CSS.Object[];
}

const Task = (props: TaskProps): JSX.Element => {
  const {
    id,
    description,
    answer,
    taskInputs,
    tasksCompleted,
  } = props;

  const styleSheet = convertCSSObjToStyleSheet(parseCSS(taskInputs[id] ?? ''));

  const inputChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const taskInputsTemp = { ...taskInputs };
    taskInputsTemp[id] = event.target.value;
    props.changeTaskInputs(taskInputsTemp);
  };

  const updateAnswers = () => {
    const tasksCompletedTemp = { ...tasksCompleted };
    const completedFlag = compareAnswer(answer, parseCSS(taskInputs[id] ?? ''));
    tasksCompletedTemp[id] = completedFlag;
    props.changeTasksCompleted(tasksCompletedTemp);
  };

  useEffect(() => {
    updateAnswers();
  }, [taskInputs[id], answer]);

  return (
    <div className={classes.task}>
      <p>{description}</p>
      <div className={classes.taskArea}>
        <textarea value={taskInputs[id] ?? ''} onChange={inputChangeHandler} />
        <div className={classes.viewBox}>
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
      </div>
      {tasksCompleted[id] ? <h2>SUCCESS!</h2> : null}
    </div>
  );
};

const mapState = (state: RootState) => ({
  taskInputs: state.app.taskInputs,
  tasksCompleted: state.app.tasksCompleted,
});

const mapDispatch = {
  changeTaskInputs,
  changeTasksCompleted,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Task);
