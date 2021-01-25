import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Button } from 'react-bootstrap';

import Tutorial, { ITutorial } from '../Tutorial/Tutorial';
import Task, { ITask } from '../Task/Task';
import { RootState } from '../../store';
import { SET_CURRENT_TASK_OR_TUTORIAL, TOGGLE_TUTORIAL_MODE } from '../../store/level/types';
import classes from './Level.module.css';

// TODO:
// - Levelis gali tureti multiple tutorials ir multiple img, properties,
//   tiesiog reiktu apjungti po didesniu tutorials objektu. Bet passinu i pavienius
//   tutorial komponentus.
//   Realiai pasidaro tutorials[]: {title, description, img, properties}, {...}
// - Multiple tasks, velgi analogiskai apjungiu, gaunasi
//   tasks[]: {description, answer}, {...}

export interface LevelProps extends PropsFromRedux {
  title: string;
  tutorials: ITutorial[];
  tasks: ITask[];
}

const Level = (props: LevelProps): JSX.Element => {
  const {
    title,
    tutorials,
    tasks,
    lvl,
  } = props;

  const { currentTaskOrTutorial, tutorialMode } = lvl;

  return (
    <div className={classes.Level}>
      <div className={classes.Header}>
        <h2>{title}</h2>
        <Button variant="dark" onClick={() => props.toggleTutorialMode()}>{tutorialMode ? 'To Task' : 'To Tutorial'}</Button>
      </div>
      {tutorialMode && (
        <Tutorial
          title={title}
          description={tutorials[currentTaskOrTutorial].description}
          img={tutorials[currentTaskOrTutorial].img}
          properties={tutorials[currentTaskOrTutorial].properties}
        />
      )}
      {!tutorialMode && (
        <Task
          description={tasks[currentTaskOrTutorial].description}
          answer={tasks[currentTaskOrTutorial].answer}
        />
      )}
    </div>
  );
};

const mapState = (state: RootState) => ({
  lvl: state.level,
});

const mapDispatch = {
  setCurrentTaskOrTutorial: (newCurrent: number) => (
    {
      type: SET_CURRENT_TASK_OR_TUTORIAL,
      payload: newCurrent,
    }
  ),
  toggleTutorialMode: () => (
    {
      type: TOGGLE_TUTORIAL_MODE,
    }
  ),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Level);
