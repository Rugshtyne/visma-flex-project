import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Button } from 'react-bootstrap';

import Tutorial, { ITutorial } from '../Tutorial/Tutorial';
import Task, { ITask } from '../Task/Task';
import { RootState } from '../../store';
import { SET_CURRENT_TASK_OR_TUTORIAL, TOGGLE_TUTORIAL_MODE } from '../../store/level/types';
import classes from './SubLevel.module.css';

// TODO:
// - UI: Splittint dropdowną, kai yra Level, kad galima būtų nueit ir į Level landingą ir į
//      SubLevels dropdowną, check https://bit.dev/react-bootstrap/react-bootstrap/nav-dropdown/~code
// - Level turi daug SubLevel, labiau wrappinantis componentas
// - Pagalvot apie navigacija, t.y. kaip sudeliot navigacija jei naudoju reduxe CurrentNode
//      kuris rodo kuriame levelyje/sublevelyje dabar esu (realiai navigacija remiantis indeksavimu,
//      pvz. jei esu 2 Levelyje, tai indeksas '2-0', jei 3-cio Levelio 2-ame SubLevelyje - '3-2' ir
//      pagal tai renderint matoma komponenta.

export interface SubLevelProps extends PropsFromRedux {
  title: string;
  tutorial: ITutorial;
  task: ITask;
}

const SubLevel = (props: SubLevelProps): JSX.Element => {
  const {
    title,
    tutorial,
    task,
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
          description={tutorial.description}
          img={tutorial.img}
          properties={tutorial.properties}
        />
      )}
      {!tutorialMode && (
        <Task
          description={task.description}
          answer={task.answer}
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

export default connector(SubLevel);
